/**
 * Created by hanboramjang on 2018. 3. 4..
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var bookSchema = new Schema({
    title: String,
    author: String,
    published_date: { type: Date, default: Date.now  }
});

module.exports = mongoose.model('book', bookSchema);