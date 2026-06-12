/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AlignmentConfig } from './types';

/**
 * ==========================================
 * 🔥 参数化配置区 (ALIGNMENT_CONFIG)
 * ==========================================
 * 您可以随意更换前景遮罩图片 (./assets/mask.png)。如果您的 mask.png 
 * 的人脸透明镂空位置、大小不同，请直接在此调整下方的百分比/像素值。
 * 
 * 网页的视觉辅助虚线框、MediaPipe 的判定区域、以及动态挖空遮罩，
 * 都会 100% 动态跟随此配置自动生成。
 */
export const ALIGNMENT_CONFIG: AlignmentConfig = {
  top: '35%',          // 对齐区域中心点距离顶部的百分比
  left: '30%',         // 将对齐区域设定在画面偏左侧
  width: '180px',      // 对齐区域的宽度 (可设 px 或 %)
  height: '180px',     // 对齐区域的高度 (可设 px 或 %)
  borderRadius: '50%', // 圆角对界：'50%' 代表圆形/椭圆洞口
  title: '專屬明信片', // 预设首页大标题
  subtitle: '專屬明信片', // 预设首页副标题
  buttonText: '查收呢份礼物', // 预设主导按钮文字
  successMessage: '感恩这份奇妙的相遇，献上我最温暖的祝福！', // 预设祝贺贺词
  initialUrl: '/assets/Y/Y1.jpg', // 最初呈现 initial
  resultUrl: '/assets/Y/Y2.jpg',   // 然后呈现 result (实际文件是 jpg)
  finalUrl: '/assets/Y/Y3.jpg',     // 然后呈现 final
  avatarUrl: '/assets/Y/Y0.png',    // 隐私保护替身头像图
  postcardPhotoUrl: '/assets/Y/Y4.jpg', // 最后生成的专属明信片核心照片 cardpic
  postcardText: `感恩这份奇妙的相遇，
献上我最温暖的祝福！
愿你的每一步都充满阳光。`, // 预设明信片字句
  guideTip: '「请将面部放入框线内，用于代入角色」', // 引导指示提示字
};

/**
 * ==========================================
 * 👥 朋友预设定档配置区 (FRIEND_PROFILES)
 * ==========================================
 * 您可以在这里为不同的朋友预先设定好个别的：
 * 1. 镂空洞口位置与大小 (top, left, width, height, borderRadius)
 * 2. 朋友专属的 initial.png/mp4、result.png、final.mp4/png 文件档名（放在 /assets 中）
 * 3. 朋友专属的欢迎标题、副标题、按钮文字、以及对齐后的祝贺贺词！
 * 
 * 💡 如何使用：
 * 假设朋友叫 Alice：
 * 1. 在此处新增 alice 设定档
 * 2. 您可于 /assets 文件夹，上传 `alice_initial.png`、`alice_result.png` 和 `alice_final.mp4`
 * 3. 分享连结给 Alice 时，网址后面加上 `?friend=alice`
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
    title: '给 Alice 的魔法惊喜',
    subtitle: '对齐你的脸庞 🌟 看看发生什么',
    buttonText: '查收这份礼物',
    successMessage: '亲爱的 Alice，祝你生日快乐！希望这份魔法变装礼物能带给你满满的欢笑！🎂🎉',
    postcardPhotoUrl: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?auto=format&fit=crop&q=80&w=800&h=1200', // Alice 的专属明信片照片 (请上传到 /assets/alice_postcard.png)
    postcardText: `致亲爱的 Alice：
愿这份星光魔法常伴你左右，
每天都顺心如意，
生活甜如蜜！🌸✨`,
  },
  bob: {
    top: '40%',
    left: '48%',
    width: '220px',
    height: '280px',
    borderRadius: '24px', // 圆角矩形镂空
    initialUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800',
    resultUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=1200',
    finalUrl: 'https://assets.mixkit.co/videos/preview/mixkit-retro-futuristic-tunnel-loop-42866-large.mp4',
    title: 'Bob 的魔法冒险队',
    subtitle: '启动认证 Face ID 进入异世界',
    buttonText: '启动变身密码',
    successMessage: 'Bob！恭喜完成今日冒险！这是属于你的荣誉变身成果！🎖️🔥',
    postcardPhotoUrl: 'https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?auto=format&fit=crop&q=80&w=800&h=1200', // Bob 的专属明信片照片 (请上传到 /assets/bob_postcard.png)
    postcardText: `冒险家 Bob：
祝你在全新的一年里，
劈波斩浪，勇往直前！
这张魔法明信片记下你帅气的瞬间！🦸‍♂️🔥`,
  },
  y: {
    top: '35%',
    left: '30%',
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    initialUrl: '/assets/Y/Y1.jpg',
    resultUrl: '/assets/Y/Y2.jpg',
    finalUrl: '/assets/Y/Y3.jpg',
    postcardPhotoUrl: '/assets/Y/Y4.jpg',
    avatarUrl: '/assets/Y/Y0.png',
    title: '阿浚~ 為你打打氣！',
    guideTip: '「想象下，吉伊心中諗緊乜嘢呢~」',
    postcardText: `阿浚，
感恩你恒常傳遞嘅溫暖同關愛，你設身處地為我著想，我亦同樣為你守望。正如你所分享嘅片，小八同吉伊講，
"一起去喔~"
面對近日嘅堂慶、邨中尋、探望基層等事奉，同埋你嘅返工、長途攞中藥之付出，
想借著呢份心意，浚仔為阿浚打打氣！
祈求主保守你內心享有平安，
願主賜福與你！

"要彼此同心" 
羅馬書 12:16
Jun 12, 2026`,
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
    title: '雪儿~ 為你打打氣！',
    guideTip: '「想象下，呢個畫面襯邊位呢~」',
    postcardText: `雪兒，
感恩每次相遇！
平日好好照顧自己，
用喜樂之心，愛生活、愛兔仔，
願主的恩典，
隨住你對生命嘅熱愛，
時刻陪伴住你！
守護你平安、健康、喜樂~ 

"喜樂的心乃是良藥" 
箴言 17:22
Jun 12, 2026`,
  },
  // 您可以在这里继续新增其他朋友（栏位选填，没填的会自动套用大预设）：
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
    title: 'Jack 的专属变装',
    successMessage: '嗨 Jack，这是为你量身打造的特别魔法！',
  }
  */
};

/**
 * 动态解析目前网页连结的对齐设定。
 * 支援两种动态调整方式：
 * 1. 精确 URL 参数：?top=30%&left=50%&width=200px&height=200px&radius=50%
 * 2. 朋友专属预设：?friend=alice 或 ?u=bob
 */
export function getDynamicAlignmentConfig(): AlignmentConfig {
  if (typeof window === 'undefined') return ALIGNMENT_CONFIG;

  const params = new URLSearchParams(window.location.search);
  
  // 优先级 1: 检查是否有朋友个别预设
  const friendName = params.get('friend') || params.get('u');
  let baseConfig = { ...ALIGNMENT_CONFIG };

  if (friendName && FRIEND_PROFILES[friendName.toLowerCase()]) {
    baseConfig = {
      ...baseConfig,
      ...FRIEND_PROFILES[friendName.toLowerCase()],
    };
  }

  // 优先级 2: 检查是否有直接传入个别参数覆盖 (更具弹性)
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
 * 侦错模式开关 (DEBUG_MODE)
 * - 当为 true 时：对齐框变为亮红色，并允许您直接用鼠标/手指「拖拽、拉伸」来微调位置。
 * - 萤幕底部会浮现一个「即时配置产生器」面板，您可以复制最新的配置直接贴回上方，大简化微调流程！
 */
export const DEBUG_MODE_DEFAULT = true;