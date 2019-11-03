var express = require("express");
var axios = require("axios");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
var db = require("./models");
var app = express();
var PORT = 8000;
var expressHandlebars = require("express-handlebars");
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", __dirname + '/views')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Mongo DB connection
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://user:password1@ds229088.mlab.com:29088/heroku_tp7zfp5m";

mongoose.connect(MONGODB_URI);