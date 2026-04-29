/*async await
    -aysnc function always return a promise.
*/


/*//Normal fn: returned what is returned from it
function greet(){
    return 'satya'
}
console.log(greet());//satya
*/


/*//Async fn always return promise //case1:below is also same as case1
async function greet(){
    return 'satya'
    // throw 'error occured'  
}
// console.log(greet());//Promise { 'satya' }//it return promise so below is a way to consume it
greet()
.then((data)=>console.log(data))//satya
.catch((err)=>console.log(err))//error occured
*/

/*Async fn internally converted like this
async function greet(){
    return 'satya'
}

function greet(){
   return Promise.resolve("satya")
}

async function greet(){
    throw "error happened"
}

function greet(){
   return Promise.reject("error happened")
}

*/


/*//case2:async internally uses promise
async function greet(){
    return new Promise((resolve,reject)=>{
        if(true){
            resolve("Rohit");
        }
        else{
            reject('handle me')
        }
    })
}
console.log(greet());//Promise { <pending> }

const response = greet();
response
.then((data)=>console.log(data))
.catch((error)=>{
    console.log("Error:", error);
})
*/




//this format of PROMISE ia also bit complex-so here comes async-await
/*
fetch("https://api.github.com/users")
.then((response)=>response.json())
.then((data)=>console.log(data));
*/

//ASYNC-AWAIT syntax:

/*//JS behaviour without async fn using await :program will freeze
    console.log(`with async fn if we use await then js get struck and will not execute below code which is not dependent on await`);
    console.log(`so to make js does not get struck we need async fn with await`);
    
    const response=await fetch("https://api.github.com/users");
    const data= await response.json();
    console.log(data);

    console.log('hi');
*/
/*
console.log('hi');

async function github(){
    const response=await fetch("https://api.github.com/users");
    const data= await response.json();
    console.log(data);
}
github();
console.log('hello');
*/



/*//ASYN-AWAIT PROJECT
async function github() {
    try {
    const response = await fetch("https://api.github.com/users");
    if(!response.ok){
        throw new Error("Data is not persent");
    }
    const data = await response.json();
    // console.log(data);
    const parent = document.getElementById("first");

    for(let user of data){
        const element = document.createElement("div");
        element.classList.add("user");

        const image = document.createElement('img');
        image.src = user.avatar_url;

        const userName = document.createElement('h2');
        userName.textContent = user.login;

        const anchor = document.createElement('a');
        anchor.href = user.html_url;
        anchor.textContent = "Visit Profile";

        element.append(image,userName,anchor);
        parent.append(element);
    }
    }
    catch(error){
        console.log("error");
    }
}
*/




/*//Zomatao Syntax made easy using ASYNC-AWAIT
const orderDetail = {
    orderId: 123123,
    food:["Pizza","biryani","coke"],
    cost: 620,
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_location: "Delhi"
}

function placedOrder(orderDetail){
    console.log(`${orderDetail.cost} Payment is in progress`);
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.1){
                console.log("Payment is received and order get placed");
                orderDetail.status = true;
                resolve(orderDetail);
            }
            else{
                reject("Payment is failed");
            }
        },3000)
    })
   
}

function preparingOrder(orderDetail){
    console.log(`Your food preparation started of ${orderDetail.food}`);
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.05){ 
                console.log("Your order is now prepared");
                orderDetail.token = 123;
                resolve(orderDetail);
            }
            else{
                reject("Food item is not persent at restaurant");
            }
        },3000);
    })
}

function pickupOrder(orderDetail){
    console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `);
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            if(Math.random()>0.05){   
                console.log("I have picked up the order");
                orderDetail.received = true;
                resolve(orderDetail);
            }
            else{
               reject("Delivery boy Unable to reach restaurant")
            }
    },3000);
    })
    
}

function deliverOrder(orderDetail){
    console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);
    
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log("Order delivered succesfully");
            orderDetail.delivery = true;
            resolve('10');
        },3000)
    })
    
}


async function ordering(){
    try{
        const response1 = await placedOrder(orderDetail);
        const response2 = await preparingOrder(response1);
        const response3 = await pickupOrder(response2);
        const response4 = await deliverOrder(response3);
        console.log(response4);
    }
    catch(error){
        console.log("Error: ",error);
    }
}
ordering();
*/



/*PROMISE ALL()
    -if there is more than one asynchronous task which are not dependent on each other then in that case 
    -we can use Promise.all() to run all async task it will reduce time
*/
async function userDetail(params) {
    //all 3 call will happen one after other
    // const comment = await fetch("userComment");
    // const photos = await fetch("userPhoto");
    // const chat = await fetch("chat");

    //now all 3 call will happen in parallel
    const [comment,photo,chat]=await Promise.all([fetch('userComment'),fetch('userPhoto'),fetch('chat')]);
}