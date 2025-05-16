const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

// 画像ファイルのリスト
const imageFiles = [
  'hero-bg.jpg',
  'vr-space-service.jpg',
  'event-service.jpg',
  'avatar-service.jpg',
  'works-1.jpg',
  'works-2.jpg',
  'works-3.jpg',
  'works-4.jpg',
  'works-5.jpg',
  'works-6.jpg',
  'blog-1.jpg',
  'blog-2.jpg',
  'blog-3.jpg',
  'blog-4.jpg',
  'blog-5.jpg',
  'blog-6.jpg',
  'news-1.jpg',
  'news-2.jpg',
  'news-3.jpg',
  'news-4.jpg',
  'news-5.jpg',
  'news-6.jpg',
  'capybara-onsen.jpg',
  'team-member-1.jpg',
  'team-member-2.jpg',
  'team-member-3.jpg',
];

// 画像ディレクトリのパス
const imagesDir = path.join(__dirname, '..', 'public', 'images');

// カンバスの作成
function createImageCanvas(width, height, color, text, filename) {
  const canvas = createCanvas(width, height);
  const ctx = canvas.getContext('2d');

  // 背景を描画
  ctx.fillStyle = color;
  ctx.fillRect(0, 0, width, height);

  // 中央に文字を描画
  ctx.fillStyle = 'white';
  ctx.font = 'bold 32px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(text, width / 2, height / 2 - 15);

  // ファイル名も小さく表示
  ctx.font = '16px Arial';
  ctx.fillText(filename, width / 2, height / 2 + 25);

  return canvas;
}

// 画像ファイルを生成
async function generateImages() {
  // ディレクトリが存在しない場合は作成
  if (!fs.existsSync(imagesDir)) {
    fs.mkdirSync(imagesDir, { recursive: true });
  }

  // SVGロゴを作成
  const logoPath = path.join(imagesDir, 'm-dao-logo.svg');
  const svgContent = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#2FB344"/>
    <path d="M8 10H12L16 20L20 10H24V30H20V18L16 28H15L11 18V30H8V10Z" fill="white"/>
    <path d="M26 10H32C35.3137 10 38 12.6863 38 16V24C38 27.3137 35.3137 30 32 30H26V10ZM30 14V26H32C32.5304 26 33.0391 25.7893 33.4142 25.4142C33.7893 25.0391 34 24.5304 34 24V16C34 15.4696 33.7893 14.9609 33.4142 14.5858C33.0391 14.2107 32.5304 14 32 14H30Z" fill="white"/>
  </svg>`;
  
  fs.writeFileSync(logoPath, svgContent);
  console.log(`Created: ${logoPath}`);

  // 各画像ファイルの生成
  for (const filename of imageFiles) {
    const filePath = path.join(imagesDir, filename);
    
    if (!fs.existsSync(filePath)) {
      // カテゴリに基づいて色を決定
      let color = '#2FB344'; // デフォルトは緑色
      let text = 'Placeholder';
      let width = 800;
      let height = 600;
      
      if (filename.includes('works')) {
        color = '#3B82F6'; // 実績は青色
        text = 'Works Image';
      } else if (filename.includes('blog')) {
        color = '#8B5CF6'; // ブログは紫色
        text = 'Blog Image';
      } else if (filename.includes('news')) {
        color = '#F59E0B'; // ニュースはオレンジ色
        text = 'News Image';
      } else if (filename.includes('service')) {
        color = '#10B981'; // サービスはエメラルド色
        text = 'Service Image';
        height = 450; // サービス画像は少し小さめ
      } else if (filename.includes('team')) {
        color = '#EC4899'; // チームはピンク色
        text = 'Team Member';
        width = 400;
        height = 400;
      } else if (filename.includes('capybara')) {
        color = '#D97706'; // カピバラは茶色
        text = 'Capybara Onsen';
      } else if (filename === 'hero-bg.jpg') {
        color = '#1E40AF'; // ヒーローは濃い青
        text = 'M-DAO Hero';
        width = 1200;
        height = 600;
      }
      
      // 画像を作成して保存
      const canvas = createImageCanvas(width, height, color, text, filename);
      const buffer = canvas.toBuffer('image/jpeg');
      fs.writeFileSync(filePath, buffer);
      console.log(`Created image: ${filePath}`);
    }
  }
}

// 実行
generateImages().then(() => {
  console.log('All placeholder images have been generated!');
}).catch(err => {
  console.error('Error generating images:', err);
});
