var express = require('express');
var router = express.Router();
const { User } = require('../models')

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', function(req, res, next) {
  const { name, age, married, comment } = req.body;
  User.create({
    name,
    age,
    married,
    comment
  });

  res.send('sucess');
});

router.put('/', function(req, res, next) {
  User.update({
    comment: '바꿀 내용'
  }, {
    where: { id: 5 }
  })

  res.send('sucess');
})

module.exports = router;
