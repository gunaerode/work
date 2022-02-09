var express = require('express');
var router = express.Router();
const { dbUrl } = require('../dbSchema');
const mongoose = require('mongoose');
const { userDetails } = require('../schema');

mongoose.connect(dbUrl);

/* GET home page. */
// router.get('/', function (req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/', async (req, res) => {
  const user = await userDetails.create(req.body);
  res.json({
    status: 201,
    message: 'Data saved',
  });
});

router.get('/', async (req, res) => {
  const details = await userDetails.find();
  res.json({
    status: 200,
    data: details,
  });
});

module.exports = router;
