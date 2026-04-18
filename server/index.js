const express = require('express');
const path = require('path');

const app = express();

const publicPath = path.join(__dirname, '..', 'client');

app.use(express.static(publicPath, { index: 'robotics.html' }));

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname, '..', 'client', 'error.html'));
});

app.get('/about_us', function(req, res){
    res.sendFile(path.join(__dirname, '..', 'client', 'about_us.html'));
});

app.get('/datacenter', function(req, res){
  res.sendFile(path.join(__dirname, '..', 'client', 'datacenter.html'));
});

module.exports = app;