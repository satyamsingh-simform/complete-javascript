cart = ["pizza","coke","sandwich"];

/*callback hell solution promise
//order kiye
function placeOrder(callback){
    console.log("Talking with Domino's"); 
    setTimeout(()=>{
        console.log("Order Placed Succesfully");
        callback();
    },2000)
}

//aab order prepareho raha hai
function preparingOrder(callback){
    console.log("Pizza preparation started....");
    setTimeout(()=>{
        console.log("Pizza preparation Done");
        callback();
    },5000)
};

//order prepare hone ke baad delivery boy order pickup krrega
function pickupOrder(callback){
    console.log("Reaching restaurant for picking order")
    setTimeout(()=>{
        console.log("Order picked up by Delivery Boy");
        callback();
    },3000)
}

//delivery boy order leke nikal chuka hai
function deliverOrder(){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Order Delivered succesfully");
    },5000)
}

//placeOrder();preparingOrder(); //ye trika se dikkat ho jayega kyuki dono fn simultaneously execute ho jayega pr merko oreder wise run krna hai

placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder()
        })
    });
})

*/

/*//how to create Promise
const pr1=new Promise(function(resolve,reject){

})
return pr1;
*/

function placeOrder(cart){
    console.log("Talking with Domino's"); 
    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            const food_available = true;
            if(food_available){
                console.log("Order Placed Succesfully");
                const order = {orderId: 221 , food: cart , restaurant: "Dominos", location:"Dwarka"}
                resolve(order);
            }
            else{
                reject("Items Out of Stocks");
            }
           },2000)
    })
    return pr;
}

function preparingOrder(order){
    console.log("Pizza preparation started....");
    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Pizza preparation Done");
            const foodDetails = {token: 12 , restaurant: order.restaurant, location: order.location};
            resolve(foodDetails);
        },5000)
    })
    return pr;
};

function pickupOrder(foodDetails){
    console.log("Reaching restaurant for picking order")
    
    const pr = new Promise(function(resolve,reject){
        setTimeout(()=>{
            console.log("Order picked up by Delivery Boy");
            const droplocation = foodDetails.location;
            resolve(droplocation);
           },3000)

    })

    
}

function deliverOrder(droplocation){
    console.log("Delivery boy on the way");

    setTimeout(()=>{
        console.log("Order Delivered succesfully");
    },5000)
}



placeOrder(cart)
.then(order=>preparingOrder(order))
.then(foodDetails=>pickupOrder(foodDetails))
.then(droplocation=>deliverOrder(droplocation))
.catch(error=>console.log(error));


