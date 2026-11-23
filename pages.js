// =============================================
//  繪本 AR 設定檔：新增頁面只要改這個檔案
// =============================================
//
//  每一頁寫一行，格式：
//    { image: "targets/插畫檔名.jpg", video: "videos/影片檔名.mp4" },
//
//  注意：
//  - 順序很重要。如果之後用 compile.html 產生 targets.mind，
//    產生之後就不要再調換順序；有新增頁面時，要重新產生一次 targets.mind。
//  - 插畫建議寬度約 1000 像素的 JPG（Claude 會幫你處理好）。

window.PAGES = [
  { image: "targets/p01.jpg", video: "videos/p01.mp4" },
];

// 影片播完要不要重複播放：true = 循環，false = 停在最後一格
window.LOOP_VIDEO = true;
