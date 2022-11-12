/**
 * Created by Misha on 28/02/2018.
 */
let corAnswersPerDiffArray;
let arrayToAdd;
let numOfStudentsDoneTheQuiz;

const studentModel = require('../models/VHStudent');
const lodash = require('lodash/array');

module.exports.calcClass = function (tryNum, courseNum, groupNum, callback) {
    studentModel.getStudentsByCourseAndGroupNum(courseNum,groupNum, (err, students) => {
        if (err) {
            return callback(err,[],-1,-1);
        } else {
            if (students.length === 0) {
                return callback("אין סטודנטים שעשו את השאלון עם מספרי הקורס או הקבוצות שבחרת",[],-1,-1);
            } else {
                numOfStudentsDoneTheQuiz = 0;
                corAnswersPerDiffArray = [0, 0, 0, 0, 0];
                students.forEach((student) => {
                    switch (parseFloat(tryNum)) {
                        case 1:
                            arrayToAdd = student.correctAperdif1;
                            break;
                        case 2:
                            arrayToAdd = student.correctAperdif2;
                            break;
                    }
                    corAnswersPerDiffArray = lodash.zipWith(corAnswersPerDiffArray, arrayToAdd, (a, b) => {
                        return parseFloat(a || 0) + parseFloat(b || 0);
                    });
                    numOfStudentsDoneTheQuiz++;
                });
                for (let i=0;i<5;i++){
                    corAnswersPerDiffArray[i] = (corAnswersPerDiffArray[i]/(numOfStudentsDoneTheQuiz*5))*100;
                }
                return callback(null,corAnswersPerDiffArray,courseNum,groupNum);
            }
        }
    });
};