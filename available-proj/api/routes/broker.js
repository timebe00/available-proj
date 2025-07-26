var express = require('express');
var router = express.Router();

const indexService = require("../service/index_service");

router.get('/dd684590eb0244c0871d6c7abf734b61/broker', async function (req, res, next) {
  try {
    req.params.sneder = "broker"

    res.render('broker/listView', { sneder: "broker" });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.get('/dd684590eb0244c0871d6c7abf734b61/broker/listTable', async function (req, res, next) {
  try {
    req.params.sneder = "broker"
    let result = await indexService.getOrders(req);

    res.render('broker/listTable', { data: result, sneder: "broker" });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

//  발주처 작성 페이지
router.get('/dd684590eb0244c0871d6c7abf734b61/broker/write', async function (req, res, next) {
  try {
    let result = await indexService.getOutputs(req);

    res.render('broker/write', { data: result, sneder: "broker" });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.post('/dd684590eb0244c0871d6c7abf734b61/broker/setOrder', async function (req, res, next) {
  try {
    req.body.sneder = "broker";

    let result = await indexService.setOrder(req);

    res.json({ data: result, sneder: "broker" });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.post('/dd684590eb0244c0871d6c7abf734b61/broker/changeStatus', async function (req, res, next) {
  try {
    let result = await indexService.changeStatus(req);

    res.json({ data: result, sneder: "broker" });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.get('/dd684590eb0244c0871d6c7abf734b61/broker/view', async function (req, res, next) {
  try {
    let result = await indexService.getOrder(req);

    res.render('broker/view', { data: result, sneder: "broker" });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.post('/dd684590eb0244c0871d6c7abf734b61/broker/setOrderFix', async function (req, res, next) {
  try {
    let result = await indexService.setOrderFix(req);

    res.json({ data: result, sneder: "broker" });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.get('/dd684590eb0244c0871d6c7abf734b61/broker/modify', async function (req, res, next) {
  try {
    let result = await indexService.getOutputs(req);
    result.modify = await indexService.getOrder(req);

    res.render('broker/write', { data: result, sneder: "broker" });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.post('/dd684590eb0244c0871d6c7abf734b61/broker/modifyOrder', async function (req, res, next) {
  try {
    req.body.sneder = "broker";
    let result = await indexService.modifyOrder(req);

    res.json({ data: result, sneder: "broker" });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.post('/dd684590eb0244c0871d6c7abf734b61/broker/changePrice', async function (req, res, next) {
  try {
    let result = await indexService.changePrice(req);

    res.json({ data: result, sneder: "broker" });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.post('/dd684590eb0244c0871d6c7abf734b61/broker/getOrderFixs', async function (req, res, next) {
  try {
    let result = await indexService.getOrderFixs(req);

    res.json({ data: result, sneder: "broker" });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.post('/dd684590eb0244c0871d6c7abf734b61/broker/delOrder', async function (req, res, next) {
  try {
    let result = await indexService.delOrder(req);

    res.json({ data: result, sneder: "broker" });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.post('/dd684590eb0244c0871d6c7abf734b61/broker/delOrderFix', async function (req, res, next) {
  try {
    let result = await indexService.delOrderFix(req);

    res.json({ data: result, sneder: "broker" });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

module.exports = router;