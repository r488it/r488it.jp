const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;

const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.ico': 'image/x-icon',
};

const server = http.createServer((req, res) => {
  console.log(`Request for ${req.url}`);
  
  // リクエストURLからパスを取得（デフォルトはindex.html）
  let filePath = path.join(__dirname, req.url === '/' ? 'index.html' : req.url);
  
  // ファイル拡張子を取得
  const extname = String(path.extname(filePath)).toLowerCase();
  
  // MIMEタイプを取得（デフォルトはtext/plain）
  const contentType = MIME_TYPES[extname] || 'text/plain';
  
  // ファイルの存在確認と読み込み
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code === 'ENOENT') {
        // ファイルが見つからない場合は404
        res.writeHead(404);
        res.end('404 File Not Found');
      } else {
        // サーバーエラーの場合は500
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // 成功した場合はコンテンツを返す
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content, 'utf-8');
    }
  });
});

// サーバーを起動
server.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running at http://0.0.0.0:${PORT}/`);
});