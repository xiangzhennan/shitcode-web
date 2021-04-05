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

//const url = `mongodb://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}?authSource=admin`;
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

// Create an instance of model SomeModel
var q1 = new Question({
  questionId: 1,
  numOfAnswer: 1,
  numOfCorrect: 1 });

// Save the new model instance, passing a callback
q1.save(function (err) {
  if (err) return handleError(err);
  // saved!
});

Question.find(function (err, questions) {
  if (err) return console.error(err);
  console.log(questions);
})

