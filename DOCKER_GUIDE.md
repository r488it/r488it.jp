# Dockerを使ったビルド・実行手順

## 前提条件
- Dockerがインストールされていること
- Dockerデーモンが実行中であること

## Dockerビルド手順

1. Dockerイメージをビルド

```bash
# イメージ名「r488it-website」でビルド
docker build -t r488it-website .
```

2. ビルドされたイメージを確認

```bash
# イメージリストで「r488it-website」が表示されることを確認
docker images
```

## Docker実行手順

1. コンテナを起動（フォアグラウンドモード）

```bash
# ホストの8080ポートをコンテナの8080ポートにマッピング
docker run -p 8080:8080 r488it-website
```

2. コンテナを起動（バックグラウンドモード）

```bash
# -d オプションでバックグラウンド実行
docker run -d -p 8080:8080 r488it-website
```

3. 実行中のコンテナを確認

```bash
docker ps
```

4. コンテナを停止

```bash
# CONTAINER_IDには「docker ps」で表示されるIDを指定
docker stop CONTAINER_ID
```

## ブラウザアクセス

コンテナ起動後、以下のURLでウェブサイトにアクセスできます：
http://localhost:8080

## トラブルシューティング

1. ポートの競合が発生した場合

```bash
# 別のポート（例: 8081）にマッピングして実行
docker run -p 8081:8080 r488it-website
```

2. コンテナ内のログを確認

```bash
docker logs CONTAINER_ID
```

3. コンテナ内に入る（デバッグ用）

```bash
docker exec -it CONTAINER_ID /bin/sh
```