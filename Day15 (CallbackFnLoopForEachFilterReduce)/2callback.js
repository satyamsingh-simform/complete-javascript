/*Things that CANNOT be written after return (Declarations / Statements)
    -In JavaScript, return can only return expressions (values) such as literals, variables, operations, function calls, assignments, objects, arrays, 
    or ternary expressions, but it cannot return declarations or statements like let, const, var, function, class, if, for, or while.
*/

/*callback fn-passing fn as an argument is called as callback fn

1. Function Declarations are hoisted
function greet() { ... }
    -JavaScript hoists the entire function to the top of the scope, so you can call it before it's defined in the code.
    -Function Declaration → fully hoisted


2.Function Expressions with let or const are not hoisted the same way
When you write:
    -let meet = function() { ... };
    -Function Expression → variable hoisted, value not hoisted
*/


//CallBack Fn:-

/*Fn expression NEED TO BE PASSED LIKE THIS ONLY
function names(fun){
    console.log("Hello I am name");
    fun();//TypeError: fun is not a function-->bcz of line 26
}
let greet = function (){
    console.log("I am call Back Function");
}
names(greet);                     //callback fn 
// names(greet());                 //this is wrong sirf pass krna hai
*/

/*
//diff way in which fn can be paased as an argument
//anonomous fn-->direct fn and its body is passed without fn name
function processUser(callback) {
    callback();
}

processUser(function() {
    console.log("Hi -I am anonomous fn");
});
*/

/*
function names(fun){
    console.log("Hello I am name");
    fun();
}

//1.normal fn as cllback
names(function greet(){                                                         //direct pura fn ko hi as a cllback fn bhej skte hai
    console.log("I am call Back Function(declarative fn)");
})

//2.anonomous fn as cllback
names(function (){                                                             //fn ko direct bheje but uska name nhi hai
    console.log("I am call Back Function( sent as anonomous fn way)");
});

//3.arrow fn as cllback
names(()=>{                                                                     //arrow fn ke trh v bhej skte hai
    console.log("I am call Back Function(sent as arrow fn)");
});

*/



//use case of callback fn  :-setInterval(callback,time);
//setInterval is a built-in JavaScript function that 
//repeatedly executes a function after a specified time interval (in milliseconds) until stopped
/*
function fetchData(){
    console.log("I am fetching data as normal fn");
}
// setInterval(fetchData,1000);

setInterval(()=>{
    console.log("I am fetching data as arrow fn");
},2000);
*/


//use case of callback fn  :-setTimeout(callbackFunction, delay); 
//The function to execute after the delay.
//setTimeout always runs only once unless explicitly called again.
/*
setTimeout(() => {
    console.log("This runs only once after 3 seconds!");
}, 3000);

*/

