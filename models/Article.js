var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
    title: {
        type: String, 
        required: true,
        unique: true
    },
    link: {
        type: String,
        required: true,
        unique: true
    },
    summary: {
        type: String,
        required: false
    },
    notes: {
        type:Schema.Types.ObjectId,
        ref: "Notes"
    }, 
    isSaved: {
        type: Boolean,
        default: false
    }

});

var Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;