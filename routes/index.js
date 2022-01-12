var express = require('express');
var router = express.Router();
const fs = require('fs');
const path = require('path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/media', (req, res, next) => {
  const mediaPath = path.join(__dirname, '../media/', req.query.name);
  console.log(mediaPath);
  if (fs.access(mediaPath, fs.F_OK, (err) => {
      if (err)
          return next(err);
      res.sendFile(mediaPath);
  }));});

module.exports = router;
