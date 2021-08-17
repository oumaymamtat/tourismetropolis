const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    nom: {type: String, require:true},
    type: {type: String, require:true},
    tel: {type: String, require:true},
    email: {type: String, require:true},
    passwordHash: {type: String, require:true},
    infos: {type: String, require:true},
    fabrication: {type: String},
    vente: {type: String},
    activite : {type: String},
    members: {type: Array},
    produits: {type: Array} 
})

const User = mongoose.model("user", userSchema);
module.exports = User;