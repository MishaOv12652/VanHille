const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const siteUser = require('../models/siteUser')
const config = require('./db');
var passport = require('passport');

module.exports = function(pass){
    let opts = {};
    opts.jwtFromRequest = ExtractJWT.fromAuthHeader();
    opts.secretOrKey = config.secret;
    passport.use(new JwtStrategy(opts,(payload,done)=>{
        console.log(payload)
        siteUser.getSiteUserById(payload.user._id,function(err,user){
            if(err){
                return done(err,false);
            }
            if(user){
                return done(null,user);
            }else{
                return done(null,false);
            }
        });
    }));
}



// module.exports = function(passport){
//     let opts={};
//     opts.jwtFromRequest = ExtractJWT.fromAuthHeader();
//     opts.secretOrKey = config.secret;
//     passport.use(new JwtStrategy(opts,(payload,done)=>{
//         console.log(payload)
//         siteUser.getUserById(payload.sub,function(err,user){
//             if(err){
//                 return done(err,false);
//             }
//             if(user){
//                 return done(null,user);
//             }else{
//                 return done(null,false);
//             }
//         });
//     }));  
// }