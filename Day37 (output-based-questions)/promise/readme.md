<!-- Output based Question -->

<!-- Arrow Function Return Rules (Point-wise) -->
No {} → Implicit return
(x => x + 1) it is treated as (x => { return x + 1 })
Automatically returns value
With {} → Explicit return required
x => { return x + 1 }
Must write return
With {} and NO return
() => { console.log(4) }
Default return = undefined

<!-- Behavior -->
Promise.reject("error")
.catch(err => ...) → err = "error"
Promise.reject()
.catch(err => ...) → err = undefined

Promise.resolve(10)
.then(res => ...) → res = 10
Promise.resolve()
.then(res => ...) → res = undefined
        

Promise.resolve(1)
       ↓
then → 2
       ↓
then → throws error
       ↓
then → skipped
       ↓
catch → returns 5
       ↓
then → console.log(5)


Q1.
solution step
Promise is rejected
.catch() runs
console.log(4) prints 4
The function returns nothing ;a function with no return returns:undefined


<!-- QUESTIONS START HERE -->

Q0.Why This Confuses Developers
    -Many think .catch() just handles the error and stops the chain.
    -But actually:
        -.catch() returns a new promise
        -If it returns a value → the chain continues as fulfilled.

Very Important Rule
    throw error inside .then() = Promise rejection
    .catch() returning value=Promise becomes fulfilled again    

<!--asynchronous call flow-->
const p = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 1000);
});

Correct flow:
Promise executor runs immediately ✅
setTimeout goes to Web API ✅
After 1s → callback goes to callback queue (macrotask queue) ✅
Event loop moves it to call stack → executes resolve(...)
It changes promise state → fulfilled
Then attached .then() callbacks go to microtask queue


const p = new Promise((resolve, reject) => {
    setTimeout(() => {
       console.log('hi')
    }, 1000);
});
Output:hi
<!-- Reason: -->
Promise executor runs immediately
But ❗ you are NOT calling resolve or reject
So promise stays in pending state forever

<!-- Flow: -->
setTimeout → Web API → callback queue
After 1s → console.log('hi') runs
Promise state = still pending
.then() (if added) will never run

<!-- //Q0. -->
Promise.resolve(1)
.then(x => x + 1)
.then(x => { throw new Error();})
.then(x => console.log(x))
.catch(() => 5)
.then(x => console.log(x));

// Final Output:5


<!-- Q1. -->
Promise.reject("error")
.catch(() => {
  console.log(4);
})
.then(v => console.log(v));

// o/p:4
//     undefined


<!-- Q2. -->
Promise.reject("error")
.catch(() => {
  console.log(4);
  return 10;
})
.then(v => console.log(v));

//Output:4 10


<!-- //Q3. -->
Promise.resolve('1')
.catch((data)=>console.log(`catch`,data))//ignored
.then((data)=>console.log(`then`,data)) //then runs
//op:then 1
           
<!-- //Q4 -->
Promise.reject('1')
.catch((data)=>console.log(`catch`,data)) //catch runs   //.catch() returning value=Promise becomes fulfilled again 
.then((data)=>console.log(`then`,data))   
.then((data)=>console.log(`then`,data))   //This .then() receives the value returned from the previous .then(), not from .catch().
//op
catch 1 
then undefined 
then undefined

<!-- //Q5 -->
Promise.resolve(10)
.then((data)=>data+10)//20      //semicolon break the promise chain
.then((data)=>data+10)//30
.then(data=>data+10)   //40 
.then((data)=>{
    console.log(data); 
})
console.log(data);  // data is not defined //as it is out of the chain
console.log(`i will run before the promise`);

<!-- 1. .then() with no function
.then() expects a function
If you pass anything else (number, promise, object, etc.) → it is ignored
Value simply passes to next .then()

Final
Non-function inside .then() → ignored
Function inside .then() → called with resolved value
console.log is already a function → no wrapper needed -->

<!-- Q5.1 -->
Promise.resolve(1)
.then(() => 2)
.then(3)
.then((value) => value * 3)
.then(Promise.resolve(4))
.then(console.log)              //Internally it becomes: (value) => console.log(value)

op:6

<!-- Point-wise
Promise executor runs immediately
setTimeout is sent to Web API
JS moves ahead (non-blocking)

setTimeout → goes to Web API
After delay over→ moves to Callback Queue
Event loop executes it → resolve() is called
resolve():
does NOT execute .then() immediately
pushes .then() callbacks to Microtask Queue
Event loop then executes Microtask Queue -->

<!-- //Q6 -->
const p = new Promise((resolve, reejct) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 1000);
}); 

<!-- runs parallely -->
p.then((data) => console.log(data,"1"));
p.then((data) => console.log(data,"2"));
<!-- op -->
Promise Resolved Value!! 1
Promise Resolved Value!! 2


<!-- //Q7 -->
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("below me resolve and reject will not work!!");
        resolve(1);
        reject('handle')
    }, 1000);
}); 

p1.then((data)=>console.log(data));
op:below me resolve and reject will not work!!


<!-- //Q8 The executor fn of Promise runs when the Promise object is created, not when awaited. -->
const p1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("hello")
    },5000) 
})

async function greet(){
    const data1=await p1;//await ke neeche wala kuch v run nhi hoga jb tkk ye resolve nhi hoga tb tkk, isse async fn ke bhar wala code js execute krte rahega
    console.log(data1);

    const data2=await p1;//yaha pe ye wait nhi krega kyuki data already uper hi resolve ho chuka hai //myth ye hai ki dono parallel me chal raha hai isliye 
    console.log(data2);
}
greet();
//same thing with promise
p1.then(data=>console.log(data));
p1.then(data=>console.log(data));


<!-- //Q9 -->
<!-- //eg2:Promise executor fn does not wait for call it start execution immediately -->
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("first promise")
    },5000) 
})

const p3=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("second promise")
    },5000) 
})

//yaha pe dono promise parallel me chal raha hai kyuki dono promise bhar hai isliye na ki await ke wajh se
async function greet(){
    const data1=await p2;
    console.log(data1);//yaha pe v dono me data ek sath hi aa jayega but neeche wala tb hi chalega jb upper wala resolved ho jayega

    const data2=await p3;
    console.log(data2);//yaha pe v dono me data ek sath hi aa jayega
}
// greet();
//isme dono independent hai to jiska time phele khtm hoga o print hoga phele
p2.then(value=>console.log(value));
p3.then(value=>console.log(value));


<!-- Q9.b -->
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("first promise")
    },5000) 
})

const p3=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("second promise")
    },1000) 
})

//yaha pe dono promise ka executr fn immediately run ho gaya kyuki dono promise bhar hai isliye na ki await ke wajh se
async function greet(){
    const data1=await p2;//ye 5 sec ke baad resolve hoga tb hi run hoga iske neeche wala jo ki phele hi resolve ho gaya hai as uska promise me wait time kam hai
    console.log(data1);

    const data2=await p3;//p3 promise phele resolve ho gaya but will not run bcz control uper wala await ke pas hai
    console.log(data2);
}
// greet();



<!-- //Q10 -->
function t1(){
    const p1=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("first promise")
        },2000) 
    })
    return p1;
}
function t2(){
    const p2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("second promise")
        },5000) 
    })
    return p2;
}

//yaha pe jo phele cll hua o run hoga uske execute hone ke baad dusra wala run hona start hoga
async function greet(){
    const data1=await t1();//phele iska promise resolve hoga ,neeche wala avi start v nhi hua hai
    console.log(data1);

    const data2=await t2();//fir 5 sec ke baad iska ,kyuki ye fn call hai jb tkk fn cll nhi hoga tb tkk promise executor run nhi hoga ,direct promise call rhta hai 
    console.log(data2);    //direct promise rhta hai tb uska executor fn immediately call ho jata hai 
}
// greet();

// t1()
// .then(data=>console.log(data))//first promise
// .then(data=>console.log(data))//what is returned by above .then


<!-- JS runs line by line (sync)
Each t1():
executor runs immediately
setTimeout starts → Web API

👉 So:

Timer 1 → starts at t=0
Timer 2 → starts at t=0
Timer 3 → starts at t=0 -->

<!-- //Q11 -->
function t1(){
    const p1=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("first promise")
        },2000) 
    })
    return p1;
}
//now for both independent call is made as bcz it is fn call //Both timers start almost at the same time.
// t1().then(data=>console.log(data))
// t1().then(data=>console.log(data))


//When they would NOT run together
t1()
.then(data=>{
    console.log(data);
    return t1();
})
.then(data=>{
    console.log(data);
})

<!-- op-same time after 2 sec -->
first promise
first promise
first promise
<!-- after 2 sec -->
first promise



