var express = require('express');
var router = express.Router();

const indexService = require("../service/index_service");

router.get('', async function (req, res, next) {
    try {
        req.params.sneder = "order"

        res.render('order/listView', { sneder: "order" });
    } catch (error) {
        console.log("error", error)
        next(error);
    }

});

router.get('/listTable', async function (req, res, next) {
    try {
        req.params.sneder = "order"
        let result = await indexService.getOrders(req);

        res.render('order/listTable', { data: result, sneder: "order" });
    } catch (error) {
        console.log("error", error)
        next(error);
    }

});

//  발주처 작성 페이지
router.get('/write', async function (req, res, next) {
    try {
        let result = await indexService.getOutputs(req);

        res.render('order/write', { data: result, sneder: "order" });
    } catch (error) {
        console.log("error", error)
        next(error);
    }

});

router.post('/setOrder', async function (req, res, next) {
    try {
        req.body.sneder = "order"
        let result = await indexService.setOrder(req);

        res.json({ data: result, sneder: "order" });
    } catch (error) {
        console.log("error", error)
        next(error);
    }

});

router.post('/changeStatus', async function (req, res, next) {
    try {
        let result = await indexService.changeStatus(req);

        res.json({ data: result, sneder: "order" });
    } catch (error) {
        console.log("error", error)
        next(error);
    }

});

router.get('/view', async function (req, res, next) {
    try {
        let result = await indexService.getOrder(req);

        res.render('order/view', { data: result, sneder: "order" });
    } catch (error) {
        console.log("error", error)
        next(error);
    }

});

router.post('/setOrderFix', async function (req, res, next) {
    try {
        let result = await indexService.setOrderFix(req);

        res.json({ data: result, sneder: "order" });
    } catch (error) {
        console.log("error", error)
        next(error);
    }

});

router.get('/modify', async function (req, res, next) {
    try {
        let result = await indexService.getOutputs(req);
        result.modify = await indexService.getOrder(req);

        res.render('order/write', { data: result, sneder: "order" });
    } catch (error) {
        console.log("error", error)
        next(error);
    }

});

router.post('/modifyOrder', async function (req, res, next) {
    try {
        req.body.sneder = "order";
        let result = await indexService.modifyOrder(req);

        res.json({ data: result, sneder: "order" });
    } catch (error) {
        console.log("error", error)
        next(error);
    }

});

router.post('/changePrice', async function (req, res, next) {
    try {
        let result = await indexService.changePrice(req);

        res.json({ data: result, sneder: "order" });
    } catch (error) {
        console.log("error", error)
        next(error);
    }

});

router.post('/getOrderFixs', async function (req, res, next) {
    try {
        let result = await indexService.getOrderFixs(req);

        res.json({ data: result, sneder: "order" });
    } catch (error) {
        console.log("error", error)
        next(error);
    }

});

module.exports = router;