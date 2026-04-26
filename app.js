const express = require('express');
const cors = require('cors');
const path = require('path');
const geoRoutes = require('./routes/geo');

const app = express();

// CORSの設定（全部許可・開発用）
app.use(cors());

// 静的ファイルの提供
app.use(express.static(path.join(__dirname, 'public')));

// ルーティング（API用）
app.use('/api', geoRoutes);

// ルートパスでインデックスページを表示
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// ポート設定と起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
