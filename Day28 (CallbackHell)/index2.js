/*JS is a single threaded synchronous language:
    -single threaded:ek baar me ek hi task execute hoga
    -synchronous language:ek ke baad ek execute hoga
    -but js can be behave asynchronous with the help of web API fn like(setTimeout, eventListener etc which take cllback fn and 
    send it to web API to handle them and js will continue the further execution) which are not part of js instead are part of web API
    -doubt-but bcz of this asynchronous behaviour of js it caused one issue sometimes we want our code to execute in order ,but it is not possible 
    bcz in js asynchronous added to not make js to wait ,So now to maintain the order we have concept of promise, async-await, callback hell
*/

/*JavaScript Synchronous Behavior
    -JavaScript runs one line at a time, in order — from top to bottom.
    -It waits for each task to finish before moving to the next one.// This is synchronous (blocking) behavior.
    -Then:
        UI would freeze
        Browser would hang
        No performance
*/

/*JavaScript Asynchronous Behavior
    -JavaScript can handle tasks that take time (like API calls, timers) without blocking the rest of the code.
    -It continues to the next task while waiting for the async task to finish.
    -So instead:
        JS delegates async work
        Continues execution
        Comes back when ready
*/

/*How to Achieve Asynchronous Behavior in JavaScript
    -JavaScript is single-threaded but supports asynchronous operations using features provided by the browser or Node.js environment.
    -feature such as:-
        -Using setTimeout / setInterval
        -Using Callbacks
        -Using fetch
        -Using Promises
        -Using async/await  etc
*/

/*You were wrong here
If JS is synchronous, we don’t need callbacks/promises” Wrong
Because waiting synchronously would block the entire program
    Then:
        UI would freeze
        Browser would hang
        No performance
Async patterns exist to keep JS fast and non-blocking

JavaScript executes synchronous code line-by-line,
but asynchronous operations run in the background and return later via callbacks, promises, or async/await.
*/

//synchronous behaviour:bydefault
console.log("10");
console.log("20");
console.log("30");
//output:10  20  30

//made asynchronous with fn setTimeout
console.log("10");
setTimeout(() => {
    console.log("20");
}, 5000);
console.log("30");
//output:10  30  20  //agar setTimeout js ka part hota tb op:10 20 30 hi aata kyuki js ek baar me ek hi task execute kr skta hai


//output:10  20  30 ->ye synchronous task hi hai  
console.log("10");
const timer = Date.now();
while(Date.now()-timer<2000){}  //here js will wait bcz while loop is js core part, it cant be send to web api, this is called js blocking(synchronous) nature
console.log('20');
console.log("30");