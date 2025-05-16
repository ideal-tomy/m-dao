const fs = require('fs');
const path = require('path');

// 画像ファイルのリスト
const imageFiles = [
  'm-dao-logo.svg',
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

// ディレクトリが存在しない場合は作成
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// SVGロゴの作成
const createSVGLogo = () => {
  const logoPath = path.join(imagesDir, 'm-dao-logo.svg');
  const svgContent = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="40" height="40" rx="8" fill="#2FB344"/>
    <path d="M8 10H12L16 20L20 10H24V30H20V18L16 28H15L11 18V30H8V10Z" fill="white"/>
    <path d="M26 10H32C35.3137 10 38 12.6863 38 16V24C38 27.3137 35.3137 30 32 30H26V10ZM30 14V26H32C32.5304 26 33.0391 25.7893 33.4142 25.4142C33.7893 25.0391 34 24.5304 34 24V16C34 15.4696 33.7893 14.9609 33.4142 14.5858C33.0391 14.2107 32.5304 14 32 14H30Z" fill="white"/>
  </svg>`;
  
  fs.writeFileSync(logoPath, svgContent);
  console.log(`Created: ${logoPath}`);
};

// 単色のプレースホルダー画像を作成する関数
const createPlaceholderHTML = (filename) => {
  if (filename.endsWith('.svg')) {
    if (filename === 'm-dao-logo.svg') {
      createSVGLogo();
    }
    return;
  }
  
  const filePath = path.join(imagesDir, filename);
  const fileExists = fs.existsSync(filePath);
  
  if (!fileExists) {
    // カテゴリに基づいて色を決定
    let color = '#2FB344'; // デフォルトは緑色
    let text = 'Placeholder';
    
    if (filename.includes('works')) {
      color = '#3B82F6'; // 実績は青色
      text = 'Works';
    } else if (filename.includes('blog')) {
      color = '#8B5CF6'; // ブログは紫色
      text = 'Blog';
    } else if (filename.includes('news')) {
      color = '#F59E0B'; // ニュースはオレンジ色
      text = 'News';
    } else if (filename.includes('service')) {
      color = '#10B981'; // サービスはエメラルド色
      text = 'Service';
    } else if (filename.includes('team')) {
      color = '#EC4899'; // チームはピンク色
      text = 'Team';
    } else if (filename.includes('capybara')) {
      color = '#D97706'; // カピバラは茶色
      text = 'Capybara';
    } else if (filename === 'hero-bg.jpg') {
      color = '#1E40AF'; // ヒーローは濃い青
      text = 'M-DAO';
    }
    
    // HTMLファイルを作成
    const htmlPath = filePath.replace('.jpg', '.html');
    const html = `<!DOCTYPE html>
<html>
<head>
  <style>
    body, html {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${color};
      color: white;
      font-family: Arial, sans-serif;
      font-size: 24px;
      font-weight: bold;
      overflow: hidden;
    }
    .container {
      text-align: center;
    }
    .filename {
      font-size: 16px;
      margin-top: 10px;
      opacity: 0.8;
    }
  </style>
</head>
<body>
  <div class="container">
    <div>${text}</div>
    <div class="filename">${filename}</div>
  </div>
</body>
</html>`;
    
    fs.writeFileSync(htmlPath, html);
    console.log(`Created HTML: ${htmlPath}`);
  }
};

// すべての画像ファイルに対してプレースホルダーを作成
imageFiles.forEach(file => {
  createPlaceholderHTML(file);
});

console.log('プレースホルダーHTMLファイルの作成が完了しました。');
console.log('ブラウザで各HTMLファイルを開き、スクリーンショットを撮って同じ名前のJPGファイルとして保存してください。');
