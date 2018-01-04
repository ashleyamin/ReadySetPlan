# ![](https://ga-dash.s3.amazonaws.com/production/assets/logo-9f88ae6c9c3871690e33280fcf557f33.png) Project #2: CRUD Application

#### Overview

Build a web-based CRUD application

## Deliverables

- A full CRUD app, with create, edit, and delete functionality that has at least 2 related models and ulilizes a 3rd party API and is hosted on Heroku
- A public repository on **Github.com** with your code for this project & a thorough commit history dating back to the beginning of the project
- A thorough `README.md` file that contains the following:
    - The project's name and description
    - Your wireframes and user stories
    - The technologies, APIs, and modules you used and a description of each
    - A code snippet of a part of the app you're particularly proud of
    - Any things you plan to fix or features you plan to add
    - Instructions for downloading the code and running it on localhost
- A presentation in class that:
    - Is 5 minutes in length
    - Shows off the features of the app you're most proud of
    - Explains one or two technical details
    - Explains one or two technical challenges
    - Explains which improvements you might make

---

## Tech Requirements

You will be expected to use the following technologies to implement this project:

- **HTML / EJS**: Your HTML should be semantic and valid. Your app uses EJS to render information on the page.
- **Node and Express**: Your app will need to have its own server, built using Express.
- **MVC Pattern**: Your app uses Models, Views, Controllers pattern we have gone over in class.
- **SQL / PG-PROMISE**: Your app will need to persist data. Your app should have **at least two related models**.
- Your app will need to make a third-party API call from the back-end using ANY npm package of your choosing.
    - [List of public APIs](https://github.com/toddmotto/public-apis)
    - [Another list of public APIs](https://github.com/abhishekbanthia/Public-APIs)
    - [Yet another list of public APIs](https://github.com/alexpanov/public-apis)
    - TRY OUT your API in postman before you get too emotionally invested in it, to make sure it works the way you think it does...
- **CSS & Design**: Your app should be pleasing to look at. Your design should take usability into account.

---

# Project Overview

## Project Schedule

|  Day | Deliverable | Approval From Squad Lead
|---|---| ---|
|Day 1: Thur| Idea, Wireframes and Priority Matrix| Complete
|Day 2: Fri| Pseudocode\actual code, App setup| 
|Day 3: Sat| Build out core features| 
|Day 4: Sun| Build out core features | 
|Day 5: Mon| Basic Clickable Model | 
|Day 6: Tue| Working Prototype| 
|Day 7: Wed| Completed App / Slides |
|Day 8: Thur| Project Presentations |

## Project Description

The Ready Set Plan App enables one to plan ahead for a medical crisis by providing a list of essential documents one should have created and stored for a loved one to access in the event of an emergency.

![Heroku Placeholder - Final Version.Jan2018](https://heroku.com)

## Priority Matrix

Prioritized features include the following:
- Form
- Game logic triggered by a click
- CSS animation for transitions
- Game logic triggered by a lapse in time
- Restart button
- Score counter

![time matrix](https://git.generalassemb.ly/ashleyamin/PROJECT-1-PROMPT/blob/master/whiteboarding/IMG_4918.JPG?raw=true)

## MVP 

- form with intro, directions, input for name, and 'start' button
- question/answer logic, varying phrase based upon score
- score counter
- winning logic, presenting final score and varying phrase based upon score
- 'try again' button

## POST MVP

- statis footer
- animated logo in upper left
- randomized questions; additional questions
- timer
- add fun animations

## Wireframes

![Wireframes - high fid, color version](https://git.generalassemb.ly/ashleyamin/PROJECT-1-PROMPT/blob/master/Trivia%20Game%20Wireframes_Comments.pdf)

![Wireframes - white boarding all images](https://git.generalassemb.ly/ashleyamin/PROJECT-1-PROMPT/tree/master/whiteboarding)

![whiteboard wireframes](https://git.generalassemb.ly/ashleyamin/PROJECT-1-PROMPT/blob/master/whiteboarding/IMG_4917.JPG?raw=true)


## Game Components

### Landing Page
When the game is loaded the user will see a page that states the following:
- title of the game "Wine and Food Pairing Knowledge Test"
- description of the game "Food and wine pairing is an art with just a few rules. Answer a few questions to find out if you're on your way to becoming a true aficionado!"
- a direction for the user to enter name and click start to start the game
- a name input field
- a 'start' button

### Game Initialization
When the user clicks on the game button, the page will fade away and the following will appear:
- First question and answer, "Wine increases the heat of spicy food." True or False.
- Score board 0/10

### Playing The Game
When the user clicks on true or false to answer the question, the question and answer will fade away and the result will be displayed through the following messages - If correct, "You're correct! One sip closer to becoming a wine-o." If incorrect, "That's very wrong. You may need to eat and wine more." At the same time, the score will be updated if the answer was correct and will not be updated if the answer is incorrect. After 3 seconds the result will disappear and the second question/answer will appear. This loop will continue 9 more times (for a total of 10).

### Winning The Game
After the loop is finished, the individual question result will fade away and the following will be displayed:
- answers correct, total questions
- phrase based upon # of correct answers (e.g. "You're absolutely perfect! Congratulations, you're an aficionado!" if score is 10/10)
- 'restart game' button

### Game Reset
When the restart game button is clicked, the final result will fade away and the following will be displayed:
- score counter, reset to 0
- first question and answers

## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| HTML Setup | H | 1hr| 1hr | 1hr |
| CSS Setup (CSS Grid and Flexbox) | H | 2hr| 1hr | 1hr |
| Form Show/Hide, Start Game Event | H | 4hrs| 5hrs | 5hrs |
| Game Play Logic | H | 4hrs| 20hrs | 20hrs |
| Update Score Logic | H | 4hrs| 10hrs | 10hrs |
| Win Game Logic | H | 4hrs| 10hrs | 10hrs |
| Restart Game Event | H | 4hrs| Xhrs | Xhrs |
| Static Footer | M | 2hrs| 2hrs | 2hrs |
| Animated Logo | L | 4hrs| 1hr | 1hr |
| Randomized Questions, Additional Questions | L | 8hrs| Xhrs | Xhrs |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string |
| Question Class | Enables the ability to create new question sets |
| Trivia Class | Enables the ability to create new instances of the game |
| Trivia Methods | Part of the class and would be reused in new instances | 

## Additional Libraries
| Library | Description | 
| --- | :---: |  
| Google Fonts | Used to set font for all text in game |
| Jquery | Used to enable easy DOM traversing, manipulating, event handling, animating, |
| Emoji | A library on github that makes it easier to insert emojis via unicode |

## Code Snippet

class PlayingTrivia {
  constructor(score, questionSet, questionId){
  this.score = score;
  this.questionSet = questionSet;
  this.questionId = questionId;
  this.showScore = this.showScore.bind(this)
  }

  checkQuestionId() {}

  showQuestion() {}
    if() {
    }
    else{
      let $question = $('#questions');
      $question.text(this.checkQuestionId().text); //adds the questions via .text
        let $choices0 = $('#choice0');
        let $choices1 = $('#choice1');
        $choices0.text(this.checkQuestionId().choices[0]); //adds the answers via .text
        $choices1.text(this.checkQuestionId().choices[1]); //adds the answer via .text
    }
  }
  nextQuestion(answer) {
    this.questionId++;
    }
  }

The above code snippet was a huge accomplishment. It adds the question text and answer text from the array, and when a button is clicked, it moves to the next question by adding +1 to the ID.

## jQuery Discoveries
 - Bind method was discovered for use inside of classes; still need to practice to use it properly

## Change Log
 1. Tried to add scoreboard to upper right corner of page and am having trouble with css grid. For now, will instead only show score at the end of all the trivia questions. 

## Issues and Resolutions
1. Scoreboard location - resolution for this issue was to only have score at the end of game play
2. Placing HTML on page for end score - a temporary resolution for this issue is to have an alert show up with the final score
3. Score Logic/Win Logic - a temporary resolution for this issue during the demo will be to hard code the score at the end

## Instructions for Downloading Code
Instructions for downloading the code and running it on localhost:

