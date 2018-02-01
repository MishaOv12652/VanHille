const mongoose =  require('mongoose');
const config = require('../config/db');

const QuestionSchema = mongoose.Schema({
    Qid:{
        type:Number
    },
    Question:{
        type:String
    },
    Answers:{
        type:[]
    },
    correctA:{
        type:Number
    },
    dif:{
        type:Number
    },
    Image:{
        type:String
    }
},{collection:'Questions'});

const Question = module.exports = mongoose.model('Question',QuestionSchema);

module.exports.getQuestion = function(Qid,callback){
    const id = parseInt(Qid);
    const query = {Qid:id};
    Question.findOne(query,callback);
};

module.exports.getAllQuestions = function(callback){
    Question.find({},callback).sort({Qid:1});
}
