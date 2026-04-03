/*To understand This keyword 1st understand globalobject(isko koi v access kr skta hai )
    1.global object (GO)
        -In JS, (GO) is a special built-in object that provides access to global variables, functions(Math,parseInt() etc)
        -iska alag alag environment me diff name hai:-jo ki confuse kr skta hai isliye GlobalThis ka concept aaya hai
            -Chrome Browser: window(ye bolta hai agar mera kio v method ko use krna hai to mera name laga ke access krna mandatory nhi hai)
            -Nodejs: global(ye bolta hai agar mera kio v method ko use krna hai to mera name laga ke access krna mandatory nhi hai)
        
        -globalThis points GO irrespective of environment
            -to isse confusion se bachne ke liye globalThis ko laya gaya 
            -GO ka name savi environment ke liye same kr diya i.e., globalThis
            -kisi v environment me globalThis ka use kr skte hai to access GO
            
*/
//ye sara fn aa kaha se raha hai, ye sb v to kahi na kahi likha hua hoga :-[ye sb aa raha hai global object se]
// console.log("Hello World");
// console.log(Math.random());
// new Object();
// new String("Rohit");
// // setInterval();  //It's provided by the browser environment (Web APIs), not by JavaScript core (ECMAScript).

/*How can we use setInterval() in JS code if it’s not part of JavaScript's Global Object (GO)?
    -Because JavaScript doesn't run alone — it runs inside an environment (like a browser or Node.js), and that environment provides extra features like setInterval().

    Browser → provides Web APIs (setTimeout, setInterval, DOM, fetch, etc.)
    Node.js → provides Node APIs (fs, require, setTimeout, setInterval, etc.)

    These environments attach their own APIs to the global object (like window or global), so you can use them as if they are part of JS.
*/




console.log(globalThis.Math.random());//ye error nhi dega
// console.log(window.Math.random());//pr ye node me error dega kyuki node ke liye GO ka name hai global ,window ko ye janta hi nhi





// // let obj = {
// //     name:"Rohit",
// //     age:12
// // };
// // obj.name
/*
// console.log(globalThis.Math.random());
"use strict"


// a = 10;
// console.log(a);

let obj = {
    name:10
}

Object.freeze(obj);
obj.name = 30;
console.log(obj);
*/

