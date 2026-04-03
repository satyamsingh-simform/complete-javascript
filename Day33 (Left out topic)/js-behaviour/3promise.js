//promise object represent the completion(or failure) of an asynchronous operation.  
/*Promise has 3 states

1. Pending
   - Initial state
   - Request is in progress

2. Fulfilled (Resolved)
   - Server responded
   - then() runs
   - Even error responses count as resolved

   Examples:
   - 200 OK
   - 404 Not Found
   - 500 Server Error
   - 429 Rate limit exceeded
   - Wrong URL

3. Rejected
   - Request failed before reaching server

   Examples:
   - Internet down
   - DNS failure
   - Server unreachable
   - Network blocked

   catch() runs


*/

console.log("Hello World Start");

/*//this syntax can be made more simpler
const p1 = fetch("https://api.github.com/users");
const p2= p1.then((data)=>{
    return data.json();
})
p2.then((data)=>{
    console.log(data);
})
*/


//this syntax is called promise chaining, 
/*
fetch("https://api.github.com/users")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    if(!data.ok){
        throw new Error('failed to fetch data');//it will be now handle by .catch
    } 
    console.log(data);
})
.catch((err)=>{
    console.log(err.message);
})

console.log("Hello World end22");
*/


/*PROJECT MADE USING PROMISE
fetch("https://api.github.com/users")
.then((response)=>{
    console.log(response);
    if(!response.ok){
        throw new Error("Data is not persent in server");
    }
    return response.json();
})
.then((data)=>{
    // console.log(data);

    const parent = document.getElementById("first");

    for(let i=0;i<data.length;i++){
    const image = document.createElement('img');
    image.src = data[i].avatar_url;
    image.style.height = "40px";
    image.style.width = "40px";

    parent.append(image);
    }
})
.catch((error)=>{
    const parent = document.getElementById("first");
    parent.textContent = error.message;
})
*/

/*Promise Run immediately did not need then handler
//A Promise does NOT need .then() to resolve.
//The executor runs immediately when the Promise is created, not when .then() is attached.

const p = new Promise((resolve, reject) => {
  console.log("Executor running");

  setTimeout(() => {
    console.log("Resolving promise");
    resolve("done");
  }, 1000);
});
*/

/*The Rule That Should Stick in Your Head
    Rule 1
        -If you create a promise once and store it
        -const p = new Promise(...) :Promise runs only once.
        -p.then()
        -p.then()
        -p.then()
        -Promise runs only once.

    Rule2
        If a function returns a promise

        function getData(){
          return new Promise(...)
        }

        Then every call:creates a new promise each time

        getData().then(data => console.log("A",data));
        getData().then(data => console.log("B",data));
        getData().then(data => console.log("B",data));
        

        creates a new promise each time.


*/



/*//HOW TO CREATE PROMISE-//multiple resolve or reject 1st one is taken
const p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve({
            name:"Rohit",
            age:30,
        });
        resolve('satya');//multiple resolve or reject 1st one is taken
        //reject(`rejected, handle me`)//whatever pass in reject, .catch will get in error and get printed, .then will be skipped if rejected
    },3000)
})

p1.then((response)=>{
    console.log(`resolved1`);
    console.log(response);
})
p1.then((data)=>{
    console.log(`resolved2`);
    console.log(data);
})
.catch((error)=>{
    console.log(`reject`);
    console.log(error);
})
*/


/*JSON
    -it string data format which is understandable by all language 
    -it not js object, it is diff from them
    -json cant have undefined etc 
    -json is a commom format for data which can be used by all lang
    -
*/
/*//js object to JSON conversion
const j1 = {
    name: "Rohit",
    age: 30,
    address: "dwarka",
    middle_name:undefined,//this value will be ignored in json
}
console.log(j1);//{ name: 'Rohit', age: 30, address: 'dwarka', middle_name: undefined }

// this obj need to convert to json
const jsonFormat1 = JSON.stringify(j1);
console.log(jsonFormat1);//{"name":"Rohit","age":30,"address":"dwarka"}

//this is JSON format
const jsonFormat = `{
    "name":"Rohit",
    "age": 30,
    "address": "dwarka"
}`;
console.log(jsonFormat);

//json to js object conversion
const JsObject = JSON.parse(jsonFormat);
console.log(JsObject);//{ name: 'Rohit', age: 30, address: 'dwarka' }
*/



//zomato application
/*
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
        resolve(orderDetail);
    },3000)
    })
    
}


placedOrder(orderDetail)
.then((orderDetail)=>preparingOrder(orderDetail))
.then((orderDetail)=>pickupOrder(orderDetail))
.then((orderDetail)=>deliverOrder(orderDetail))
.then((orderDetail)=>{
    console.log(orderDetail);
})
.catch((error)=>{
    console.log("Error: ", error);
}).
finally(()=>{
    console.log("I am doing cleanup");
})
    */

/*Output based Questions
Why This Confuses Developers
    -Many think .catch() just handles the error and stops the chain.
    -But actually:
        -.catch() returns a new promise
        -If it returns a value → the chain continues as fulfilled.

Very Important Rule
    throw error inside .then() = Promise rejection
    .catch() returning value=Promise becomes fulfilled again        
        
Q0.
Promise.resolve(1)
.then(x => x + 1)
.then(x => { throw new Error(); })
.then(x => console.log(x))
.catch(() => 5)
.then(x => console.log(x));

Final Output:5
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
Promise.reject("error")
.catch(() => {
  console.log(4);
})
.then(v => console.log(v));

solution step
Promise is rejected
.catch() runs
console.log(4) prints 4
The function returns nothing ;a function with no return returns:undefined

o/p:4
    undefined


Q2.
Promise.reject("error")
.catch(() => {
  console.log(4);
  return 10;
})
.then(v => console.log(v));
Output
4
10

Q3.
*/


/*after setTimeout goes to Web API, GEC gets control back right?
Yes.
    -When setTimeout is registered:
    -Call Stack continues executing remaining code
    -The engine does not wait.
    -Why .then() Does Not Execute Immediately
    -Because .then() only registers handlers.
    -Execution happens only when promise state changes.
*/

///PROMISEFICATION
const orderDetail={
    orderId:185141,
    food:['pizza','biryani','coke'],
    price:620,
    customer_name:'Satya',
    customer_location:'Jsr',
    restaurant_location:'adityapur',
}


function placedOrder(orderDetail){
    console.log(`${orderDetail.price} payment is in progress`);
    return new Promise((response,reject)=>{
        if(Math.random()>0.5){
            setTimeout(()=>{
                console.log(`payment successful order get placed`);
                response(orderDetail)
            },3000)
        }
        else{
            reject('Payment failed');
        }
    })
    
}

function prepareOrder(orderDetail){
    console.log(`preparing order ...`);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log(`order completely prepared`);
            res(orderDetail);
        },3000)
    })
    
}

function pickUpOrder(orderDetail){
    console.log('Deliver boy on the way to pick the order');
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('Order received by delivery boy');
            res(orderDetail);
        },3000)
    })
}

function deliverOrder(orderDetail){
    console.log(`i am on the way to deliver the order`);
    return new Promise((res,rej)=>{
        setTimeout(()=>{
            console.log('Order delevered successfully');
            res(orderDetail);
        },3000)
    })
}


placedOrder((orderDetail))
.then((orderDetail)=>prepareOrder(orderDetail))
.then((orderDetail)=>pickUpOrder(orderDetail))
.then((orderDetail)=>deliverOrder(orderDetail))
.catch((err)=>{
    console.log('error',err);
})
.finally(()=>{
    console.log('always runs');//one of use-case remove the loader if data resolved or reject
})

/*Above flow
When a promise is rejected:
.then()  → skipped
.then()  → skipped
.then()  → skipped
.catch() → runs
.finally() → runs

when success flow
Call Stack → placedOrder
        ↓
Promise executor runs
        ↓
setTimeout registered
        ↓
Web API → timer
        ↓
placedOrder returns pending promise
        ↓
.then handlers registered
        ↓
Call Stack empty
        ↓
Timer finishes
        ↓
Task Queue → timeout callback
        ↓
Event Loop moves it to stack
        ↓
response() resolves promise
        ↓
Microtask Queue → prepareOrder
        ↓
Event Loop executes microtask
        ↓
prepareOrder runs
        ↓
setTimeout → Web API
        ↓
Timer finishes
        ↓
Task Queue
        ↓
resolve promise
        ↓
Microtask → pickUpOrder
        ↓
repeat same pattern
        ↓
Microtask → finally

*/