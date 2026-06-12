/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AlignmentConfig } from './types';

/**
 * ==========================================
 * 🔥 參數化配置區 (ALIGNMENT_CONFIG)
 * ==========================================
 * 您可以隨意更換前景遮罩圖片 (./assets/mask.png)。如果您的 mask.png 
 * 的人臉透明鏤空位置、大小不同，請直接在此調整下方的百分比/像素值。
 * 
 * 網頁的視覺輔助虛線框、MediaPipe 的判定區域、以及動態挖空遮罩，
 * 都會 100% 動態跟隨此配置自動生成。
 */
export const ALIGNMENT_CONFIG: AlignmentConfig = {
  top: '35%',          // 對齊區域中心點距離頂部的百分比
  left: '30%',         // 將識別區域設定在畫面偏左側
  width: '180px',      // 對齊區域的寬度 (可設 px 或 %)
  height: '180px',     // 對齊區域的高度 (可設 px 或 %)
  borderRadius: '50%', // 圓角對界：'50%' 代表圓形/橢圓洞口
  title: '專屬明信片', // 預設首頁大標題
  subtitle: '為你打打氣', // 預設首頁副標題
  buttonText: '查收這份禮物', // 預設主導按鈕文字
  successMessage: '感恩這份奇妙的相遇，獻上我最溫暖的祝福！', // 預設祝賀賀詞
  initialUrl: '/assets/Y/Y1.jpg', // 最初呈現 initial
  resultUrl: '/assets/Y/Y2.png',   // 然後呈現 result
  finalUrl: '/assets/Y/Y3.jpg',     // 然後呈現 final
  avatarUrl: '/assets/Y/Y0.png',    // 隱私保護替身頭像圖
  postcardPhotoUrl: '/assets/Y/Y4.jpg', // 最後生成的專屬明信片核心照片 cardpic
  postcardText: '感恩這份奇妙的相遇，獻上我最溫暖的祝福！願你的每一步都充滿陽光。', // 預設明信片字句
  guideTip: '「請將面部放入框線內，用於代入角色」', // 引導指示提示字
};

/**
 * ==========================================
 * 👥 朋友預設定檔配置區 (FRIEND_PROFILES)
 * ==========================================
 * 您可以在這裡為不同的朋友預先設定好個別的：
 * 1. 鏤空洞口位置與大小 (top, left, width, height, borderRadius)
 * 2. 朋友專屬的 initial.png/mp4、result.png、final.mp4/png 檔案檔名（放在 /assets 中）
 * 3. 朋友專屬的歡迎標題、副標題、按鈕文字、以及對齊後的祝賀賀詞！
 * 
 * 💡 如何使用：
 * 假設朋友叫 Alice：
 * 1. 在此處新增 alice 設定檔
 * 2. 您可於 /assets 資料夾，上傳 `alice_initial.png`、`alice_result.png` 和 `alice_final.mp4`
 * 3. 分享連結給 Alice 時，網址後面加上 `?friend=alice`
 */
export const FRIEND_PROFILES: Record<string, Partial<AlignmentConfig>> = {
  alice: {
    top: '30%',
    left: '50%',
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    initialUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    resultUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=800&h=1200',
    finalUrl: 'https://assets.mixkit.co/videos/preview/mixkit-slow-motion-of-falling-glitter-41595-large.mp4',
    title: '給 Alice 的魔法驚喜',
    subtitle: '對齊你的臉庞 🌟 看看發生什麼',
    buttonText: '查收這份禮物',
    successMessage: '親愛的 Alice，祝你生日快樂！希望這份魔法變裝禮物能帶給你滿滿的歡笑！🎂🎉',
    postcardPhotoUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800&h=1200', // Alice 的專屬明信片照片 (請上傳到 /assets/alice_postcard.png)
    postcardText: '致親愛的 Alice：願這份星光魔法常伴你左右，每天都順心如意，生活甜如蜜！🌸✨',
  },
  bob: {
    top: '40%',
    left: '48%',
    width: '220px',
    height: '280px',
    borderRadius: '24px', // 圓角矩形鏤空
    initialUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    resultUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=1200',
    finalUrl: 'https://assets.mixkit.co/videos/preview/mixkit-retro-futuristic-tunnel-loop-42866-large.mp4',
    title: 'Bob 的魔法冒險隊',
    subtitle: '啟動認證 Face ID 進入異世界',
    buttonText: '啟動變身密碼',
    successMessage: 'Bob！恭喜完成今日冒險！這是屬於你的榮譽變身成果！🎖️🔥',
    postcardPhotoUrl: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=800&h=1200', // Bob 的專屬明信片照片 (請上傳到 /assets/bob_postcard.png)
    postcardText: '冒險家 Bob：祝你在全新的一年裡，劈波斬浪，勇往直前！這張魔法明信片記下你帥氣的瞬間！🦸‍♂️🔥',
  },
  y: {
    top: '35%',
    left: '30%',
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    initialUrl: '/assets/Y/Y1.jpg',
    resultUrl: '/assets/Y/Y2.png',
    finalUrl: '/assets/Y/Y3.jpg',
    postcardPhotoUrl: '/assets/Y/Y4.jpg',
    avatarUrl: '/assets/Y/Y0.png',
    title: '阿浚~ 為你打打氣！',
    successMessage: '您的專屬變身魔法已成功啟動！',
    guideTip: '「請將面部放入框線內，用於代入角色」',
  },
  l: {
    top: '35%',
    left: '30%',
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    initialUrl: '/assets/L/L1.png',
    resultUrl: '/assets/L/L2.png',
    finalUrl: '/assets/L/L3.mp4',
    postcardPhotoUrl: '/assets/L/L4.png',
    avatarUrl: '/assets/L/L0.png',
    title: '雪兒~ 為你打打氣！',
    successMessage: '您的專屬變身魔法已成功啟動！',
    guideTip: '「請將面部放入框線內，用於代入角色」',
  },
  // 您可以在這裡繼續新增其他朋友（欄位選填，沒填的會自動套用大預設）：
  /*
  jack: {
    top: '35%',
    left: '50%',
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    initialUrl: './assets/jack_initial.png',
    resultUrl: './assets/jack_result.png',
    finalUrl: './assets/jack_final.mp4',
    title: 'Jack 的專屬變裝',
    successMessage: '嗨 Jack，這是為你量身打造的特別魔法！',
  }
  */
};

/**
 * 動態解析目前網頁連結的對齊設定。
 * 支援兩種動態調整方式：
 * 1. 精確 URL 參數：?top=30%&left=50%&width=200px&height=200px&radius=50%
 * 2. 朋友專屬預設：?friend=alice 或 ?u=bob
 */
export function getDynamicAlignmentConfig(): AlignmentConfig {
  if (typeof window === 'undefined') return ALIGNMENT_CONFIG;

  const params = new URLSearchParams(window.location.search);
  
  // 優先級 1: 檢查是否有朋友個別預設
  const friendName = params.get('friend') || params.get('u');
  let baseConfig = { ...ALIGNMENT_CONFIG };

  if (friendName && FRIEND_PROFILES[friendName.toLowerCase()]) {
    baseConfig = {
      ...baseConfig,
      ...FRIEND_PROFILES[friendName.toLowerCase()],
    };
  }

  // 優先級 2: 檢查是否有直接傳入個別參數覆蓋 (更具彈性)
  const topParam = params.get('top');
  const leftParam = params.get('left');
  const widthParam = params.get('width');
  const heightParam = params.get('height');
  const radiusParam = params.get('radius') || params.get('borderRadius');

  if (topParam) baseConfig.top = topParam.includes('%') || topParam.includes('px') ? topParam : `${topParam}%`;
  if (leftParam) baseConfig.left = leftParam.includes('%') || leftParam.includes('px') ? leftParam : `${leftParam}%`;
  if (widthParam) baseConfig.width = widthParam.includes('%') || widthParam.includes('px') ? widthParam : `${widthParam}px`;
  if (heightParam) baseConfig.height = heightParam.includes('%') || heightParam.includes('px') ? heightParam : `${heightParam}px`;
  if (radiusParam) baseConfig.borderRadius = radiusParam.includes('%') || radiusParam.includes('px') ? radiusParam : `${radiusParam}`;

  return baseConfig;
}

/**
 * 偵錯模式開關 (DEBUG_MODE)
 * - 當為 true 時：對齊框變為亮紅色，並允許您直接用鼠標/手指「拖拽、拉伸」來微調位置。
 * - 螢幕底部會浮現一個「實時配置產生器」面板，您可以複製最新的配置直接貼回上方，大簡化微調流程！
 */
export const DEBUG_MODE_DEFAULT = true;
