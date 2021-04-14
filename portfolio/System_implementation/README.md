# System Implementation

## Contents

* [Stack architecture and system design](#_stack)
    * [Sequence diagram](#_sequence)
    * [Class diagram](#_class)

* [Back End - MongoDB - database implementation](#_backend)

* [Middle Tier - Express, Node, the RESTful API](#_middle)
    * [Document for API](#_api)

* [Front End - Angular](#_frontend)
    * [List of components](#_list)

* [Deployment details - Docker](#_deploy)

<a name="_stack"></a>
## Stack architecture and system design

We worked on a quiz challenge single page application that comprises of animation interaction to make the learning process more fun. After discussion of function and implementation, we decided to choose MEAN stack to develop the application in terms of its benefit of flexibility, scalability and extensibility. 

The client side is the web page which runs in the browser. On the client, we use Angular to render the content in JS and complete client-side operations.

As for backend, we use Node, Express and MongoDB for the serving of pages, the business logic and storage. We make requests over RESTful APIs and pass data in JSON format between the client and server.
<br/><br/>
<p float="left">
  <img src="../images/MEAN_stack1.jpeg" width="500" />&nbsp;
  <img src="../images/MEAN_stack2.jpeg" width="500" />
</p>
<br/><br/>

<a name="_sequence"></a>
### Sequence diagram
<img src="sequence_diagram.jpeg" width="700" />

<a name="_class"></a>
### Class diagram
We create three main components "welcome", "question" and "report" to render related pages and process business logic. We also create a data service to fetch and modify data between server and frontend. Read the following sessions for detail of each part.

![Class](class_diagram.jpeg)

<a name="_backend"></a>
## Back End - MongoDB - database implementation

In the MEAN stack, MongoDB stores the application’s data. When in production we host MongoDB in a container on the same server. We also have a local version for development and testing.

Data format of the project was set early from API documenting stage. However, for backend, the problem is where to store and get those json data.

Two ways are available, static data or use mongo DB. Obviously, we can use mongo DB to store everything and get everything. This is simple and easy to implement. However, there are things that are fixed for the project, like the content of a question and shit-code principles. Data like this is more appropriate to be static data.

The final design decision we make is to only store history answer message in the database. Fixed data is stored in server side as .json file. When there is a request for question, we use require(‘xx.json’) to get a json template, use mongo DB to get history info, and then assemble them together. This also happens when we assemble a report json data.

By doing this, we make the best use of mongo DB, static data is separated from dynamic ones.

<a name="_middle"></a>
## Middle Tier - Express, Node, the RESTful API

Node.js is the backbone of the MEAN stack. We choose Express as a web application framework for Node.js. We use Express to handle all the interactions between the frontend and the database, ensuring a smooth transfer of data to the end user.

Since the whole project takes a separated front-end and back-end method to implement. Early confirmation of api interface and data model becomes really vital. This part is finished by back-end team so that front-end team can focus more on displaying. 

<a name="_api"></a>
### Document for API
Our group used a website called show-doc(https://www.showdoc.com.cn/) to help with documenting apis. We build up three APIs in api.js file to operate data between frontend and backend. A total of three APIs were set before the group began to implement the whole thing. These APIs originally came from paper prototyping stage where we explored further into what kind of action/url and data models the website need. 
Read the following API documents for details.
* [Document for submit API](submit_api.md)
* [Document for question API](question_api.md)
* [Document for report API](report_api.md)

API document had only some little change over the implementing process. To be specific, only some details of json data were changed. This allows the whole team being quite efficient when implementing.

<a name="_frontend"></a>
## Front End - Angular

We use AngularJS to build the user-facing side of the application.

We use Angular components to amend the HTML, styling and logic for user interface which is rendered. After designing the function of the application, we build three main components to define areas of responsibility in the user interface. Each component controls a patch of screen view. We interact with these views via properties and methods contained within those components.
<a name="_list"></a>
### List of components
The following table lists the components we design and create. Then we develop frontend web pages based on these components.

| No.  | Page      | Component   | Implementation                                                                | Binding event<br>(request or function)    |
| ---- | --------- | ----------- | ----------------------------------------------------------------------------- | ----------------------------------------- |
| 1    | index     | intro       | Text box, the content is fixed in html                                        |                                           |
| 2    | index     | start-exam  | Start answer button                                                           | /question?id=                             |
| 3    | question  | principle   | 1. Text box, the content is obtained from json<br>2. After the confirm button is triggered, display code principle |      |
| 4    | question  | option      | 1. Text box, selectable (highlighted), the content is obtained from json<br>2. After the confirm button is triggered, trigger the animation according to the result |     |
| 5    | question  | confirm     | 1. Confirm button<br>2. Bind click, pop up assert if option is not selected<br>3. After clicking, verify and record the answer, trigger the animation<br>4. At the end of the animation, jump to the next question<br>5. Automatic submission after the last question |updateAnswers()<br>feedbackAnswer()<br>/report?correctNum= |
| 6    | question  | getreport   | 1. Get report button<br>2. Bind click, pop up assert if option is not selected<br>3. After clicking, verify and record the answer, trigger the animation | updateAnswers()<br>feedbackAnswer() |
| 7    | question  | status-bar  | 1. Unordered list, buttons for question numbers<br>2. Highlight according to the completion process | /question?id=       |
| 8    | question  | history     | 1. Text or image<br>2. Display history info, obtained from json<br>3. Stay hidden when answering a question, display after click 'confirm' |    |
| 9    | report    | report      | Text box, the content is obtained from json |   |
| 10   | report    | goback      | Button, return to the question page |   |

<a name="_deploy"></a>
## Deployment details - Docker

To improve portability and ease deployment, we use Docker to manage the Node/Mongo environment and ensure that others can easily recreate our production system.
