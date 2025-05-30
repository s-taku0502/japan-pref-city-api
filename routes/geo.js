// routes/geo.js

// 必要なモジュールをインポート
const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router(); // Expressのルーターインスタンスを作成

// JSONファイルから都道府県・市区町村データを読み込み
// ファイルは "../data/pref-muni.json" に存在する必要がある
const data = JSON.parse(
  fs.readFileSync(path.join(__dirname, '../data/pref-muni.json'), 'utf8')
);

// 都道府県に対応する市区町村一覧を取得するエンドポイント
// 例: GET /api/municipalities?prefecture=北海道
router.get('/municipalities', (req, res) => {
  const { prefecture } = req.query; // クエリパラメータから都道府県名を取得

  // 都道府県が指定されていない、または存在しない場合は400エラー
  if (!prefecture || !data[prefecture]) {
    return res.status(400).json({ error: 'Invalid or missing prefecture name' });
  }

  // 指定された都道府県に対応する市区町村一覧を返す
  const municipalities = data[prefecture];
  res.json(municipalities);
});

// 都道府県の一覧を取得するエンドポイント
// 例: GET /api/prefectures
router.get('/prefectures', (req, res) => {
  const prefectures = Object.keys(data); // データ内の都道府県名一覧を取得
  res.json(prefectures); // JSONとして返す
});

// このルーターを外部ファイルから使えるようにエクスポート
module.exports = router;
