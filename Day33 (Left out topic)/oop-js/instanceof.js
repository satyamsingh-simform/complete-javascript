// const obj={
//     name:'satya',
// }
// console.log(typeof obj);//object

/*instanceof
    First remember the rule:
        -A instanceof B → check if B.prototype exists in A’s prototype chain i.e.,A.__proto__==B.prototype  or   A.__proto__.__proto__==B.prototype etc
        -checks untill A.__proto__... become null

*/
/*
function Person(){}
const p = new Person();

console.log(p.__proto__);              // Person.prototype
console.log(p.__proto__.__proto__);    // Object.prototype
console.log(p.__proto__.__proto__.__proto__); // null
*/


/*
instanceof rule
    -A instanceof B → check if B.prototype exists in A’s prototype chain i.e.,A.__proto__==B.prototype  or   A.__proto__.__proto__==B.prototype etc
    -checks untill A.__proto__... become null
*/
//Object (capital O) is not a normal object.It is a function that creates objects
// const obj1=new Object(); 
// console.log(typeof obj1);//object
// console.log(typeof Object);//function
// console.log(Object);//[Function: Object]


// console.log(Function.__proto__==Function);//false
// console.log(Function.__proto__==Function.prototype);//true
// console.log(Function.__proto__.__proto__==Object.prototype);//true
console.log(Object.__proto__==Function.prototype);//true //as bcz Object is constructor
console.log(obj.__proto__ ==Function.prototype);//false //bcz a normal object does NOT inherit from Function.prototype.



//two imp questions
//is Object.prototype exist in Function prototype chain or not,  yes it exist see the reason
console.log(Function instanceof Object);//true
/*Reason
    -console.log(Function.__proto__.__proto__==Object.prototype);
*/

//is Function.prototype exist in Object prototype chain or not, 
console.log(Object instanceof Function);//true


//Questions of instanceof

/*
Object
↓
Function.prototype
↓
Object.prototype
↓
null
*/
const obj = { name: "Satya" };
console.log(obj instanceof Object);
console.log(obj instanceof Function);


/*
Function
↓
Function.prototype
↓
Object.prototype
↓
null
*/
function greet(){}
console.log(greet instanceof Function);
console.log(greet instanceof Object);

/*
arr
↓
Array.prototype
↓
Object.prototype
↓
null
*/
const arr = [1,2,3];
console.log(arr instanceof Array);
console.log(arr instanceof Object);
console.log(arr instanceof Function);
