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
    "principle": "shitcode one: Name variables in an obfuscated way",
    "realPrinciple": "coding rule one: Name variables with valid meaning",
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
  | Params            | Type          | 
  | ----------------- | ------------- | 
  | questionId        | int           | 
  | principle         | string        |   
  | realPrinciple     | string        |
  | options           | list          |
  | optionId          | int           |
  | content           | string        |
  | correctId         | int           |
  | historyCorrectNum | int           |
  | historyAnswerNum  | int           |
