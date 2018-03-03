const User = require('../models/VHStudent');
const Question = require('../models/questions');

let answerObjectArray=[];//array that will contain objects with user's ans the question's correct ans and it's difficulty
let correctAnswersPerDifficulty;
let userAnswers;

module.exports.calcUser = function (studentId,tryNum,callback) {
  Question.getAllQuestions((err,questions)=>{
      correctAnswersPerDifficulty = [0,0,0,0,0];
      answerObjectArray =[];
      questions.forEach((question)=>{
          let answerObj = {
              correctA:question.correctA,
              difficulty:question.dif,
              userAnswer:""
          };
          answerObjectArray.push(answerObj);
      });

      User.getUserById(studentId,(err,student)=>{
          if(err){
              return callback(err,null);
          }
          if(student.length == 0){
              return callback("אין סטודנט כזה",null)
          }
          if(parseFloat(tryNum) === 1){
              userAnswers = student[0].Answers1;
          }else{
              userAnswers = student[0].Answers2;
          }
          for(let i=0;i<25;i++){
             if(userAnswers[i] !== undefined){
                 answerObjectArray[i].userAnswer = userAnswers[i];
             }else{
                 answerObjectArray[i].userAnswer = 0;
             }
          }
          answerObjectArray.forEach((answerObj)=>{
             if(parseFloat(answerObj.userAnswer) === parseFloat(answerObj.correctA)){
                 correctAnswersPerDifficulty[answerObj.difficulty-1]+=1;
             }
          });

          return callback(err,correctAnswersPerDifficulty);
      });
  });
};