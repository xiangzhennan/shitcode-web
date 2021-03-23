const express = require('express');
const router = express.Router();
const data1 = require('../json/question1.json')
const data2 = require('../json/question2.json')

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

router.get('/question',(req, res) => {
  res.header("Content-Type",'application/json');
  let questionId;
  if (!req.query.id){
    questionId = parseInt(req.query.id);
  }
  if (questionId === 1){
    res.send(JSON.stringify(data1));
  }else {
    res.send(JSON.stringify(data2));
  }
});

module.exports = router;
