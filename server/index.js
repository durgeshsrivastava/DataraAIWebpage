const express = require('express');
const path = require('path');
const serveIndex = require('serve-index');

const app = express();

const publicPath = path.join(__dirname, '..', 'client');

app.use(express.static(publicPath, { index: 'homepage.html' }));
app.use('/', serveIndex(publicPath, { icons: true, view: 'details' }));

app.listen(3000, () => console.log('Server running at http://localhost:3000'));
module.exports = app;