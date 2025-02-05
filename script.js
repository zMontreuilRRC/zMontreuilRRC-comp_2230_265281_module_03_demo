const headerText="This is the Header";

console.log("ready");

function populateHeader(inputText) {
    // first: find the element that we are going to be changing
    const hOneNode = document.querySelector("h1");

    hOneNode.textContent = inputText;
}

function countToFiveThenDoSomething(callback) {
    for(let i = 1; i <=5; i++) {
        console.log(i);
    }

    callback();
}

function sayHello(){
    console.log("Hello!");
}

function sayGoodbye(){
    console.log("Goodbye!");
}

// providing different functions to be used as callback
// countToFiveThenDoSomething(sayHello);
// countToFiveThenDoSomething(sayGoodbye);

// // inline function (just used as the callback)
// countToFiveThenDoSomething(() => {
//     console.log("This is an anonymous inline function");
// });

// run populateHeader WHEN the page loads
// addEventListener adds an event listener to whatever element it is invoked on
// "DOMContentLoaded": the event we are waiting for to occur 
// the function that is provided as the last argument is always given the EVENT ITSELF
// as an object for its first argument
// console.log("potato")

//functions given as arguments for other functions are "callbacks"
document.addEventListener("DOMContentLoaded", () => {
    populateHeader(headerText);
    
    // Step 1: Find the button
    const buttonNode = document.querySelector("#log-something");

    // Step 2: Add a "click" event listener on the button
    // We'll add an anonymous callback to the event listener, since this will be unique behaviour that 
    // we don't need to re-use accross elements
    buttonNode.addEventListener("click", () => {
        console.log("Event Happened");
    });
});
