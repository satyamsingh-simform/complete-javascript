/*Why We Need Callback Functions (In Short)
    -Reusability – Use one function for multiple tasks by passing different callbacks.
    -Flexibility – Decide later what to do with the result.
    -Cleaner Code – Avoid repeating the same logic (DRY principle).
    -Async Handling – Ensure code runs after data is fetched.
    -Better Structure – Keeps code modular and organized.
*/

/* why we need :callback function
    -bcz to save the extra line of code 
    -same fn can be used for multiple task etc
*/
/*//without cll back fn greet() meet() dono ke liye alag alag fn likhna prta
//greet ke liye alag fn
function fetchuser1(){
    console.log("Fetching the user Detail.....")
    setTimeout(()=>{
        console.log("Data fetched succesfully");
        const name = "Rohit";//yahi data ko db se fetch krke laya
        greet(name);
    },2000)
}
function greet(name){
    console.log(`Hello ${name}`);
}
fetchuser1();

//meet ke liye alag fn 
function fetchuser2(){
    console.log("Fetching the user Detail.....")
    setTimeout(()=>{
        console.log("Data fetched succesfully");
        const name = "Rohit";//yahi data ko db se fetch krke laya
        meet(name);
    },2000)
}
function meet(name){
    console.log(`Hello ${name} meet you`);
}
fetchuser2();
*/
/*//but with cll back fn greet() meet() dono ke liye same hi fn se kaam ho gaya
function fetchuser1(callback){
    console.log("Fetching the user Detail.....")
    setTimeout(()=>{
        console.log("Data fetched succesfully");
        const name = "Rohit";//yahi data ko db se fetch krke laya
        callback(name)
    },2000)
}

function greet(name){
    console.log(`Hello ${name}`);
}
function meet(name){
    console.log(`Hello ${name} meet you`);
}
// fetchuser1(greet);
fetchuser1(meet);
*/



/*bhaiya eg-->uper wala mera eg
// function fetchuser2(){
//     console.log("Fetching the user Detail.....")
//     setTimeout(()=>{
//      console.log("Data fetched succesfully");
//      const name = "Rohit";
//     //   Data fetched from backend
    
//     meet(name);
//     },2000)
// }


// function fetchuser(){
//     console.log("Fetching the user Detail.....")
//     setTimeout(()=>{
//      console.log("Data fetched succesfully");
//      const obj = {
//         name: "Rohit",
//         age:28,
//         city:"Delhi",
//      }
//     //   Data fetched from backend
    
//     greet(obj);
//     },2000)
// }


// function fetchuser1(){
//     console.log("Fetching the user Detail.....")
//     setTimeout(()=>{
//      console.log("Data fetched succesfully");
//      const obj = {
//         name: "Rohit",
//         age:28,
//         city:"Delhi",
//      }
//     //   Data fetched from backend
    
//     printAge(obj);
//     },2000)
// }


function greet(obj){
    console.log(`Hello ${obj.name}`);
}

// fetchuser();
// fetchuser1();


function meet(obj){
    console.log(`Hello ${obj.name}, I will meet you in Delhi`);
}

function edit(obj){
    console.log(`Edit ${obj.name}, of the user`)
}

function printAge(obj){
    console.log(`User ${obj.age}`)
}

// fetchuser(greet);
// fetchuser(meet);
// fetchuser(greet);
// fetchuser(edit);


//  User data fectch: 
// {
//         name: "Rohit",
//         age:28,
//         city:"Delhi",
//  }
// 1: greet
// 2: meet
// 3: edit
// 4: age

function fetchdata(callback){
    console.log("Fetched info of user");

    setTimeout(()=>{
      console.log("User detail fetched succesfully");
      const obj = {
                name: "Rohit",
                age:28,
                city:"Delhi",
         }

        callback(obj);
    },2000)
}

fetchdata(edit);
*/ 




