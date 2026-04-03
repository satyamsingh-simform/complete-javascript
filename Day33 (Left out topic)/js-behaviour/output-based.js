/*Output based Question

Q0.Why This Confuses Developers
    -Many think .catch() just handles the error and stops the chain.
    -But actually:
        -.catch() returns a new promise
        -If it returns a value → the chain continues as fulfilled.

Very Important Rule
    throw error inside .then() = Promise rejection
    .catch() returning value=Promise becomes fulfilled again        
        
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

*/



/*
//Q0.
Promise.resolve(1)
.then(x => x + 1)
.then(x => { throw new Error(); })
.then(x => console.log(x))
.catch(() => 5)
.then(x => console.log(x));

// Final Output:5


// Q1.
Promise.reject("error")
.catch(() => {
  console.log(4);
})
.then(v => console.log(v));

// o/p:4
//     undefined


// Q2.
Promise.reject("error")
.catch(() => {
  console.log(4);
  return 10;
})
.then(v => console.log(v));

//Output:4 10


//Q3.
Promise.resolve('1')
.catch((data)=>console.log(`catch`,data))//ignored
.then((data)=>console.log(`then`,data)) //then runs
           
//Q4
Promise.reject('1')
.catch((data)=>console.log(`catch`,data)) //catch runs   //.catch() returning value=Promise becomes fulfilled again 
.then((data)=>console.log(`then`,data))   
.then((data)=>console.log(`then`,data))   //This .then() receives the value returned from the previous .then(), not from .catch().
*/

/*
//Q5
Promise.resolve(10)
.then((data)=>data+10)//20      //semicolon break the promise chain
.then((data)=>data+10)//30
.then(data=>data+10)   //40 
.then((data)=>{
    console.log(data); 
})
// console.log(data);  // data is not defined
console.log(`i will run before the promise`);
*/

/*
//Q6
const p = new Promise((resolve, reejct) => {
    setTimeout(() => {
        resolve("Promise Resolved Value!!");
    }, 1000);
}); 

p.then((data) => console.log(data,"1"));
p.then((data) => console.log(data,"2"));


//Q7
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("below me resolve and reject will not work!!");
        resolve(1);
        reject('handle')
    }, 1000);
}); 

p1.then((data)=>console.log(data));
*/

/*
//Q8 The executor runs when the Promise object is created, not when awaited.
const p1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("hello")
    },5000) 
})

async function greet(){
    const data1=await p1;
    console.log(data1);

    const data2=await p1;//yaha pe ye wait nhi krega kyuki data already uper hi resolve ho chuka hai //myth ye hai ki dono parallel me chal raha hai isliye 
    console.log(data2);
}
// greet();
//same thing with promise
p1.then(data=>console.log(data));
p1.then(data=>console.log(data));

*/

/*
//Q9
//eg2:Promise does not wait for call it start execution immediately
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

//yaha pe dono await parallel me chal raha hai kyuki dono promise bhar hai isliye na ki await ke wajh se
async function greet(){
    const data1=await p2;
    console.log(data1);//yaha pe v dono me data ek sath hi aa jayega

    const data2=await p3;
    console.log(data2);//yaha pe v dono me data ek sath hi aa jayega
}
// greet();
//isme dono independent hai to jiska time phele khtm hoga o print hoga phele
p2.then(value=>console.log(value));
p3.then(value=>console.log(value));
*/

/*
//Q10
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
    const data1=await t1();//phele iska data aayega
    console.log(data1);

    const data2=await t2();//fir 5 sec ke baad iska 
    console.log(data2);
}
// greet();

// t1()
// .then(data=>console.log(data))//first promise
// .then(data=>console.log(data))//what is returned by above .then
*/


//Q11
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