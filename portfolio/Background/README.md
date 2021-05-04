# Background and Motivation

In this section, we describe the theoretical foundation (i.e., code quality and gamification), discuss the industrial survey of our product, and explain the problem definition and our motivation.

## Contents

* [1. Background literature and academic research review](#_1)
    * [Code quality](#_1.1)
    * [Gamification in SE education](#_1.2)

* [2. State of the art survey and current industry review](#_2)
    * [SE education game](#_2.1)
    * [Code quality-related applications](#_2.2)  

* [3. Definition, scope and challenge of the problem](#_3)
   




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

**"shitcode" forum**[9]
It is a forum named ‘shitcode’ where users can post a piece of code of any language and get the code quality feedback totally from other users: ‘vote up’ / ‘vote down’ / comments.

**pros**:</br> 
funny name and theme;</br>
open-source platform;</br>
ranking of top/worst code

**cons**:</br> 
not suitable for beginners (outcomes voted by users might be wrong);</br> 
much code is not voted at all

**An online judge to access students code quality**
Remin Kasahara et al. proposed a gamified system that an online judge measures student submitted code for a programming problem, and instantly shows the CC (cyclomatic complexity) score with a leaderboard to the student. Student can resubmit multiple times, but the system only records the smallest CC score.[10]

**pros**:</br> 
leaderboard

**cons**:</br> 
only one aspect of code quality(CC);</br> 
no suggestions of improvement;</br> 
insufficient fun elements

**Refactor4Green: a game to teach code refactoring**
Vartika Agrahari and Sridhar Chimalakonda proposed a game that player as a nature lover & novice software engineer, need to solve puzzles and quizzes related to code smell, and collect awarded coins to recover the greenery. [11]

**pros**:</br> 
interesting with a storyline;</br> 
clear guidance of code smell’s category

**cons**:</br> 
challenges are static;</br> 
Discordant question UI



</br></br>

[Back to the homepage](../../README.md)
