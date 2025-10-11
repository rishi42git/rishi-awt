# 💻 Advanced Web Technologies – Lab Report

A collection of experiments exploring **HTML**, **CSS**, **JavaScript**, **jQuery**, and **Node.js (Express)** concepts.

---

## 📚 Table of Contents
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

## Experiment 1 – Basic HTML & CSS
**Files:** `exp1/index.html`, `exp1/style.css`

**Objective:**  
Create a simple static webpage using HTML and CSS.

**What I Learned:**
- Structuring a webpage using HTML elements.
- Linking and styling with external CSS.
- Basics of layout, colors, and text formatting.

**Challenges Faced:**  
- Understanding CSS selectors and positioning elements properly.

![experiment 1 html](<codes and outputs/exp1 html.png>)
![experiment 1 css](<codes and outputs/exp1 css.png>)
![experiment 1 js](<codes and outputs/exp1 js.png>)
![experiment 1 output](<codes and outputs/exp1 output.png>)
---

## Experiment 2 – JavaScript DOM Manipulation
**Files:** `exp2/index.html`, `exp2/app.js`

**Objective:**  
Perform DOM manipulations using JavaScript — changing content, reacting to events, etc.

**What I Learned:**
- Accessing and modifying DOM elements.
- Using `getElementById()` and `querySelector()`.
- Handling events like `onclick` and `onchange`.

**Challenges Faced:**  
- Debugging event listeners and ensuring scripts loaded after DOM.

![experiment 2 html](<codes and outputs/exp2 html.png>)
![experiment 2 css](<codes and outputs/exp2 css.png>)
![experiment 2 output](<codes and outputs/exp2 output.png>)
---

## Experiment 3 – Form Validation / JS Logic
**Files:** `exp3/index.html`, `exp3/app.js`

**Objective:**  
Validate user inputs in forms using JavaScript.

**What I Learned:**
- Writing conditions and regex for input validation.
- Showing alerts or inline error messages.
- Managing user interaction dynamically.

**Challenges Faced:**  
- Preventing form submission when validation failed.

![experiment 3 html](<codes and outputs/exp3 html.png>)
![experiment 3 css](<codes and outputs/exp3 css.png>)
![experiment 3 output](<codes and outputs/exp3 output.png>)
---

## Experiment 4 – External JS & CSS Integration
**Files:** `exp4/index.html`, `exp4/exp4.css`, `exp4/exp4.js`

**Objective:**  
Use modular coding by separating JS and CSS files.

**What I Learned:**
- Linking multiple external resources.
- Maintaining cleaner project structure.
- Understanding script loading and CSS cascading.

**Challenges Faced:**  
- Handling file paths and ensuring all resources loaded correctly.
bill payment record
![experiment 4 html](<codes and outputs/exp4 html.png>)
![experiment 4 css](<codes and outputs/exp4 css.png>)
![experiment 4 js](<codes and outputs/exp4 js.png>)
![experiment 4 output](<codes and outputs/exp4 output.png>)

registration form
![experiment 4.2 html](<codes and outputs/exp4.2 html.png>)
![experiment 4.2 css](<codes and outputs/exp4.2 css.png>)

---

## Experiment 5 – jQuery Effects & DOM Traversal
## Experiment 6 – Node.js Basics
**Files:** `exp5/index.html`, `exp5/exp5.css`, `exp5/exp5.js`
**Files:** `exp6/test1.js`, `exp6/test2.js`

**Objective:**  
Use jQuery to simplify DOM operations and add visual effects.
Understand the basics of Node.js and JavaScript execution outside the browser.

**What I Learned:**
- Using jQuery selectors (`$()` syntax).
- Applying effects like `hide()`, `show()`, `fadeIn()`, and `slideToggle()`.
- Traversing DOM elements efficiently.
- Creating and running `.js` files with Node.
- Using `console.log()`, modules, and basic I/O.
**Challenges Faced:**  
- Understanding jQuery chaining and loading it before script execution.

**Skills Gained:**  
Simplified DOM handling — *"Write less, do more!"*
![experiment 5_6 server](<codes and outputs/exp 5_6 server.png>)
![experiment 5_6 output](<codes and outputs/exp 5_6 output.png>)
![calculator](<codes and outputs/calculator .png>)
---

## Experiment 7 – Express Application
**Files:**  
- `exp7/server.js`  
- `exp7/public/index.html`, `style.css`, `app.js`  
- `exp7/package.json`

**Objective:**  
Build a small web application using **Express.js**.

**What I Learned:**
- Setting up an Express server.
- Serving static files from the `public/` directory.
- Handling basic routes and responses.

**Challenges Faced:**  
- Configuring Express routing and managing dependencies via `npm`.
![experiment 7.1 cookies](<codes and outputs/exp 7 cookies.png>)
![experiment 7.1 cookies set](<codes and outputs/cookies set.png>)
![cookies retrieved](<codes and outputs/cookies retrieved.png>)
![experiment 7.2 server](<codes and outputs/exp 7 server.png>)
![experiment 7 session count](<codes and outputs/exp 7 output.png>)
![experiment 7  session destroyed](<codes and outputs/exp session.png>)

**Run Instructions:**
```bash
cd exp7
npm install
node server.js
