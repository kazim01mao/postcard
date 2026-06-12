/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState, useRef } from 'react';
import { ArrowLeft, Download, RefreshCw } from 'lucide-react';
import * as THREE from 'three';
import { AlignmentConfig } from '../types';

// 🌟 THREE.JS 粒子動畫效果組件
const ThreeParticleBackground: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const width = mount.clientWidth || window.innerWidth;
    const height = mount.clientHeight || window.innerHeight;
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 5;

    // 3. Renderer setup
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mount.appendChild(renderer.domElement);

    // 4. Particle Geometry & Material
    const particlesCount = 180;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particlesCount * 3);
    const speeds: number[] = [];

    for (let i = 0; i < particlesCount; i++) {
      // 粒子隨機散佈
      positions[i * 3] = (Math.random() - 0.5) * 8; // x
      positions[i * 3 + 1] = (Math.random() - 0.5) * 12; // y
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4; // z
      speeds.push(Math.random() * 0.015 + 0.005);
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    // 創建金箔質感圓形粒子貼圖
    const canvas = document.createElement('canvas');
    canvas.width = 16;
    canvas.height = 16;
    const ctx = canvas.getContext('2d');
    if (ctx) {
      const grad = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
      grad.addColorStop(0, 'rgba(255, 235, 170, 1)');
      grad.addColorStop(0.3, 'rgba(220, 170, 75, 0.8)');
      grad.addColorStop(1, 'rgba(220, 170, 75, 0)');
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 16, 16);
    }
    const texture = new THREE.CanvasTexture(canvas);

    const material = new THREE.PointsMaterial({
      size: 0.16,
      map: texture,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // 5. Animation loop
    let animationFrameId: number;
    const animate = () => {
      const posArr = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < particlesCount; i++) {
        // 粒子向上漂移
        posArr[i * 3 + 1] += speeds[i];
        // 粒子橫向微風擺動
        posArr[i * 3] += Math.sin(Date.now() * 0.0008 + i) * 0.0015;

        // 超出邊界時重置到底部
        if (posArr[i * 3 + 1] > 6) {
          posArr[i * 3 + 1] = -6;
          posArr[i * 3] = (Math.random() - 0.5) * 8;
        }
      }
      geometry.attributes.position.needsUpdate = true;

      // 旋轉粒子系統
      particleSystem.rotation.y += 0.001;
      particleSystem.rotation.x += 0.0004;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 6. Handle Resize
    const handleResize = () => {
      if (!mount) return;
      const w = mount.clientWidth;
      const h = mount.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (mount && renderer.domElement.parentNode === mount) {
        mount.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      texture.dispose();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none z-0" />;
};

interface PostcardOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  config: AlignmentConfig;
}

export const PostcardOverlay: React.FC<PostcardOverlayProps> = ({ isOpen, onClose, config }) => {
  const [generatedImgSrc, setGeneratedImgSrc] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      try {
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        if (AudioCtx) {
          const ctx = new AudioCtx();
          const now = ctx.currentTime;
          const freqs = [659.25, 880.00, 1109.73, 1318.51]; // E5 -> A5 -> C#6 -> E6
          freqs.forEach((freq, index) => {
            const osc = ctx.createOscillator();
            const oscGain = ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + index * 0.08);

            oscGain.gain.setValueAtTime(0, now + index * 0.08);
            oscGain.gain.linearRampToValueAtTime(0.2, now + index * 0.08 + 0.03);
            oscGain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.5);

            osc.connect(oscGain);
            oscGain.connect(ctx.destination);

            osc.start(now + index * 0.08);
            osc.stop(now + index * 0.08 + 0.6);
          });
        }
      } catch (e) {
        console.warn('瀏覽器不支援 Web Audio 或尚未授權播音：', e);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setGeneratedImgSrc(null);
      return;
    }

    setIsGenerating(true);
    setError(null);

    // 🏆 動態取得客製化配置 - 使用 config.postcardPhotoUrl
    const photoUrl = config.postcardPhotoUrl || config.avatarUrl || config.resultUrl || './assets/result.png';
    const textMsg = config.postcardText || config.successMessage || '送上一份誠摯的驚喜，祝你魔法般的一天！';
    const titleText = config.title || '魔法變裝紀念';

    // 創建影像載入
    const img = new Image();
    img.crossOrigin = 'anonymous'; // 避免 Cross-Origin 問題
    img.src = photoUrl;

    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        
        const ctx = canvas.getContext('2d');
        if (!ctx) {
          throw new Error('無法初始化 2D Canvas');
        }

        // ===============================================
        // 🖼️ 步驟 0：預先計算文本行數，決定 Canvas 高度
        // ===============================================
        const tmpFont = 'bold 24px "Inter", "Microsoft JhengHei", sans-serif';
        ctx.font = tmpFont;
        const limit = 18; // 每行字數（縮小以確保中文字不溢出）
        const lines: string[] = [];
        
        // 依據原始換行符 \n 進行分行，保留分行並限制每行最大字數
        const rawLines = textMsg.split('\n');
        rawLines.forEach((rawLine: string) => {
          if (rawLine.length === 0) {
            lines.push(''); // 保留空行
          } else {
            for (let i = 0; i < rawLine.length; i += limit) {
              lines.push(rawLine.substring(i, i + limit));
            }
          }
        });

        // 動態高度：照片區域 (到 y=694) + 裝飾區 (到 y=740) + 文字區 (起始 y=810，每行 48px) + 底部留白 60px
        const textBlockHeight = lines.length * 48 + 60;
        const canvasHeight = Math.max(1100, 810 + textBlockHeight);
        canvas.width = 800;
        canvas.height = canvasHeight;
        // 重新設定字體（因 reset canvas size 會清除字體設定）
        ctx.font = tmpFont;

        // ===============================================
        // 🎨 步驟 1：繪製手工紙米白質感與魔法微光
        // ===============================================
        ctx.fillStyle = '#FAF7F0'; // 精緻手工紙米白
        ctx.fillRect(0, 0, 800, canvasHeight);

        // 溫潤陰影漸層，營造微拱手工質感
        const borderGrad = ctx.createRadialGradient(400, canvasHeight / 2, 100, 400, canvasHeight / 2, 800);
        borderGrad.addColorStop(0, 'rgba(255, 255, 255, 0.25)');
        borderGrad.addColorStop(0.7, 'rgba(235, 225, 205, 0.15)');
        borderGrad.addColorStop(1, 'rgba(215, 201, 178, 0.38)');
        ctx.fillStyle = borderGrad;
        ctx.fillRect(0, 0, 800, canvasHeight);

        // ===============================================
        // 🖼️ 步驟 2：渲染照片 (居中裁切適配，完美保留，營造油墨印刷感)
        // ===============================================
        // 照片區域設計：上邊距 110px，寬 560px，高 560px (1:1 比例)
        const px = 120;
        const py = 110;
        const pw = 560;
        const ph = 560;
        const r = 24; // 圓半徑

        ctx.save();
        ctx.beginPath();
        ctx.roundRect(px, py, pw, ph, r);
        ctx.clip();

        // 繪製照片 (Cover 模式)
        const iw = img.width;
        const ih = img.height;
        const photoRatio = pw / ph;
        const imgRatio = iw / ih;
        
        let sx = 0, sy = 0, sWidth = iw, sHeight = ih;
        if (imgRatio > photoRatio) {
          sWidth = ih * photoRatio;
          sx = (iw - sWidth) / 2;
        } else {
          sHeight = iw / photoRatio;
          sy = (ih - sHeight) / 2;
        }

        ctx.drawImage(img, sx, sy, sWidth, sHeight, px, py, pw, ph);
        ctx.restore();

        // 模擬紙面油墨微融合，繪製極細緻的紙纖維感外框
        ctx.strokeStyle = 'rgba(197, 177, 142, 0.25)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.roundRect(px, py, pw, ph, r);
        ctx.stroke();

        // ===============================================
        // ✍️ 步驟 3：金箔質感印刷排版
        // ===============================================
        ctx.textAlign = 'center';
        
        // 金箔漸長裝飾線
        const lineGrad = ctx.createLinearGradient(150, 0, 650, 0);
        lineGrad.addColorStop(0, 'rgba(177, 131, 33, 0)');
        lineGrad.addColorStop(0.3, 'rgba(177, 131, 33, 0.45)');
        lineGrad.addColorStop(0.5, '#ebd080');
        lineGrad.addColorStop(0.7, 'rgba(177, 131, 33, 0.45)');
        lineGrad.addColorStop(1, 'rgba(177, 131, 33, 0)');

        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = 1.5;
        ctx.beginPath();
        ctx.moveTo(150, 715);
        ctx.lineTo(650, 715);
        ctx.stroke();

        // 金星印記
        const goldGrad = ctx.createLinearGradient(0, 700, 0, 800);
        goldGrad.addColorStop(0, '#be8f2a');
        goldGrad.addColorStop(0.5, '#fdf7c3');
        goldGrad.addColorStop(1, '#9e721d');

        ctx.fillStyle = goldGrad;
        ctx.font = '22px serif';
        ctx.fillText('✦', 400, 722);

        // 溫暖金箔字句印刷
        const textGrad = ctx.createLinearGradient(0, 810, 0, 810 + textBlockHeight);
        textGrad.addColorStop(0, '#9e7520');
        textGrad.addColorStop(1, '#614914');
        
        ctx.fillStyle = textGrad;
        ctx.font = 'bold 24px "Inter", "Microsoft JhengHei", sans-serif';
        ctx.letterSpacing = '4px';

        lines.forEach((line, index) => {
          ctx.fillText(line, 400, 835 + index * 48);
        });

        // 轉換為 JPEG 資料，壓縮率為 93% 保持超高品質又能快速儲存
        const url = canvas.toDataURL('image/jpeg', 0.93);
        setGeneratedImgSrc(url);
        setIsGenerating(false);
      } catch (err: any) {
        console.error('明信片渲染出錯:', err);
        setError('明信片加載失敗，請重試！可能由於自定義照片尚未成功上傳');
        setIsGenerating(false);
      }
    };

    img.onerror = () => {
      // 倘若自定義照片上傳出錯或不見了，嘗試回退到預設高畫質雲端圖，保證 100% 成功填充
      if (photoUrl !== 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800&h=1200') {
        img.src = 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=800&h=1200';
      } else {
        setError('明信片背景圖加載失敗，請連線網路再試。');
        setIsGenerating(false);
      }
    };

  }, [isOpen, config]);

  // 單獨的點擊下載下載處理函式 (給桌面/支援下載的行動端)
  const handleDownload = () => {
    if (!generatedImgSrc) return;
    const link = document.createElement('a');
    link.href = generatedImgSrc;
    // 取名叫 friend 專屬明信片，或通用明信片
    link.download = `postcard_${config.title || 'friend'}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (!isOpen) return null;

  // 使用 config.postcardPhotoUrl
  const photoUrl = config.postcardPhotoUrl || config.avatarUrl || config.resultUrl || './assets/result.png';

  return (
    <div className="absolute inset-0 z-[100] bg-black/55 backdrop-blur-md flex items-center justify-center p-3.5 pointer-events-auto select-none animate-[fadeIn_0.3s_ease-out] overflow-hidden">
      
      {/* THREE.JS 粒子特效背景 */}
      <ThreeParticleBackground />

      {/* 🔮 珍貴的圓角紙質明信片 (無彈窗外加框架，它自身就是明信片) — 自適應高度，文字過多時可捲動 */}
      <div className="w-[330px] max-h-[85vh] bg-[#FAF7F0] rounded-[24px] border border-[#e3dac9] shadow-[0_24px_55px_rgba(50,45,35,0.28)] flex flex-col justify-between relative overflow-hidden animate-scaleUp z-10">
        
        {/* 右上角精緻、壓印風格的圓形返回按鈕 */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[60] w-8 h-8 rounded-full bg-[#fbfbfa] hover:bg-[#f5f2eb] text-[#85704a] border border-[#dfd4be] shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.06),_0_2px_5px_rgba(0,0,0,0.05)] hover:shadow-[inset_0_1.5px_3px_rgba(0,0,0,0.08),_0_1px_3px_rgba(0,0,0,0.03)] flex items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer"
          title="返回"
        >
          <ArrowLeft className="w-3.5 h-3.5 stroke-[2.5]" />
        </button>

        {/* 內頁：包含插畫與金箔文字 — 文字過多時此區域可垂直捲動 */}
        <div className="flex-1 flex flex-col pt-6 px-6 overflow-y-auto min-h-0">
          
          {/* 明信片手繪插畫：在明信片界面上，這裡只需要顯示編號為0的圖片預覽即可 */}
          <div className="w-full aspect-square rounded-xl overflow-hidden border border-[#eeddbb]/30 shadow-[0_4px_12px_rgba(0,0,0,0.03)] bg-stone-100 flex items-center justify-center relative mt-3 shrink-0">
            {isGenerating ? (
              <div className="flex flex-col items-center gap-1.5 py-6">
                <RefreshCw className="w-6 h-6 text-[#9a7d46] animate-spin" />
                <span className="text-[10px] text-amber-900/40">製作印製中...</span>
              </div>
            ) : error ? (
              <span className="text-xs text-red-400 p-4 text-center">{error}</span>
            ) : (
              <img
                src={photoUrl}
                alt="你的專屬明信片"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            )}
          </div>

          {/* 金箔質感文字區 */}
          <div className="flex flex-col items-center text-center mt-3 pb-4">
            
            {/* 金箔裝飾花邊 */}
            <div className="flex items-center gap-2 mb-2.5 opacity-75">
              <div className="w-8 h-[1px] bg-gradient-to-r from-transparent to-[#bba06a]" />
              <span className="text-[#c59c50] text-[10px]">✦</span>
              <div className="w-8 h-[1px] bg-gradient-to-l from-transparent to-[#bba06a]" />
            </div>

            {/* 祝福語：金箔微光 — 每一小句獨立成行 */}
            <p className="mt-1 text-[11px] leading-relaxed font-semibold bg-gradient-to-b from-[#8f6d21] to-[#604914] bg-clip-text text-transparent px-1 select-text max-w-[240px] drop-shadow-[0_0.5px_0.5px_rgba(255,255,255,0.6)] whitespace-pre-line">
              {config.postcardText || '感恩這份奇妙的相遇，獻上我最溫暖的祝福！願你的每一步都充滿陽光。'}
            </p>
          </div>
        </div>

        {/* 底部邊緣整合深色條狀儲存按鈕（浮雕壓印效果） */}
        {!isGenerating && !error && (
          <button
            onClick={handleDownload}
            className="w-full h-12 bg-[#2d2522] hover:bg-[#201a18] active:bg-[#1a1413] text-[#ebdfd5] font-sans text-xs font-semibold tracking-[2px] uppercase shadow-[inset_0_2.5px_5px_rgba(0,0,0,0.4),_0_1px_0.5px_rgba(255,255,255,0.08)] flex items-center justify-center gap-1.5 cursor-pointer transition-all duration-200 border-t border-[#1e1917]"
          >
            <Download className="w-3.5 h-3.5 text-[#ebd9cc] drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]" />
            <span>儲存明信片</span>
          </button>
        )}
      </div>
    </div>
  );
};
