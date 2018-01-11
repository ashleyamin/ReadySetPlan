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
|Day 2: Fri| Pseudocode\actual code, App setup| Complete
|Day 3: Sat| Build out core features| Complete
|Day 4: Sun| Build out core features | Complete
|Day 5: Mon| Basic Clickable Model | Complete
|Day 6: Tue| Working Prototype| Complete
|Day 7: Wed| CSS Styling | Complete
|Day 8: Thur| CSS Styling |
|Day 9: Fri| Post-MVP |
|Day 10: Sat| Post-MVP |
|Day 11: Sun| Post-MVP |
|Day 12: Mon| Completed App / Slides / Heroku |
|Day 13: Tue| Project Presentations |

## Project Description

The Ready Set Plan App enables one to plan ahead for a medical crisis by providing a list of essential documents one should have created and stored for a loved one to access in the event of an emergency.

![Heroku Placeholder - Final Version.Jan2018](https://heroku.com)

## Priority Matrix

Prioritized features include the following:
- CRUD functionality
- Email registration + Google API registration options
- CSS applied to all Views

![time priority matrix](https://git.generalassemb.ly/ashleyamin/PROJECT-2-PROMPT/blob/dev/planning/tpmatrix.JPG)

## Trello Board

![Initial Trello Layout](https://git.generalassemb.ly/ashleyamin/PROJECT-2-PROMPT/blob/dev/planning/trello%20board.png)

##User Stories

![User Stories](https://git.generalassemb.ly/ashleyamin/PROJECT-2-PROMPT/blob/dev/planning/userstories.JPG)

## MVP 

- CRUD functionality
- Email registration + Google API registration options
- CSS applied to all Views

## POST MVP

- To Accomplish/Completed alternate view
- Logout functionality

## Wireframes

![Wireframes - high fid, color version](https://git.generalassemb.ly/ashleyamin/PROJECT-2-PROMPT/tree/dev/whiteboarding)


## CRUD App Components

### Register / Sign In
When the site is loaded the user will be asked to sign-in or register to continue:
- Sign In with username and password
- Register with username, email and password (new page) and if success redirected to View Items page
- Sign In with google credentials and if success redirected to View Items page

### View Items
When the user enters the site, she is presented with a list of documents to complete with a description on how to complete them and where the documents should be stored. The user is able to mark a document complete or incomplete.

### Edit Item / Delete Item
If the user needs to update any information about the document, the user can click on the title of the document, which will take her to a separate page where she can edit and save the new information. Alternatively, if she would like to delete an item that option is present as well.

### New Item
If the user would like to add another document/item to the list, the user can do so by clicking on the 'new item' button. This will take her to a new page where she can fill in information for a new item. Upon 'saving' the item, she will be redirected to the view all page and the new item will appear at the bottom.

## Functional Components

Based on the initial logic defined in the previous game phases section try and breakdown the logic further into functional components, and by that we mean functions.  Does your logic indicate that code could be encapsulated for the purpose of reusablility.  Once a function has been defined it can then be incorporated into a class as a method. 

Time frames are also key in the development cycle.  You have limited time to code all phases of the game.  Your estimates can then be used to evalute game possibilities based on time needed and the actual time you have before game must be submitted. 

| Component | Priority | Estimated Time | Time Invetsted | Actual Time |
| --- | :---: |  :---: | :---: | :---: |
| Server Setup | H | 3hr| 3hr | 3hr |
| CSS Setup (CSS Grid and Flexbox) | H | 3hr| 1hr | X |
| CRUD App Setup | H | 8hrs| 10hrs | 10hrs |
| Email Registration | H | 4hrs| 4hrs | 4hrs |
| Google API Registration | H | 15hrs| 14hrs | 14hrs |
| CSS Styling | H | 8hrs| 0hrs | X |
| Logout Functionality | H | 2hrs| 2hrs | 2hrs |

## Additional Libraries
| Library | Description | 
| --- | :---: |  
| Google Fonts | Used to set font for all text in game |


## Code Snippet


## Change Log


## Issues and Resolutions


## Instructions for Downloading Code
Instructions for downloading the code and running it on localhost:

