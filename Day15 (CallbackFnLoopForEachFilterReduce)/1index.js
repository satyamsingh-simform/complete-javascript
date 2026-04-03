//writable,enumerable,configurable are not used for hacking this is mis-conception, iska use accidental changes se bachne ke liye krte hai 
/*
let user= {
    name:"rohit",
    age:30
}
console.log(Object.getOwnPropertyDescriptor(user, "name"))
Object.defineProperty(user, 'name',{
    writable:false,       //Hacking se bachne ke liye humeine ye sab kiya hai 
});                       //abb name ka value ko kavi change hi nhi kr payege, this is not true, hacker writable ka property v to change kr skta hi 
user.name = "mohit";      //iska use accidental changes se bachne ke liye krte hai      
*/



//for in loop-generally used to iterate over object //can iterate over keys in an object  //traditional for loop & for in loop(object) padh chuke hai avi tkk
/*
for(let abc in obj1){
    console.log(`${abc} : ${obj1[abc]}`);
}
*/

/*GOOD CASE
// for of loop-for array generally, it directly access the value of arr
//It iterates over values, not indexes, Order is guaranteed Ignores extra properties, for in lopp Order not guaranteed is also a prbm.
const arr = [10,20,11,18,13];
for(let value of arr){
    console.log(value);//10 20 11 18 13
}

//for in loop-:but it is advisable not to use it with arr bcz for...in, iterates over indexes and inherited properties as well, not guaranteed in numeric order for numeric keys, which can cause unexpected results.
for(let i in arr){
    console.log(arr[i]);
}
console.log("check this case---> order prbm with for in loop");
let codes = {
  "49": "Germany",
  "41": "Switzerland",
  "44": "Great Britain",
  "1": "USA"
}
for(let key in codes){
     console.log(key);
}
console.log("check this case--->");

let str = "Rohit is Good Boy";
for(let val of str){
    console.log(val);    
}   
*/
/*
// don't use for of loop with object-->ye error de dega-> TypeError: obj is not iterable
const obj = {
    name:"Chavvi",
    age:22,
    gender:"female"
};
console.log(obj);
for(let value of obj){
    console.log(value);//TypeError: obj is not iterable
}
*/    
/*
//fir v use krna hai t0 ye tarika se kr skte hai
const obj = {
    name:"Chavvi",
    age:22,
    gender:"female"
};
for(let key of Object.keys(obj))
    console.log(`${key}:${obj[key]}`);
*/

////CALLBACK FUNCTION-->2call.js file me hai


/*forEach LOOP:(ek cllback fn ko expect krta hai)
    -used for array iteration only.  forEach() is used when you want to perform an action on every element of an array.
    -value ko return nhi kr skta hai forEach- isse v array pe iterate kr skte hai
    -You can modify the original array inside forEach, but need to be done explicitly using index property. 
    -forEach value pe operation karta hai, original array change ho sakta hai, but naya array return nahi karta.  
    -forEach me cllback fn ke andar 3 parameter milta hai   
    -phela wala parameter me arr ka val jata hai ,2nd wala me arr ka index, 3rd wala me pura array ka value    
    .forEach(cllback(val, index, arr))
*/

// let arr = [10,20,30,40,50];         

/*
console.log("function as cllback");
arr.forEach(function updateArr(num){
    console.log(num*2);//20 40 60 80 100
})

console.log("arrow fn as cllback");
arr.forEach((num)=>{        // num ke trh forEach me cllback fn ke andar 3 parameter milta hai
    console.log(num); //10 20 30 40 50
})
arr.forEach((num)=>console.log(num));////10 20 30 40 50

console.log(`anonomous fn as cllback in forEach`);
arr.forEach(function (num){
    console.log(num);//10 20 30 40 50
})
*/
/*
//-You can modify the original array inside forEach, but need to be done explicitly using index property. 
console.log(arr);//[ 10, 20, 30, 40, 50 ]
arr.forEach((val, index, arr)=>{
    arr[index]=val*2;
    console.log(arr);
})
console.log(arr);//[ 20, 40, 60, 80, 100 ] //array got changed
*/
/*
console.log();
arr.forEach((num,index)=>{   //num,index, forEach me cllback fn ke andar 3 parameter milta hai
    console.log(num,index);  //phela wala parameter me arr ka val jata hai ,2nd wala me arr ka index 
})

console.log();
let arr = [10,20,30,40,50]; 
arr.forEach((val,index,arr1)=>{ //val,index,arr: forEach me cllback fn ke andar 3 parameter milta hai
    // console.log(arr[index]*2);//20 40 60 80 100
    console.log(index);//print index one by one
    console.log(val);
    // console.log(arr1);//10 20 30 40 50-->jitna arr me el hai unteene baar loop run hoga or unta hi baar pura arr print hoga
})
*/

/*
console.log("ek or trika hai cllback bhejne ka, arrow fn trika is prefered");
function printArr(num){
    console.log(num);
}
arr.forEach(printArr)

*/




//FILTER
/*// filter:help to filter our data// it return filter out data//ye T F me ans krta hai T ko accept kr lega F then rejected
    -filter is a built-in Js method used to create a new array by selecting only the el that meet a specific condition. 
    -It does not modify the original array.
    -If the condition is true, the item is added to the new array.
    -If the condition is false, the item is skipped.
    -No braces {} → automatic return,  With braces {} → must write return
*/
/*
let arr = [10,22,33,41,50];
let result=arr.filter((num)=>{  //filter me v cllback fn ke andar 3 parameter milta hai ,val(ek ek value aate jayega),index,arr(last two para r optional):  
    return num%2==0;
})
console.log(result);//[ 10, 22, 50 ]
*/
/*
//real life use case of filter
const students = [
    {name:"Rohan", age:22, marks:70},
    {name:"Mohan", age:24, marks:80},
    {name:"Darshan", age:28, marks:30},
    {name:"Mohit", age:32, marks:40},
    {name:"Shadik", age:12, marks:90},
    {name:"Shadik", age:14, marks:50},
]
let arr2=students.filter((stu)=>{
    return stu.marks>70;
})

let ans=students.filter((obj)=> obj.marks >= 50)
console.log(ans);

let ans2=students.filter(({age})=> age<20); //obj aaya usko destructure kr liye direct
console.log(ans2);

let res= students.filter(({marks})=>marks<50);
let [a,b]=res;//array destructuring
console.log(res);//array of obj hai
console.log(a,b);//obj hai isme
*/
/*Things that CANNOT be written after return (Declarations(return let a = 5;) / Statements)
    -In JavaScript, return can only return expressions (values) such as literals, variables, operations, function calls, assignments, objects, arrays, 
    or ternary expressions, but it cannot return declarations or statements like let, const, var, function, class, if, for, or while.
*/
//MAP
// map:isme value ko modify kr skte hai but filter me sirf yes no se filter out krwa skte hai
//map() always returns a new array of the SAME length, with modified values.
// const arr = [1,2,4,5]
/*
let arr2=arr.map((num)=>{
    let v1=num;
    return v1;
    // return let v1=num;//error declaration can't be returned
})
console.log(arr2);//[ 1, 2, 4, 5 ]
*/
/*
let arrModify=arr.map((val)=>val*val);
console.log(arrModify);//[ 1, 4, 16, 25 ]
let arrModify2=arr.map((val,index)=>val*index);
console.log(arrModify2);//[ 0, 2, 8, 15 ]
*/

/*using map & filter togrther
    -right:filter completes → new array created → map runs on that array
    -wrong:filter one value → map → filter next value → map
    -If you want both operations in a single iteration, you would use reduce(), because filter + map does two loops internally
*/

const arr2 = [1,2,3,4,5,6];
let res=arr2.filter((val)=>val%2==0).map((filVal)=>filVal*filVal);
console.log(res);
let res2=arr2.filter((val)=>val%2==0).map((filVal)=>filVal*filVal).map((filValMod)=>filValMod/2);//This pattern is called method chaining.
console.log(res2);

/*
//forEach ko return value nhi kr skte hai error dega
// const re = arr.forEach((num)=>{
//     return num;
// }) wrong, no return

//console.log(re)
// const result = arr.map((num,index)=> num*index);

// console.log(result);


//  Reduce , iske discussion karenge....
*/

