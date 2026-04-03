//async-await understanding with eg 
function test1(){
    console.log('i am test1 fn');
    const p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("First Promise resolved");
        },5000)
    })
    return p1;
}

function test2(){
    console.log('i am test2 fn');
    const p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Second Promise resolved");
        },5000)
    })
    return p2;
}

async function greet() {
    console.log("Hello I greet You"); //1
    const data1 =await test1();//waiting hai to js line 28 pe redirect hoga or uske neeche ka code ko run karayega
    console.log(data1);//4

    const data2 =await test2();
    console.log(data2);//5
}
greet();
console.log("Hello Coder Army");//2
console.log("Kaise ho aap sab log");//3











// //how to use try-catch, how to make independent promise run in parallel 
// function test1(){
//     const p1 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("First Promise resolved");
//         },5000)
//     })
//     return p1;
// }

// function test2(){
//     const p2 = new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve("Second Promise resolved");
//         },5000)
//     })
//     return p2;
// }

// async function greet() {
//     try{

//         /*dependent promise hai tb to parallel run se bachane ke liye hi ye async await, promise, callback hell laye 
//         const data1 =await test1();
//         console.log(data1);
//         const data2 =await test2();
//         console.log(data2);
//         */
//         //how to run them in parallel
//         const [data1,data2]=await Promise.all([test1(),test2()]);
//         console.log( data1,"\n",data2);

//     }catch(err){
//         console.log(err);
//     }
// }
// greet();




// 


        
