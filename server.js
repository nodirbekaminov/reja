console.log('Web servermi boshlash');
const express = require('express');
const app = express();
const http = require('http');

// 1: Kirish Code
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 2: Session Code

// 3: Views Code
app.set('views', 'views');
app.set('view engine', 'ejs');

// 4: Routing Code
app.get('/hello', function (req, res) {
  res.end(`<h1">Hello World by NickBro!</h1>`);
});

app.get('/gift', function (req, res) {
  res.end(`<h1">Siz sovg'alar bulimidasiz!</h1>`);
});

const server = http.createServer(app);
let PORT = 3000;
server.listen(PORT, function () {
  console.log(`The port is running successfully on port: ${PORT}`);
});
