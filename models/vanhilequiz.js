const mongoose = require('mongoose');
const config = require('../config/db');
const moment = require('moment');
const allCalc = require('../ClacModules/calcClass');
const classCalc = require('../ClacModules/calcClassRes');
const userCalc = require('../ClacModules/CalcUser');
const lodash = require('lodash/array');
const VanHileSchema = mongoose.Schema({
    date: {
        type: Date, default: moment().utc(new Date())
    },
    results: {
        type: []
    },
    courseNum: {
        type: Number
    },
    groupNum: {
        type: Number
    }
}, {collection: 'VanHileQuizRes'});

const VanHile = module.exports = mongoose.model('VanHile', VanHileSchema);

module.exports.getResultsBygroupNumAndCourseNum = function (gNum, cNum, callback) {
    gNum = parseInt(gNum);
    cNum = parseInt(cNum);
    const query = {$and: [{groupNum: gNum, courseNum: cNum}]};
    VanHile.find(query, {}, {sort: {date: -1}}, callback);
};
module.exports.createStudentResult = function (studentsId, tryNum, callback) {
    userCalc.calcUser(studentsId, tryNum, callback);
};

module.exports.createAndSaveClassResults = function (tryNum, courseNum, groupNum, callback) {
    classCalc.calcClass(tryNum, courseNum, groupNum, (err, corAnswersPerDiffArray, courseNum, groupNum) => {
        if (err) {
            return callback(err, []);
        } else {
            const query = {
                $and: [{
                    results: corAnswersPerDiffArray,
                    groupNum: parseFloat(groupNum),
                    courseNum: parseFloat(courseNum)
                }]
            };
            VanHile.find(query, (err, res) => {
                if (err) {
                    return callback(err, []);
                } else {
                    if (res.length === 0 || res === null || res === [] || res === undefined || res === '') {
                        let VH = new VanHile({
                            results: corAnswersPerDiffArray,
                            groupNum: groupNum,
                            courseNum: courseNum
                        });
                        VH.save(callback)
                    } else {
                        VanHile.find(query, callback);
                    }
                }
            });
        }
    });
};
// module.exports.writeResultsOfClass = function (tryNum,callback) {
//     var allresArray;
//     allCalc.calcAll(tryNum,(arr, groupNum, courseNum) => {
//         allresArray = arr;
//         if (allresArray == null) {
//             //return callback("אין סטודנטים שעשו את השאלון עם מספרי הקורוס או הקבוצות שבחרת",[]);
//             return callback("אין סטודנטים שעשו את השאלון ב3 שעות האחרונות ולכן אין מה לחשב לציון כללי",[]);
//         } else {
//             const query = { $and: [{ results: allresArray, groupNum: groupNum, courseNum: courseNum }] };
//             VanHile.find(query, (err, res) => {
//                 if (err) {
//                     console.log( err);
//                 } else {
//                     if (res == null || res == [] || res == undefined || res == '') {
//                         var VH = new VanHile({ results: allresArray, groupNum: groupNum, courseNum: courseNum });
//                         console.log(VH)
//                         VH.save(callback)
//                     } else {
//                         VanHile.find(query, callback);
//                     }
//                 }
//             });
//         }
//     });
//
// }
module.exports.getAllQuizesDoneInTheLastSemeter = function (callback) {
    var fourMonth = moment().subtract(4, 'month').valueOf();
    var lastQuiz = moment().add(1, 'day').valueOf();
    const query = {$and: [{date: {$gte: fourMonth}, date: {$lt: lastQuiz}}]};
    VanHile.find(query, {}, {sort: {courseNum: 1}}, callback);
};

module.exports.getQuizByCourseNum = function (courseNum, callback) {
    const query = {courseNum: courseNum};
    VanHile.find(query, {}, {sort: {date: 1}}, callback);
};

module.exports.getAllUniqueQuizes = function (callback) {
    VanHile.find({}, (err, result) => {
        if (result.length === 0) {
            return callback('אין תוצאות של שאלונים', []);
        } else {
            return callback(err, lodash.unionWith(result, lodash.isEqual));
        }
    })
};
