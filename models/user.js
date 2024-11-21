const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const User = require("../models/user.js")
const passportLocalMongoose = require("passport-local-mongoose");

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    }
});

userSchema.plugin(passportLocalMongoose);
// P-L-M by default makes for us Username , Password, Hashing, Salting, Hash-Password and some methods for us

module.exports = mongoose.model('User',userSchema);
