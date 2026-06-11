/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum AppPhase {
  IDLE = 'idle',
  LOADING = 'loading',
  ACTIVE = 'active', // Finding alignment
  ALIGNED = 'aligned', // Successfully aligned, flashing effect
  STAGE2 = 'stage2', // Showing full result static image
  STAGE3 = 'stage3' // Final loop video playing
}

export interface AlignmentConfig {
  top: string;
  left: string;
  width: string;
  height: string;
  borderRadius: string;
  // 👥 每個朋友個別自訂上傳的照片、影片與祝賀詞 (可不填，不填使用預設值)
  initialUrl?: string;     // 最初呈現 initial 檔案路徑 (支援圖片或影片)
  resultUrl?: string;      // 變裝結果大圖/影片路徑 (result)
  finalUrl?: string;       // 最終對齊後的變裝/圖片路徑 (final)
  avatarUrl?: string;      // 用戶隱私遮罩卡通替身圖片 (e.g. ./assets/aistudio/Y/Y0.png)
  title?: string;          // 專屬頁面大標題 (如 '給 Alice 的驚喜禮物')
  subtitle?: string;       // 專屬頁面副標題
  buttonText?: string;     // 主導按鈕文字 (如 '查收 Alice 的禮物')
  successMessage?: string; // 變裝完成後顯示的客製祝賀卡片文字 (如 '親愛的 Alice，祝你生日快樂！🎂')
  postcardPhotoUrl?: string; // 明信片裡的專屬照片 (如 './assets/cardpic.png')
  postcardText?: string;     // 明信片裡的專屬祝福文字 (如 '給最特別的妳，祝天天開心！')
  guideTip?: string;         // 引導提示文案 (如 '「請將面部放入框線內，用於代入角色」')
}

export interface BoxDimensions {
  x: number;
  y: number;
  width: number;
  height: number;
  centerX: number;
  centerY: number;
}

export interface FacePositionData {
  x: number;
  y: number;
  width: number;
  height: number;
  centerX: number;
  centerY: number;
}
