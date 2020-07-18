const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ProductDb');
const Schema = mongoose.Schema;

var NewUserSchema = new Schema({
    Name : String,
    Address : String,
    Phone : Number,
    Email : String,
    Username : String,
    Password : String,
});

var Userdata = mongoose.model('user', NewUserSchema);
module.exports = Userdata;