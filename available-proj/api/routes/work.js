var express = require('express');
var router = express.Router();

const indexService = require("../service/index_service");

router.get('/e6e7b89523ac41e0ba406fbd05ed9de6/work', async function (req, res, next) {
    try {
        req.params.sneder = "work"

        res.render('work/listView', { sender: "work" });
    } catch (error) {
        console.log("error", error)
        next(error);
    }

});

router.get('/e6e7b89523ac41e0ba406fbd05ed9de6/work/listTable', async function (req, res, next) {
    try {
        req.params.sneder = "work"
        let result = await indexService.getOrders(req);

        res.render('work/listTable', { data: result, sender: "work" });
    } catch (error) {
        console.log("error", error)
        next(error);
    }

});

router.get('/e6e7b89523ac41e0ba406fbd05ed9de6/work/view', async function (req, res, next) {
    try {
        let result = await indexService.getOrder(req);

        res.render('work/view', { data: result, sender: "work" });
    } catch (error) {
        console.log("error", error)
        next(error);
    }

});

router.post('/e6e7b89523ac41e0ba406fbd05ed9de6/work/changeStatus', async function (req, res, next) {
    try {
        let result = await indexService.changeStatus(req);

        res.json({ data: result, sender: "work" });
    } catch (error) {
        console.log("error", error)
        next(error);
    }

});

router.post('/e6e7b89523ac41e0ba406fbd05ed9de6/work/getOrderFixs', async function (req, res, next) {
    try {
        let result = await indexService.getOrderFixs(req);

        res.json({ data: result, sender: "work" });
    } catch (error) {
        console.log("error", error)
        next(error);
    }

});

router.get('/e6e7b89523ac41e0ba406fbd05ed9de6/work/modify', async function (req, res, next) {
    try {
        let result = await indexService.getOutputs(req);
        result.modify = await indexService.getOrder(req);

        res.render('work/write', { data: result, sender: "work" });
    } catch (error) {
        console.log("error", error)
        next(error);
    }

});

router.post('/e6e7b89523ac41e0ba406fbd05ed9de6/work/modifyOrder', async function (req, res, next) {
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