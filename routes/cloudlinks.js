const express = require('express');
let router = express.Router();
const CloudLink = require('../models/cloudlinks');

router.get('/getAllCloudLinks', (req, res, next) => {
    CloudLink.getAllCloudLinkTables((err, cloudLinksTables) => {
        if (err) {
            res.json({ success: false, msg: "אין טבלאות של קישורים לענן" })
        } else {
            res.json({ success: true, cloudLinksTables: cloudLinksTables });
        }
    });
});

router.get('/:CloudLinkTableId', (req, res, next) => {
    CloudLink.getCloudLinkByTableId(req.params.CloudLinkTableId, (err, cloudLinksTable) => {
        if (err) {
            res.json({ success: false, msg: "לא נמצאה הטבלה" });
        } else {
            res.json({ success: true, cloudLinksTable: cloudLinksTable });
        }
    });
});

router.post('/addCloudLinkTable', (req, res, next) => {
    let newCloudLinkTable = new CloudLink({
        tableId: req.body.tableId,
        settings_obj: req.body.settings_obj,
        data: req.body.data
    });
    CloudLink.addCloudLinkTable(newCloudLinkTable, (err, cloudLinkTable) => {
        if (err) {
            res.json({ success: false, msg: err });
        } else {
            res.json({ success: true, cloudLinkTable: cloudLinkTable });
        }
    });
});

router.post('/:CloudLinkTableId', (req, res, next) => {
    CloudLink.addEntryToCloudLinkTable(req.params.CloudLinkTableId, req.body, (err, updatedCloudLinksTable) => {
        if (err) {
            res.json({ success: false, msg: "תקלה בהוספה שורה לטבלה של קישור לענן" });
        } else {
            res.json({ success: true, updatedCloudLinksTable: updatedCloudLinksTable });
        }
    })
});

router.post('/deleteEntry/:CloudLinkTableId', (req, res, next) => {
    CloudLink.deleteEntryFromCloudLinkTable(req.params.CloudLinkTableId, req.body, (err, deletedCloudLinksTable) => {
        if (err) {
            res.json({ success: false, msg: "תקלה במחיקת שורה מטבלה של קישור לענן" });
        } else {
            res.json({ success: true, deletedCloudLinksTable: deletedCloudLinksTable });
        }
    })
});

router.delete('/:CloudLinkTableId',(req,res,next)=>{
    CloudLink.deleteCloudLinkTable(req.params.CloudLinkTableId,(err,deletedCloudLinksTable)=>{
        if (err) {
            res.json({ success: false, msg: "תקלה במחיקת טבלה של קישור לענן" });
        } else {
            res.json({ success: true, updatedCloudLinksTable: deletedCloudLinksTable });
        }
    });
});

module.exports = router;