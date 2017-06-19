// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");

// Models 
var Contact = require("./models/contactme.js");
mongoose.Promise = Promise;

var app = express();
var PORT = process.env.PORT || 9000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static("public"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Configure to mongoDB
// mongoose.connect("mongodb://localhost/portfolio");
// var db = mongoose.connection;

// Routes
var about = require('./controllers/about_controller');
var portfolio = require('./controllers/portfolio_controller');
var contact = require('./controllers/contact_controller');

app.use('/', about);
app.use('/portfolio', portfolio);
app.use('/contact', contact);


app.listen(PORT, function() {
   	console.log("Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
});

module.exports = app;
