const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const config = require('../config/db');

//site User Schema
SiteUserSchema = mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{collection:'SiteUser'});

const siteUser = module.exports = mongoose.model('siteUser',SiteUserSchema);

module.exports.getSiteUserById = function (id,callback){
    siteUser.findById(id,callback);
}

module.exports.getSiteUserByUserName = function (username,callback){
    const query = {username:username}
    siteUser.findOne(query,callback);
}

module.exports.addSiteUser = function(newSiteUser,callback){
    bcrypt.genSalt(10,function(err,salt){
        bcrypt.hash(newSiteUser.password,salt,(err,hash)=>{
            if(err){
                throw err;
            }else{
                newSiteUser.password = hash;
                newSiteUser.save(callback);
            }
        });
    });
}

module.exports.comparePassword = function(canPass,hash,callback){
    bcrypt.compare(canPass,hash,(err,isMatch)=>{
        if(err) throw err;
        callback(null,isMatch);
    });
}
