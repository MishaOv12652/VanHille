const User = require('../models/VHStudent');
let AllCorrectUserAnswer = [];
let numOfStudents;
let sumOfAnswers = [];
let concatArray = [];
let groupNum;
let courseNum;
let docsStart,docsIndex;

module.exports.calcAll = function (tryNum,callback) {
    User.getNumUsersDoneTheQuizInTheLastThreeHours(null, (err, count) => {
        if (err) {
            console.log(err);
            return -1;
        } else {
            numOfStudents = count;
            console.log('numOfStudents: ' + numOfStudents)
            if (numOfStudents == -1 || numOfStudents == 0 || numOfStudents == undefined) {
                return callback(null, -1, -1);
            } else {
                User.getAllUsersDoneTheQuizInTheLastThreeHours(null, (err, docs) => {
                    if (err) {
                        console.log(err);
                    } else {
                        if (numOfStudents == 1) {
                                                     
                            if ((docs[0].correctAperdif1.length == 0 && tryNum==1)||(docs[0].correctAperdif2.length == 0 && tryNum==2)) {
                                return callback(null, -1, -1);
                            } else {
                                if(tryNum==1){
                                    groupNum = docs[0].groupNum;
                                    courseNum = docs[0].courseNum;
                                    finalArray = docs[0].correctAperdif1.slice(0, -1);
                                }
                                if(tryNum==2){
                                    groupNum = docs[0].groupNum;
                                    courseNum = docs[0].courseNum;
                                    finalArray = docs[0].correctAperdif2.slice(0, -1);
                                }
                                
                            }
                        } else {
                            for (var index = 0; index < numOfStudents; index++) {
                                if (docs[index].groupNum != undefined) {//&& docs[0].courseNum !=undefined){
                                    groupNum = docs[index].groupNum;
                                    courseNum = docs[index].courseNum;
                                }
                                if(tryNum==1){
                                    if(docs[index].correctAperdif1.length==0){
                                        continue;
                                    }else{
                                        AllCorrectUserAnswer[index] = docs[index].correctAperdif1.slice(0, -1);
                                    }
                                }

                                if(tryNum==2){
                                    if(docs[index].correctAperdif2.length==0){
                                        continue;
                                    }else{
                                        AllCorrectUserAnswer[index] = docs[index].correctAperdif2.slice(0, -1);
                                    }
                                }
                                
                                
                                //console.log("index: " + index + " AllCorrectUserAnswer: " + AllCorrectUserAnswer[index])
                            }
                            for (var index = 0; index < AllCorrectUserAnswer.length - 1; index++) {
                                var temp = AllCorrectUserAnswer[index].concat(AllCorrectUserAnswer[index + 1]);
                                //console.log('temp: ' + temp)
                                concatArray = concatArray.concat(temp);
                                //console.log("concatArray: " + concatArray)
                            }

                            var finalArray = [0, 0, 0, 0, 0]
                            for (var index = 0; index < concatArray.length; index++) {
                                if (concatArray[index] == ',') {
                                    continue
                                }
                                switch (index % 5) {
                                    case 0:
                                        finalArray[0] += parseInt(concatArray[index]);
                                        break;
                                    case 1:
                                        finalArray[1] += parseInt(concatArray[index]);
                                        break;
                                    case 2:
                                        finalArray[2] += parseInt(concatArray[index]);
                                        break;
                                    case 3:
                                        finalArray[3] += parseInt(concatArray[index]);
                                        break;
                                    case 4:
                                        finalArray[4] += parseInt(concatArray[index]);
                                        break;
                                }

                            }
                        }

                        for (var i = 0; i < finalArray.length; i++) {
                            finalArray[i] = ((finalArray[i] / (numOfStudents * 5)) * 100).toFixed(2);
                        }
                        concatArray = [];
                        //console.log('finalArray: ' + finalArray);
                        return callback(finalArray, groupNum, courseNum);

                    }
                });
            }

        }
    });

}