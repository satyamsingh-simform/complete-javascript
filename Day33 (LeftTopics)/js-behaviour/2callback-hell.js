/*Why we needs callback, promise, async-await 
    -Async mechanisms exist to control execution order when asynchronous operations are involved, ensuring code runs after the required data or task completes.
    -It maintain the execution order in which we want also does not make JS wait. 

*/


// zomato application
/*
const orderDetail = {
    orderId: 123123,
    food:["Pizza","biryani","coke"],
    cost: 620,
    customer_name: "Satya",
    customer_location: "Adityapur",
    restaurant_location: "Jsr"
}


function placedOrder(orderDetail , Callback){
    console.log(`${orderDetail.cost} Payment is in progress`);

    setTimeout(()=>{
      console.log("Payment is received and order get placed");
      orderDetail.status = true;
      Callback(orderDetail);
    },3000)
}

function preparingOrder(orderDetail,Callback){
    console.log(`Your food preparation started of ${orderDetail.food}`);

    setTimeout(()=>{
        console.log("Your order is now prepared");
        orderDetail.token = 123;
        Callback(orderDetail)
    },3000);
}

function pickupOrder(orderDetail ,Callback){
    console.log(`Delivery boy is on way to pickup order from ${orderDetail.restaurant_location} `);

    setTimeout(()=>{
        console.log("I have picked up the order");
        orderDetail.received = true;
        Callback(orderDetail);
    },3000);
}

function deliverOrder(orderDetail){
    console.log(`I am on my way to deliver order ${orderDetail.customer_location}`);

    setTimeout(()=>{
        console.log("Order delivered succesfully");
        orderDetail.delivery = true;
    },3000)
}

console.log('let see');





placedOrder(orderDetail, (orderDetail)=>{
    preparingOrder(orderDetail ,(orderDetail)=>{
        pickupOrder(orderDetail, (orderDetail)=>{
            deliverOrder(orderDetail);
        });
    });
});
*/

/*
function placedOrder(func){
    console.log('payment is in progress');
    setTimeout(()=>{
        console.log(`payment successful order get placed`);
        func(); //prepareOrder() -->doing this will work but we dont want to hardcoard things ,even if we do not need it ,it will execute
    },3000)
}

function prepareOrder(){
    console.log(`preparing order ...`);
    setTimeout(()=>{
        console.log(`order completely prepared`);
    },3000)
}

function pickUpOrder(){
    console.log('Deliver boy on the way to pick the order');
    setTimeout(()=>{
        console.log('Order received by delivery boy');
    },3000)
}
*/
//blunder
// placedOrder();
// prepareOrder();

/*
prepareOrder() runs before placedOrder is called.
The result of prepareOrder() is passed, not the function.prepareOrder does not return anything, so it return value is undefined
    placedOrder(undefined)
        Now func = undefined.
placedOrder starts executing.
    payment is in progress
    After 3s:payment successful order get placed
    func(),but func = undefined
*/
/*Visual Event Loop Flow
CALL STACK
---------
prepareOrder()
placedOrder()

WEB APIs
---------
Timer 1 (prepareOrder)
Timer 2 (placedOrder)

CALLBACK QUEUE
---------
order completely prepared
payment successful order get placed

After 3 seconds → callbacks move to call stack one by one.
*/
// placedOrder(prepareOrder(pickUpOrder))


/*Arrow Function Fixes 
placedOrder(()=>{
    prepareOrder(pickUpOrder)
})

Here you are passing a new function.So placedOrder receives:() => { prepareOrder(pickUpOrder) }
func = () => { prepareOrder(pickUpOrder) }//This function is not executed yet.

Why Arrow Function Fixes It
-until func is not called explicitly arrow function will not be executed hence function inside arrow function will also not get executed
    -Because it wraps the call inside another function.
    -So execution becomes lazy (runs later when called).
*/
const orderDetail={
    orderId:185141,
    food:['pizza','biryani','coke'],
    price:620,
    customer_name:'Satya',
    customer_location:'Jsr',
    restaurant_location:'adityapur',
}


function placedOrder(orderDetail,func){
    console.log(`${orderDetail.price} payment is in progress`);
    setTimeout(()=>{
        console.log(`payment successful order get placed`);
        func(); //func will have reference of this af: ()=>{prepareOrder()} which will only run the prepareOrder() ,anything inside it will pass as agr to next
    },3000)
}

function prepareOrder(callback){
    console.log(`preparing order ...`);
    setTimeout(()=>{
        console.log(`order completely prepared`);
        callback();//()=>{pickUpOrder()}
    },3000)
}

function pickUpOrder(func){
    console.log('Deliver boy on the way to pick the order');
    setTimeout(()=>{
        console.log('Order received by delivery boy');
        func();
    },3000)
}

function deliverOrder(){
    console.log(`i am on the way to deliver the order`);
    setTimeout(()=>{
        console.log(`order delivered successfully`);
    },3000)
}

/*
//func=()=>{prepareOrder()} //untill func is not called explicitly af will not be executed hence fn inside af will also not get executed
// placedOrder(()=>{
//     prepareOrder()
// })

// placedOrder(()=>{
//     prepareOrder(()=>{
//         pickUpOrder()
//     })
// })
*/
/*
CALL STACK
---------
placedOrder()
func()
prepareOrder()
pickUpOrder()
deliverOrder()

WEB APIs
---------
Timer1 → placedOrder
Timer2 → prepareOrder
Timer3 → pickUpOrder
Timer4 → deliverOrder

CALLBACK QUEUE
---------
placedOrder callback
prepareOrder callback
pickUpOrder callback
deliverOrder callback

*/
//this is callback hell->fn inside fn inside fn ...
//jaha pe fn call krte hai udher se argument bhejte hai or jidhar fn body hai udher fn parameter receive krta hai

//problem with callback hell
//  -dependency on previous fn 
//  -syntax is to complex ,which make debug difficult
/*
placedOrder(orderDetail,()=>{
    prepareOrder(()=>{
        pickUpOrder(()=>{
            deliverOrder();
        })
    })
})
*/

/*This Promise syntax will not work directly but need to make fn return promise
placedOrder((orderDetail))
.then(()=>prepareOrder())
.then(()=>pickUpOrder())
.then(()=>deliverOrder())
.catch((err)=>{
    console.log(err);
})
*/