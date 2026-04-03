/*How to Achieve Asynchronous Behavior in JavaScript
    -JavaScript is single-threaded but supports asynchronous operations using features provided by the browser or Node.js environment.
    -feature such as:-
        -Using setTimeout / setInterval
        -Using Callbacks
        -Using fetch
        -Using Promises
        -Using async/await  etc
*/


console.log("I am first");

fetch("https://youtube.com")
.then(()=>console.log("Hello"));

console.log("I am last");

/*
I am first
I am last
Hello
*/