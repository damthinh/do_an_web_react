var express = require('express'),
  app = express(),
  port = process.env.PORT || 3001,
  mongoose = require('mongoose'),
  bodyParser = require('body-parser');
  cors = require('cors')
  
const multer = require('multer');
const path = require('path');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/DB_do_an',
{useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => {
  console.log("Connected !!!")
}).catch(err => {
  console.log(err);
});

app.use(cors({}))
app.use(bodyParser.json());
// 
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, 'img'))
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null,  uniqueSuffix + '-' + file.originalname)
  }
})
const upload = multer({ storage: storage }).any()
app.use(upload)
app.use(express.static('img'))
// 
var routes = require('./api/route');
routes(app);

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('Server started on: ' + port);
