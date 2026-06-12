/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Camera, RefreshCw, Play, CameraOff, AlertCircle, Mail, Sparkles, ArrowLeft, X } from 'lucide-react';
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

  // 3.5 虛擬替身私密狀態 (不呈現真實臉部，維護用戶隱私)
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

    // 【轉場狀態三】：過 2.2 秒，進入 STAGE3 動態播放 final 圖片/影片
    setTimeout(() => {
      setPhase(AppPhase.STAGE3);
    }, 2200);

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

    // 計算虛擬替身偏移量 (鏡像處理，X 方向取反以便與真人的實體左右動作維持一致)
    const rawDx = target.centerX - faceCenter.x; // 反轉 X 方向，使其與相機畫面一致
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
    const maxDx = target.width * 1.5;
    const maxDy = target.height * 1.5;
    const boundedDx = Math.max(-maxDx, Math.min(maxDx, rawDx));
    const boundedDy = Math.max(-maxDy, Math.min(maxDy, rawDy));

    setAvatarState({
      x: boundedDx,
      y: boundedDy,
      scale: sizeRatioW || 1.0, 
      detected: true,
      roll: computedRoll, 
      yaw: computedYaw,
      pitch: computedPitch
    });

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

  // 12. 初始化啟動鏡頭 & MediaPipe 相機庫
  const startCameraAndMagic = async () => {
    setPermissionError(null);
    setPhase(AppPhase.LOADING);
    setAlignmentHint('⌛ 正在授權喚醒相機與加載人臉算法...');

    try {
      // 檢查 MediaPipe 庫是否已加載，若未加載則等待
      let attempts = 0;
      while (!(window as any).FaceMesh && attempts < 50) {
        await new Promise(resolve => setTimeout(resolve, 100));
        attempts++;
      }

      if (!(window as any).FaceMesh) {
        throw new Error('MediaPipe 庫腳本加載超時，請檢查網絡連接。');
      }

      const stream = await navigator.mediaDevices.getUserMedia({
        video: {
          facingMode: 'user',
          width: { ideal: 1280, min: 320 },
          height: { ideal: 1280, min: 240 }
          // 移除強制 landscape 比例，適配手機端原生 Portrait 畫面
          // 添加最小分辨率，確保手機端可以獲得支持的分辨率
        },
        audio: false,
      });

      videoStreamRef.current = stream;
      if (videoElementRef.current) {
        videoElementRef.current.srcObject = stream;
        // 在行動端 Safari，確保影片強制播放
        videoElementRef.current.setAttribute('playsinline', 'true');
        videoElementRef.current.setAttribute('autoplay', 'true');
        videoElementRef.current.setAttribute('muted', 'true');
        
        // 等待視頻元數據加載完成再播放
        const playPromise = videoElementRef.current.play();
        if (playPromise !== undefined) {
          try {
            await playPromise;
          } catch (err: any) {
            console.warn('相機流播放被中斷或被瀏覽器阻止:', err);
            // 繼續執行，不中斷流程
          }
        }
      }

      const faceMesh = new (window as any).FaceMesh({
        locateFile: (file: string) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh/${file}`,
      });

      faceMesh.setOptions({
        maxNumFaces: 1,
        refineLandmarks: true, // 提高精度
        minDetectionConfidence: 0.6, // 調整檢測信心度
        minTrackingConfidence: 0.6,  // 調整追蹤信心度
      });

      faceMesh.onResults(handleFaceMeshResults);

      if (videoElementRef.current) {
        isTrackingRef.current = true;
        
        // 等待視頻真正準備好再開始追蹤
        const videoElement = videoElementRef.current;
        const startTracking = async () => {
          // 等待視頻元素有可播放的狀態
          if (videoElement.readyState < 2) {
            await new Promise(resolve => {
              videoElement.addEventListener('canplay', resolve, { once: true });
            });
          }

          let isProcessingFrame = false;

          const tick = async () => {
            if (!isTrackingRef.current) return;

            const video = videoElementRef.current;
            
            if (!isProcessingFrame && video && video.readyState >= 2 && video.videoWidth > 0 && video.videoHeight > 0) {
              isProcessingFrame = true;
              try {
                await faceMesh.send({ image: video });
              } catch (err: any) {
                console.warn('FaceMesh send frame error:', err);
              } finally {
                isProcessingFrame = false;
              }
            }
            
            // 將 requestAnimationFrame 放在最後，確保前一幀的邏輯（即使被跳過）不影響下一幀排程
            animationFrameIdRef.current = requestAnimationFrame(tick);
          };
          
          // 啟動追蹤循環
          tick();

          activeCameraRef.current = {
            stop: () => {
              isTrackingRef.current = false;
              if (animationFrameIdRef.current) {
                cancelAnimationFrame(animationFrameIdRef.current);
                animationFrameIdRef.current = null;
              }
            }
          };
          
          setPhase(AppPhase.ACTIVE);
          setAlignmentHint('🎯 請將臉龐套入虛線圈圈中心');
        };

        startTracking().catch(err => {
          console.error('Face tracking initialization failed:', err);
          setPhase(AppPhase.ACTIVE);
          setAlignmentHint('⚠️ 已為您開通「靜態對位模式」，直接點擊下方藍色膠囊即可進入下一步！');
        });
      }

    } catch (err: any) {
      console.error('開啟變裝魔法失敗:', err);
      // 🔥 解決閃退問題：即使相機調用失敗或 CDN 腳本載入超時，也絕不退回到首頁 (IDLE)！
      // 而是正常停留在 ACTIVE 頁面，提供優雅的「精緻靜態校位對位模式」，並允許用戶直接點擊「我已代入角色，直接進入下一步」！
      setPhase(AppPhase.ACTIVE);
      setPermissionError(err.message || '相機調用或算法載入受限（若處於沙盒預覽中，請開新視窗授權）');
      setAlignmentHint('⚠️ 已為您開通「靜態對位模式」，直接點擊下方藍色膠囊即可進入下一步！');
    }
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
    if (phase === AppPhase.ACTIVE) {
      // 拍攝/對齊階段，上一級即為首頁
      resetMagic();
    } else if (phase === AppPhase.STAGE2 || phase === AppPhase.STAGE3) {
      // 影片播放/客製結果階段，返回上一級為再次開啟對齊/相機掃描
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
          className="absolute inset-0 z-30 transition-opacity duration-1000 ease-in-out"
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
          className="absolute inset-0 z-20 transition-opacity duration-1000 ease-in-out"
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
            真實相機影片設為透明 (opacity: 0)，僅在背景做人臉計算。
            畫面實時渲染一個風格相符的手繪風卡通貓替身，鏡像跟隨用戶移動。
            ========================================== */}
        <div 
          className="absolute z-15 transition-opacity duration-1000 ease-in-out overflow-hidden"
          style={{ 
            opacity: (phase === AppPhase.ACTIVE || phase === AppPhase.LOADING || phase === AppPhase.ALIGNED) ? 1 : 0,
            top: top,
            left: left,
            width: width,
            height: height,
            borderRadius: borderRadius,
            transform: 'translate(-50%, -50%)',
            backgroundColor: '#fbf9f4', // 溫潤柔和的卡片背景色底
            border: '2px solid rgba(223, 201, 155, 0.45)',
            boxShadow: 'inset 0 4px 12px rgba(97, 85, 60, 0.08)'
          }}
        >
          {/* 真實鏡頭 — 完全渲染但不透明度屬性，確保 iOS Safari 判定影片「正在視口內播放」以維持硬體解碼器持續輸出幀資料 */}
          <video
            ref={videoElementRef}
            playsInline
            autoPlay
            muted
            crossOrigin="anonymous"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          />

          {/* 不透明遮蓋層 — 將真實鏡頭完全遮擋，確保用戶無法看見真實面容；必須位於 <video> 之後、avatar 之前，利用 DOM 順序實現 z 軸分層 */}
          <div className="absolute inset-0 bg-[#fbf9f4] pointer-events-none" />

          {/* 鏡像 3D 高精度動態捕捉替身容器 — 分層架構：外層居中定位（無 calc），內層純 px 跟蹤偏移（無 calc），徹底避免手機端 calc() inside transform 的相容性 bug */}
          {/* Layer A: 純居中容器，僅負責將左上角移到正中心 */}
          <div 
            className="absolute top-1/2 left-1/2 pointer-events-none select-none flex items-center justify-center"
            style={{
              width: '100%',
              height: '100%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            {/* Layer B: 人臉追蹤偏移容器，僅使用純 px 值 translate，不包含 calc() */}
            <div
              style={{
                transform: avatarState.detected
                  ? `translate(${avatarState.x * 0.8}px, ${avatarState.y * 0.8}px) scale(${Math.max(0.65, Math.min(1.65, avatarState.scale))})`
                  : 'translate(0px, 0px) scale(1.0)',
                willChange: avatarState.detected ? 'transform' : 'auto',
                transition: 'transform 0.1s linear' // 縮短動畫時間，讓跟隨更平滑
              }}
              className="flex items-center justify-center"
            >
              {/* Layer C: 旋轉容器，僅負責 rotateZ 歪頭跟隨 */}
              <div 
                className={`flex flex-col items-center justify-center ${!avatarState.detected ? 'animate-pulse' : ''}`}
                style={{
                  transform: avatarState.detected
                    ? `rotateZ(${avatarState.roll}deg)`
                    : 'none',
                  willChange: avatarState.detected ? 'transform' : 'auto',
                  transition: 'transform 0.1s linear'
                }}
              >
                {/* 卡通替身 Y0 圖片 — 手機端追蹤時移除 filter 避免觸發昂貴重繪 */}
                <div style={{ filter: avatarState.detected ? 'none' : undefined }}>
                  <img
                    src={config.avatarUrl || './assets/Y/Y0.png'}
                    referrerPolicy="no-referrer"
                    className="w-[84px] h-[84px] object-contain"
                    style={{
                      filter: avatarState.detected
                        ? 'none'
                        : 'drop-shadow(0 4px 10px rgba(110, 95, 70, 0.35))'
                    }}
                    alt="3D 隱私保護替身"
                    onError={(e) => {
                      console.warn('Avatar image fail, fallback loading Y1');
                      e.currentTarget.src = config.initialUrl || './assets/Y/Y1.png';
                    }}
                  />
                  
                  {/* 狀態一：當完美對齊時，呈現在替身旁邊的閃爍小愛心/小閃星 */}
                  {isCurrentlyAligned && (
                    <div className="absolute -top-3 -right-3 animate-bounce">
                      <span className="text-xl">✨</span>
                    </div>
                  )}
                  {isCurrentlyAligned && (
                    <div className="absolute -bottom-2 -left-2 animate-bounce delay-150">
                      <span className="text-lg">💖</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ==========================================
            Layer 4：前景鏤空遮罩 / initial 最初呈現
            最初完全可見 (opacity 為 1)。當觸發判定成功後，隨相機在 1s 內漸隱。
            可支援影片或圖片格式。
            ========================================== */}
        <div 
          className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-1000 ease-in-out"
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
        <div className="absolute inset-0 z-40 flex flex-col justify-between p-6 pb-[calc(env(safe-area-inset-bottom)+20px)] pointer-events-none">
          
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

              {/* Bottom tag */}
              <div className="flex flex-col items-center gap-2 mb-6">
                <p className="text-[9px] text-[#2c2824]/40 font-mono tracking-widest uppercase">
                  REALTIME FACE TRANSFORMATION
                </p>
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

          {/* 技術校準虛線圓框 */}
          <div
            className={`absolute transition-all duration-1000 ease-in-out select-none pointer-events-none border-dashed
              ${(phase === AppPhase.IDLE || phase === AppPhase.LOADING || phase === AppPhase.ACTIVE || phase === AppPhase.ALIGNED)
                ? (isCurrentlyAligned ? 'animate-green-pulse' : 'animate-breath')
                : ''
              }
            `}
            id="alignment-box-rect"
            style={{
              opacity: (phase === AppPhase.IDLE || phase === AppPhase.LOADING || phase === AppPhase.ACTIVE || phase === AppPhase.ALIGNED) ? 1 : 0,
              top: top,
              left: left,
              width: width,
              height: height,
              borderRadius: borderRadius,
              transform: 'translate(-50%, -50%)',
              borderWidth: '2.5px',
              borderColor: isCurrentlyAligned ? 'rgba(34, 197, 94, 0.95)' : 'rgba(255, 255, 255, 0.9)',
              backgroundColor: 'transparent',
              boxShadow: isCurrentlyAligned ? '0 0 20px rgba(34, 197, 94, 0.4)' : 'none',
            }}
          >
            {/* 綠色進度弧圈 */}
            {isCurrentlyAligned && alignmentProgress > 0 && (
              <div 
                className="absolute -inset-1 border-2 border-emerald-400 transition-all opacity-85"
                style={{ 
                  clipPath: `inset(${100 - alignmentProgress}% 0px 0px 0px)`,
                  borderRadius: borderRadius,
                }}
              />
            )}

            {/* 優雅十字定位絲心 */}
            <div className="absolute inset-0 flex items-center justify-center opacity-30">
              <div className="w-4 h-[1px] bg-white" />
              <div className="h-4 w-[1px] bg-white absolute" />
            </div>

            {/* 若相機授權失敗或有錯誤，在圈圈內部提供極為優美的人臉虛擬輪廓與文字提示，完美保證視覺品質 */}
            {permissionError && (
              <div className="absolute inset-x-2 inset-y-6 flex flex-col items-center justify-center bg-[#fdfbf6]/20 backdrop-blur-[1px] rounded-full text-center animate-[fadeIn_0.5s_ease-out] select-none pointer-events-none">
                <svg className="w-12 h-12 text-amber-800/15 mb-2 animate-[pulse_3s_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25zm0 3.75h.008v.008H12v-.008zM9.75 8.25h.008v.008H9.75V8.25zm0 3.75h.008v.008H9.75v-.008zm4.5-3.75h.008v.008h-.008V8.25zm0 3.75h.008v.008h-.008v-.008z" />
                </svg>
                <p className="text-[10px] text-amber-900/60 font-sans font-semibold tracking-wider mb-0.5">
                  靜態置中對齊中
                </p>
                <span className="text-[8px] text-amber-800/40 font-mono tracking-widest scale-90">
                  ALIGNMENT READY
                </span >
              </div >
            )}
          </div >

          {/* 底部功能控制板區 */}
          <div className="w-full flex flex-col gap-3 pointer-events-auto mt-auto relative z-50 shrink-0">
            
            {/* 🎯 手動切換下一階段按鈕 - 滿足「我已代入角色，直接進入下一步」且無 ✨ 符號的要求，採用 iOS 高級藍色膠囊 - 調整得更小巧精細 */}
            {phase === AppPhase.ACTIVE && (
              <button
                onClick={triggerTransitionSecquence}
                className="w-[82%] mx-auto py-2.5 bg-[#007aff] hover:bg-[#0066d6] text-white font-sans text-xs font-semibold tracking-wider rounded-full shadow-[0_4px_12px_rgba(0,122,255,0.2)] transition-all duration-200 active:scale-[0.98] active:opacity-90 flex items-center justify-center cursor-pointer pointer-events-auto border border-white/5"
              >
                我已代入角色，直接進入下一步
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

            {/* 底部 iOS 系統安全留白 */}
            {(phase === AppPhase.ACTIVE || phase === AppPhase.STAGE2 || phase === AppPhase.STAGE3) && (
              <div className="w-full h-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pointer-events-none select-none" />
            )}

            {/* 連載加載狀態 */}
            {phase === AppPhase.LOADING && (
              <div className="w-full py-4 bg-white/5 border border-white/10 text-white/85 font-sans text-xs rounded-2xl backdrop-blur-md flex items-center justify-center gap-2.5 shadow-lg">
                <RefreshCw className="w-4 h-4 animate-spin text-orange-400" />
                連鏡頭並載入人臉定位算法中...
              </div>
            )}

            {/* 關閉按鈕已依要求刪除 */}

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
