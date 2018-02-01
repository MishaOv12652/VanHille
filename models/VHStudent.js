const mongoose = require('mongoose');
const config = require('../config/db');
const moment = require('moment');

const VHStudentSchema = mongoose.Schema({
    // firstname: {
    //     type: String
    // },
    // lastname: {
    //     type: String
    // },
    ID: {
        type: Number
    },
    courseNum:{
        type:Number
    },
    groupNum:{
        type:Number
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
}, { collection: 'VHStudents' });

const VHStudent = module.exports = mongoose.model('VHStudent', VHStudentSchema);

module.exports.getUserById = function (id, callback) {
    const query = { ID: id };
    VHStudent.find(query, callback);
}

module.exports.addUser = function (newUser, callback) {
    newUser.save(callback);
}
module.exports.updateGroupNumOfUser = function(id,groupNum,callback){
    const query = { ID: id };
    VHStudent.findOneAndUpdate(query,{groupNum:groupNum,date:moment().utc(new Date())},{ safe: true, new: true }, callback)
}
module.exports.saveUserAns = function (id, ansNum, qnumber,tryNum, callback) {
    qnumber = (qnumber - 1).toString();
     var str = "Answers" + tryNum + "." + qnumber;
    // console.log("save Answer str: " + str)
    //var str = "Answers."+qnumber;
    var setter = {};
    setter[str] = ansNum;
    const query = { ID: id };
    VHStudent.findOneAndUpdate(query, {$set:setter}, { safe: true, new: true }, callback);
}

module.exports.getAllUsersDoneTheQuizInTheLastThreeHours = function (k, callback) {
    var three = moment().subtract(3, 'hours').valueOf();
    const query = { date: { $gte: three } }
    VHStudent.find(query, callback);
}

module.exports.getNumUsersDoneTheQuizInTheLastThreeHours = function (k, callback) {
    var three = moment().subtract(3, 'hours').valueOf();
    const query = { date: { $gte: three } }
    VHStudent.count(query, callback);
}

module.exports.createeCorrectAnsArrPerDiff = function (tryNum,id, arr, callback) {
    const query = { ID: id };
    console.log("CorrectAnsOfUser: " + arr)
    var str = "correctAperdif" + tryNum ;//+ "." + qnumber
    var setter = {};
    setter[str] = arr;
    VHStudent.findOneAndUpdate(query, {$set:setter}, { safe: true, new: true }, callback);

}

module.exports.nulifyAnswersIfClosedBrowser = function(id,tryTime,callback){
    const query = { ID: id };
    if(tryTime==1)
        VHStudent.findOneAndUpdate(query,{Answers1:[]},{ safe: true, upsert: true, new: true }, callback);
    if(tryTime==2)
        VHStudent.findOneAndUpdate(query,{Answers2:[]},{ safe: true, upsert: true, new: true }, callback);

}

module.exports.findStudentsBetweenDates = function(sDate,fDate,callback){
    const query = {$and:[{date:{$gte:sDate}},{date:{$lte:fDate}}]}
    VHStudent.find(query,callback);
}
