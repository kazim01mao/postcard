/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { RefreshCw, Play, AlertCircle, Mail, Sparkles, ArrowLeft, X } from 'lucide-react';
import { AppPhase, BoxDimensions } from './types';
import { getDynamicAlignmentConfig } from './config';
import { SVGMaskFallback, ResultFallback, ParticleCanvas } from './components/FallbackRenderer';
import { PostcardOverlay } from './components/PostcardOverlay';

export default function App() {
  // 1. 核心流程與轉場狀態 (IDLE, LOADING, ACTIVE, ALIGNED, STAGE2, STAGE3)
  const [phase, setPhase] = useState<AppPhase>(AppPhase.IDLE);
  const phaseRef = useRef<AppPhase>(phase);
  useEffect(() => {
    phaseRef.current = phase;
  }, [phase]);
  
  const [permissionError, setPermissionError] = useState<string | null>(null);
  const [isPostcardOpen, setIsPostcardOpen] = useState(false);
  
  // 2. 靜態加載錯誤偵測 (決定是否渲染 SVG 回退)
  const [hasInitialError, setHasInitialError] = useState(false);
  const [hasResultError, setHasResultError] = useState(false);
  const [hasFinalError, setHasFinalError] = useState(false);

  // 5. 動態讀取對齊設定 (支援 URL 參數與多個朋友的預設定檔)
  const config = React.useMemo(() => getDynamicAlignmentConfig(), []);
  const { top, left, width, height, borderRadius } = config;

  // 2.5 實時動態資源狀態 (無縫確保系統展示效果完美，上傳失敗時可安全回退高畫質感官素材)
  const [initialSrc, setInitialSrc] = useState(() => config.initialUrl || "./assets/initial.png");
  const [resultSrc, setResultSrc] = useState(() => config.resultUrl || "./assets/result.png");
  const [finalSrc, setFinalSrc] = useState(() => config.finalUrl || "./assets/final.mp4");

  useEffect(() => {
    setInitialSrc(config.initialUrl || "./assets/initial.png");
    setResultSrc(config.resultUrl || "./assets/result.png");
    setFinalSrc(config.finalUrl || "./assets/final.mp4");
    setHasInitialError(false);
    setHasResultError(false);
    setHasFinalError(false);
    if (config.title) {
      document.title = config.title;
    }
  }, [config]);

  // 靜態資源預載入：防止在階段 2、3、4 切換時，因圖片加載延遲產生黑屏、跳動或白屏
  useEffect(() => {
    const assetsToPreload = [initialSrc, resultSrc, finalSrc];
    if (config.avatarUrl) assetsToPreload.push(config.avatarUrl);
    if (config.postcardPhotoUrl) assetsToPreload.push(config.postcardPhotoUrl);

    assetsToPreload.forEach((url) => {
      if (url && !isVideoAsset(url)) {
        const img = new Image();
        img.src = url;
      }
    });
  }, [initialSrc, resultSrc, finalSrc, config]);

  const handleInitialError = () => {
    if (initialSrc.startsWith('./assets/') || initialSrc.startsWith('/assets/')) {
      // 系統填充圖 2：最初呈現 initial 的漂亮星光金砂底色
      setInitialSrc('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800');
    } else {
      setHasInitialError(true);
    }
  };

  const handleResultError = () => {
    if (resultSrc.startsWith('./assets/') || resultSrc.startsWith('/assets/')) {
      // 系統填充圖 3：然後呈現 result 的高解析度變身結果肖像
      setResultSrc('https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800&h=1200');
    } else {
      setHasResultError(true);
    }
  };

  const handleFinalError = () => {
    if (finalSrc.startsWith('./assets/') || finalSrc.startsWith('/assets/')) {
      // 系統填充圖 4：然後呈現 final 的動態唯美漫天粒子灑落影片
      setFinalSrc('https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-falling-glitter-41595-large.mp4');
    } else {
      setHasFinalError(true);
    }
  };

  // 預加載 MediaPipe 庫，加快首次啟動速度
  useEffect(() => {
    const preloadFaceMesh = async () => {
      let attempts = 0;
      while (!(window as any).FaceMesh && attempts < 100) {
        await new Promise(resolve => setTimeout(resolve, 50));
        attempts++;
      }
      if ((window as any).FaceMesh) {
        console.log('✅ MediaPipe FaceMesh 已預加載');
      }
    };
    preloadFaceMesh();
  }, []);
  const [isFaceDetected, setIsFaceDetected] = useState(false);
  const [isCurrentlyAligned, setIsCurrentlyAligned] = useState(false);
  const [alignmentProgress, setAlignmentProgress] = useState(0); // 0 到 100
  const [alignmentHint, setAlignmentHint] = useState<string>(
    () => `點擊下方的「${config.buttonText}」開始體驗`
  );

  // 3.5 虛擬替身私密狀態 (已靜態化，不進行移動或追蹤)
  const [avatarState, setAvatarState] = useState({
    x: 0,
    y: 0,
    scale: 1.0,
    detected: false,
    roll: 0,
    yaw: 0,
    pitch: 0
  });

  // 4. DOM 引用與串流資源
  const containerRef = useRef<HTMLDivElement>(null);
  const videoElementRef = useRef<HTMLVideoElement>(null);
  const finalVideoRef = useRef<HTMLVideoElement>(null);
  const videoStreamRef = useRef<MediaStream | null>(null);
  const activeCameraRef = useRef<any>(null);
  const animationFrameIdRef = useRef<number | null>(null);
  const isTrackingRef = useRef<boolean>(false);
  const alignmentStartRef = useRef<number | null>(null);
  const lastStateUpdateTimeRef = useRef<number>(0); // 節流用：限制 setAvatarState 更新頻率，避免手機 CPU 因過度渲染而卡死
  const [showWhiteFlash, setShowWhiteFlash] = useState(false);

  // 6. 微魔法琶音器提示音
  const playSuccessChime = useCallback(() => {
    try {
      const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const now = ctx.currentTime;

      const freqs = [659.25, 880.00, 1109.73, 1318.51]; // E5 -> A5 -> C#6 -> E6
      freqs.forEach((freq, index) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, now + index * 0.08);

        gain.gain.setValueAtTime(0, now + index * 0.08);
        gain.gain.linearRampToValueAtTime(0.2, now + index * 0.08 + 0.03);
        gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.5);

        osc.connect(gain);
        gain.connect(ctx.destination);

        osc.start(now + index * 0.08);
        osc.stop(now + index * 0.08 + 0.6);
      });
    } catch (e) {
      console.warn('瀏覽器不支援 Web Audio 或尚未授權播音：', e instanceof Error ? e.message : String(e));
    }
  }, []);

  // 6.5 偵測檔案是否為影片 (支援 .mp4, .webm, .mov, .m4v 等，不分大小寫)
  const isVideoAsset = (url?: string): boolean => {
    if (!url) return false;
    const lower = url.toLowerCase();
    return (
      lower.endsWith('.mp4') ||
      lower.endsWith('.webm') ||
      lower.endsWith('.mov') ||
      lower.endsWith('.m4v') ||
      lower.endsWith('.avi') ||
      lower.endsWith('.mkv') ||
      lower.endsWith('.3gp') ||
      lower.endsWith('.ogg') ||
      lower.includes('video') ||
      lower.includes('mp4') ||
      lower.includes('mov') ||
      lower.includes('webm')
    );
  };

  // 7. 解析寬度高度
  const parseConfigValue = (val: string, containerLength: number): number => {
    if (val.endsWith('%')) {
      return (parseFloat(val) / 100) * containerLength;
    }
    if (val.endsWith('px')) {
      return parseFloat(val);
    }
    return parseFloat(val);
  };

  // 8. 計算虛擬框像素坐標
  const getAlignmentBoxPixels = useCallback((): BoxDimensions | null => {
    const container = containerRef.current;
    if (!container) return null;

    const rect = container.getBoundingClientRect();
    const w = parseConfigValue(width, rect.width);
    const h = parseConfigValue(height, rect.height);
    const cx = parseConfigValue(left, rect.width);
    const cy = parseConfigValue(top, rect.height);

    const x = cx - w / 2;
    const y = cy - h / 2;

    return { x, y, width: w, height: h, centerX: cx, centerY: cy };
  }, [top, left, width, height]);

  // 9. 座標映射與 Cover 適配裁切
  const mapVideoToContainer = useCallback((vx: number, vy: number, videoEl: HTMLVideoElement, containerEl: HTMLDivElement) => {
    const vWidth = videoEl.videoWidth;
    const vHeight = videoEl.videoHeight;
    if (!vWidth || !vHeight) return { x: 0, y: 0 };

    const cRect = containerEl.getBoundingClientRect();
    const cWidth = cRect.width;
    const cHeight = cRect.height;

    const videoRatio = vWidth / vHeight;
    const containerRatio = cWidth / cHeight;

    let scale = 1;
    let dx = 0;
    let dy = 0;

    if (videoRatio > containerRatio) {
      scale = cHeight / vHeight;
      dx = (cWidth - vWidth * scale) / 2;
    } else {
      scale = cWidth / vWidth;
      dy = (cHeight - vHeight * scale) / 2;
    }

    // 前鏡頭需要水平鏡像：(1 - vx) 將左/右翻轉，使螢幕顯示如照鏡子一般
    const screenX = (1 - vx) * vWidth * scale + dx;
    const screenY = vy * vHeight * scale + dy;

    return { x: screenX, y: screenY };
  }, []);

  // 10. 三階段炫酷漸隱/漸顯轉場 (無縫融合)
  const triggerTransitionSecquence = useCallback(() => {
    setPhase(AppPhase.STAGE2);
    setShowWhiteFlash(true);
    playSuccessChime();

    // 關閉閃光白屏
    setTimeout(() => {
      setShowWhiteFlash(false);
    }, 600);

    // 延遲 1500ms 釋放鏡頭與追蹤，確保 1000ms 漸隱動畫完全結束，不出現突然全黑或卡格
    setTimeout(() => {
      if (activeCameraRef.current) {
        try {
          activeCameraRef.current.stop();
        } catch (e) {
          console.warn('相機停止異常:', e instanceof Error ? e.message : String(e));
        }
        activeCameraRef.current = null;
      }
      if (videoStreamRef.current) {
        videoStreamRef.current.getTracks().forEach((track: MediaStreamTrack) => track.stop());
        videoStreamRef.current = null;
      }
    }, 1500);

    // 檢查是否為 y 用戶，若是則停留時間為 6 秒 (6000ms)，否則為 2.2 秒 (2200ms)
    const params = new URLSearchParams(window.location.search);
    const friendName = params.get('friend') || params.get('u');
    const isUserY = friendName?.toLowerCase() === 'y';
    const transitionDelay = isUserY ? 6000 : 2200;

    // 【轉場狀態三】：過指定時間，進入 STAGE3 動態播放 final 圖片/影片
    setTimeout(() => {
      setPhase(AppPhase.STAGE3);
    }, transitionDelay);

  }, [playSuccessChime]);

  // 11. MediaPipe 臉部數據回調，比對 face 座標
  const handleFaceMeshResults = useCallback((results: any) => {
    const video = videoElementRef.current;
    const container = containerRef.current;
    
    // 使用 phaseRef 避免 stale closure 導致回調永遠卡在 LOADING 狀態
    if (phaseRef.current !== AppPhase.ACTIVE || !video || !container) {
      setIsFaceDetected(false);
      setIsCurrentlyAligned(false);
      setAvatarState(prev => ({ ...prev, detected: false }));
      return;
    }

    if (!results.multiFaceLandmarks || results.multiFaceLandmarks.length === 0) {
      setIsFaceDetected(false);
      setIsCurrentlyAligned(false);
      setAvatarState(prev => ({ ...prev, detected: false }));
      setAlignmentHint('🔍 尋找人臉中... (人像尚未放入圈圈 ❌)');
      if (alignmentStartRef.current) {
        alignmentStartRef.current = null;
        setAlignmentProgress(0);
      }
      return;
    }

    setIsFaceDetected(true);
    const landmarks = results.multiFaceLandmarks[0];

    // 包裹計算臉部 bounding box
    let minVx = 1, maxVx = 0;
    let minVy = 1, maxVy = 0;
    for (const lm of landmarks) {
      if (lm.x < minVx) minVx = lm.x;
      if (lm.x > maxVx) maxVx = lm.x;
      if (lm.y < minVy) minVy = lm.y;
      if (lm.y > maxVy) maxVy = lm.y;
    }

    // 計算 3D 旋轉姿態 (歪頭 Roll, 左右轉 Yaw, 上下點頭 Pitch)
    let computedRoll = 0;
    const pLeft = landmarks[130];
    const pRight = landmarks[359];
    if (pLeft && pRight) {
      const dry = pRight.y - pLeft.y;
      const drx = pRight.x - pLeft.x;
      computedRoll = Math.atan2(dry, drx) * (180 / Math.PI);
    }

    let computedYaw = 0;
    const nose = landmarks[4];
    const borderLeft = landmarks[234];
    const borderRight = landmarks[454];
    if (nose && borderLeft && borderRight) {
      const distLeft = Math.abs(nose.x - borderLeft.x);
      const distRight = Math.abs(nose.x - borderRight.x);
      const totalWidth = distLeft + distRight;
      if (totalWidth > 0) {
        // 利用鼻子與兩臉側邊的比例推算左右轉頭的角度
        computedYaw = ((distLeft / totalWidth) - 0.5) * -75;
      }
    }

    let computedPitch = 0;
    const forehead = landmarks[10];
    const chin = landmarks[152];
    if (nose && forehead && chin) {
      const distTop = Math.abs(nose.y - forehead.y);
      const distBottom = Math.abs(nose.y - chin.y);
      const totalHeight = distTop + distBottom;
      if (totalHeight > 0) {
        // 利用鼻子與額頭/下巴的縱向比例推算仰頭與點頭的角度
        computedPitch = ((distTop / totalHeight) - 0.45) * 55;
      }
    }

    const tl = mapVideoToContainer(minVx, minVy, video, container);
    const br = mapVideoToContainer(maxVx, maxVy, video, container);

    const faceX = Math.min(tl.x, br.x);
    const faceY = Math.min(tl.y, br.y);
    const faceW = Math.max(tl.x, br.x) - faceX;
    const faceH = Math.max(tl.y, br.y) - faceY;

    const faceCenter = {
      x: faceX + faceW / 2,
      y: faceY + faceH / 2,
    };

    const target = getAlignmentBoxPixels();
    if (!target) return;

    // 計算虛擬替身偏移量
    // faceCenter.x 增大代表用戶向右移動 (已經在前面處理過正確映射)，所以要往右偏移 (正值)
    const rawDx = faceCenter.x - target.centerX;
    const rawDy = faceCenter.y - target.centerY;

    // 比對判斷誤差百分比 - 根據反饋再度大幅放寬，讓用戶更容易對齊
    const toleranceX = target.width * 0.65;
    const toleranceY = target.height * 0.65;

    const dx = Math.abs(rawDx);
    const dy = Math.abs(rawDy);

    const isCenterAligned = dx <= toleranceX && dy <= toleranceY;
    
    // 臉部大小適配度 - 根據反饋再度大幅放寬
    const sizeRatioW = faceW / target.width;
    const sizeRatioH = faceH / target.height;
    const isSizeAligned = sizeRatioW >= 0.25 && sizeRatioW <= 2.50 && sizeRatioH >= 0.25 && sizeRatioH <= 2.50;

    const isAligned = isCenterAligned && isSizeAligned;

    // 更新替身動態座標與縮放、傾斜與偏轉
    // 在行動端上，直接使用計算出的偏移量，並加上簡單的邊界限制
    // 放寬邊界到 2 倍寬度，避免輕微移動就被卡住
    const maxDx = target.width * 2.0;
    const maxDy = target.height * 2.0;
    
    // 如果 isMobilePortrait 為 true，代表發生了旋轉
    // 我們需要將偏移量對應旋轉，確保視覺上的移動一致
    let finalDx = rawDx;
    let finalDy = rawDy;
    
    // 將修正後的結果限制在最大範圍內，保證即使算法偏離也不會消失
    const boundedDx = Math.max(-maxDx, Math.min(maxDx, finalDx));
    const boundedDy = Math.max(-maxDy, Math.min(maxDy, finalDy));

    // 節流機制：限制 setAvatarState 最高每秒 20-30 次更新 (約 35ms)，避免手機 CPU 因每秒 30+ 次 React 重渲染而卡死主線程
    const now = performance.now();
    if (now - lastStateUpdateTimeRef.current > 35) {
      lastStateUpdateTimeRef.current = now;
      setAvatarState({
        x: boundedDx,
        y: boundedDy,
        scale: isSizeAligned ? sizeRatioW : 1.0, 
        detected: true,
        roll: computedRoll,
        yaw: computedYaw,
        pitch: computedPitch
      });
    }

    if (isAligned) {
      setIsCurrentlyAligned(true);
      
      if (!alignmentStartRef.current) {
        alignmentStartRef.current = Date.now();
      }

      const elapsed = Date.now() - alignmentStartRef.current;
      const progress = Math.min(100, Math.round((elapsed / 1500) * 100));
      setAlignmentProgress(progress);
      setAlignmentHint(`✅ [人像已成功在框框內]！保持別動 ${progress}% ...`);

      // 穩定 1.5 秒
      if (elapsed >= 1500) {
        triggerTransitionSecquence();
      }
    } else {
      setIsCurrentlyAligned(false);
      alignmentStartRef.current = null;
      setAlignmentProgress(0);

      let adjustmentTip = '';
      if (!isCenterAligned) {
        const horizontalDir = faceCenter.x < target.centerX ? '請稍往右移' : '請稍往左移';
        const verticalDir = faceCenter.y < target.centerY ? '請稍往下移' : '請稍往上移';
        adjustmentTip = dx > dy * 1.5 ? horizontalDir : verticalDir;
      } else if (!isSizeAligned) {
        adjustmentTip = sizeRatioW < 0.45 ? '請走近一點鏡頭' : '請稍微站遠一點';
      }

      setAlignmentHint(`❌ 提示：人像尚未對齊！(${adjustmentTip || '請將臉部放入對齊框中'})`);
    }
  }, [phase, mapVideoToContainer, getAlignmentBoxPixels, triggerTransitionSecquence]);

  // 12. 直接進入體驗（已移除相機授權步驟，保留 Initial → Result → Final 完整流程）
  const startCameraAndMagic = async () => {
    setPermissionError(null);
    setPhase(AppPhase.LOADING);
    setAlignmentHint('⌛ 正在準備魔法體驗...');

    // 短暫展示 LOADING 狀態（Initial 層仍可見），然後進入轉場動畫
    setTimeout(() => {
      triggerTransitionSecquence();
    }, 1200);
  };

  // 13. 重設還原
  const resetMagic = () => {
    isTrackingRef.current = false;
    if (animationFrameIdRef.current) {
      cancelAnimationFrame(animationFrameIdRef.current);
      animationFrameIdRef.current = null;
    }
    if (activeCameraRef.current) {
      try { activeCameraRef.current.stop(); } catch(e){}
      activeCameraRef.current = null;
    }
    if (videoStreamRef.current) {
      videoStreamRef.current.getTracks().forEach((track: MediaStreamTrack) => track.stop());
      videoStreamRef.current = null;
    }
    if (videoElementRef.current) {
      videoElementRef.current.srcObject = null;
    }

    setPhase(AppPhase.IDLE);
    setIsFaceDetected(false);
    setIsCurrentlyAligned(false);
    setAlignmentProgress(0);
    setPermissionError(null);
    setIsPostcardOpen(false);
    setAlignmentHint(`點擊下方的「${config.buttonText || '查收這份禮物'}」開始體驗`);
  };

  // 14. 返回上一級 (引導上一步)
  const goBackPreviousLevel = () => {
    if (phase === AppPhase.STAGE2 || phase === AppPhase.STAGE3) {
      startCameraAndMagic();
    } else {
      resetMagic();
    }
  };

  useEffect(() => {
    return () => {
      if (activeCameraRef.current) {
        try { activeCameraRef.current.stop(); } catch(e){}
      }
      if (videoStreamRef.current) {
        videoStreamRef.current.getTracks().forEach((track: MediaStreamTrack) => track.stop());
      }
    };
  }, []);

  // 14. 完美安全的最終變裝影片播放控制器 (避免因狀態切換導致播放被中斷報錯)
  useEffect(() => {
    const video = finalVideoRef.current;
    if (!video) return;

    if (phase === AppPhase.STAGE3) {
      video.play().catch((err: any) => {
        console.warn('最終變裝影片播放被中斷或受限制 (自適應重試):', err);
      });
    } else {
      try {
        video.pause();
      } catch (e) {
        // 忽略暫停報錯
      }
    }
  }, [phase]);

  return (
    <div className="h-[100dvh] w-full bg-[#fcf9f2] flex flex-col items-center justify-center font-sans overflow-hidden relative select-none">
      
      {/* =========================================================
           ✨ 背景氛圍發光點與網格系統 (Elegant Ambient Radial Glow)
          ========================================================= */}
      <div className="absolute inset-0 opacity-60 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[55%] bg-amber-200/40 rounded-full blur-[130px]" />
        <div className="absolute bottom-[5%] right-[5%] w-[45%] h-[45%] bg-orange-100/30 rounded-full blur-[100px]" />
        <div className="absolute inset-0 bg-[linear-gradient(rgba(44,40,36,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(44,40,36,0.025)_1px,transparent_1px)] bg-[size:32px_32px]" />
      </div>

      {/* =========================================================
          📱 核心手機端互動視窗 (Unified Screen Portal)
          ========================================================= */}
      <div 
        id="camera-container"
        ref={containerRef}
        className="w-full max-w-md h-[100dvh] md:h-[90vh] md:max-h-[850px] md:rounded-[36px] bg-[#fdfbf6] overflow-hidden shadow-[0_20px_50px_rgba(43,39,31,0.12)] border border-[#eaddc5]/60 relative z-10 flex flex-col"
      >
        {/* ==========================================
            Layer 1：final 最初呈現 (STAGE3 狀態下漸顯)
            可支援影片或圖片格式。
            ========================================== */}
        <div 
          className="absolute inset-0 z-40 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: phase === AppPhase.STAGE3 ? 1 : 0 }}
        >
          {!hasFinalError ? (
            (() => {
              const finalSource = finalSrc;
              return isVideoAsset(finalSource) ? (
                <video
                  ref={finalVideoRef}
                  src={finalSource}
                  key={finalSource}
                  loop
                  muted
                  playsInline
                  autoPlay
                  onError={handleFinalError}
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={finalSource}
                  key={finalSource}
                  onError={handleFinalError}
                  className="w-full h-full object-contain"
                  alt="魔法變裝最終圖"
                />
              );
            })()
          ) : (
            <ParticleCanvas isActive={phase === AppPhase.STAGE3} />
          )}
        </div>

        {/* ==========================================
            Layer 2：result 變裝結果 (僅在 STAGE2 狀態下顯出，並在 STAGE3 漸隱淡出)
            可支援影片或圖片格式。
            ========================================== */}
        <div 
          className="absolute inset-0 z-30 transition-opacity duration-1000 ease-in-out"
          style={{ opacity: phase === AppPhase.STAGE2 ? 1 : 0 }}
        >
          {!hasResultError ? (
            (() => {
              const resultSource = resultSrc;
              return isVideoAsset(resultSource) ? (
                <video
                  src={resultSource}
                  key={resultSource}
                  loop
                  muted
                  playsInline
                  autoPlay
                  onError={handleResultError}
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={resultSource}
                  key={resultSource}
                  onError={handleResultError}
                  className="w-full h-full object-contain"
                  alt="魔法變裝結果圖"
                />
              );
            })()
          ) : (
            <ResultFallback config={config} />
          )}
        </div>

        {/* ==========================================
            Layer 3：相機影片與隱私替身 (Privacy-first Animated Avatar)
            ========================================== */}
        <div 
          className="absolute inset-0 z-10 transition-opacity duration-1000 ease-in-out"
          style={{ 
            opacity: (phase === AppPhase.ACTIVE || phase === AppPhase.LOADING || phase === AppPhase.ALIGNED) ? 1 : 0,
            backgroundColor: '#fbf9f4' 
          }}
        >
          {/* 1. 背景底色層 (最底) */}
          <div className="absolute inset-0 bg-[#fbf9f4] pointer-events-none z-0" />

          {/* 3. 真實鏡頭 (最上層) — 1% 透明度肉眼不可見 */}
          <video
            ref={videoElementRef}
            playsInline
            autoPlay
            muted
            crossOrigin="anonymous"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none z-20"
            style={{ opacity: 0.01 }}
          />

          {/* 4. 視覺引導框圈 (最最上層) — 已刪除虛線邊框，僅保留圓形鏤空遮罩效果 */}
          <div 
            className="absolute pointer-events-none transition-all duration-300 z-30"
            style={{
              top: top, left: left, width: width, height: height, borderRadius: borderRadius,
              transform: 'translate(-50%, -50%)',
              boxShadow: '0 0 0 9999px rgba(251, 249, 244, 0.4)'
            }}
          />
        </div>

        {/* ==========================================
            Layer 4：前景鏤空遮罩 / initial 最初呈現
            最初完全可見 (opacity 為 1)。當觸發判定成功後，隨相機在 1s 內漸隱。
            可支援影片或圖片格式。
            ========================================== */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none transition-opacity duration-1000 ease-in-out"
          style={{ 
            opacity: (phase === AppPhase.IDLE || phase === AppPhase.LOADING || phase === AppPhase.ACTIVE) ? 1 : 0 
          }}
        >
          {!hasInitialError ? (
            (() => {
              const initialSource = initialSrc;
              return isVideoAsset(initialSource) ? (
                <video
                  src={initialSource}
                  key={initialSource}
                  loop
                  muted
                  playsInline
                  autoPlay
                  onError={handleInitialError}
                  className="w-full h-full object-contain"
                />
              ) : (
                <img
                  src={initialSource}
                  key={initialSource}
                  onError={handleInitialError}
                  className="w-full h-full object-contain"
                  alt="最初呈獻定位遮罩"
                />
              );
            })()
          ) : (
            <SVGMaskFallback config={config} />
          )}
        </div>

        {/* ==========================================
            Layer 5：UI 資訊控制、狀態與對齊框圈。
            ========================================== */}
        <div className="absolute inset-0 z-50 flex flex-col justify-between p-6 pb-[calc(env(safe-area-inset-bottom)+20px)] pointer-events-none">
          
          {/* 中部與頂部（相機對齊與預覽區域）：彈性伸縮，保證底部高度優先不被推出螢幕以外 */}
          <div className="flex-1 min-h-0 relative pointer-events-none w-full" />
          
          {/* 方案二專屬：首頁精緻魔法邀請函卡 (Mystical Portal Intro)
              滿足「打開link後，首先出現的是懸浮的按鈕『查收這份禮物🎁』，周圍有 Three.js 粒子效果，背景隱在後方」 */}
          {phase === AppPhase.IDLE && (
            <div className="absolute inset-0 z-[60] flex flex-col items-center justify-between p-8 bg-[#faf6ee]/98 animate-[fadeIn_0.5s_ease-out] pointer-events-auto">
              {/* Center magic radial glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-r from-amber-200/50 to-orange-100/30 rounded-full blur-[80px] pointer-events-none" />

              {/* Title Header */}
              <div className="w-full flex flex-col items-center text-center gap-2 mt-16 select-none relative z-10">
                <div className="p-3 bg-[#f5ecd5]/60 border border-[#dfc99b]/40 rounded-[24px] shadow-[0_12px_24px_rgba(223,201,155,0.2)] mb-3 animate-[bounce_3s_infinite]">
                  <Sparkles className="w-6 h-6 text-amber-700" />
                </div>
                <h1 className="font-display text-2xl font-black text-[#2d2824] tracking-[4px] uppercase break-words px-2 max-w-full drop-shadow-[0_1px_2px_rgba(255,255,255,0.8)]">
                  {config.title}
                </h1>
                <p className="text-[10px] text-amber-800 font-mono uppercase tracking-[3px] font-bold">
                  {config.subtitle}
                </p>
              </div>

              {/* Center Floating Button - Compact and Delicate style */}
              <div className="w-full flex justify-center py-10 relative z-10">
                <button
                  onClick={startCameraAndMagic}
                  className="w-full max-w-[230px] py-3 px-5 bg-gradient-to-r from-amber-600 via-orange-500 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-sans text-xs font-bold tracking-[2.5px] uppercase rounded-full shadow-[0_12px_28px_rgba(249,115,22,0.3)] transition-all duration-300 hover:scale-103 active:scale-97 flex items-center justify-center gap-1.5 border border-white/10 cursor-pointer animate-[pulse_2.5s_infinite]"
                >
                  <Play className="w-3.5 h-3.5 fill-current text-white animate-pulse" />
                  {config.buttonText} 🎁
                </button>
              </div>

            </div>
          )}

          {/* 頂欄與引導文案：右上角優雅返回圖標，當作背景一部分 */}
          <div className="absolute top-[calc(env(safe-area-inset-top)+18px)] right-6 z-50 pointer-events-auto select-none">
            {(phase === AppPhase.ACTIVE || phase === AppPhase.STAGE2 || phase === AppPhase.STAGE3) && (
              <button
                onClick={goBackPreviousLevel}
                className="w-8 h-8 rounded-full bg-white/70 hover:bg-white/90 border border-neutral-200/50 flex items-center justify-center text-neutral-600 hover:text-neutral-950 shadow-sm transition-all active:scale-90 cursor-pointer"
                title="返回上一級"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* iOS-Style 精緻引導文案 - 始終水平居中，浮動於對齊框正上方 */}
          {(phase === AppPhase.ACTIVE || phase === AppPhase.LOADING) && (
            <div
              className="absolute z-50 text-center pointer-events-none transition-all duration-300"
              style={{
                top: `calc(${top} - (${height} / 2) - 20px)`,
                left: '50%',
                transform: 'translate(-50%, -100%)',
                width: '100%',
                maxWidth: '280px'
              }}
            >
              <p className="text-[14px] font-sans text-white/75 font-semibold tracking-wide drop-shadow-[0_2px_5px_rgba(0,0,0,0.9)] leading-relaxed">
                {config.guideTip || '「請將面部放入框線內，用於代入角色」'}
              </p>
            </div>
          )}

          {/* 技術校準虛線圓框 — 已按照需求刪除虛線框 */}

          {/* 底部功能控制板區 */}
          <div className="w-full flex flex-col gap-3 pointer-events-auto mt-auto relative z-50 shrink-0">
            
            {/* 🎯 手動切換下一階段按鈕 - 滿足「我已代入角色，直接進入下一步」且無 ✨ 符號的要求，採用 iOS 高級藍色膠囊 - 調整得更小巧精細 */}
            {phase === AppPhase.ACTIVE && (
              <button
                onClick={triggerTransitionSecquence}
                className="w-[82%] mx-auto py-2.5 bg-[#007aff] hover:bg-[#0066d6] text-white font-sans text-xs font-semibold tracking-wider rounded-full shadow-[0_4px_12px_rgba(0,122,255,0.2)] transition-all duration-200 active:scale-[0.98] active:opacity-90 flex items-center justify-center cursor-pointer pointer-events-auto border border-white/5"
              >
                我想象完畢，直接進入下一步
              </button>
            )}

            {/* 🎯 查收明信片按鈕 - 當變裝影片開始播放 (STAGE3) 時在底部出現 - 調整得更小巧精細 */}
            {phase === AppPhase.STAGE3 && (
              <button
                onClick={() => setIsPostcardOpen(true)}
                className="w-[82%] mx-auto py-2.5 bg-[#007aff] hover:bg-[#0066d6] text-white font-sans text-xs font-semibold tracking-wider rounded-full shadow-[0_4px_12px_rgba(0,122,255,0.2)] transition-all duration-200 active:scale-[0.98] active:opacity-90 flex items-center justify-center gap-1.5 cursor-pointer pointer-events-auto border border-white/5"
              >
                <Mail className="w-3.5 h-3.5 text-white" />
                查收明信片
              </button>
            )}

            {/* 連載加載狀態 */}
            {phase === AppPhase.LOADING && (
              <div className="w-full py-4 bg-white/5 border border-white/10 text-white/85 font-sans text-xs rounded-2xl backdrop-blur-md flex items-center justify-center gap-2.5 shadow-lg">
                <RefreshCw className="w-4 h-4 animate-spin text-orange-400" />
                連鏡頭並載入人臉定位算法中...
              </div>
            )}

            {/* 錯誤處理與 iframe 開新頁提示 */}
            {permissionError && (
              <div className="p-3.5 bg-red-500/10 border border-red-500/25 rounded-2xl text-[10px] text-red-400 flex items-start gap-2 max-w-full">
                <AlertCircle className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                <span>
                  <strong>引導錯誤：</strong>{permissionError}。<br />
                  請確認您在瀏覽器彈窗中允許了「相機授權」，若是在不支援 WebRTC 的 iframe 預覽中，點擊編輯器右上角
                  「在新分頁開啟 / Open in New Tab」即可解除權限限制！
                </span>
              </div>
            )}
          </div>

          {/* 底部 iOS 系統安全留白緩衝 (防止按鈕被瀏覽器 UI 遮擋) */}
          {(phase === AppPhase.ACTIVE || phase === AppPhase.STAGE2 || phase === AppPhase.STAGE3) && (
            <div className="w-full shrink-0 pointer-events-none select-none" style={{ height: 'env(safe-area-inset-bottom, 16px)' }} />
          )}
        </div>

        {/* =========================================================
            📱 浮動明信片介面 (Postcard Overlay)
            直接覆蓋於鏡頭畫面上方展示，符合「浮於頁面上方，不用額外開啟一個界面」的要求
            ========================================================= */}
        <PostcardOverlay 
          isOpen={isPostcardOpen} 
          onClose={() => setIsPostcardOpen(false)} 
          config={config} 
        />

        {/* 觸發瞬間白色閃屏 */}
        <div 
          className={`absolute inset-0 z-50 pointer-events-none ${showWhiteFlash ? 'animate-flash' : 'opacity-0'}`}
          style={{ mixBlendMode: 'screen' }}
        />
      </div>
    </div>
  );
}
