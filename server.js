var express = require("express");
var path = require("path");
var session = require('express-session');
var bodyParser = require('body-parser');
var app = express();
// const flash = require('express-flash');


app.use(session({
  secret: 'keyboardkitteh',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 60000 }
}))
app.use(bodyParser.json());
// app.use(flash());
// app.use(express.static(__dirname + "/static"));
// app.set('views', __dirname + '/views');
// app.set('view engine', 'ejs');

require('./backend/routes')(app);
app.listen(8000, function() {
  console.log("listening on port 8000");
})
