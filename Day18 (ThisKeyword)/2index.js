/*Now comes to this(GO ko point krta hai savi environment me) keyword
    -The this keyword in JavaScript is a special keyword that refers to the context in which the current code is being executed.
    -Its value depends on how the function where this is used is called.
 */

/*complete this concept
    1. Global Context (Outside Any Function)
        let a = 10;
        const b = 20;
        var c = 30;

        console.log(this);      // window (in browser)
        console.log(this.c);    // 30
        console.log(this.a);    // undefined
        Explanation

        In a browser, this in the global scope refers to the global object → window.
        Variables declared with var become a property of the window object.
        Variables declared with let / const do NOT become properties of window.

        Why?
        Declaration	Stored In	Accessible via window
        var	Global Object	✔
        let	Script/Lexical Environment	✖
        const	Script/Lexical Environment	✖

        So:
        window.c → 30
        window.a → undefined
        window.b → undefined

        Your explanation here is correct.
        Your statement:
        let and const are stored in the lexical environment, not in global object
        ✔ Correct.

    2. this Inside a Function
        2.1 Non-Strict Mode (Default JS)
        function greet(){
            console.log(this);
        }

        greet();
        Output
        window
        Reason

        When a normal function is called directly, this refers to the global object.
        greet()

        is equivalent to
        window.greet()
        in non-strict mode.
        ✔ Your understanding here is correct.

        2.2 Strict Mode
        "use strict"

        function greet(){
            console.log(this);
        }

        greet();
        Output
        undefined
        Reason

        In strict mode, when a function is called normally:

        greet()

        this becomes:

        undefined

        But if you call:

        window.greet()

        then

        this → window

        ✔ Your comment is correct.

3. Strict Mode vs Non-Strict Mode Variable Behavior

Your example:

"use strict"

a = 10
console.log(a);
Output
ReferenceError: a is not defined
Reason

In strict mode, you cannot create variables without var/let/const.

Non-strict mode:

a = 10
console.log(a)

creates

window.a

✔ Your idea is correct.

But these lines in your code are unnecessary:

console.log(b);//a is not defined
console.log(c);//a is not defined

Because b and c were never declared.

4. this Inside Object Method
const obj = {
    name: "Rohit",
    age: 20,
    meet: function(){
        console.log(this);
        console.log(this.name);
    }
}

obj.meet();
Output
obj
Rohit
Rule

When a function is called as an object method:

obj.meet()

this refers to the object before the dot.

this → obj

So:

this.name → obj.name

✔ Your explanation is correct.

5. Arrow Function in Object

Your code:

let obj2 = {
    name:"rohit",
    age:11,
    greet: ()=>{
        console.log(this);
    }
}

obj2.greet();
Output
window
Why?

Arrow functions do not have their own this.

They take this from the surrounding lexical scope.

Here the surrounding scope is global.

this → window
Your comment mistake

You wrote:

technically obj2 ko point krega jo ki GO ko point krta hai

❌ Incorrect.

Correct explanation:

Arrow function ignores the object.
It takes this from the surrounding scope.
Surrounding scope = global → window

So obj2 is not involved in this.

6. Arrow Function Inside Normal Method
let obj = {
    name:"rohit",
    age:11,
    greet: function(){
        let abc = ()=>{
            console.log(this);
        };
        abc();
   }
}

obj.greet();
Output
obj
Why?

Steps:

1️⃣ greet() is called as

obj.greet()

So inside greet:

this → obj

2️⃣ Arrow function does not create its own this.

It inherits this from the parent scope.

Parent scope:

greet()

So:

this → obj

✔ Your explanation here is correct.

7. this in Constructor / Class

Example:

class Person{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

let a = new Person("Rohit",20);
What happens

When new is used:

New object is created

this points to that object

Properties assigned

Object returned

So:

this → newly created object

Example result:

Person { name:"Rohit", age:20 }

✔ Your explanation is correct.


One VERY IMPORTANT Rule (Most Interviews Ask)
this depends on how the function is called, NOT where it is written.
Example:

function greet(){
   console.log(this);
}

let obj = { greet };

obj.greet(); // obj
greet();     // window

*/



/*
////1: Global Context (Outside Any Function)

// In browsers this keyword points to: window-hum log jo aaj padhege browser ke context me na ki nodejs ke contex me 
// In Node.js this keyword points to :{} Module's exports object 
//let & const GO ka part nhi banta hai pr var GO ka part banta hai browser(console) me
let a=10;
const b=20;
var c=30;
// console.log(this); //window //in browser console
console.log(this.c);//30 //in browser console
// console.log(this.a);//undefined // in browser console//:- kyuki a GO ka part hi nhi hai isliye
*/

/*
let and const are stored in the Lexical(scope) Environment, not in the Global Object.
That’s why they aren’t accessible via window or global, even when declared globally.
*/





/*
//// 2:Inside a Function 

//i:(Non-Strict Mode)-bydefalt in js
//-When this is used inside a regular function, it refers to the global object.
function greet(){
    console.log(this); //here also this points to GO
}
greet();         //GO



"use strict"
//ii.Strict Mode:rules r strict here 
//-this will be undefined inside a function.
a=10;
function greet(){
    console.log(this); //here also this points to GO
}
greet();         //undefine ko    
// window.greet();  //GO ko point krega

*/



/*//diff bw strict mode and non-strict mode
//Automatically create it as a global variable, and it behaves like a var
"use strict"
a=10
console.log(a);//a is not defined
console.log(b);//a is not defined
console.log(c);//a is not defined
// a=10;
// console.log(a);//10 in non-strict mode
*/




// let obj={
//     names:'abc',
// }
// console.log(this.obj);



/*
////3.Inside a Method (Object Context)
//When this is used inside an object’s method, it refers to the object that owns the method.

const obj ={
    name:"Rohit",
    age:20,
    meet: function(){
        console.log(this);      //it refers to the object that owns the method    
        console.log(this.name); //obj.name
    //     console.log(this.name); //Rohit
    //     console.log(obj.name);  //Rohit
    }
}
obj.meet();
*/







//// Arrow functions don’t have their own this. 
// Instead, they inherit this from the surrounding (lexical) scope -mtlb surrounding scope Global hai mtlb this GO(window) ko point krega.

let obj2 = {
    name:"rohit",
    age:11,
    greet: ()=>{
        console.log(this);//window (GO) ko point krega, technically obj2 ko point krega jo ki GO ko point krta hai
    }
}
obj2.greet();


let obj = {
    name:"rohit",
    age:11,
    greet: function(){
        let abc = ()=>{
            console.log(this);//obj ko point krega//apne bahar wale scope ko dekhega jo ki fn(normal fn refers to obj in whic it is created) hai 
        };
        abc();
   }
}
obj.greet();




//not very imp-this in class & constructor 
/*
// Inside a Constructor or Class
// In constructors and classes, this refers to the instance of the object being created.

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }
// }

// let a = new Person("Rohit", 20);
// console.log(a);

// let greet = ()=>{
//     console.log(this);
// }

// greet();

// "use strict"

// let meet = function(){
//     console.log(this);
// }

// meet();
*/



