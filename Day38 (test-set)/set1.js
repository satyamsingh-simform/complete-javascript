// Q1)
function fn(){
 let x = 10;
 return function () {
  console.log(x);
  x = 20;
 };
}
const a = fn();
const b = fn()
a();
b();
a();

// Output: 10 10 20
/*Reason:
- Each fn() call creates a separate closure with its own x.
- a() logs 10 and updates its x to 20.
- b() has a different x, so it logs 10, updates its x from 10 → 20.
- a() again uses its updated x → 20.
*/

// Q2)
async function get() {
 return await "value";
}
get().then((val) => console.log(val));

// Output: value
/*
- await on non-promise wraps it into resolved promise
- returns "value"
*/

// Q3)
const promise = Promise.reject("reject")
promise.then(value => console.log(value, "1"),
 (value) => { console.log(value, "2") })
 .catch(err => {
  console.log(err, "3")
  return err;
 })
 .then(console.log)

// Output: reject 2, undefined
/* Reason:
- Promise is rejected → second callback of then runs → logs "reject 2".
- Error is handled, so catch is skipped.
- Next then gets undefined → logs undefined.
*/


// Q4)
class Builder {
 step() {
  console.log("base");
  return this; //this here is obj
 }
}
class AdvancedBuilder extends Builder {
 step() {
  super.step();
 }
 extra() {
  console.log("extra");
  return this;
 }
}
// new AdvancedBuilder().step().extra(); //obj is created but not stored in variable so will work fine

// Output: base error
/* Reason:
- super.step() prints "base".
- step() does not return this → returns undefined.
- undefined.extra() → runtime error.

-super.method()-->can be used to call that method if present 
-super not only calls the parent constructor.
*/


// Q5)
let obj22 = {
 name: "Rahul",
 show: function() {
  return function() {
   console.log(this.name);
  }
 }
};
obj22.show()();

// Output: undefined
/* Reason:
- Returned function is called normally → this = global.
- global.name is undefined.
*/


//Q6)
Promise.resolve().then(() => {
 console.log("A");
 Promise.resolve().then(() => {
  console.log("B");
 });
});
Promise.resolve().then(() => {
 console.log("C");
});
console.log("D");

// Output: D A C B
/* Correct flow:

- Promise.resolve() (first one) → immediately resolved
- .then(() => console.log("A")) → goes to microtask queue (MT1)

- Promise.resolve() (second one) → immediately resolved
- .then(() => console.log("C")) → goes to microtask queue (MT2)

- console.log("D") → runs immediately (sync) → prints D

--- Microtask Queue order now:
MT1 (A) → MT2 (C)

1) Event loop picks MT1:
   - logs "A"
   - inside it → new Promise.resolve().then(() => console.log("B"))
   - this registers a NEW microtask (MT3 for B) at the end of queue
   Queue becomes: MT2 (C) → MT3 (B)

2) Event loop picks MT2:
   - logs "C"
   Queue becomes: MT3 (B)

3) Event loop picks MT3:
   - logs "B"

--- Key points:
- All .then() callbacks go to microtask queue
- Registration order matters (FIFO)
- Nested .then() is added AFTER current microtask finishes
- So B is registered after A completes, hence runs last
*/




// Q7)
let obj = Object.create(null);
// Output: Object.create(null)  //Creates object with no prototype (no inheritance).

/* Reason:
let obj = Object.create(obj2);
- It creates a new empty object → obj
- Sets obj.__proto__ = obj2

So:
- obj itself has NO own properties initially
- If you access obj.x → it will look into obj2

Example:
let obj2 = { a: 10 };
let obj = Object.create(obj2);

console.log(obj.a); // 10 (comes from obj2)
*/


// Q8)
function A() {}
A.prototype.x = 10;
let obj1 = new A();
A.prototype.x = 25;
let obj2 = new A();
obj1.x = 50;
console.log(obj1.x);
console.log(obj2.x);
// Output: 50, 25

/* Reason:
- A.prototype is a single shared object used by all instances.
- When obj1 is created → it links to prototype where x = 10.
- Then prototype.x is updated to 25 → this change affects prototype itself (shared).

- obj2 is created AFTER update → sees x = 25 from prototype.

- obj1.x = 50 → creates its OWN property (shadowing prototype).
- So:
   obj1.x → 50 (own property)
   obj2.x → 25 (from prototype)

Key Concept:
- Prototype is shared.
- But "own property" overrides (shadows) prototype property.
*/

// Q8.b)
function A1() {}
A1.prototype.x = 10;

let obj1 = new A1();
console.log(obj1.x);//10

A1.prototype.x = 25;
let obj21 = new A1();
console.log(obj1.x);//25
console.log(obj21.x);//25
/*
Reason:
- obj1 does NOT have its own x → it reads from prototype.
- When you update A1.prototype.x = 25, you are modifying the SAME shared object.
- obj1.__proto__ still points to that prototype → so it now sees updated value 25.
- obj21 is created after update → also sees 25.
*/

// Q9)
const parent = { name: "John" };
const child = Object.create(parent);
console.log('name:',child.name);//name: John

delete child.name;
console.log(child.name);//name: John //undefined -i thought but wrong 
/*
Reason:
- child has NO own property "name", it only inherits from parent.
- delete works ONLY on own properties of the object.
- So delete child.name does nothing (no such property on child).
- When accessing child.name → it looks up prototype → parent.name → "John".
*/

// Q10)
const obj1 = { a: 1, b: { c: 2 }};
const obj02 = JSON.parse(JSON.stringify(obj1));
obj02.b.c = 99;
console.log(obj1.b.c);//2
// Output: 2
/* Reason:
- Deep copy created.
- Changing obj2 does not affect obj1.
*/

// Q11)
const obj111 = {
 x: 1,
 getX: function () {
  return this.x;
 }
};
const fn = obj111.getX;
const bound = fn.bind(obj111);
console.log(fn(), bound());//undefined, 1
/* Reason:
- fn() → this = global → undefined.
- bound() → this fixed to obj → 1.
*/

// Q14)
let arr = [1, 2, 3];
console.log(arr.__proto__ === Array.prototype);//true
console.log(arr.__proto__.__proto__ === Object.prototype);//true
console.log(arr.__proto__.__proto__.__proto__ === null);//true
/* Reason:
- Array → Array.prototype → Object.prototype chain.
*/

// Q16)
let obj9 = {
 name: "Rahul",
 show: function() {
  console.log(this.name);
 }
};
let x = obj9.show;
x();//undefined
/* Reason:
- Function detached → this = global.
*/


// Q17)
function fun(){
 if (true) { 
  var x = 20; 
  console.log(x);
 }
}
fun()
console.log(x);// Output: 20, Error
/* Reason:
- var is function scoped.
- x not accessible outside function.
*/


// Q18)
const promise2 = new Promise((resolve)=>resolve("resolved"))
promise2.then(console.log).catch((err) => {
 console.log('error')
})
// Output: resolved
/* Reason:
- Promise resolved → then runs.
- catch not executed.
*/
// Q18b)
const promise3 = new Promise((resolve,reject)=>reject("olved"))
promise3.then(console.log).catch((err) => {
 console.log('error')
})


// Q20)
setTimeout(() => console.log("A"), 0);
Promise.resolve().then(() => {
 console.log("B");
 Promise.resolve().then(() => console.log("C"));
});
Promise.resolve().then(() => console.log("D"));
// Output: B D C A
/* Reason:
- Microtasks first → B, D.
- Inside B → C.
- Then macrotask → A.
*/


// Q21)
let obj3 = {
 name: "Rahul",
 show: function() {
  let inner = () => {
   console.log(this.name);
  };
  inner();
 }
};
obj3.show();
// Output: Rahul
/* Reason:
- Arrow function uses parent this → obj3.
*/


// Q22)
var a1 = 1;
function test() {
 console.log(a1);
}
function test2() {
 var a1 = 2;
 test();
}
test2();//1
// Output: 1
/* Reason:
- Lexical scope → test uses global a.
*/


// Q25)
var a3 = 10;
(function () {
 console.log(a3);//10
 if (true) {
  console.log(a3);//error
  let a3 = 20;      
  console.log(a3);//20
 }
 console.log(a3);//10
})();

// Output: 10, ReferenceError
/* Reason:
- First a → 10.
- Inside block → TDZ for let a → ReferenceError.
*/