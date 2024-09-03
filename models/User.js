const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const userSchema = mongoose.Schema({
    email: { type: String, reduired: true, unique: true },
    password: { type: String, reduired: true }
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);