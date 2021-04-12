const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const {
  MONGO_USERNAME,
  MONGO_PASSWORD,
  MONGO_HOSTNAME,
  MONGO_PORT,
  MONGO_DB
} = process.env;

const options = {
  useNewUrlParser: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
};

const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
const url = `mongodb://127.0.0.1:27017/questions?authSource=admin`;

mongoose.connect(url, options).then(function () {
  //console.log(url);
  console.log('MongoDB is connected');
})
  .catch(function (err) {
    console.log(err);
  });

//Define a schema
var Schema = mongoose.Schema;

var QuestionSchema = new Schema({
  questionId: Number,
  numOfAnswer: Number,
  numOfCorrect: Number
});

// Compile model from schema
var Question = mongoose.model('Question', QuestionSchema );


/* GET api listing. */
router.get('/', (req, res) => {
  res.send("api works");
});

router.get('/question',(req, res) => {
  res.header("Content-Type",'application/json');
  let url = '../json/question';
  //default questionId if no argument detected
  let questionId = 1;
  if (req.query.id !== undefined){
    questionId = parseInt(req.query.id);
  }
  url = url + questionId.toString() + '.json';
  let data = require(url);
  //get history info from database
  Question.find({questionId:data.questionId},function (err, question) {
    if (err) return console.error(err);
    if (question.length===0){
      let q = new Question({
        questionId: data.questionId,
        numOfAnswer: 1,
        numOfCorrect: 1 });
      q.save(function (err) {
        if (err) return handleError(err);
        // saved!
      });
    }else{
      data.historyAnswerNum = question[0].numOfAnswer;
      data.historyCorrectNum = question[0].numOfCorrect;
    }
    res.send(JSON.stringify(data));
  })
});

router.post('/submit',(req,res)=> {
  console.log(req.body);
  Question.find({questionId: req.body.questionId}, function (err, question) {
    if (err) return console.error(err);
    if (question.length === 1) {
      question[0].numOfAnswer++;
      if (req.body.isCorrect === 'true') {
        question[0].numOfCorrect++;
      }
      console.log(question[0]);
      question[0].save(function (err) {
        if (err) return handleError(err);
        // saved!
      });
    }
    res.send('ok');
  })
})


router.get('/report', (req,res)=> {
  res.header("Content-Type",'application/json');
  const num = req.query.correctNum;
  let url = '../json/report.json';
  let data = require(url);
  let correctPercent = num/10*100;

  data.correctNum = num;
  data.accuracy = correctPercent + '%';
  if(correctPercent >= 80){
    data.badge = 'Excellent';
  }
  else if(correctPercent >= 60 && correctPercent < 80){
    data.badge = 'Nice work';
  }
  else{
    data.badge = 'Try harder';
  }
  res.send(JSON.stringify(data));


})

  module.exports = router;

// Question.find(function (err, questions) {
//   if (err) return console.error(err);
//   console.log(questions);
// })

