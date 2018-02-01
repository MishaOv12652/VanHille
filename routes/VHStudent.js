//vanhilequiz user

var express = require('express');
const moment = require('moment');
var router = express.Router();
const User = require('../models/VHStudent');


//register a user
router.post('/register',(req,res,next)=>{
    let newUser = new User({
        // firstname: req.body.Fname,
        // lastname: req.body.Lname,
        ID: req.body.ID,
        groupNum:req.body.groupNum,
        courseNum:req.body.courseNum,
        answers1: [],
        answers2: [],
        correctAperdif1:[],
        correctAperdif2:[]
    });
    
    User.addUser(newUser,(err,user)=>{
        if(err){
            res.json({success:false,msg:"רישום כשל"});
        }else{
            res.json({success:true,msg:"רישום הצליח"});
        }
    });
});

router.get('/:id',(req,res,next)=>{
    User.getUserById(req.params.id,(err,user)=>{
        if(err){
            res.json({success:false,msg:"כשלון במציאת משתמש"});
        }else{
            res.json({success:true,user:user});
        }
    });
});

router.put('/:id/:ansNum/:qnumber/:tryNum',(req,res,next)=>{
    User.saveUserAns(req.params.id,req.params.ansNum,req.params.qnumber,req.params.tryNum,(err,user)=>{
        if(err){
            res.json({success:false,msg:err});
        }else{
            res.json({success:true,AnswerLen:user});
        }
    });
});


router.get('/',(req,res,next)=>{
    User.getAllUsersDoneTheQuizInTheLastThreeHours(null,(err,users)=>{
        if(err){
            res.json({success:false,msg:err});//"שגיאה במציאת סטודנטים שעשו את השאלון בשלוש שעות האחרונות"
        }else{
            res.json({success:true,users:users});
        }
    });
});

router.post('/calc/:tryNum/:id/(:arr)*',(req,res,next)=>{
    var arrparams = [req.params.arr].concat(req.params[0].split('/').slice(1));
    User.createeCorrectAnsArrPerDiff(req.params.tryNum,req.params.id,arrparams,(err,user)=>{
        if(err){
            res.json({success:false,msg:err});
        }else{
            res.json({success:true,user:user}); 
        }
    })
});
router.get('/students/:sDate/:fDate',(req,res,next)=>{
    User.findStudentsBetweenDates(req.params.sDate,req.params.fDate,(err,users)=>{
        if(err){
            res.json({success:false,msg:"שגיאה במציאת סטודנטים בין התאריכים שביקשתה"});
        }else{
            res.json({success:true,students:users});
        }
    })
})

router.post('/nullifyAnswers/:id/:tryNum',(req,res,next)=>{
    User.nulifyAnswersIfClosedBrowser(req.params.id,req.params.tryNum,(err,student)=>{
        if(err){
            res.json({success:false,msg:err});
        }else{
            res.json({success:true,student:student});
        }
    })
})

router.post('/updateGroupNum/:id/:groupNum',(req,res,next)=>{
    User.updateGroupNumOfUser(req.params.id,req.params.groupNum,(err,updatedStudent)=>{
        if(err){
            res.json({success:false,msg:err})
        }else{
            res.json({success:true,updatedStudent:updatedStudent});
        }
    })
    
})
module.exports = router;
