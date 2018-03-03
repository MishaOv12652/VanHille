/**
 *
 * @param id
 * @param callback
 */
const mongoose = require('mongoose');
const config = require('../config/db');
const moment = require('moment');
const lodash = require('lodash/array');


const VHStudentSchema = mongoose.Schema({
    ID: {
        type: Number
    },
    courseNum: {
        type: Number
    },
    groupNum: {
        type: Number
    },
    Answers1: {
        type: []
    },
    Answers2: {
        type: []
    },
    correctAperdif1: {
        type: []
    },
    correctAperdif2: {
        type: []
    },
    date: {
        type: Date, default: moment().utc(new Date())
    }
}, {collection: 'VHStudents'});

const VHStudent = module.exports = mongoose.model('VHStudent', VHStudentSchema);
module.exports.getUserById = function (id, callback) {
    const query = {ID: id};
    VHStudent.find(query, callback);
};
/**
 *
 * @param newUser
 * @param callback
 */
module.exports.addUser = function (newUser, callback) {
    newUser.save(callback);
};
/**
 *
 * @param id
 * @param groupNum
 * @param callback
 */
module.exports.updateGroupNumOfUser = function (id, groupNum, callback) {
    const query = {ID: id};
    VHStudent.findOneAndUpdate(query, {groupNum: groupNum, date: moment().utc(new Date())}, {
        safe: true,
        new: true
    }, callback)
};
/**
 *
 * @param id
 * @param ansNum
 * @param qnumber
 * @param tryNum
 * @param callback
 */
module.exports.saveUserAns = function (id, ansNum, qnumber, tryNum, callback) {
    qnumber = (qnumber - 1).toString();
    var str = "Answers" + tryNum + "." + qnumber;
    var setter = {};
    setter[str] = ansNum;
    const query = {ID: id};
    VHStudent.findOneAndUpdate(query, {$set: setter}, {safe: true, new: true}, callback);
}
/**
 *
 * @param k
 * @param callback
 */
module.exports.getAllUsersDoneTheQuizInTheLastThreeHours = function (k, callback) {
    var three = moment().subtract(3, 'hours').valueOf();
    const query = {date: {$gte: three}}
    VHStudent.find(query, callback);
}
/**
 *
 * @param k
 * @param callback
 */
module.exports.getNumUsersDoneTheQuizInTheLastThreeHours = function (k, callback) {
    var three = moment().subtract(3, 'hours').valueOf();
    const query = {date: {$gte: three}}
    VHStudent.count(query, callback);
}
/**
 *
 * @param tryNum
 * @param id
 * @param arr
 * @param callback
 */
module.exports.saveCorrectAnsArrPerDiff = function (tryNum, id, arr, callback) {
    const query = {ID: id};
    console.log("CorrectAnsOfUser: " + arr)
    var str = "correctAperdif" + tryNum;//+ "." + qnumber
    var setter = {};
    setter[str] = arr;
    VHStudent.findOneAndUpdate(query, {$set: setter}, {safe: true, new: true}, callback);

}
/**
 *
 * @param id
 * @param tryTime
 * @param callback
 */
module.exports.nulifyAnswersIfClosedBrowser = function (id, tryTime, callback) {
    const query = {ID: id};
    if (tryTime == 1)
        VHStudent.findOneAndUpdate(query, {Answers1: []}, {safe: true, upsert: true, new: true}, callback);
    if (tryTime == 2)
        VHStudent.findOneAndUpdate(query, {Answers2: []}, {safe: true, upsert: true, new: true}, callback);

}
/**
 *
 * @param sDate
 * @param fDate
 * @param callback
 */
module.exports.findStudentsBetweenDates = function (sDate, fDate, callback) {
    const query = {$and: [{date: {$gte: moment(parseFloat(sDate))}}, {date: {$lte: moment(parseFloat(fDate))}}]};
    VHStudent.find(query, callback);
}
/**
 *
 * @param courseNum
 * @param groupNum
 * @param callback
 */
module.exports.getStudentsByCourseAndGroupNum = function (courseNum, groupNum, callback) {
    const query = {$and: [{courseNum: parseFloat(courseNum), groupNum: parseFloat(groupNum)}]};
    VHStudent.find(query, callback);
}

module.exports.getAllUniqueCourseNum = function (callback) {
    VHStudent.find({}, (err, result) => {
        if (result.length === 0) {
            return callback('אין תוצאות של סטודנטיפ', []);
        } else {
            return callback(null, lodash.uniqBy(result, 'courseNum'));
        }
    });
};

module.exports.getCorepondingGroupNums = function (courseNum,callback) {
    const query = {courseNum:courseNum};
    VHStudent.find(query,(err,res)=>{
        if (res.length === 0) {
            return callback('אין תוצאות של סטודנטיפ', []);
        } else {
            return callback(null, lodash.uniqBy(res, 'groupNum'));
        }
    });
};



