const User = require('../models/user');
const Question = require('../models/questions');
var async = require('async');
let correctAnsArray = [];
const correctAnsPerDiff = [0, 0, 0, 0, 0];
const UserAnswers = [];

function correctAnswers() {
    Question.getAllQuestions((err, questions) => {
        if (err) {
            console.log("getAllQuestions: " + err);
        } else {
            for (var index = 0; index < 25; index++) {
            correctAnsArray[index] = {ans:questions[index].correctA,diff:questions[index].dif};
            //console.log("coe:" + "corA: " + correctAnsArray[index].ans + "dif: " + questions[index].dif)
            }
            return correctAnsArray;
        }
        
    });

}

function getUserAnswers(ID) {
    User.getUserById(ID, (err, user) => {
        if (err) {
            console.log("getUserAnswers: " + err);
        } else {
            UserAnswers = user.Answers;
            
        }
        console.log("UserAnswers: " + UserAnswers)
    });
}

module.exports.createCorrectAnsArrPerDiff = function (ID) {
    // correctAnswers().then(function(arr){
    //     console.log(correctAnsArray)
    //     return correctAnsArray;
    // });

    getUserAnswers(ID);
    // if (correctAnsArray.length == 0 || UserAnswers.length == 0) {
    //     console.log('somthing went wrong with calc per user proccess');
    //     return [];
    // } else {
    //     for (var index = 0; index < correctAnsArray.length; index++) {
    //         if (UserAnswers[index] == correctAnsArray[index].ans) {
    //             switch (correctAnsArray[index].diff) {
    //                 case 1:
    //                     correctAnsPerDiff[0]++;
    //                     break;
    //                 case 2:
    //                     correctAnsPerDiff[1]++
    //                     break;
    //                 case 3:
    //                     correctAnsPerDiff[2]++
    //                     break;
    //                 case 4:
    //                     correctAnsPerDiff[3]++
    //                     break;
    //                 case 5:
    //                     correctAnsPerDiff[4]++
    //                     break;
    //             }
    //         }

    //     }
    //     console.log("correctAnsPerDiff:" + correctAnsPerDiff)
    //     return correctAnsPerDiff;
    //}
    // console.log(correctAnsArray)
    // return correctAnsArray;
}

