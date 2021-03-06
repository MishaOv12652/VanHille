var express = require('express');
var router = express.Router();
const Question = require('../models/questions');
const User = require('../models/VHStudent');
const VHQuiz = require('../models/vanhilequiz');

router.get('/questions',(req,res,next)=>{
    Question.getAllQuestions((err,questions)=>{
        if(err){
            res.json({success:false,msg:"אין שאלות"});
        }else{
            res.json({success:true,questions:questions});
        }
    });
});

router.get('/:id',(req,res,next)=>{
    Question.getQuestion(req.params.id,(err,question)=>{
        if(err){
            res.json({success:false,msg:"לא נמצאה שאלה"});
        }else{  
            res.json({success:true,question:question});
        }
    });
});


router.post('/calcStudent/:tryNum/:id',(req,res,next)=>{
    VHQuiz.createStudentResult(req.params.id,req.params.tryNum,(err,studentRes)=>{
        if(err){
            res.json({success:false,msg:err});
        }else{
            res.json({success:true,studentRes:studentRes});
        }
    });
});
// router.post('/calcAll/:tryNum',(req,res,next)=>{
//     VHQuiz.writeResultsOfClass(req.params.tryNum,(err,resQuiz)=>{
//         if(err){
//             res.json({success:false,msg:err});
//         }else{
//             res.json({success:true,resQuiz:resQuiz});
//         }
//     });
// });

router.post('/calcClass/:tryNum/:courseNum/:groupNum',(req,res,next)=>{
    VHQuiz.createAndSaveClassResults(req.params.tryNum,req.params.courseNum,req.params.groupNum,(err,classResult)=>{
        if(err){
            res.json({success:false,msg:err});
        }else{
            res.json({success:true,classResult:classResult});
        }
    });
});
router.get('/studentSemester/get',(req,res,next)=>{
    VHQuiz.getAllQuizesDoneInTheLastSemeter((err,quiz)=>{
        if(err){
            res.json({success:false,msg:err});
        }else{
            res.json({success:true,quiz:quiz});
        }
    });
});

router.get('/studentSemester/:cNum/:gNum',(req,res,next)=>{
    VHQuiz.getResultsBygroupNumAndCourseNum(req.params.gNum,req.params.cNum,(err,quiz)=>{
        if(err){
            res.json({success:false,msg:err});
        }else{
            res.json({success:true,quiz:quiz});
        }
    });
});

router.get('/quizByCnum/:cNum',(req,res,next)=>{
    VHQuiz.getQuizByCourseNum(req.params.cNum,(err,quiz)=>{
        if(err){
            res.json({success:false,msg:err});
        }else{
            res.json({success:true,quiz:quiz});
        }
    });
});

router.get('/unique/Quizes',(req,res,next)=>{
   VHQuiz.getAllUniqueQuizes((err,classResults)=>{
       if(err){
           res.json({success:false,msg:err});
       }else{
           res.json({success:true,classResults:classResults});
       }
   })
});
module.exports = router;
