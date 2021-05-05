# Background and Motivation

## Contents

* [1. Background literature and academic research review](#_1)
    * [Code quality](#_1.1)
    * [Gamification in SE education](#_1.2)

* [2. State of the art survey and current industry review](#_2)
    * [SE education game](#_2.1)
    * [Code quality-related applications](#_2.2)
    * [Related work](#_2.3)
    * [Trend analysis & implication](#_2.4)
    * [Gap in the market](#_2.5)

* [3. Definition and challenge of the problem](#_3)
    * [Problem definition & challenge](#_3.1)
    * [Motivation](#_3.2)

* [4. Reference](#_4)

<a name="_1"></a>
## 1. Background literature and academic research review

<a name="_1.1"></a>
### - Code quality

Writing good code is not just about correct operation - code may compile and pass all of the tests, but may still be badly written. Good programmers also care about the code quality, which refers to non-functional requirements that would have long-term impacts for a program, such as reliability, maintainability and reusability.

Code quality issues can be related to documentation, presentation, algorithms and structure, among which the structural issues are often described as ‘Code Smell’ to indicate poor structural design or implementation[1]. Bad code smells may slow down development or increase the risk of bugs or failures in the future. If code smells are not identified and refactored timely, they will accumulate and finally grow into a big monster of ‘Technical Debt’ [2]– an implied cost of additional rework caused by choosing a relatively quick but poor code-quality way to deliver product or new features. The decision of sacrificing code quality to replace for efficiency is not really effective, because the bill of bad structure design is temporally hanged on for short term, but more technical interests are needed to be paid in the future, which is a disaster.

In the context of team developing, bad coding habits lower the readability of code, and increase the difficulty for other team members to understand and refactor the code. Recent figure illustrates that large software organizations spend about 25% of the entire development time on managing technical debt [3], which greatly reduces the productivity.

With the concern of risk and cost management of product in team developing, it’s important to prevent code quality issues from happening in the very begging stage. According to recent research, there are only about 30% of surveyed universities cover code quality-related topic in the introductory programming courses [4], which is definitely an insufficient level. 

Therefore, we believe it’s worthwhile to raise the awareness of programmers, especially programming learners, about the importance of code quality and increase their ability to identify elegant code and sniff the code smell.

<a name="_1.2"></a>
### - Gamification in SE education

Gamification is a strategy that apply game-design elements and game principles in non-game contexts[5]. In particular, the concept of ‘Serious Game’ provides a useful design pattern to reflect a serious problem in reality which aims at thoughtful educational but not entertaining purpose[6], and present the serious problem in an interesting way. 

In the education area, there’s an increasing trend of using serious games within university curricula for students to consolidate learning or enhance knowledge[7]. In terms of the software engineering (SE) education field, previous researches have pointed out the value of gamification - enhancing developers’ interest and motivation in carrying out SE tasks, and proposed a framework for the gamification of SE activities[8].

Therefore, we decide to choose the strategy of ‘serious game’ to increase users’ motivation and engagement in learning the code quality.

<br/>

<a name="_2"></a>
## 2. State of the art survey and current industry review

<a name="_2.1"></a>
### - SE education game

In recent years, numerous coding games designed for beginners are appearing. Some are designed to familiar users with a certain language, such as SQL Murder Mystery and CSS Diner; some are designed for practicing algorithm optimization, such as Elevator Saga; some are focused on training modular programming skill, such as Code Combat. 

Although the market of programming games is promising, topics of these games are mainly about operation and features implementation of code. It’s hard to see code quality-related games.

<a name="_2.2"></a>
### - Code quality-related applications

Compared with the insufficient number of code quality-related games in the market, tools for statically evaluating code quality through analysis of software inner structure are common. Tools such as SonarQube, JArchitect and NDepend can provide decision support for software engineers. They are extensively used in the code refactoring process.

However, the tools only control the outcome in a stage when the code quality issues have already happened, but cannot avoid or decrease the possibility of these issues. Also, the target users of these tools are not beginners in schools or training classes, but more mature developers in the real production environment. 

<a name="_2.3"></a>
### - Related work

**"shitcode" forum**[9]</br>
It is a forum named ‘shitcode’ where users can post a piece of code of any language and get the code quality feedback totally from other users: ‘vote up’ / ‘vote down’ / comments.</br>
* **pros**:</br> 
funny name and theme;</br>
open-source platform;</br>
ranking of top/worst code</br>
* **cons**:</br> 
not suitable for beginners (outcomes voted by users might be wrong);</br> 
much code is not voted at all

**An online judge to access students code quality**</br>
Remin Kasahara et al. proposed a gamified system that an online judge measures student submitted code for a programming problem, and instantly shows the CC (cyclomatic complexity) score with a leaderboard to the student. Student can resubmit multiple times, but the system only records the smallest CC score.[10]</br>
* **pros**:</br> 
leaderboard</br>
* **cons**:</br> 
only one aspect of code quality(CC);</br> 
no suggestions of improvement;</br> 
insufficient fun elements

**Refactor4Green: a game to teach code refactoring**</br>
Vartika Agrahari and Sridhar Chimalakonda proposed a game that player as a nature lover & novice software engineer, need to solve puzzles and quizzes related to code smell, and collect awarded coins to recover the greenery.[11]</br>
* **pros**:</br> 
interesting with a storyline;</br> 
clear guidance of code smell’s category</br>
* **cons**:</br> 
challenges are static;</br> 
discordant question UI

**Clean Game: a game to identify code smells**</br>
Hoyama Maria dos Santos et al. proposed a gamified software tool that is composed of smell-related quiz (presented in multiple choices) and code smell identification task (presented in IDE). The correct answers and time bonus are awarded with points, while wrong answers, skip or get tips will get points penalty. [12]</br>
* **pros**:</br> 
leaderboard;</br> 
progress bar;</br> 
skip button;</br> 
adjustable difficulty level (time limit, tips);</br> 
multiple functions</br>
* **cons**:</br> 
insufficient fun elements (UI similar to online exam)

<a name="_2.4"></a>
### - Trend analysis & implication
It’s clear that previous code quality-related game prototypes mainly use the quiz as a main method to convey the knowledge (such as e.g., 3 & 4). Leaderboard is extensively used among all the prototypes, because it would create another incentive for users with frustrating grade. It’s also worth highlighting the importance of adding fun and interesting elements to a game to motivate users (such as e.g., 1 & 3). To make our game more user-friendly, some features such as ‘skip button’, ‘progress bar’ and ‘guidance of smell category’ are also worthy to be added to the scope of our product.

<a name="_2.5"></a>
### - Gap in the market
We managed to figure out the reason why games under the topic of code quality are much less than other SE education games in the market. After conducting our state-of-the-art survey, we have found the answer. The popular SE games in the market are usually with interesting setting, like memorable game elements. However, the gamified prototypes of code quality in recent years are relatively function oriented. They overlook the design of fun elements to a certain extent, so it becomes difficult to attract public’s attention.

In order to balance the serious and playful aspects of our game, we have made some difference to innovate our product’s setting from previous solutions. To start with, we borrow the concept of ‘shit code’ and choose a funny and interesting element – the popular ironic emoji ‘poop’ to represent the code smell or poor-quality code. Also, we opposite the usual pattern of choosing ‘correct/good code’ and encourage users to choose the ‘shit code’ – we believe it’s ironic and amusing, as well as an efficient way to help users build a more critical thinking about code smell issues. 

</br>

<a name="_3"></a>
## 3. Definition and challenge of the problem

<a name="_3.1"></a>
### - Problem definition & challenge
Our problem definition is poor code quality issues and insufficient awareness of code quality in Software engineering education. Our proposed solution is to encourage programmers to compare two good or poor-quality code and their coding principles through online gamified quiz, to give users a clear understanding of code quality importance as well as code smell identification. 

It’s clear that code quality issues are not only about fostering beginners to learn about elegant code and code smell, but also about code review and code refactoring. However, the challenge of this problem, goes beyond the scope of our project. In light of this, our scope is narrowed to focus on controlling the source of the problem – take precautions for our target users before the developing stage.

<a name="_3.2"></a>
### - Motivation
The motivation behind our webpage is to create a game which is capable of combining SE education with entertainment. Because most of us are programming beginners, we understand that it is sometimes hard or boring to digest the concepts written in the textbook. Therefore, we think it might be a good idea to use gamification to present the dull concepts in a more interactive and funny way. The aim is to create a game that help CS learners understand code quality in a playful and impressive way through a short but thoughtful quiz game, and also to increase learner’s further interest in code learning.

</br>

<a name="_4"></a>
## 4. Reference
[1] Fowler, Martin. Refactoring: improving the design of existing code. Addison-Wesley Professional, 2018.</br>
[2] "Definition of the term "Technical Debt" (plus, some background information and an "explanation")". Techopedia. Retrieved August 11, 2016.</br>
[3] Martini, Antonio, Terese Besker, and Jan Bosch. "Technical debt tracking: Current state of practice: A survey and multiple case study in 15 large organizations." Science of Computer Programming 163 (2018): 42-61.</br>
[4] Kirk, Diana, et al. "On assuring learning about code quality." Proceedings of the Twenty-Second Australasian Computing Education Conference. 2020.</br>
[5] Sebastian Deterding; Dan Dixon; Rilla Khaled; Lennart Nacke (2011). From game design elements to gamefulness: Defining "gamification". Proceedings of the 15th International Academic MindTrek Conference. pp. 9–15. </br>
[6] Djaouti, Damien; Alvarez, Julian; Jessel, Jean-Pierre; Rampnoux, Olivier (2011). "Origins of serious games". Serious Games and Edutainment Applications. Springer: 25–43. </br>
[7] Moro, Christian; Phelps, Charlotte; Stromberga, Zane (2020-08-14). "Utilizing serious games for physiology and anatomy learning and revision". Advances in Physiology Education. 44 (3): 505–507. </br>
[8] Alhammad, Manal M., and Ana M. Moreno. "Gamification in software engineering education: A systematic mapping." Journal of Systems and Software 141 (2018): 131-150.</br>
[9] https://shitcode.net/best </br>
[10] Kasahara, Remin, et al. "Applying gamification to motivate students to write high-quality code in programming assignments." Proceedings of the 2019 ACM Conference on Innovation and Technology in Computer Science Education. 2019.</br>
[11] Agrahari, Vartika, and Sridhar Chimalakonda. "Refactor4Green: a game for novice programmers to learn code smells." 2020 IEEE/ACM 42nd International Conference on Software Engineering: Companion Proceedings (ICSE-Companion). IEEE, 2020.</br>
[12] dos Santos, Hoyama Maria, et al. "CleanGame: Gamifying the Identification of Code Smells." Proceedings of the XXXIII Brazilian Symposium on Software Engineering. 2019.

</br></br>

[Back to the homepage](../../README.md)
