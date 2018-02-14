const mongoose =  require('mongoose');
const config = require('../config/db');

const CloudLinkSchema = mongoose.Schema({
    tableId:{
        type:String
    },
    settings_obj:{
        type:Object
    },
    data:{
        type:Array
    }
},{collection:'CloudLinks'});

const CloudLink = module.exports = mongoose.model('CloudLinks',CloudLinkSchema.index({tableId:1},{unique:true}));

module.exports.getCloudLinkByTableId = function(tableId,callback){
    const query = {tableId:tableId};
    CloudLink.findOne(query,callback);
};

module.exports.getAllCloudLinkTables = function(callback){
    CloudLink.find({},callback).sort({tableId:1});
}

module.exports.addCloudLinkTable = function(newTable,callback){
    newTable.save(callback);
}

module.exports.updateCloudLinkTable = function(updadtedTableId,updatedTable,callback){
        const query = {tableId:updadtedTableId};
        CloudLink.findOneAndUpdate(query,{Table:updatedTable},{ safe: true, new: true }, callback)
}
