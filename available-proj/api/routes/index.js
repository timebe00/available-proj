var express = require('express');
var router = express.Router();

const indexService = require("../service/index_service");

router.get('/', async function (req, res, next) {
  try {
    res.render('index');
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

module.exports = router;
