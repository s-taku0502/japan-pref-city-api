const express = require('express');
const app = express();
const geoRouter = require('../routes/geo');

// API Routesをマウント
app.use('/api', geoRouter);

// Vercel用のエクスポート（重要）
module.exports = app;
