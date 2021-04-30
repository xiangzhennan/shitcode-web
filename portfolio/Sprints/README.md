# Sprints & Project Management

## Contents

* [Group working methods](#_group)
    * [Workflow](#_workflow)
    * [Agile development](#_agile)
    * [Communication channel](#_communication)

* [A summary of team roles and individual contributions](#_team)
    * [Zhennan Xiang](#_Xiang)
    * [Shujie Liu](#_Liu)
    * [Sheng Guo](#_Guo)
    * [Karine Liang](#_Liang)
    * [Shengzhe Qin](#_Qin)

* [Documentation of sprints](#_sprints)
    * [High level overview](#_s1)
    * [Timeline](#_s2)
    * [Sprint 1: First prototype (25 Feb – 18 Mar)](#_s3)
    * [Sprint 2: Alpha version release (18 Mar – 8 Apr)](#_s4)
    * [Sprint 3: Beta version release (8 Apr – 22 Apr)](#_s5)
    * [Sprint 4: Version 1.0 release (22 Apr – 7 May)](#_s6)
    * [Meeting logs](#_s7)
    
* [Team use of Git - continuous integration and deployment](#_git)
    

<a name="_group"></a>
## Group working methods

To develop an application in a group, we apply the principles of DevOps and stick to the selected methodology to keep out project on track and moving at a constant pace.

<a name="_workflow"></a>
### - Workflow
We take an iterative approach to workflow management and break down larger issues into smaller units of work to help us meet our goals faster. Our workflow includes the following four states.
* **TO DO**<br/>
  Work that has not been started
* **IN PROGRESS**<br/>
  Work that is actively being looked at by the team
* **CODE REVIEW**<br/>
  Work that is completed and awaiting review
* **DONE**<br/>
  Work that is completely finished and meets the team's definition of done

<img src="../images/workflow.jpeg" width="500" />


<a name="_agile"></a>
### - Agile development

By contrasting the different models for software development, we decide to go for the Agile approach to develop application in incremental and rapid cycles. 
Following Agile model, we decide what can be accomplished in the timeframe at the beginning of a sprint and sets out to build a series of features, deliver working software that can be installed in a production environment at the end of the sprint, which meets the demand for faster software development.

The key activities we follow during each Agile development cycle are as below: 
* **Requirements** - Define the requirements for the iteration based on the application backlog and stakeholder feedback.
* **Design** - The team discusses how to tackle these requirements, and proposes the tools needed to achieve the best result. The developers discuss the feature implementation and the internal structure of the outcome.
* **Development** - Start working on the project, which aims to deploy a working application. The application will undergo various stages of improvement and comprise of simple, minimal functionality.
* **Testing** - Unit testing, functional testing, user acceptance testing.
* **Deployment** - Integrate and deliver the working iteration into production.
* **Review** - Accept user and stakeholder feedback and work it into the requirements of the next iteration.

<img src="../images/Agile_model.jpeg" width="500" />

<a name="_communication"></a>
### - Communication channel

* **Teams** - We use Teams to have our weekly meeting and schedule team standups.
* **GitHub** - We use GitHub to share documents, implement version control and merge our outputs for effective collaboration.
* **Kanban** - We use Kanban Board for task allocation and progress monitoring. It makes the progress of our project transparent and helps us more better monitor how far we've come and what's left to do.


<a name="_team"></a>
## A summary of team roles and individual contributions

<a name="_Xiang"></a>
* **Zhennan Xiang**

Xiang's role in the team is more focused on technical side and project structure. Since early stage when idea of website was set, I began to design and document the essential frontend components, backend APIs and data models.

To be specific, Xiang has done the following things:
1)	API documenting
2)	component listing
3)	backend development and first version of prototype website (including only static json in backend and router in frontend)
4)	database building and integrating
5)	testing and evaluation

<a name="_Liu"></a>
* **Shujie Liu**

Liu's role in the team is a organiser and communicator， working on hosting weekly meeting, coordinating works and communication among teammates and controlling the progress of the project. She participated in the development of the backend and was mainly responsible for the implementation of report API and related features.

To be specific, Liu mainly contributed to the following things:
1) part of backend development
2) UX design including paper prototyping and understanding of user group
3) project management
4) report integration and quality control

<a name="_Guo"></a>
* **Sheng Guo**

<a name="_Liang"></a>
* **Karine Liang**


<a name="_Qin"></a>
* **Shengzhe Qin**

Qin's role in the team is more inclined to the front-end page design and peripheral system building assistance.
Qin participated in the specific function design on the initial creative stage of the website, responsible for development and style design of welcome and report pages. Qin also designed the questionnaire and collected user feedback for analysis during the evaluation phase.

Specifically, Qin mainly contributed to the following things:
1) Initial creativity
2) Part of function design
3) Design for welcome page and report page
4) Research on font and image library and providing suitable options
5) Designing questionnaire and analyzing user feedback for evaluation


<a name="_sprints"></a>
## Documentation of sprints

<a name="_s1"></a>
### - High level overview
As mentioned above in our system implementation we decided on the agile approach which features breaking down of project into sprints.

At the beginning of each sprint, we decided the features that we would implement during that sprint, the tests that we expected each subsystem to pass, and the user stories that we expected to be satisfied by the implementation of those features.

During each iteration we defined the requirements based on the backlog from previous sprints, and test user feedback. We then designed the software based on the requirements. Finally, we evaluated our previous version before defining the requirements for the next sprint.

<a name="_s2"></a>
### - Timeline

<a name="_s3"></a>
### - Sprint 1: First prototype (25 Feb – 18 Mar)


| Agile development cycle  | Description      | 
| ------------------------ | ---------------- |
| Requirements    | Defined overall infrastructure;</br>Defined minimum viable product (MVP) with functions/classes/variables;</br>Develop first prototype and make it work;     | 
| Design          | Paper prototyping and draw website wireframes;</br>Design Angular components of each page [(Click here to check)](../System_implementation/README.md#_list);</br>Design RESTful API [(Click here to check)](../System_implementation/README.md#_api);     |  
| Development     | Implement Node.js server, create question API;</br>Create components of welcome page, question page and report page with only text description, necessary buttons but no style; |
| Testing         | Test APIs and internal logic on Express with `node server.js`; |
| Deployment      | Deploy on local [(Click here to check video of first prototype)](https://youtu.be/6PBFm8z1YCs) |
| Users stories   | **Emma (End-user)**:</br>I only saw some buttons to click to jump to different pages. I had no idea how to play with it or interact with it. It was a too simple web page only. |
| Review          | Backlog and things to do:</br>Develop on front-end to make it more functional and interactive;</br>Build up database to store related data;</br>Work on the rest of APIs by further development on back-end |

<a name="_s4"></a>
### - Sprint 2: Alpha version release (18 Mar – 8 Apr)

| Agile development cycle  | Description      | 
| ------------------------ | ---------------- |
| Requirements    | Fulfill functionality of each component on frontend;</br>Develop report API and submit API;</br>Build up database on backend;</br>Implement deployment on docker     | 
| Design          | List design detail of each component and internal logic between components;</br>Design database model and schema, decide what data to store and how to store it;|  
| Development     | Implement integrated development on frontend;</br>Work on the development of the rest of APIs on backend;</br>Create a service to handle the http calls and connect components to APIs;</br>Implement MongoDB and manage the storage of data |
| Testing         | Execute unit testing |
| Deployment      | Deploy on docker [(Click here to check video of alpha version)](https://youtu.be/Z3gb-ht5-jM) |
| Users stories   | **Emma (End-user)**:</br>I could see what the system looks like and what I could do with it, although the UI design is not pretty. I was willing to have a try and play it, however, the whole experience looked like taking a test. I didn't enjoy it and felt it playful |
| Review          | Backlog and things to do:</br>Enhance UI design and make it more playful;</br>Design the welcome page and introduce the game;</br>Work on report page to make the game more competitive |



<a name="_s5"></a>
### - Sprint 3: Beta version release (8 Apr – 22 Apr)
implement get-report feature
</br>Decide what data to show on the report and how to collect and calculate it; 
https://youtu.be/5RtuafF8Iko
<a name="_s6"></a>
### - Sprint 4: Version 1.0 release (22 Apr – 7 May)

<a name="_s7"></a>
### - Meeting logs


<a name="_git"></a>
## Team use of Git - continuous integration and deployment

[Back to the homepage](../../README.md)
