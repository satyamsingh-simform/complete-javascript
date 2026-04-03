/*How to Achieve Asynchronous Behavior in JavaScript
    -JavaScript is single-threaded but supports asynchronous operations using features provided by the browser or Node.js environment.
    -feature such as:-
        -Using setTimeout / setInterval
        -Using Callbacks
        -Using fetch
        -Using Promises
        -Using async/await  etc
*/


console.log("HEllo Coder Army");


setTimeout(()=>{
  const a = 2+4;
  console.log(a);
},5000);

let b = 20;
let arr = [20,30,11];

for(let i of arr)
    console.log(i*b);

/*
HEllo Coder Army
400
600
220
6
*/
