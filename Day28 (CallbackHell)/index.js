/*Callback hell happens when you write too many nested callback functions,why ,we write to handle async task:
    -it make Hard to read -Hard to maintain -Looks like a "pyramid" or "staircase" shape
*/


/*cllback me arrow fn jayega as a argument
callback=()=>{
    preparingOrder();
}
*/

/*ordering pizza from dominos*/

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

//placeOrder();preparingOrder(); //ye trika se dikkat ho jayega kyuki dono fn simultaneously execute ho jayega pr merko order wise run krna hai

//yaha pe phele placeOrder fn pura run ho jaye tb preparingOrder ho fir pickupOder and last me deliverOder --->right nhi to koi mtlb hi nhi banta hai order krne se phele mera order ban jaye not possible
//placeOrder(preparingOrder);//oder wise fn run ho, uske liye cllback fn ka use kr skte hai //isse next fn ko kaise cll kre to uske liye arrow fn ka use krege cllback fn me

placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder()
        })
    });
})
/*cllback ke andar cllback... isee ko cllback hell bolte hai->jo ki boht dificult to understand ho jata hai jb level or andar jat hai tb
    -readibility boht kaam ho jata hai
    -iska main prblm ye hai 
        -ki har ek fn ke liye real life me alag alag team hota hai, or har team apne upper wale fn pe depend kr raha hai i.e., not nice
        -ho skta hai upper team ka fn work na kre or usske chakkar me aapka team v work nhi kr payega
        -debbuging also become very tough
    -to solve this prblm we come up with PROMISE concept     
*/



// function ratingOrder(){

// }
/*
// placeOrder(preparingOrder);
placeOrder(()=>{
    preparingOrder(()=>{
        pickupOrder(()=>{
            deliverOrder();
        });
    })
});

// callback hell
*/






