const mongoose = require('mongoose'); require

const UserSchema = new mongoose.Schema({
    email: String
});

module.exports = mongoose.model('User', UserSchema);