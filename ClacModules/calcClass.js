const User = require('../models/VHStudent');
var CorAnswerLvl1 = 0;
var CorAnswerLvl2 = 0;
var CorAnswerLvl3 = 0;
var CorAnswerLvl4 = 0;
var CorAnswerLvl5 = 0;
var TotalAnswersPerLvl;//count*5
let groupNum;
let courseNum;
var finalResults = [];

module.exports.calcAll = function (tryNum, callback) {
    User.getNumUsersDoneTheQuizInTheLastThreeHours(null, (err, count) => {
        if (err) {

        } else {
            var numOfStudents = count;
            if (numOfStudents == -1 || numOfStudents == 0 || numOfStudents == undefined) {
                return callback(null, -1, -1);
            } else {
                TotalAnswersPerLvl = numOfStudents*5;
                User.getAllUsersDoneTheQuizInTheLastThreeHours(null, (err, docs) => {
                    if (err) {

                    } else {
                        if (docs.length == 0) {
                            return callback(null, -1, -1);
                        } else {
                            for (var doc = 0; doc < docs.length; doc++) {
                                groupNum = docs[1].groupNum;
                                courseNum = docs[1].courseNum;
                                switch (parseInt(tryNum)) {
                                    case 1:
                                        for (var ans = 0; ans < docs[doc].correctAperdif1.length - 1; ans++) {
                                            switch (ans) {
                                                case 0:
                                                    CorAnswerLvl1+=parseInt(docs[doc].correctAperdif1[ans]);
                                                    
                                                    break;
                                                case 1:
                                                    CorAnswerLvl2+=parseInt(docs[doc].correctAperdif1[ans]);
                                                    break;
                                                case 2:
                                                    CorAnswerLvl3+=parseInt(docs[doc].correctAperdif1[ans]);
                                                    break;
                                                case 3:
                                                    CorAnswerLvl4+=parseInt(docs[doc].correctAperdif1[ans]);
                                                    break;
                                                case 4:
                                                    CorAnswerLvl5+=parseInt(docs[doc].correctAperdif1[ans]);
                                                    break;
                                            }

                                        }
                                        break;
                                    case 2:
                                        for (var ans = 0; ans < docs[doc].correctAperdif2.length - 1; ans++) {
                                            switch (ans) {
                                                case 0:
                                                    CorAnswerLvl1+=parseInt(docs[doc].correctAperdif2[ans]);
                                                    break;
                                                case 1:
                                                    CorAnswerLvl2+=parseInt(docs[doc].correctAperdif2[ans]);
                                                    break;
                                                case 2:
                                                    CorAnswerLvl3+=parseInt(docs[doc].correctAperdif2[ans]);
                                                    break;
                                                case 3:
                                                    CorAnswerLvl4+=parseInt(docs[doc].correctAperdif2[ans]);
                                                    break;
                                                case 4:
                                                    CorAnswerLvl5+=parseInt(docs[doc].correctAperdif2[ans]);
                                                    break;
                                            }

                                        }
                                        break;
                                }
                            }
                        }
                       
                        finalResults[0] = (CorAnswerLvl1/TotalAnswersPerLvl)*100;
                        finalResults[1] = (CorAnswerLvl2/TotalAnswersPerLvl)*100;
                        finalResults[2] = (CorAnswerLvl3/TotalAnswersPerLvl)*100;
                        finalResults[3] = (CorAnswerLvl4/TotalAnswersPerLvl)*100;
                        finalResults[4] = (CorAnswerLvl5/TotalAnswersPerLvl)*100;
                        CorAnswerLvl1 = 0
                        CorAnswerLvl2 = 0
                        CorAnswerLvl3 = 0
                        CorAnswerLvl4 = 0
                        CorAnswerLvl5 = 0
                        finArr = finalResults;
                        finalResults = [0,0,0,0,0];
                        return callback(finArr, groupNum, courseNum);
                    }
                });
            }
        }
    });
}