# japan-pref-city-api

都道府県名から市区町村を取得できる、シンプルな日本住所APIです。

---

## 特長

- 日本全国の都道府県名を取得可能
- 指定した都道府県に対応する市区町村一覧を取得
- 静的なJSONファイルを使用した高速レスポンス
- シンプルなREST API構成で、学習用にも最適

---

## 必要環境

- Node.js v14以上（LTS推奨）
- npm v6以上

---

## セットアップ手順

### 1. リポジトリをクローン

```bash
git clone https://github.com/your-username/japan-pref-city-api.git
cd japan-pref-city-api
````

### 2. 依存パッケージをインストール

```bash
npm install
```

### 3. サーバーを起動

```bash
node app.js
# または開発モードで起動
npx nodemon app.js
```

サーバーは `http://localhost:3000` で起動します。

---

## APIエンドポイント一覧

### `/api/prefectures` （GET）

都道府県名の一覧を取得します。

**レスポンス例：**

```json
[
  "北海道",
  "青森県",
  "岩手県",
  "宮城県",
  ...
]
```

---

### `/api/municipalities?prefecture=北海道` （GET）

指定された都道府県に対応する市区町村一覧を取得します。

**クエリパラメータ：**

* `prefecture`（必須）：都道府県名（例：`東京都`, `大阪府`, `北海道`）

**レスポンス例：**

```json
[
  "札幌市",
  "函館市",
  "小樽市",
  ...
]
```

**エラーレスポンス例（都道府県名が不正または未指定）：**

```json
{
  "error": "Invalid or missing prefecture name"
}
```

---

## リクエスト例（curl）

```bash
# 都道府県一覧を取得
curl http://localhost:3000/api/prefectures

# 北海道の市区町村を取得
curl "http://localhost:3000/api/municipalities?prefecture=北海道"
```

---

## プロジェクト構成

```bash
japan-pref-city-api/
├── app.js                 # メインサーバーファイル
├── routes/
│   └── geo.js             # APIルートの定義
├── data/
│   └── pref-muni.json     # 都道府県と市区町村のマッピングデータ
└── README.md              # このドキュメント
```

---

## CORSについて（ブラウザ対応向け）

このAPIはローカル開発用途で構築されています。ブラウザから直接リクエストする場合は、`cors` パッケージを導入してください。

### 追加コード例：

```js
const cors = require('cors');
app.use(cors());
```

---

## データカスタマイズ

`data/pref-muni.json` の形式は以下のようになっています：

```json
{
  "北海道": ["札幌市", "函館市", "小樽市", ...],
  "東京都": ["千代田区", "新宿区", "八王子市", ...]
}
```

* キー：都道府県名
* 値：市区町村名の配列

このファイルを編集すれば任意のデータを追加・変更できます。

---

## 補足事項

* 外部APIを使用せず、JSONファイルのみで完結しているため、非常に軽量です。
* 学習用途や小規模アプリへの組み込みに最適です。
* 自治体コード（市区町村コード）や緯度経度などの追加データを組み込むことで、拡張利用も可能です。

---

## ライセンス

このプロジェクトは [MITライセンス](LICENSE) のもとで公開されています。