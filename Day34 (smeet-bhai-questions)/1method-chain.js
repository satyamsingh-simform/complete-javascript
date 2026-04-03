

// let a=0.1;
// let b=0.2;
// let c=a+b;

// console.log(c==0.3);


// let a="0.1";
// let b="0.2";
// let c= +a + +b;
// console.log(c);
// console.log(c==0.3);


// let a=0.1;
// let b=0.2;
// let c=(a+b).toFixed(1);
// console.log(c);
// console.log(c==0.3);

// let bool=Boolean("");
// console.log(bool);

// let bool=Boolean("\s");
// console.log(bool);

// let bool1=Boolean(" ");
// console.log(bool1);
// let bool2=Boolean("");
// console.log(bool2);

// console.log(null==null);//true
// console.log(undefined==undefined);//true
// console.log(null==undefined);//true

//declarative function
// function Sum(){
//     return 0;
// }

// //function expression
// let fun1=function(){
//     return;//undefined return hoga 
// }

// //arrow fn
// let arrowFun=()=>{}
// let arrowFun2=()=>{
//     return str;
// }

// arr=[10,20,30,3,5,7,40];

// arr.filtering((num)=>num>25);

// function filtering(compare){
//     for(num of arr){
//         if(num>25){

//         }
//     }
    
// }

// arr.filtering=function(compare){
//     const ans=[];
//     for(let num of this){
//         if(compare(num)){
//             ans.push(num);
//         }
//     }
//     return ans;
// }

// arr.filtering((num)=>num>25)


// function Calculator(){
//     function Add(){

//     }
//     function Mul(){

//     }
//     function Sub(){

//     }
// }

// const Calculator={
//     value:0,
//     Calculator:function(){
//     }
// }

// function cal(Val) {
//     let value =Val;
//     function add(num) {
//             return value+num;
//         }
//     function sub(num) {
//             return value-num;
//         }
//     function mul(num) {
//             return value*num;
//         }
//     return{
//         add,
//         sub,
//         mul
//     };
// }
// console.log(cal());
// let res= cal(50).add(5).sub(5);
// console.log(res);


// function cal(Val) {
//     let value=Val;
//     function add(num) {
//         value=value+num;
//         return this;
//     }
//     function sub(num) {
//         value=value-num;
//         return this;
//     }
//     function mul(num) {
//         value=value*num;
//         return this;
//     }
//     function result(){
//         return value;
//     }
//     return{
//         add,
//         sub,
//         mul,
//         result
//     };
// }
// console.log(cal());
// let res= cal(50).add(5).sub(5).mul(2).result();
// console.log(res);

// function cal(val) {
//     let value = val;

//     return {
//         add: (num) => {
//             console.log(this);
//         }
//     }
// }
// Here the arrow function will inherit this from cal's scope.

// But when cal() is called like this:
// cal(50)
// cal is a normal function call, so inside cal:
// this → global object (or undefined in strict mode)
// Therefore inside add:
// this → same as cal's this (global / undefined)



/*
    cal() returns an object using return { ... }.
    The functions add, sub, mul, div, result become methods of that returned object.
    When you write cal(50).add(5), the returned object calls add().
    In JavaScript, this depends on who calls the function.
    Since the object calls add(), this inside add refers to that returned object.


    return this returns the same object, which allows method chaining like
    this inside add() → the object returned by cal()
    Because .add() is called as a method of that object.
*/
// function cal(Val) {
//     let value =Val;
//     return{
//         add(num){
//             value+=num;
//             console.log("value for log is");
//             console.log(this);
//             return this;
//         },
//         sub(num){
//             value-=num;
//             return this;
//         },
//         mul(num){
//             value*=num;
//             return this;
//         },
//         div(num){
//             value/=num;
//             return this;
//         },
//         result(){
//             // console.log(this.value);
//             return value;
//         }
//     };
// }
// console.log(cal());
// let res= cal(50).add(5).sub(5).mul(2).result();
// console.log(res);


/*
The outer lexical scope of a function is the place where the function is defined, not the object it belongs to.
When a method is written inside an object literal, the function is actually created in the surrounding scope (usually the global scope).
Therefore, when the function runs and tries to access a variable like value, JavaScript searches only in:
The function's local scope
The outer lexical scope (e.g., global scope)
It does not check object properties during this scope lookup.


JS engine sees it like this
const calculator = {};

calculator.value = 0;

calculator.calValue = function () {
    console.log(value);
};
//is created in the global scope, because the statement



*/
// const calculator={
//     value:0,
//     calValue(){
//         console.log(this.value);
//         return{
//             add(num){
//                 value+=num;
//                 console.log("value for log is");
//                 console.log(this);
//                 return this;
//             },
//             sub(num){
//                 value-=num;
//                 return this;
//             },
//             mul(num){
//                 value*=num;
//                 return this;
//             },
//             div(num){
//                 value/=num;
//             },
//             result(){
//                 console.log(this.value);
//                 // return this.value;
//             }
//         };
//     },
// }

// calculator.calValue().result();


/*
this.calValue	return function reference
    -(function).add()-->But functions do not have add() method, so you get an error.
this.calValue()	call function and return its result
    -return this.calValue();
    -calValue() runs again
    -It returns the object with add/sub/mul
*/


//Normal way
// function cal(Val) {
//     let value =Val;
//     return{
//         add(num){
//             value+=num;
//             console.log("value for log is");
//             console.log(this);
//             return this;
//         },
//         sub(num){
//             value-=num;
//             return this;
//         },
//         mul(num){
//             value*=num;
//             return this;
//         },
//         div(num){
//             value/=num;
//             return this;
//         },
//         result(){
//             // console.log(this.value);
//             return value;
//         }
//     };
// }
// console.log(cal());
// let res= cal(50).add(5).sub(5).mul(2).result();
// console.log(res);

// Arrow fn way with object
const calculator={
    value:0,
    calValue(){
        // console.log(this.value);
        return{
            add:(num)=>{
                // console.log(this.calValue);//[Function: calValue]
                this.value+=num;
                return this.calValue();
            },
            sub:(num)=>{
                this.value-=num;
                return this.calValue();
            },
            mul:(num)=>{
                this.value*=num;
                return this.calValue();
            },
            div:(num)=>{
                this.value/=num;
                return this.calValue();
            },
            result:()=>{
                return this.value;
            }
        };
    },
}
let result=calculator.calValue().add(20).add(10).result();//does not pass argument gives NaN
console.log(result);


//Arrow Function Version
const cal=(Val=0)=>{
    let value=Val;
    const obj={
        add:(num)=>{
            value+=num;
            return obj;
        },
        sub:(num)=>{
            value-=num;
            return obj;
        },
        mul:(num)=>{
            value*=num;
            return obj;
        },
        div:(num)=>{
            value/=num;
            return obj;
        },
        result:()=>{
            return value;
        }
    };
    return obj;
};

let res = cal(50).add(5).sub(5).mul(2).result();
console.log(res);