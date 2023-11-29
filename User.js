const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    nom: String,
    prenom: String,
    email: String,
    motDePasse: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;