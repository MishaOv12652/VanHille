const mongoose = require('mongoose');
const config = require('../config/db');

const CloudLinkSchema = mongoose.Schema({
    tableId: {
        type: String
    },
    settings_obj: {
        type: Object
    },
    data: {
        type: Array
    }
}, {collection: 'CloudLinks'});

const CloudLink = module.exports = mongoose.model('CloudLinks', CloudLinkSchema.index({tableId: 1}, {unique: true}));

module.exports.getCloudLinkByTableId = function (tableId, callback) {
    const query = {tableId: tableId};
    CloudLink.findOne(query, callback);
};

module.exports.getAllCloudLinkTables = function (callback) {
    CloudLink.find({}, callback).sort({tableId: 1});
}

module.exports.addCloudLinkTable = function (newTable, callback) {
    newTable.save(callback);
}

module.exports.updateCloudLinkTable = function (updatedTableId, updatedTableData, callback) {
    const query = {tableId: updatedTableId};
    let newEntry = {"id":updatedTableData.id,"name":updatedTableData.name,"desc":updatedTableData.desc,"url":updatedTableData.url};
    // let setter = {};
    // setter['data'] = updatedTableData;
    CloudLink.findOneAndUpdate(query, {$push:{data:newEntry}}, {safe: true, new: true}, callback)
}

module.exports.deleteCloudLinkTable = function (tableID, callback) {
    const query = {tableId: tableID};
    CloudLink.find(query).remove(callback)
}
