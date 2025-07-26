var express = require('express');
var router = express.Router();

const indexService = require("../service/index_service");

router.get('', async function (req, res, next) {
    try {
        req.params.sneder = "work"

        res.render('work/listView', { sender: "work" });
    } catch (error) {
        console.log("error", error)
        next(error);
    }

});

router.get('/listTable', async function (req, res, next) {
    try {
        req.params.sneder = "work"
        let result = await indexService.getOrders(req);

        res.render('work/listTable', { data: result, sender: "work" });
    } catch (error) {
        console.log("error", error)
        next(error);
    }

});

router.post('/changeStatus', async function (req, res, next) {
    try {
        let result = await indexService.changeStatus(req);

        res.json({ data: result, sender: "work" });
    } catch (error) {
        console.log("error", error)
        next(error);
    }

});

router.post('/getOrderFixs', async function (req, res, next) {
    try {
        let result = await indexService.getOrderFixs(req);

        res.json({ data: result, sender: "work" });
    } catch (error) {
        console.log("error", error)
        next(error);
    }

});

router.get('/modify', async function (req, res, next) {
    try {
        let result = await indexService.getOutputs(req);
        result.modify = await indexService.getOrder(req);

        res.render('page/write/page.ejs', { data: result, sender: "work" });
    } catch (error) {
        console.log("error", error)
        next(error);
    }

});

router.post('/modifyOrder', async function (req, res, next) {
    try {
        req.body.sneder = "work";
        let result = await indexService.modifyOrder(req);

        res.json({ data: result, sender: "work" });
    } catch (error) {
        console.log("error", error)
        next(error);
    }

});

module.exports = router;