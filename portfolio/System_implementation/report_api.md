# Document for report API

The API is used for fetching data for final report.

* **URL**

  api/report/{correctNum}

* **Method**

  `GET`

* **URL Params**

  **Required:**
  
  `correctNum=[integer]`

* **Sample Return:**

  ```javascript
  {
    "correctNum": 5,
    "accuracy": "50%",
    "badge": "Try harder"
  }
  ```
* **Return Params**
  | Params            | Type          | Comment                                                         |
  | ----------------- | ------------- | --------------------------------------------------------------- |
  | correctNum        | int           | Number of correct answers                                       |
  | accuracy          | string        | correctNum/total number of questions, shown in percentage       | 
  | badge             | string        | accuracy>=80%,"Excellent"; >=60%,"Nice work"; <60%,"Try harder" |
  
