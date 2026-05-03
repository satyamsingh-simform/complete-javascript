/*Prototype
    -when we create any custom obj then js engine internally make this obj points to Object.prototype and inside that allin-built methods are present.
    -Object.prototype
    -Array.prototype

    -Primitives also store methods in prototypes of wrapper objects: Number.prototype, String.prototype and Boolean.prototype. 
    Only undefined and null do not have wrapper objects
*/

const obj1={
    name:'Satya',
    age:23,
    greet:function(){
        console.log(`hello ${this.name}`);
    }
}
// obj1.greet();
// console.log(obj1.hasOwnProperty('name'));//true //how ar we able to call .hasOwnProperty() method even we have not defined in our obj1, bcz of Prototype
// console.log(obj1.toString());//[object Object] // how ar we able to call .toString() method even we have not defined in our obj1

const obj2={
    amount:100,
    account_num:8409,
    // __proto__:obj1, //in this way also we can make any custom obj to inherit any custom obj  //other way to do that is// obj2.__proto__=obj1;
}
// console.log(obj2.amount);
// console.log(obj2.age);//undefined ,obj1 key cant be used in obj2 ,but it is possible to do so by PROTOTYPE

//.__prot__: what is does is it will now make obj2 points to obj1 and now obj2 will search key in itself first if not found then will check to obj1 keys ,this is how obj2 now able to access obj1 keys
// obj2.__proto__=obj1; //with this now obj1 become prototype of obj2 i.e., now obj2 can access obj1 key too
Object.setPrototypeOf(obj2, obj1);//use this in  place  of .__proto__
// console.log(obj2.name);//Satya

/*
const arr=[10,20,30];
console.log(Object.getPrototypeOf(obj2));//{ name: 'Satya', age: 23, greet: [Function: greet] }
console.log(Object.getPrototypeOf(obj2)===obj1);

console.log(obj2.__proto__===obj1);//true
console.log(obj2.__proto__===Object.prototype);//false
console.log(arr.__proto__===Array.prototype);//true
console.log(obj2.__proto__===Array.prototype);//false
console.log(arr.__proto__===Object.prototype);//false
console.log(arr.__proto__.__proto__===Object.prototype);//true //bcz custom arr prototype is Array.prototype and Array.prototype proto is Object.prototype
console.log(obj2.__proto__.__proto__===Array.prototype);//false
console.log(obj2.__proto__.__proto__===null);//true

console.log(Object.prototype);//[Object: null prototype] {}
console.log(Object.prototype.__proto__);//null
console.log(arr.__proto__);//Object(0) []
*/





//Function ,Constructor prototype rule
// Prototype Chain (Object side)
/*
p1
 ↓ (__proto__)
Person.prototype
 ↓ (__proto__)
Object.prototype
 ↓
null
*/


// Internal working of `new`
// p1.__proto__ = Person.prototype===Person

// Step 1: Constructor function RULE:-Person.prototype={constructor: Person};
function Person(name) {
  this.name = name;
}
console.log('constructor Person:',Person.prototype);//{constructor: Person}
console.log('itself:',Person.prototype.constructor);//Person

//RULE Step 2: What JS automatically creates // (Already exists by default) 
// Person.prototype={constructor: Person};
// Constructor Link --bcz  of rule--->Person.prototype.constructor → Person

// Step 3: Create object
const p1 = new Person("Satyam");

// Verification (important)
console.log(p1.__proto__ === Person.prototype);               // true
console.log(Person.prototype.constructor === Person);         // true
console.log(Person.prototype.__proto__ === Object.prototype); // true


function abc(){};
console.log(abc.__proto__===Function.prototype);//true
//IMP CASE
console.log(abc.prototype);//{}constructor: ƒ abc()

let str='satya'
// console.log(Array.prototype);//Array []
// console.log(Function.prototype);//function ()
// console.log(Array.prototype.__proto__);//Object { … }
// console.log(Function.prototype.__proto__);//Object { … }
// console.log(str.__proto__);//String {""}
// console.log(str.__proto__.__proto__);//Object { … }
// console.log(arr.__proto__);//Array []



// const obj6={
//     // __proto__:null, //this line removed then --> Object { … }
// }
// console.log(obj6.__proto__);//undefined


// The references can’t go in circles. JavaScript will throw an error if we try to assign __proto__ in a circle.
const obj3={
    p1:'i am p1',
    // __proto__:obj5, // error :Cannot access 'obj5' before initialization
}
const obj4={
    p2:'i am p2',
    __proto__:obj3,
}
const obj5={
    p3:'i am p3',
    __proto__:obj4,
}
console.log(obj5.__proto__);//Object { p2: "i am p2" }

//The for..in loop iterates over inherited properties too.
//it will print all key:value of obj2 and obj1 as well
for(let keys in obj2){
    console.log(obj2[keys]);
}

console.log();

//it will only print obj2 key:value pair
for(let key of Object.keys(obj2)){
    console.log(obj2[key]);
}