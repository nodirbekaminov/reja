console.log('Web serverni boshlash!');
const express = require('express');
const app = express();

// MongoDB chaqirib olish
const db = require('./server').db();

const fs = require('fs');

let user;
fs.readFile('database/user.json', 'utf8', (err, data) => {
  if (err) {
    console.log('Error:', err);
  } else {
    user = JSON.parse(data);
  }
});
// 1: Kirish Code
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session Code

// 3: Views Code
app.set('views', 'views');
app.set('view engine', 'ejs');

// 4: Routing Code
app.post('/create-item', (req, res) => {
  console.log(req);
  res.json({ test: 'success' });
});

app.get('/', function (req, res) {
  res.render('reja');
});

app.get('/author', (req, res) => {
  res.render('author', { user: user });
});

module.exports = app;
