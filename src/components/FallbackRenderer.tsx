/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useRef } from 'react';
import { AlignmentConfig } from '../types';

interface SVGMaskFallbackProps {
  config: AlignmentConfig;
}

/**
 * 遮罩回退渲染器：當 /assets/mask.png 尚未上傳時，
 * 本組件利用 CSS 超大外框投影技術 (box-shadow) 動態生成一個精美的深色鏤空遮罩，
 * 其鏤空區域 100% 響應式貼合您的 ALIGNMENT_CONFIG。
 */
export const SVGMaskFallback: React.FC<SVGMaskFallbackProps> = ({ config }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
      {/* 核心鏤空孔洞與超大環繞陰影 */}
      <div
        id="mask-cutout-hole"
        className="transition-all duration-300"
        style={{
          position: 'absolute',
          top: config.top,
          left: config.left,
          width: config.width,
          height: config.height,
          borderRadius: config.borderRadius,
          transform: 'translate(-50%, -50%)',
          boxShadow: '0 0 0 1000px rgba(250, 246, 238, 0.94)', // 完美遮蔽外部 (米白色底紋)
          border: '1.5px dashed rgba(220, 203, 175, 0.9)',
        }}
      />
      
      {/* 科技感外框裝飾線圈 (若大於 20px 圓角，加點裝飾) */}
      <div
        style={{
          position: 'absolute',
          top: config.top,
          left: config.left,
          width: `calc(${config.width} + 12px)`,
          height: `calc(${config.height} + 12px)`,
          borderRadius: `calc(${config.borderRadius} + 6px)`,
          transform: 'translate(-50%, -50%)',
          border: '1px solid rgba(220, 203, 175, 0.4)',
        }}
      />
    </div>
  );
};

interface ResultFallbackProps {
  config: AlignmentConfig;
}

/**
 * 完整靜態圖回退：當 /assets/result.png 尚未上傳時，
 * 以華麗的賽博朋克/魔法粒子科技感頭盔 HUD 畫面替代，完美對齊您的 ALIGNMENT_CONFIG。
 */
export const ResultFallback: React.FC<ResultFallbackProps> = ({ config }) => {
  return (
    <div className="absolute inset-0 bg-neutral-950 flex flex-col items-center justify-between p-6 overflow-hidden">
      {/* 背景裝飾微網格 */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />
      
      {/* 閃爍炫光 */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* 魔法面部對齊區域 */}
      <div className="relative flex-grow w-full flex items-center justify-center">
        <div
          className="relative overflow-hidden flex items-center justify-center border border-emerald-500/30 bg-radial from-emerald-500/10 to-transparent"
          style={{
            position: 'absolute',
            top: config.top,
            left: config.left,
            width: config.width,
            height: config.height,
            borderRadius: config.borderRadius,
            transform: 'translate(-50%, -50%)',
          }}
        >
          {/* 星雲旋渦 / 掃描線 */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/20 to-transparent h-[200%] animate-[pulse_3s_infinite]" />
          
          {/* 魔法面具 SVG 占位 */}
          <svg className="w-1/2 h-1/2 text-emerald-400 opacity-80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25zm0 3.75h.008v.008H12v-.008zM9.75 8.25h.008v.008H9.75V8.25zm0 3.75h.008v.008H9.75v-.008zm4.5-3.75h.008v.008h-.008V8.25zm0 3.75h.008v.008h-.008v-.008z" />
          </svg>
          
          {/* 光環 */}
          <div className="absolute inset-2 border border-dashed border-emerald-400/20 rounded-full animate-[spin_20s_linear_infinite]" />
        </div>
      </div>
    </div>
  );
};

interface ParticleCanvasProps {
  isActive: boolean;
}

/**
 * 終極動態視頻回退：當 /assets/final.mp4 尚未上傳時，
 * 本組件提供一個高性能、美輪美奐的 canvas 動態量子魔法粒子軌道效果。
 * 每顆粒子都以曲線軌道流動，流動順暢，帶給您絲滑並具有高級感的視覺體驗。
 */
export const ParticleCanvas: React.FC<ParticleCanvasProps> = ({ isActive }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    if (!isActive) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 360);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 640);

    // 粒子類別定義
    interface Particle {
      x: number;
      y: number;
      radius: number;
      color: string;
      speed: number;
      angle: number;
      cosAmplitude: number;
      frequency: number;
      phase: number;
      decay: number;
      alpha: number;
    }

    const particles: Particle[] = [];
    const colors = [
      'rgba(14, 165, 233, 0.7)', // 蔚藍
      'rgba(52, 211, 153, 0.7)', // 綠瑩
      'rgba(139, 92, 246, 0.7)', // 星夜紫
      'rgba(244, 63, 94, 0.7)',  // 瑰紅
    ];

    const createParticle = (): Particle => {
      // 粒子從底部或中間向上漂移
      return {
        x: Math.random() * width,
        y: height + Math.random() * 20,
        radius: Math.random() * 2.5 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 1.5 + 0.5,
        angle: -Math.PI / 2 + (Math.random() * 0.2 - 0.1), // 往正上漂，小角度偏振
        cosAmplitude: Math.random() * 25 + 5, // 橫向擺動幅度
        frequency: Math.random() * 0.02 + 0.005, // 橫向擺動頻率
        phase: Math.random() * Math.PI * 2, // 起始相位
        decay: Math.random() * 0.005 + 0.002, // 衰退率
        alpha: Math.random() * 0.5 + 0.5,
      };
    };

    // 初始粒子
    for (let i = 0; i < 40; i++) {
      const p = createParticle();
      p.y = Math.random() * height; // 散落分佈
      particles.push(p);
    }

    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        width = canvas.width = entry.contentRect.width;
        height = canvas.height = entry.contentRect.height;
      }
    });

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    const render = () => {
      ctx.fillStyle = 'rgba(9, 9, 11, 0.12)'; // 粒子長尾拖影效果，營造光錐流轉
      ctx.fillRect(0, 0, width, height);

      // 加點宇宙微星網格背景
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.02)';
      ctx.lineWidth = 0.5;
      for (let i = 50; i < width; i += 50) {
        ctx.beginPath();
        ctx.moveTo(i, 0);
        ctx.lineTo(i, height);
        ctx.stroke();
      }
      for (let j = 50; j < height; j += 50) {
        ctx.beginPath();
        ctx.moveTo(0, j);
        ctx.lineTo(width, j);
        ctx.stroke();
      }

      // 更新與繪製粒子
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.y -= p.speed;
        p.alpha -= p.decay;

        // 依據弦波計算橫軸游離偏振
        const offset = Math.sin((height - p.y) * p.frequency + p.phase) * p.cosAmplitude;
        const currentX = p.x + offset;

        ctx.beginPath();
        ctx.arc(currentX, p.y, p.radius, 0, Math.PI * 2);
        
        // 營造外發光
        ctx.shadowBlur = p.radius * 3;
        ctx.shadowColor = p.color;
        ctx.fillStyle = p.color;
        ctx.fill();
        ctx.shadowBlur = 0; // 重置

        // 若粒子到頂部或透明度小於0，則重置底部產生新粒子
        if (p.y < -10 || p.alpha <= 0) {
          particles[i] = createParticle();
        }
      }

      // 繪製科技圓光環中央旋轉
      ctx.strokeStyle = 'rgba(14, 165, 233, 0.05)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(width / 2, height * 0.35, 120, 0, Math.PI * 2);
      ctx.stroke();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
    };
  }, [isActive]);

  return (
    <div className="absolute inset-0 bg-neutral-950">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
};
