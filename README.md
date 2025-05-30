# japan-pref-city-api

都道府県名から市区町村を取得できる日本住所API  
A simple Japanese address API to get municipalities (cities, towns, villages) from prefecture names.

## Features

- 日本の都道府県一覧を取得可能
- 都道府県名から対応する市区町村一覧を取得
- JSONファイルベースで高速レスポンス
- シンプルなREST API構成

---

## 🚀 Getting Started

### 1. Clone this repository

```bash
git clone https://github.com/your-username/japan-pref-city-api.git
cd japan-pref-city-api
````

### 2. Install dependencies

```bash
npm install
```

### 3. Start the server

```bash
node app.js
# または開発用
npx nodemon app.js
```

サーバーは `http://localhost:3000` で起動します。

---

## 📡 API Endpoints

### 1. GET `/api/prefectures`

日本のすべての都道府県名を取得します。

**レスポンス例**：

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

### 2. GET `/api/municipalities?prefecture=北海道`

指定した都道府県に対応する市区町村一覧を取得します。

**パラメータ**：

* `prefecture`（必須）：都道府県名（例：`東京都`, `大阪府`, `北海道`）

**レスポンス例**：

```json
[
  "札幌市",
  "函館市",
  "小樽市",
  ...
]
```

**エラーレスポンス例（不正な都道府県名）**：

```json
{
  "error": "Invalid or missing prefecture name"
}
```

---

## Project Structure

```json
japan-pref-city-api/
├── app.js                 // メインサーバーファイル
├── routes/
│   └── geo.js             // APIルート定義
├── data/
│   └── pref-muni.json     // 都道府県と市区町村のマッピングデータ
└── README.md              // このファイル
```

---

## Notes

* `pref-muni.json` は独自の構造に基づいた静的データで、随時更新可能です。
* 利用するアプリケーションに組み込んだり、学習用途に活用できます。

---

## License

This project is licensed under the MIT License.