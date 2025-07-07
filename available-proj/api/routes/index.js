var express = require('express');
var router = express.Router();

const indexService = require("../service/index_service");

/* GET home page. */
router.get('/', function (req, res, next) {
  try {
    indexService.getOrders(req);

    res.render('index', { title: 'Express' });

  } catch (error) {
    console.log("error", error)
    next(error);
  }
});
/////////////////////////////   order S    ///////////////////////////// 
//  발주처 리스트
router.get('/5521ed612b874a198fc98c71fbcee437/order', async function (req, res, next) {
  try {
    req.params.sortData = "order"
    let result = await indexService.getOrders(req);

    res.render('order/list', { data: result });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

//  발주처 작성 페이지
router.get('/5521ed612b874a198fc98c71fbcee437/order/write', async function (req, res, next) {
  try {
    let result = await indexService.getOutputs(req);

    res.render('order/write', { data: result });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.post('/5521ed612b874a198fc98c71fbcee437/order/setOrder', async function (req, res, next) {
  try {
    req.body.sortData = "order"
    let result = await indexService.setOrder(req);

    res.json({ data: result });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.post('/5521ed612b874a198fc98c71fbcee437/order/changeStatus', async function (req, res, next) {
  try {
    let result = await indexService.changeStatus(req);

    res.json({ data: result });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.get('/5521ed612b874a198fc98c71fbcee437/order/view', async function (req, res, next) {
  try {
    let result = await indexService.getOrder(req);

    res.render('order/view', { data: result });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.post('/5521ed612b874a198fc98c71fbcee437/order/setOrderFix', async function (req, res, next) {
  try {
    let result = await indexService.setOrderFix(req);

    res.json({ data: result });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.get('/5521ed612b874a198fc98c71fbcee437/order/modify', async function (req, res, next) {
  try {
    let result = await indexService.getOutputs(req);
    result.modify = await indexService.getOrder(req);

    res.render('order/write', { data: result });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.post('/5521ed612b874a198fc98c71fbcee437/order/modifyOrder', async function (req, res, next) {
  try {
    req.body.sortData = "order";
    let result = await indexService.modifyOrder(req);

    res.json({ data: result });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});
/////////////////////////////   order E    ///////////////////////////// 

/////////////////////////////   worker S    ///////////////////////////// 
//  발주처 리스트
router.get('/e6e7b89523ac41e0ba406fbd05ed9de6/work', async function (req, res, next) {
  try {
    req.params.sortData = "work"
    let result = await indexService.getOrders(req);

    res.render('work/list', { data: result });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.get('/e6e7b89523ac41e0ba406fbd05ed9de6/work/view', async function (req, res, next) {
  try {
    let result = await indexService.getOrder(req);

    res.render('work/view', { data: result });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.post('/e6e7b89523ac41e0ba406fbd05ed9de6/work/changeStatus', async function (req, res, next) {
  try {
    let result = await indexService.changeStatus(req);

    res.json({ data: result });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});
/////////////////////////////   worker E    ///////////////////////////// 

/////////////////////////////   broker S    ///////////////////////////// 
//  발주처 리스트
router.get('/dd684590eb0244c0871d6c7abf734b61/broker', async function (req, res, next) {
  try {
    req.params.sortData = "broker"
    let result = await indexService.getOrders(req);

    res.render('broker/list', { data: result });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

//  발주처 작성 페이지
router.get('/dd684590eb0244c0871d6c7abf734b61/broker/write', async function (req, res, next) {
  try {
    let result = await indexService.getOutputs(req);

    res.render('broker/write', { data: result });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.post('/dd684590eb0244c0871d6c7abf734b61/broker/setOrder', async function (req, res, next) {
  try {
    req.body.sortData = "broker";

    let result = await indexService.setOrder(req);

    res.json({ data: result });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.post('/dd684590eb0244c0871d6c7abf734b61/broker/changeStatus', async function (req, res, next) {
  try {
    let result = await indexService.changeStatus(req);

    res.json({ data: result });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.get('/dd684590eb0244c0871d6c7abf734b61/broker/view', async function (req, res, next) {
  try {
    let result = await indexService.getOrder(req);

    res.render('broker/view', { data: result });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.post('/dd684590eb0244c0871d6c7abf734b61/broker/setOrderFix', async function (req, res, next) {
  try {
    let result = await indexService.setOrderFix(req);

    res.json({ data: result });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.get('/dd684590eb0244c0871d6c7abf734b61/broker/modify', async function (req, res, next) {
  try {
    let result = await indexService.getOutputs(req);
    result.modify = await indexService.getOrder(req);

    res.render('broker/write', { data: result });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

router.post('/dd684590eb0244c0871d6c7abf734b61/broker/modifyOrder', async function (req, res, next) {
  try {
    req.body.sortData = "broker";
    let result = await indexService.modifyOrder(req);

    res.json({ data: result });
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});
/////////////////////////////   broker E    ///////////////////////////// 
module.exports = router;
