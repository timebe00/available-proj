var express = require('express');
var router = express.Router();

const service = require("../service/index_service");

/* GET home page. */
router.get('/', function (req, res, next) {
  service.getOrders(req);

  res.render('index', { title: 'Express' });
});



module.exports = router;
