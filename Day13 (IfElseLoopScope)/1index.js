/*
//if else
let age = 7;
if(age>=18){
    console.log("Eligble for vote");
}
else{
    console.log("Not Eligible for vote");
}

// if else-ladder
let age1 = 49;
if(age1<18){
    console.log("KID");
}
else if(age1>45){
    console.log("OLD");
}
else{
    console.log("YOUNG");
}
*/

/*
//Multiple condition: switch
//console.log(new Date().getDay());
let day=new Date().getDay();
//let day = "0";
// ===
switch(day)
{
    case 0:
        console.log("SUNDAY");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    default:
        console.log("Not a Valid Day");
}
*/
/*
// loop : ek hi kaam ko baar baar karna
for(let i=0;i<20;i++){
    console.log(`Hello Coder Army ${i}`);
}

//sum of first n number: 10 number
let sum = 0;
for(let i=1;i<=10;i++){
    sum=sum+i;//sum+=i;
}
console.log(`sum of 1st 10 num is:${sum}`);


/*
// 20 print karna hai
//  Nested for loop-Loop ke andar loop
// 12345
// 12345
// 12345
// 12345
// 12345
// 12345

// "/n-for next line , /t-for a tab space"
// console.log(`love you \nmeri jaan`);
// console.log(`love you \tmeri jaan`);
// console.log(`love you \\tmeri jaan`);\ is used to ignore just next word

// Homework mein sochna hai
// for(let j=0;j<6;j++){
//    for(let i=1;i<=5;i++){
//     console.log(i);
//    }
// }

// for(let i=0;i<20;i++)
//     console.log(i);
*/

/*
//  scope ke baare mein: 
//  var-why dont we use var (bcz it dont follow block scope rule)--//block scope-jis curley braces me variable ko declare kiye hai usse me sirf access kr skte hai ,pr var variable isko follow nhi krega--->first.js 
*/

/*
//for loop
for(let i=1;i<6;i++){}

// while loop
let i = 1;
while(i<6){
    console.log(i);
    i++;
}
//do-while loop 
*/
/*
//how to print array el
let arr = [10,30,40,50];
console.log(arr.length);//4
//using for loop to print array elements
for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
*/



//how to iterate over object in js-using traditional loop
const obj = {
    name:"rohit",
    age:30,
    amount:420,
    city: "kotdwar"
}
const keyArr=Object.keys(obj)
for(let i=0;i<keyArr.length;i++){
    console.log(`${keyArr[i]}:${obj[keyArr[i]]}`);
}
for(let key of keyArr){
    console.log(obj[key]);
    console.log(obj["key"]);//undefined
}
for(let key in obj){
    console.log(obj[key]);
}

/*
//traditional loop
const val=Object.values(obj);//ye ek array dega obj ka value ka
console.log(val);

const key = Object.keys(obj);//[ 'name', 'age', 'amount', 'city' ]
for(let i=0;i<key.length;i++){
    // console.log(key[i]);
    console.log(obj[key[i]]);//obj[name]=rohit
    // rohit
    // 30
    // 420
    // kotdwar
}

*/







