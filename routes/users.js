var express = require('express');
var router = express.Router();
const { User } = require('../models');
const { connection, pool } = require('../db/index');

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
});

router.patch('/', async function(req, res, next) {
  const result = await connection.query(`UPDATE users SET comment='mysql2' WHERE id = 5;`, function(err, row, fields) {
    console.log(1, err);
    console.log(2, row);
    console.log(3, fields);
  });

  console.log(4, result)

  res.send('sucess');

})

module.exports = router;
