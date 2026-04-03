/*CALL, APPLY, BIND
    -The main purpose of call, apply, and bind is to control the value of this when executing a function.
    -No. bind, call, and apply cannot change this of an arrow function. -This is a core rule of JavaScript.


*/




/*CALL():Important points
    -Executes immediately
    -Arguments passed separately
    -First argument = value of this
    -function.call(thisArg, arg1, arg2, ...)
*/
/*CALL: use case
    -Function borrowing
    -One function used by many objects.
    -as shown below
*/

//CASE:1
// function greet(){
//     console.log(`Hi ${this.name}`);
// }
// user1={
//     name:'Rohit',
// }
// user2={name:'satya'}
// greet.call(user1);//Hi Rohit
// greet.call(user2);//Hi Satya

//CASE:2
// function greet(age){
//     console.log(this.name, age);
// }
// const user3 = { name: "Rohit" };
// greet.call(user3, 22);


/*3.APPLY()
    -apply() is same as call() but arguments are passed as an array.
    -Executes immediately
    -Arguments passed in array
    -syntax:function.apply(thisArg, [arg1, arg2]).
*/
/*APPLY:Use Case
    -const nums = [5, 10, 2];
    -Math.max(nums); //not allowed
    -Math.max.apply(null, nums);//nums array → passed as arguments //solution
    -This was very useful before the spread operator (...) existed.
        -today we use spread operator:Math.max(...nums);


*/
// function greet(age, city){
//     console.log(this.name, age, city);
// }
// const user = { name: "Rohit" };
// greet.apply(user, [22, "Mumbai"]);



/*4.BIND()
    -bind() does not execute the function immediately.
    -It returns a new function with fixed this.
    -const newFn = function.bind(thisArg, arg1, arg2)
*/
// function greet(){
//     console.log(this.name);
// }

// const user = { name: "Rohit" };
// const newGreet = greet.bind(user);
// newGreet(); 

/*BIND():use case
    -real life eg
class User{
    constructor(name){
        this.name = name;
    }
    greet(){
        console.log(this.name);
    }
}
const u = new User("Rohit");
setTimeout(u.greet,1000); // ❌ this lost
setTimeout(u.greet.bind(u),1000);//correct solutions ////SOLUTION:BIND():bind permanently sets:this = u

//WHY LOST REASON
In JavaScript, the value of this is decided by how a function is called, not where it is defined.
When you call a method like u.greet(), the function is called through the object u, so this becomes u.
When you pass u.greet to setTimeout, you are passing only the function reference, not the object.
setTimeout later executes it like a normal function call (fn()), not as u.greet().
Because there is no object calling the function, the method loses its context, so this becomes undefined (in strict mode).
As a result, this.name cannot access u.name.

//SOLUTION:BIND():bind permanently sets:this = u
class User {
  constructor(name){
    this.name = name;
  }
  greet(){
    console.log(this.name);
  }
}
const u = new User("Rohit");
setTimeout(u.greet.bind(u), 1000);

//MODERN SOLUTION :arrow fn
class User {
  constructor(name){
    this.name = name;
  }
  greet(){
    console.log(this.name);
  }
}
const u = new User("Rohit");
setTimeout(() => u.greet(), 1000);//Instead of passing greet directly, you pass a new wrapper function.


*/

/*//arrow function ignores call/bind/apply */
const obj = {
  value: 10
};

const add=(num)=>{
  console.log(this.value);
};
add.call(obj);//undefined  //arrow function ignores call/bind/apply