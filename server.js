const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

//Enable CORS
const allowCrossDomain = (req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
}
app.use(allowCrossDomain);

app.use(express.static(__dirname + '/public'));

//Load Homepage
app.get('/', (req, res) => {
  res.send('index.html');
});

app.listen(port, () => {
  console.log(`Server is up on ${port}`);
});