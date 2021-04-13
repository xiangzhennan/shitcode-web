# System Implementation

## Contents

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

## Back End - MongoDB - database implementation

In the MEAN stack, MongoDB stores the application’s data. When in production we host MongoDB in a container on the same server. We also have a local version for development and testing.


## Middle Tier - Express, Node, the RESTful API

Node.js is the backbone of the MEAN stack and Express is a web application framework for Node.js. Express handles all the interactions between the frontend and the database, ensuring a smooth transfer of data to the end user.



## Front End - Angular

We use AngularJS to build the user-facing side of the application.


## Deployment details - Docker

To improve portability and ease deployment we use Docker to manage the Node/Mongo environment and ensure that others can easily recreate our production system.
