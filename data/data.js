var mongoose = require("mongoose");

mongoose.connect('mongodb://localhost:27017/kameng');

var userSchema = new mongoose.Schema({
    username: String,
    password: String
});

var user = mongoose.model('User', userSchema, 'user')
module.exports = user;