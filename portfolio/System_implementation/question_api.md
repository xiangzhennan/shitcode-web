# Document for question API

The API is used for fetching data for question.

* **URL**

  api/question/{id}

* **Method**

  `GET`

* **URL Params**

  **Required:**
  
  `id=[integer]`

* **Sample Return:**

  ```javascript
  {
    "questionId":1,
    "principle": "shitcode rule one: use variable name with no actual meaning",
    "realPrinciple": "coding rule one: use variable with valid meaning",
    "options": [{
       "optionId": 1,
       "content": "int i = 0"
     },
     { "optionId": 2,
       "content": "int numOfStudent = 0"
     }],
     "correctId":2,
     "historyCorrectNum": 0,
     "historyAnswerNum": 0
  }
  ```
* **Return Params**
  | Tables        | Are           | Cool  |
  | ------------- |:-------------:| -----:|
  | col 3 is      | right-aligned | $1600 |
  | col 2 is      | centered      |   $12 |
  | zebra stripes | are neat      |    $1 |
