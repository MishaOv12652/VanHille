const express = require('express');
const router = express.Router();
const siteUser = require('../models/siteUser');
const passport = require('passport');
const jwt = require('jsonwebtoken')
const cofig = require('../config/db');


router.post('/register', (req, res, next) => {
    let newSiteUser = new siteUser({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });
    siteUser.addSiteUser(newSiteUser, (err, user) => {
        if (err) {
            res.json({ success: false, msg: err });
        } else {
            res.json({ success: true, msg: "משתמש נרשם" });
        }
    });
});

router.post('/auth', (req, res, next) => {
    const username = req.body.username;
    const password = req.body.password;
    siteUser.getSiteUserByUserName(username, (err, user) => {
        if (err)
            throw err;
        if (!user) {
            return res.json({ success: false, msg: "משתמש לא קיים" });
        } else {
            siteUser.comparePassword(password, user.password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    const token = jwt.sign({user:user}, cofig.secret, {
                        expiresIn: 60480 //1 week
                    });

                    res.json({
                        success: true,
                        token: 'JWT ' + token,
                        siteUser: {
                            id: user._id,
                            username: user.username,
                            email: user.email
                        }
                    });
                } else {
                    return res.json({ success: false, msg: "סיסמא לא נכונה אנא נסה שנית!" });
                }
            });
        }
    });
});


router.get('/profile',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    res.json({user:req.user});
})
module.exports = router;