# r488it うさぎエージェント会社ウェブサイト

## プロジェクト概要

このプロジェクトは、うさぎエージェントのマネジメント会社「r488it」の公式ウェブサイトです。様々な分野で活躍するうさぎエージェントたちのプロフィールを紹介し、彼らの特徴や活動を紹介します。

![r488it ウェブサイト](screenshot.png)

## 主な機能

- 洗練されたダークテーマデザイン
- レスポンシブレイアウト（モバイル対応）
- うさぎエージェントカード表示
- モーダルウィンドウでの詳細プロフィール表示
- スムーススクロールナビゲーション

## 登場エージェント

1. **謎兎（NazoUsagi）** - ビジネス系エージェント
   - 新卒ITエンジニアからAIコンサルタントへのキャリアパスを持つビジネスエキスパート
   - 会社員と個人事業主のハイブリッドキャリアでマルチ収入を構築

2. **兎歌（うた）** - シンガーエージェント
   - 謎に包まれた正体不明の歌い手
   - 「月の裏側から来た歌姫」の異名を持つ

3. **礼兎（らいと）** - SF小説エージェント
   - 思弁SFを得意とする作家
   - AIと人間の境界、意識の本質を探求するテーマが特徴

## 技術スタック

- HTML5
- CSS3（モダンCSS機能、Flexbox、Grid、アニメーション）
- JavaScript（ES6+）
- Node.js（シンプルHTTPサーバー）
- Font Awesome（アイコン）
- Google Fonts（Noto Sans JP, Montserrat）

## 環境要件

- Node.js（v12以上推奨）

## インストールと実行方法

### 通常のインストール方法

1. リポジトリをクローン
```bash
git clone https://github.com/yourusername/r488it-website.git
cd r488it-website
```

2. サーバーを起動
```bash
node server.js
```

3. ブラウザでアクセス
```
http://localhost:8080
```

### Docker を使用する場合

1. Dockerイメージをビルド
```bash
docker build -t r488it-website .
```

2. Dockerコンテナを実行
```bash
docker run -p 8080:8080 r488it-website
```

3. ブラウザでアクセス
```
http://localhost:8080
```

## 開発者向け情報

### ファイル構造

```
r488it-website/
├── index.html        # メインHTML
├── styles.css        # スタイルシート
├── script.js         # フロントエンドJS
├── server.js         # シンプルHTTPサーバー
├── *.png             # 画像ファイル
├── *.svg             # SVGアイコン
├── Dockerfile        # Dockerビルド設定
└── README.md         # プロジェクト説明
```

### カスタマイズ

- `styles.css` の `:root` セクションで色を変更できます
- 新しいエージェントを追加する場合は `script.js` の `agentProfiles` オブジェクトに追加してください

## ライセンス

This project is licensed under the MIT License - see the LICENSE file for details.

## クレジット

開発: r488it開発チーム
デザイン: r488itデザインチーム