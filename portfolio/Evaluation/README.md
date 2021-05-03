# Evaluation

## Contents

* [1. Details of evaluation of our design](#_1)
    * [Techniques used & awareness of their limitations](#_1.1)
    * [A timeline of evaluation of our design](#_1.2)
    

* [2. Unit testing / Functional testing](#_2)
    * [API testing with python](#_2.1)    

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

<a name="_1.2"></a>
### - A timeline of evaluation of our design

Under the guidance of workbook, we follow the workflow as below.
* **Unit testing timeline** (roughly from the beginning of TB2 to the middle of Easter vacation)<br/>
For separated implementing stage, frontend team members pull from “frontdev”, implementing their own part of work and executing unit tests, then push it back to frontdev, and backend team did similar thing with “xzn” branch.
* **Functional testing** (during Easter vacation until 23rd April)<br/>
After integrating the frontend and backend, all team members pull from “dev”, execute functional tests and push back. At this stage, some changes are made based on testing.
* **User acceptance testing** (23rd April onwards)<br/>
At this stage, only a little changes are made based on testing. After first round of user testing (23rd April), “dev” branch is merged into “main” for the first time, but still, some bug fixing remain in “dev” branch.
* Final push to “main” to form a completed project and report after bug free in “dev” branch.

</br>

<a name="_2"></a>
## 2. Unit testing / Functional testing

Testing happens along with developing. Some details are introduced in the system implementing part.

<a name="_2.1"></a>
### - API testing with python
For integration test, since we only have three APIs to test and logic behind those requests is easy, our team decided to use python scripts to automatically test APIs. The basic idea is to use assert to check the contents of responses. For example, to test the post request which updates history info in MongoDB, we sent a mock get request to localhost before and after post request, then we check the history info to see if historyAnswerNum increased by one. You can refer to the part of code as below.

```javascript
response = requests.post(url, data=json.dumps(data), headers={"Content-Type": "application/json"})
assert (response.text == 'ok')
response = requests.get(questionUrl + "1").text
// after a post request
afterPost = requests.get(questionUrl + "1").text
answerNumAfter = json.loads(afterPost)['historyAnswerNum']
answerCorrectNumAfter = json.loads(afterPost)['historyCorrectNum']
assert (answerCorrectNumAfter == answerCorrectNumBefore + 1)
assert (answerNumAfter == answerNumBefore + 1)
```

</br>

<a name="_3"></a>
## 3. User acceptance testing

Good thing about user acceptance testing for our website is all our classmates of MSc computer science program can be a member of potential user. They have learnt some basic knowledge and skills about coding but are not professional enough or experienced enough, very close to target user of this website.

We introduced user testing in each cycle of our sprints. But the first several sprints only involved small-scale tests which focused on our key users. Check user stories of each sprint for detail. The massive user acceptance test was taken on 23rd April onwards. Two stages were set for that, cognitive walk-through and user questionnaire. 

<a name="_3.1"></a>
### - Cognitive walk-through
First, we want the user to do what is called cognitive walk-through. In this stage, users are given no guidance for exploring the whole website so they will have to read the sentences on the page and try any buttons they can see. In this way, we can get useful feedbacks about how well we designed the UX.

<a name="_3.2"></a>
### - Design questionnaire to get feedback
Second, we want users to comment on the real content of the website. In our case, it is how they feel about the importance of code quality after playing the quiz game.
An online survey of four multiple-choice questions is designed to collect advice as well as complaints, in order to help us understand and analyze feedback from users. 

The first draft of the questionnaire is shown as below.

```
Can you manage to finish the whole quiz without any help from developers?
a.yes   b.met some problems
How do you feel about the quiz process?
a.easy to explore  b.not good, sometimes I get lost
How do you feel about the style of the website?
a.good  b.ugly
Do you think this website help raise your awareness of the importance of code quality?
a.yes    b.no
```

The final online version is shown as below.

<img src="img/q1.png" />
<img src="img/q2.png" />


</br></br>

[Back to the homepage](../../README.md)
