/*
Q1.
Promise executor runs synchronously therefore line 10 executed
.then() runs asynchronously
.then() callback is never executed immediately
 It is always pushed to Microtask Queue










*/



<!-- /*Q1 -->
console.log('start');
let promise1=new Promise((resolve,reject)=>{
    console.log('1');
    resolve('2'); //resolved immediately but synchronous line 43 will run first, bcz event loop only send task to call stack untill it is empty 
})
promise1
.then((res)=>console.log(res))
console.log('end');

o/p
start
1
end 
2

<!-- /*//Q2 -->
console.log('start');
let promise1=new Promise((resolve,reject)=>{
    console.log('1');
    resolve('2')
    console.log('3');
})
promise1
.then((res)=>{
    console.log(res)
    // console.log('hello')//hello printed
})
console.log('end');

Q2.
start
1
3
end 
2


<!-- //Q3-good -->
console.log('start');
let promise1=new Promise((resolve,reject)=>{
    console.log('1');
    console.log('3');
})
//Since neither resolve nor reject is called,Promise state stays pending forever, ,for such case .then() is never executed
promise1
.then((res)=>{
    console.log('hello');
    // console.log(res)
})
console.log('end');

Q3.
start
1
3
end 


<!-- /*//Q4 -->
console.log('start');
//return mandatory if {} is used
const fn=()=>{
    return new Promise((resolve,reject)=>{
        console.log('1');
        resolve('2')
    })
}
console.log('middle');

fn().then((res)=>console.log(res))
console.log('end');

op
start
middle
1
end
2


<!-- /*Q4a -->
console.log('start');
//return not mandatory as {} is not used in arrow fn
const fn=()=>
    new Promise((resolve,reject)=>{
        console.log('1');
        resolve('2')
    })

console.log('middle');

fn().then((res)=>console.log(res))
console.log('end');

Q4a.
start
middle
1
end
2

<!-- Q4c -->
console.log('start');
//return mandatory if {} is used
const fn=()=>{
    new Promise((resolve,reject)=>{
        console.log('1');
        resolve('2')
    })
}
console.log('middle');

fn().then((res)=>console.log(res))
console.log('end');

op
start
middle
1
fn().then((res)=>console.log(res))--> TypeError: Cannot read properties of undefined



<!-- Updated .finally() Summary (correct + complete)
.finally() runs always (resolve or reject)
It does not receive value or error → parameter is always undefined
Used for cleanup logic
It does NOT change the resolved value or error by default
The previous result (value/error) passes unchanged to next .then() / .catch()
Even if .finally() returns a value (e.g., return 10) → it is ignored ❗
So that returned value does NOT go to next .then()
If .finally() throws error or returns rejected promise, it overrides previous result → chain becomes rejected -->


<!-- Q5 -->
Promise.resolve(1)
.then(x => x + 1)
.then(x => { throw new Error('error from then reject the promise and nearest catch will run');})
.then(x => console.log(x))
.catch((err) =>{
    console.log('error:',err);
    return 5
})
.catch((err)=>{ //this catch will run only if above catch throw error else next .then will run if any as ,catch return make promise fullfil.
    console.log(err);
})
.then(x => console.log('return from catch fullfilled promise',x));


<!-- Q5b -->
Promise.resolve(1)
.then(x => x + 1)
.then(x => { throw new Error('error from then reject the promise and nearest catch will run');})
.then(x => console.log(x))
.catch((err) =>{
    console.log('error:',err.message);
    return 5
})
.finally(()=>{
    console.log('i will always run');
})
.then(x => console.log('return from catch fullfilled promise',x))
.catch((err) =>{
    console.log('error:',err.message);
})
<!-- op
error: error from then reject the promise and nearest catch will run
i will always run
return from catch fullfilled promise 5 -->


<!-- Q5c -->
Promise.resolve(1)
.then(x => x + 1)
.then(x => { throw new Error('error from then reject the promise and nearest catch will run');})
.then(x => console.log(x))
.catch((err) =>{
    console.log('error:',err.message);
    return 5
})
.finally(()=>{
    console.log('i will always run');
    throw new Error('promise rejected by finally');
})
.then(x => console.log('return from catch fullfilled promise',x))
.catch((err) =>{
    console.log('error:',err.message);
})
<!-- op -->
<!-- error: error from then reject the promise and nearest catch will run
i will always run
error: promise rejected by finally -->


<!-- Q5d -->
Promise.resolve(1)
.then(x => x + 1)
.then(x => 100/0) //this is not an error in js its value is Infinity which is consider as resolve
.then(x => console.log(x))
.catch((err) =>{
    console.log('error:',err);
    return 5
})
.finally(()=>{
    console.log('i will always run');
    throw new Error('promise rejected by finally');
})
.then(x => console.log('return from catch fullfilled promise',x))
.catch((err) =>{
    console.log('error:',err.message);
})


<!-- Q6 -->
<!-- // This is a JavaScript Quiz from BFE.dev -->

Promise.resolve(1)
.then((val) => {
  console.log(val)
  return val + 1
}).then((val) => {
  console.log(val)
}).then((val) => {
  console.log(val)
  return Promise.resolve(3)
    .then((val) => {
      console.log(val)
    })
}).then((val) => {
  console.log(val)
  return Promise.reject(4)
}).catch((val) => {
  console.log(val)
}).finally((val) => {
  console.log(val)
  return 10
}).then((val) => {
  console.log(val)
})

