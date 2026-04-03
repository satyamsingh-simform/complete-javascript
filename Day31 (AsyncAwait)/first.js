const cart = ["Pizza","Coke", "sandwich"];

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
    return pr;
}

function deliverOrder(droplocation){
    console.log("Delivery boy on the way");
    setTimeout(()=>{
        console.log("Order Delivered succesfully");
    },5000)
}
/*promise wala se v aacha ke syntax hai async await ka
placeOrder(cart)
.then(order=>preparingOrder(order))
.then(foodDetails=>pickupOrder(foodDetails))
.then(droplocation=>deliverOrder(droplocation))
.catch(error=>console.log(error));
*/

//async await->ye wala format promise se jayada easy hai 
//but avi isme prbm hai ,jaise placeOrder run hoga usme ek async task(setTimeout) ke wajh se waiting time aa gaya but js to wait nhi krega o next fn ko immediately run kr dega befor placeOrder execution completes
//to isse prbm se bachne ke liye we use await--> pr await direct use nhi kr skte hai ,usko asyn fn type ke andar me hi likh skte hai 
async function greet(){
    const order= await placeOrder(cart);//aab ye fn wait krega until order me value na aa jaye tb tkk 
    const foodDetails=await preparingOrder(order);
    const droplocation= await pickupOrder(foodDetails);
    deliverOrder(droplocation);
}
// greet();

/*async await
async function greet() {
    try{
    const order = await placeOrder(cart);
    const foodDetails = await preparingOrder(order);
    const droplocation = await pickupOrder(foodDetails);
    deliverOrder(droplocation);
    }
    catch(error){
        console.log(error)
    } 
}
greet();
*/


/*different eg of async-await  */

//eg1
const p1=new Promise(function(resolve,reject){
    setTimeout(()=>{
        resolve("hello")
    },5000) 
})

//async await->is more readable
async function greet(){
    const data1=await p1;
    console.log(data1);

    const data2=await p1;//yaha pe ye wait nhi krega kyuki data already uper hi resolve ho chuka hai //myth ye hai ki dono parallel me chal raha hai isliye 
    console.log(data2);
}
// greet();
//same thing with promise
//p1.then(data=>console.log(data))




//eg2
const p2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("first promise")
    },8000) 
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
// p2.then(value=>console.log(value));
// p3.then(value=>console.log(value));


//eg3
function test1(){
    const p1=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("first promise")
        },5000) 
    })
    return p1;
}
function test2(){
    const p2=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("second promise")
        },5000) 
    })
    return p2;
}

//yaha pe jo phele cll hua o run hoga uske execute hone ke baad dusra wala run hona start hoga
async function greet(){
    const data1=await test1();//phele iska data aayega
    console.log(data1);

    const data2=await test2();//fir 5 sec ke baad iska 
    console.log(data2);
}
// greet();

//async await hamesa hi ek promise hi return krega or agar kuch v return nhi kiye hai to undefine ko hi promise bana dega
async function meet(){
    return 'hello';//isko v promise me hi convert kr dega //but promise to resolve me hota hai aisa async me nhi hai to v ok
}
meet()
.then(data=>console.log(data))//hello  //undefined














/*

function test1(){

    const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("First Promise resolved");
        },5000)
    })

    return p1;

}


function test2(){
    
    const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Second Promise resolved");
        },5000)
    })

    return p2;

}



// p1.then(value=>console.log(value));

// p2.then(value=>console.log(value));


// console.log(p1);
// p1.then((response)=>console.log(response));

// async function greet() {
     
//     const data1 = await test1();
//     // console.log("Hello Coder Army");
//     console.log(data1);

//     const data2 = await test2();
//     console.log(data2);
// }

// greet();


// async function meet() {
    

// }

// meet().then(value=>console.log(value));

*/






