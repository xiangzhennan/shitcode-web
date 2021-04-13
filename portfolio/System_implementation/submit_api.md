# Document for submit API

The API is used for modifying related data in database when a user submits an answer.

* **URL**

  api/submit/

* **Method**

  `POST`

* **URL Params**

  **Required:**
  
  `questionId=[integer]`
  
  `isCorrect=[boolean]`

* **Sample Call:**

  ```javascript
  {
    "questionId":2,
    "isCorrect":true
  }
  ```
  
* **Sample Return:**

  ```javascript
  {
    "ok"
  }
  ```
* **Return Params**
  | Params            | Type          | Comment                                                            |
  | ----------------- | ------------- | ------------------------------------------------------------------ |
  | None              | string        | return message "ok"                                                | 

