# 💻 Advanced Web Technologies – Lab Report
NAME : RISHABH JADLI
SAP ID : 590010052
---
## Table of Contents
1. [Experiment 1 – Basic HTML & CSS](#experiment-1--basic-html--css)
2. [Experiment 2 – JavaScript DOM Manipulation](#experiment-2--javascript-dom-manipulation)
3. [Experiment 3 – Form Validation / JS Logic](#experiment-3--form-validation--js-logic)
4. [Experiment 4 – External JS & CSS Integration](#experiment-4--external-js--css-integration)
5. [Experiment 5 – jQuery Effects & DOM Traversal](#experiment-5--jquery-effects--dom-traversal)
6. [Experiment 6 – Node.js Basics](#experiment-6--nodejs-basics)
7. [Experiment 7 – Express Application](#experiment-7--express-application)
8. [Cookies & Sessions in Node.js](#cookies--sessions-in-nodejs)
9. [Node.js Lab Programs](#nodejs-lab-programs)
10. [My Project](#my-project)
11. [Rick Project](#rick-project)
---

## Experiment 1 – Basic Jquery implementation
**Files:** `exp1/index.html`, `exp1/style.css`, `exp1/jquery.js`
            index.html creates a structure while css adds style to it

**Objective:**  
Disable right click menu in html page
jquery to click on image to scroll to top
jquery to change the color of any paragrpah to red on mouseover event
diplay and hide message shown in div tag on click on button

**What I Learned:**
- IDs for Interactivity: Assigning id attributes (e.g., toggleBtn, message, scrollTopImg) to elements, which is crucial for targeting them specifically with CSS and JavaScript/jQuery.
- Linking and styling with external CSS.
- Basics of layout, colors, and text formatting.

**Challenges Faced:**  
- Understanding CSS selectors and positioning elements properly.
- The code won't work if you forget to include the jQuery script before your custom exp1.js script in the HTML.
- Initially, the right-click menu might still appear even after attaching the event handler.

EXPERIMENT 1 HTML
![experiment 1 html](<codes and outputs/exp1 html.png>)
EXPERIMENT 1 CSS
![experiment 1 css](<codes and outputs/exp1 css.png>)
EXPERIMENT 1 JS
![experiment 1 js](<codes and outputs/exp1 js.png>)
EXPERIMENT 1 OUTPUT
![experiment 1 output](<codes and outputs/exp1 output.png>)
---

## Experiment 2 – Jquery and css events
**Files:** `exp2/index.html`, `exp2/style.css`

**Objective:**  
jquery to add class to an element
jquery to access position of an element
jquery animation to manipulate multiple CSS properties like padding, color etc


**What I Learned:**
- used IDs (id="btn-add", id="pos-box", id="btn-pos", id="anim-box", id="btn-animate") to create clear hooks for your jQuery code, making it easy to target both the interactive element (the button) and the element that will be affected.
- Accessing and modifying DOM elements.
- Using `getElementById()` and `querySelector()`.
- Handling events like `onclick` and `onchange`.


**Challenges Faced:**  
- Debugging event listeners and ensuring scripts loaded after DOM.
-  It can be confusing why one element has different top and left values for position() versus offset().


EXPERIMENT 2 HTML
![experiment 2 html](<codes and outputs/exp2 html.png>)
EXPERIMENT 2 CSS
![experiment 2 css](<codes and outputs/exp2 css.png>)
EXPERIMENT 2 OUTPUT
![experiment 2 output](<codes and outputs/exp2 output.png>)
---

## Experiment 3 – Front End development sing Angularjs
**Files:** `exp3/index.html`, `exp3/app.js`

**Objective:**  
Use Angularjs to perform the following-
        Display a table
        Display content of table with Order by filter 
        Display Table with even and odd

**What I Learned:**
- used ng-repeat to dynamically generate table rows (<tr>) for each object in the vm.students array. This is the cornerstone of displaying lists of data in Angular.
- set up an Angular application by defining a module (tableApp) and a controller (TableController) to manage the application's data and logic.
- implemented client-side sorting using the built-in orderBy filter (| orderBy:ctrl.sortKey:ctrl.reverse). This demonstrates how to sort data by a specific key (ctrl.sortKey) and control the sort direction (ctrl.reverse).

**Challenges Faced:**  
- Understanding how ng-controller="TableController as ctrl" works and why you need to reference your variables as ctrl.students, ctrl.sortKey, etc., instead of just students, can be tricky for newcomers to Angular. Forgetting the ctrl. prefix is a very common error.
- ng-repeat directive is powerful but requires precise syntax, especially when adding track-by-key, conditional styling, and filters.


EXPERIMENT 3 HTML
![experiment 3 html](<codes and outputs/exp3 html.png>)
EXPERIMENT 3 CSS
![experiment 3 css](<codes and outputs/exp3 css.png>)
EXPERIMENT 3 OUTPUT
![experiment 3 output](<codes and outputs/exp3 output.png>)
---

## Experiment 4 – Angular form and event 
**Files:** `exp4/index.html`, `exp4/exp4.css`, `exp4/exp4.js`

**Objective:**  
User registration form and perform input validation using angularjs
application for bill payment record using angularjs

**What I Learned:**
- used the ng-submit directive on the form to call a controller function (addRecord(billForm)) when the user submits the form, which is cleaner than using traditional HTML form submission.
- Maintaining cleaner project structure.
- used ng-model to link form input values (Name, Amount, Date) directly to properties on the $scope object ($scope.newRecord.name, etc.). This automatically updates the model when the user types, and vice-versa.
**Challenges Faced:**  
- Handling file paths and ensuring all resources loaded correctly.
- Manually managing the newId by incrementing the array length ($scope.records.length + 1) is simple but could lead to issues (like duplicate IDs) if records were ever deleted. Realizing the limitation of this simple ID strategy might have been a learning point.

BILL PAYMENT RECORD
EXPERIMENT 4 HTML
![experiment 4 html](<codes and outputs/exp4 html.png>)
EXPERIMENT 4 CSS
![experiment 4 css](<codes and outputs/exp4 css.png>)
EXPERIMENT 4 JS
![experiment 4 js](<codes and outputs/exp4 js.png>)
EXPERIMENT 4 OUTPUT
![experiment 4 output](<codes and outputs/exp4 output.png>)

REGISTRATION FORM
EXPERIMENT  4.1 HTML
![experiment 4.2 html](<codes and outputs/exp4.2 html.png>)
EXPERIMENT 4.1 CSS
![experiment 4.2 css](<codes and outputs/exp4.2 css.png>)
EXPERIMENT 4.1 OUTPUT 
![experiment 4.2 output](<codes and outputs/exp4.2 output.png>)
---

## Experiment 5_6 - Basic NODEJS exercise
**Files:** `exp5/index.html`, `exp5/exp5.css`, `exp5/exp5.js`
**Files:** `exp6/test1.js`, `exp6/test2.js`

**Objective:**  
Create a simple "Hello, World!" server using Node.js and Express.
Write a node.js program to replace two or more a's with the letter b on the given string using Regular Expression. 
Create a basic calculator that can nerform arist e a basic calculator that can perform arithmetic operations (addition, subtraction, multiplication, and division) through HTTP request
Write a node.js code to iterate over the given array.

**What I Learned:**
- Data binding, displaying data, filtering and sorting, conditionl styling, adding records, error handling 
**Challenges Faced:**  
- Correctly identifying and handling all potential errors in the server endpoints (e.g., division by zero, missing required query parameters, invalid operation strings) and returning meaningful error messages.
- error handling 
**Skills Gained:**  
Simplified DOM handling — *"Write less, do more!"* (not that efficient but working on it)
EXPERIMENT 5_6 SERVER
![experiment 5_6 server](<codes and outputs/exp 5_6 server.png>)
EXPERIMENT OUTPUT
![experiment 5_6 output](<codes and outputs/exp 5_6 output.png>)
EXPERIMENT OUTPUT
![calculator](<codes and outputs/calculator .png>)
EXPERIMENT OUTPUT
![Aaaa](<codes and outputs/esp5.png>)
---

## Experiment 7 – State management 
**Files:**  
- `exp7/server.js`  
- `exp7/public/index.html`, `style.css`, `app.js`  
- `exp7/package.json`

**Objective:**  
show session management using node.js
show method for creating and destroying session
create and delete cookie using nodejs

**What I Learned:**
- Setting up an Express server.
- Serving static files from the `public/` directory.
- Handling basic routes and responses.

**Challenges Faced:**  
- Configuring Express routing and managing dependencies via `npm`.

Cookie-example.js
```
const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/set-cookie', (req, res) => {
    res.cookie('username', 'JohnDoe', { maxAge: 900000 });
    res.send('Cookie has been set');
});

app.get('/get-cookie', (req, res) => {
    const user = req.cookies['username'];
    res.send(`Cookie Retrieved: ${user}`);
});

app.get('/delete-cookie', (req, res) => {
    res.clearCookie('username');
    res.send('Cookie deleted');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
```
Session-example.js
```
const express = require('express');
const session = require('express-session');

const app = express();

app.use(session({
    secret: 'mysecretkey',
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => {
    if (req.session.views) {
        req.session.views++;
        res.send(`Welcome back! You visited ${req.session.views} times.`);
    } else {
        req.session.views = 1;
        res.send('Welcome to the session demo. Refresh to count visits.');
    }
});

app.get('/destroy', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.send('Error destroying session');
        }
        res.send('Session destroyed');
    });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
```
Package.json
```
{
  "name": "experiment_7",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "cookie-parser": "^1.4.7",
    "express": "^5.1.0",
    "express-session": "^1.18.2"
  }
}
```
EXPERIMENT 7 : COOKIES
![experiment 7.1 cookies](<codes and outputs/exp 7 cookies.png>)
OUTPUT
![experiment 7.1 cookies set](<codes and outputs/cookies set.png>)
COOKIE RETRIEVAL 
![cookies retrieved](<codes and outputs/cookies retrieved.png>)
EXPERIMENT 7.2 SERVER
![experiment 7.2 server](<codes and outputs/exp 7 server.png>)
EXPERIMENT 7 SESSION COUNT
![experiment 7 session count](<codes and outputs/exp 7 output.png>)
EXPERIMENT 7 SESSION DESTROY
![experiment 7  session destroyed](<codes and outputs/exp session.png>)

**Run Instructions:**
```bash
cd exp7
npm install
node server.js
