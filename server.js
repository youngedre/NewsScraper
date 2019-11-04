var express = require("express");
var axios = require("axios");
var cheerio = require("cheerio");
var mongoose = require("mongoose");
var db = require("./models");
var app = express();
var PORT = 3003;
var expressHandlebars = require("express-handlebars");
app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.set("views", __dirname + '/views')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

// Mongo DB connection
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://youngedre:abc123@ds141178.mlab.com:41178/heroku_b8794x71"

mongoose.connect(MONGODB_URI);

app.get("/scrape", (req, res) => {
    var results = {};
    axios.get("https://www.nytimes.com/").then((response) => {
        
        var $ = cheerio.load(response.data);
        
        $("article").each((i, element) => {
            results.link = "https://www.nytimes.com" + $(element).find("a").attr("href");
            results.title = $(element).find("h2").text() || $(element).find("h2").children().text();
            results.summary = $(element).find("li").text() || $(element).find("p").text();
            db.Article.create(results)
            .then((dbArticles) => {
                console.log(dbArticles);
                
            })
            .catch((err) => {
                console.log(err);
            });
        });
        console.log(results.summary)

        console.log(dbArticles);
    });
     db.Article.find({})
    .then((data) => {
        
        res.render("index", {article: data});
        console.log(data)
    })
});

app.get("/", (req, res) => {
    db.Article.find({})
    .then((data) => {
        
        res.render("index", {article: data});
        console.log(data)
    })
    

});


app.get("/all", (req, res) => {
    db.Article.find({})
    .then((data)=>{
        res.render("index", {article: data})
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })
});

app.get("/saved", (req, res) => {
    db.Article.find({isSaved})
    .then((data)=>{
        res.render("index", {article: data})
        console.log(data)
    })
    .catch((err)=>{
        console.log(err)
    })
});

app.get("/clear", (req, res) => {
    db.Article.collection.drop()
    .then(()=>{
        res.render("index")
    })
})

app.listen(PORT, function() {
    console.log("App running on port "+ PORT + "!");
});