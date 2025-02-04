// creating variables
// const (CONSTANT -- never changes)
// convention is camelCase (no spaces/underscores, capitalize every subsequent word)
const neverChange = 404;

// let (variable -- can change)
let changingVariable = "Hello, world!";
// re-declare to change value
changingVariable = "new value";

// var -- outdated, has some strange behaviours that don't align with other languages
var otherVariable = "other variable";

// DATA TYPES
// strings
let userGreeting = "Welcome to our page!";

// numbers
let userScore = 100;

// booleans
let activeSession = true;

// JS does not use a CLI (command line interface) by default
// it is only opened using a browser with a linked HTML page
console.log(1 / 2);

// JS Objects: key-value pairs
let myObject = { name: "Guest", score: userScore }
let userName = myObject["name"]; // expected value: "Guest"

// arrays: ordered lists of values
let colourOptions = ["Red", "Green", "Blue"];
let greenValue = colourOptions[1];

// *** OPERATORS ***
// arithmetic
let a = 50;
let b = 5;

let sum = a + b; // 55
let difference = a - b; //45
let product = a * b // 250
let quotient = a / b; // 10
let remainder = a % b; // 0
let power = a ** b; // 312 500 000

// comparisons (produce booleans)
let first = 25;
let second = 18;

// equality evaluation
let areEqual = first == second; // false

// non-equality evaluation 
let areNotEqual = first !== second; // true

// greater-than
let firstGreater = first > second; // true

// less-than
let firstLess = first < second; // false

// greater than or equal to
let firstGreaterOrEqual = first >= second;

// DATA TYPES
let numString = "12"; // string
let numValue = 12; // number
let boolValue = true;

// loose equality
let isLooselyEqual = numString == numValue; // true

let isTruthy = numString == boolValue; // true -- all numbers are "true" except 0
// https://developer.mozilla.org/en-US/docs/Glossary/Truthy

// strict equality (value AND type)
let isStrictlyEqual = numString === numValue; // false -- not same type

// *** LOGIC ***

let isTrue = true;
let isFalse = false;

// && (and): true if both conditions are true
let areBothTrue = isTrue && isFalse; // false 

// || (or): true if either or both conditions are true
let anyTrue = isTrue || isFalse; // true

// ! (negation): true if the evaluation is false
let isNotTrue = !isTrue; // false

// *** ASSIGNMENT OPERATORS ***
let score = 10;

score += 5; // 15
score -= 2; // 13
score *= 2; // 26
score /= 2; // 13

score++; // 14
score--; // 13


// *** CONDITIONAL STATEMENTS ***
// controlling if code runs using boolean evaluation

let userAge = 25;

// blocks are defined using curly braces ({ })
// cf. blocks in Python using indentation
if (userAge >= 18) {
    // block only executes if the evaluation is true
    console.log("User is eligible to vote");
}

// if-else statements
if(userAge <= 18) {
    console.log("User not eligible to vote");
} else if (userAge > 18 && userAge < 65) {
    console.log("User is eligible and really should vote");
} else {
    // if all prior evaluations are false, run this block
    console.log("User is eligible to vote");
}

// *** LOOPS ***
// for-loops

// count to ten
// 1. initialize the iterating variable (let i = 0)
// 2. evaluate the variable at each iteration (iterate if true: i <= 10)
// 3. run the block
// 4. iterating function (i++)
// 5. Repeat from step 2
for(let i = 0; i <= 10; i++) {
    console.log(i);
}

let myColours = ["red", "green", "blue", "yellow"];

for(let i = 0; i < myColours.length; i++) {
    // iterate over an array
    console.log(myColours[i]);
}

// while
let myIterator = 0;

// 1. evaluate 
// 2. run block if true
// 3. repeat
// while loops do not necessarily run (if they start with a false evaluation)
while(myIterator < 10) {
    console.log(myIterator);
    myIterator++;
}

// do-while loops always run at least once
do {
    console.log(myIterator);
} while(myIterator !== 0);

// *** FUNCTIONS ***

// name: generateGreeting
// parameter(s): (name)
// function declaration
function generateGreeting(name) {
    // string interpolation (uses backticks `` and variables with ${})
    // return will stop the function and provide whatever value is returned to whatever invoked the function
    return `Greetings, ${name}`;
}

const newGreeting = generateGreeting("Zach"); 
newGreeting === "Greetings, Zach"; // true

// arrow function
const addScores = (score1, score2) => {
    return score1 + score2;
}

// single-line arrow function always returns the evaluation
const addScoresNoExplicitReturn = (score1, score2) => score1 + score2;

// function expression
const calculateAge = function(birthYear) {
    return new Date().getFullYear() - birthYear;
}