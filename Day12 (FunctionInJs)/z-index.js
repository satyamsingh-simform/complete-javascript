//FUNCTION
// function greeting(){
//     console.log("Hello this is not return type it is just what fn will print and not what it will return");
//     // return 10;
//     return;//undefined
// }
// greeting();
// console.log(greeting());//10  //undefined


// function addNumber(num1,num2,num3=0,num4=0){
//     const sum = num1+num2+num3+num4;
//     console.log(sum);
// }
// addNumber(3,4);
// addNumber(6,7,8);
// addNumber(6,7,8,9);
// addNumber(7,8,12,12,11,12,41,12)//rest other parameter will be ignored , err nhi dega


// REST OPERATOR:-now no need to fix the argument, rest will catch any no. of argument 
// function addNumber(...num){
//     let sum=0;
//     for(let n of num){
//         sum+=n;
//     }
//     console.log(sum);
// }
// addNumber(6,7);
// addNumber(6,7,8);
// addNumber(6,7,8,9);
// addNumber(7,8,12,12,11,12,41,12)


// const arr = [10,20,30,40,50];
// const arr2 = [30,70,90,10];
// const ans = [arr,arr2]; //[ [ 10, 20, 30, 40, 50 ], [ 30, 70, 90, 10 ] ]
// console.log(ans);

/*REST vs SPREAD
const arr = [10,20,30,40,50];
const arr2 = [30,70,90,10];
//REST
const [...num2]=arr2;
console.log(num2);
const [first,second, ...num] = arr;
console.log(first,second);
console.log(num);
//SPREAD
const arr31=[...arr];
console.log(arr31);//[ 10, 20, 30, 40, 50 ]
const arr3=[...arr, ...arr2];
console.log(arr3);//[10, 20, 30, 40, 50, 30, 70, 90, 10]
*/






// console.log(addNumber(3,4));
// function addNumber(num1,num2){
//     return num1+num2;
// }

//FUNCTION EXPRESSION
// const addNumber =function(num1,num2){
//     return num1+num2;
// }
// console.log(addNumber(3,4));


//ARROW FUNCTION
// ()=>{
    
// }

// let arr = [10,11,19,7,50];
// arr.sort((a,b)=>b-a); //ye v ek arrow fn hi hai
// console.log(arr);

// const addNumber = (num1,num2)=>{
//    return num1+num2;
// }

//agar single line hi return krna hai arrow fn me se to "return" or "{}" ko omit kr skte hai
// const addNumber = (num1,num2) => num1+num2;
// const Num=(num)=>num*num;

// if we have single parameter, no need of this ()
// const squareNumber = num => num*num;

// console.log(addNumber(3,4));
// console.log(squareNumber(6));

//RETURN an OBJECT from Fn
// const greeting = ()=> {
//     return {
//         name:"Rohit",
//         age:20,
//     }
// }
// console.log(greeting());//{ name: 'Rohit', age: 20 }

//RETURN an OBJECT from Fn as single line statement then both return and {} not needed but one parenthesis () is needed must to save from erro
const greeting = ()=> ({ name:"Rohit",age:20,class:3});
// console.log(greeting());//{ name: 'Rohit', age: 20, class: 3 }


// IIFE-Immediately Invoked Function Expression
// (function greeting(){
//     console.log("Helloji");
// })();

//IIFE-Arrow Function
// ((a,b)=>{
//     console.log("hi");
//     console.log(a+b);
// })(4,5);


// 

// function greet(){
//     console.log("Hello Ji, Kaise ho")
// }

// function dance(){
//     console.log("I am dancing");
// }

// function meet(callback){
//     console.log("I am going to meet someone");
//     // dance(); hardcode (Reusable)
//     // code hota jisko marta
//     callback();
//     console.log("I have finished meeting");
// }

// meet(greet);
// meet(dance);

// blinkit
/*
function blinkitOrderPlaced(){
    console.log("We have started packing your Order");
}

function zomatoOrderPlaced(){
    console.log("We have started preparing your food");
}

function payment(amount,callback){
    console.log(`${amount} payment has initilized`)
    console.log("Payment is received");
    callback();

    // GST: Government
    // Rider ko kitna payment dena
    // company ko kitna 
}

payment(500,zomatoOrderPlaced);
payment(300,blinkitOrderPlaced);
*/

/*//its parent scope = outer()
function outer() {
  let x = 10;
  const arrow = () => {
    console.log(x);
  };
  arrow();
}
outer();

//Parent scope = Global scope
let x = 50;
const arrow = () => {
  console.log(x);
};
arrow();

//Parent scope = block scope
{
  let a = 20;
  const arrow = () => {
    console.log(a);
  };
  arrow();
}
*/


//Parent scope of inner = outer arrow scope
const outer = () => {
  let x = 30;

  const inner = () => {
    console.log(x);
  };
  inner();
};

outer();

//Parent scope = printHobbies function
const user = {
  name: "Alice",
  hobbies: ["reading", "coding"],
  greet(){
    console.log('hi');
  },
  printHobbies: function () {
    this.hobbies.forEach((hobby) => {
      console.log(`${this.name} likes ${hobby}`);
    });
  }
};
user.printHobbies();


//Parent scope = start() function
function Stopwatch() {
  this.seconds = 0;
  this.start = function () {
    setInterval(() => {
      console.log(this.seconds);
      this.seconds++;
    }, 1000);
  };
}
const myWatch = new Stopwatch();
// myWatch.start();

//Parent scope = Global Scope
//Objects DO NOT create scope in JavaScript.
const person = {
  name: "Alice",

  // Arrow function method
  sayHi: () => {
    console.log(`Hi, my name is ${this.name}`);
  },

  // Regular method
  speak: function () {
    console.log(`Hi, my name is ${this.name}`);
  }
};
person.sayHi();//Hi, my name is undefined
person.speak();//Hi, my name is Alice