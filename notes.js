// DOM Manipulation
// How do we find the elements in HTML that we need to change, and how can we change them?

// Objective: change the text content of welcome-heading using JavaScript
// first challenge: find the element

// "query" the element; create a variable and store data about that element in it
// using the DOCUMENT OBJECT MODEL
// which is basically a JavaScript "image" of the page
// "document" refers to the web page itself

// store an object in a variable representing an element on the page
const welcomeHeadingEle = document.querySelector("#welcome-heading");
// cf document.getElementById("welcome-heading");

// this object has many properties that can be manipulated
// when the DOM sees that a property of an element has changed, it updates the html document
welcomeHeadingEle.textContent = "This has been manipulated via JavaScript";
welcomeHeadingEle.className = "highlight";

// we can create elements as well
const newParagraph = document.createElement("p");
newParagraph.textContent = "This new paragraph added after the page was loaded";
document.body.appendChild(newParagraph);

// modify all elements with "p" tags
const allParagraphEles = document.querySelectorAll("p");
// console.log(allParagraphEles);
// like python, iterating over a list of elements
for(let p of allParagraphEles) {
    p.classList.add("new-paragraph-style");
}