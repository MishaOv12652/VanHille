var express = require('express');
var router = express.Router();
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
    Question.getQuestion(req.params.CloudLinkTableId, (err, cloudLinksTable) => {
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
        Table: req.body.Table
    });
    CloudLink.addCloudLinkTable(newCloudLinkTable, (err, cloudLinkTable) => {
        if (err) {
            res.json({ success: false, msg: "קרתה שגיאה בהוספה טבלה של קישור לענן" });
        } else {
            res.json({ success: true, cloudLinkTable: cloudLinkTable });
        }
    });
});

router.post('/:CloudLinkTableId', (req, res, next) => {
    updateCloudLinkTable.updateCloudLinkTable(req.params.CloudLinkTableId, req.body.cloudLinksTable, (err, updatedCloudLinksTable) => {
        if (err) {
            res.json({ success: false, msg: "תקלה בעדכון טבלה של קישור לענן" });
        } else {
            res.json({ success: true, updatedCloudLinksTable: updatedCloudLinksTable });
        }
    })
});

module.exports = router;