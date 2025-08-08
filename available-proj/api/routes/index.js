var express = require('express');
var router = express.Router();

const multer = require('multer');
const path = require('path');

const indexService = require("../service/index_service");

router.get('/', async function (req, res, next) {
  try {
    res.render('index');
  } catch (error) {
    console.log("error", error)
    next(error);
  }

});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/editor/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + "img");
  }
});
const upload = multer({ storage });

router.post('/upload/image', upload.single('file'), async (req, res) => {
  await indexService.insertFile(req);

  const fileUrl = `/uploads/editor/${req.file.filename}`;
  res.json({ url: fileUrl });
});


module.exports = router;
