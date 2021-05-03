# Evaluation

## Contents

* [1. Details of evaluation of our design](#_1)
    * [Techniques used & awareness of their limitations](#_1.1)
    * [A timeline of evaluation of our design](#_1.2)
    

* [2. Unit testing / Functional testing](#_2)
    

* [3. User acceptance testing](#_3)
    
    

<a name="_1"></a>
## 1. Details of evaluation of our design

First we will describe the techniques we used and evaluate if they are suitable for our particular design.

<a name="_1.1"></a>
### - Techniques used & awareness of their limitations

* **MEAN stack**<br/>
  Our team strictly follow the recommended technical stack, and as we design, implement and test our application, we find it is truly the most appropriate one. Have a look at our application, we can find that it is a front-end-leading project. Therefore, we need a strong frontend framework to support fast-developing and a relatively simple backend framework to deal with requests. Angular and Express, in the end, serve quite well. As will be discussed in future work section, the good part of express can be a weakness when the website grows, but currently for a SPA web page, it is the best chance.
  
* **MongoDB vs. relational database**<br/>
  We have a simple and clear data model for database part. Since the website always treat visitors as anonymous guests, we are not expecting the database to hold username or passwords. Also, the website contains only one function that is a quiz game, which makes non-relational database a better choice over relational ones like MySQL.



</br></br>

[Back to the homepage](../../README.md)
