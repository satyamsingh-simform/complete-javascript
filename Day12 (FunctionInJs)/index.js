/*
//FUNCTION:In JS fn is also a special type of value only

//function declaration
function greet(){
    console.log("Hello Coder Army");
    console.log("Mein badiya hu");
    console.log("Aur Kya chal rha hai");
    return 10;
}
greet();//isme sirf fn cll hoga or statement chalega ,return hai nhi hai koi fark nhi prega
console.log(greet());//undefined //agar fn kuch return nhi kr raha hai mtlb fn ka return val undefine hai

//expression function
const add=function(a,b){
    console.log("dusre type se fn ko banane ka tarika");
    return a+b;
}
// greet();
console.log(add(3,4));//7
add(10,20);//dusre type se fn ko banane ka tarika
*/

/*
//add program
function sum(num1 , num2){         //parameter-joo fn ke pas hai
    console.log(num1+num2)
};
//function call
sum(3,4);    //argument-fn call ke time jo pas krte hai
sum(10,15);

// Multiplication: function
function multiply(number1 , number2){
    console.log("multiply result");
    return number1*number2;
}
let result = multiply(4,5);
console.log(result);
console.log(multiply(5,6));


const fun = function(){
    console.log("Hello Coder Army");
    console.log("Mein toh badiya hu");
    return "Money";

    //console.log("return ke baad wala koi v statemen run nhi hoga");
}
console.log(fun());//Money
console.log(fun);//[Function: fun] wrong
*/


/*
//Arrow function //let sum2=()=>{}
const sum1 = (num1, num2)=>{
   return num1*num2;
}
console.log(sum1(3,4));


const sum2 = (num1, num2) => num1+num2 ;//single line me likhege to curley braces v hata deneg or return statement v need nhi hai
console.log(sum2(3,4));

const cube = num => num*num*num;//ek hi parameter hai tb () ye bracket ka v need nhi hai
console.log(cube(8));
*/


/*
//spread operator or rest operator
// let arr = [2,3,4,5];
// let arr2 = [...arr];//this is spread operator used to copy(shallow copy) whole arr/obj to another arr/obj
// console.log(arr2);//[ 2, 3, 4, 5 ]
// arr2.pop();
// console.log(arr2);//[ 2, 3, 4 ]
// console.log(arr);// [ 2, 3, 4, 5 ]

//rest operator-sare bache hue ko ek array/obj me store kr lega
// Here ...number is used in function parameters, which means:
// Collect all incoming arguments and store them into a single array
// That is exactly what rest operator does.
*/
const sum = function(...number){
    // for loop sum nikal sakta hu
   console.log(number);
}
sum(2,3,4);//[ 2, 3, 4 ]
sum(4,6,1,10,13);//[ 4, 6, 1, 10, 13 ]
sum(2,3);//[ 2, 3 ]
sum([1,2,3,4])//[ [ 1, 2, 3, 4 ] ]
let arr = [2,3,4,5];
sum(...arr)//[ 2, 3, 4, 5 ]

const sumArr = function([...number]){
    // for loop sum nikal sakta hu
   console.log('behav:',number);
}
sumArr([1,2,3,4]) //behav: [ 1, 2, 3, 4 ] //[ [ 1, 2, 3, 4 ] ] not this 
// sumArr(1,2,3,4)//error fn argument has to be arr


let obj = {
    name: "Rohit",
    age:30,
    amount:420,
    add:{
        city:'jsr',
        road:10,
    }
}
const {name , amount} = obj;//destructuring obj
//console.log(name,amount);
//Homework pass by value or pass by reference

function fun({name, age, ...rest}){
   console.log(name , age);//Rohit 30
   console.log('rest:',rest);//rest: { amount: 420, add: { city: 'jsr', road: 10 } }
}
fun(obj);

//pura ka pura obj v bhej skte hai fn me as arguments
function love(obj1){
    console.log(obj1);
}
love(obj);//

/*
let obj1 = {
    a:1,
    b:2,
}

let obj2 = {
    c:1,
    d:2,
}


obj2 = Object.create(obj1);

// obj2.__proto__ = obj1;
// console.log(obj2.__proto__)

*/







