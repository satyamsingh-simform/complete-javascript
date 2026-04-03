/*JS is a single threaded synchronous language:
    -single threaded:ek baar me ek hi task execute hoga
    -synchronous language:ek ke baad ek execute hoga
    -but js can be made asynchronous with the help of many fn(setTimeout, eventListener etc which take cllback fn) which are not part of js instead are part of web API
    
    -output:10  30  20  //agar setTimeout js ka part hota tb op:10 20 30 hi aata kyuki js ek baar me ek hi task execute kr skta hai


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



//how this code will run in JS
console.log("Hello Coder Army");

function meet(){
    const arr = [2,4,6];
    console.log(arr[0]);
}

function greet(){
    const a = 2 + 3;
    console.log(a);
    meet();
    console.log(a*a);
}

greet();
console.log("Program End");
/*
Hello Coder Army
5
2
25
Program End
*/