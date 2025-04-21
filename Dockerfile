# Dockerfile for r488it うさぎエージェント会社ウェブサイト

# Node.jsの軽量バージョンをベースイメージとして使用
FROM node:20-alpine

# アプリのディレクトリを作成
WORKDIR /app

# パッケージ関連ファイルをコピー
COPY package*.json ./

# 依存関係のインストール（パッケージファイルがある場合）
RUN npm install || echo "No package.json found, skipping npm install"

# アプリケーションのソースコードをコピー
COPY . .

# ポート8080を公開（サーバーで使用しているポート）
EXPOSE 8080

# サーバー起動コマンド
CMD ["node", "server.js"]