const express = require('express');
const cors = require('cors');
const geoRoutes = require('./routes/geo');

const app = express();

// CORSの設定（全部許可・開発用）
app.use(cors());

// ルーティング（API用）
app.use('/api', geoRoutes);

// ポート設定と起動
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
