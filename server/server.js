const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const {getQuote} = require('./quote');

const port = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/quote', (req, res) => {
  res.send(getQuote());
});

app.use(express.static(path.join(__dirname, 'views')));
app.use("*",function(req,res){
  res.sendFile(path.join(__dirname, 'views', '404.html'));
});

app.listen(port,function(){
  console.log("Live at Port 8080");
});