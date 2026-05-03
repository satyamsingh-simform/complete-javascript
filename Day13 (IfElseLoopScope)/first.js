// scope ke baare mein
// Global scope , local scope(Functional scope) , block scope{}

// Global scope(kahi v access kr skte hai isse variable ko program me)->jb isse type se khule aam variable ko likhte hai tb global scope hai sare variable
// let a = 10;
// var b = 20;//we dont use this
// const c = 30;
/*
function greet1(){
    console.log(a);
    console.log(b);
    console.log(c);
    
}
greet1();*/

//functional Scope-jis fn me declare kiye hai sirf usse fn me iska variable access kr skte hai uske bahar error dega
function greet(){
    let a = 10;
    var b = 20;
    const c = 30;
    console.log("Hello Function");
    console.log(a,b,c);
};
greet();
// console.log(a);//error dega-let variable cant be accessed outside the fn in which it is created
console.log(b);//error dega-var variable cant be accessed outside the fn in which it is created
// console.log(c);//error dega-const variable cant be accessed outside the fn in which it is created
{

}

//block scope-jis curley braces me variable ko declare kiye hai usse me sirf access kr skte hai ,pr var variable isko follow nhi krega
if(true){
    let a=10;
    var b=200;
    const c=30;
}
//console.log(a);//error dega-let variable cant be accessed outside the block in which it is created
//console.log(c);//error dega-const variable cant be accessed outside the block in which it is created
 console.log(b);//var ko access kr pa rahe hai outside block v- isse wajh se var is prefered not to be used

/*problm with var variable
    -it does not respect block scope.
    -isko redeclare v kr skte hai.
    -isko declare se phele v use kr skte hai-kaise possible hai to reason hoisting me milega
*/
var amount1 = 400;
// var amount = 20;
var amount1 = 10;
if(true){
    let a = 10;
    var amount1 = 20;
    const c = 30;  
}
console.log(amount1);//20

/*
for(let i=0;i<5;i++){
    console.log(i);
}
console.log(i);
*/
/*
for(var i=0;i<5;i++){
    //console.log(i);
}
console.log(i);//scope ke bahar v access kr pa rahe hai var variable ko block scope me sirf aisa dikkat hai
*/

let amount = 20;//global scope GS
if(true){
    let amount =30;//block scope BS
    console.log(amount);//ye block scope wala ko print krega-nhi hota BS wala tb GS wale ko print krta
}
console.log(amount);//ye GS wale ko print krega kyuki BS wala iske liye exist hi nhi krta hai



//-isko declare se phele v use kr skte hai-kaise possible hai to reason hoisting me milega
//console.log(a1);//Cannot access 'a1' before initialization
console.log(b1);//undefine//2nd prbm with var variable
//console.log(c1);//Cannot access 'c1' before initialization
let a1=10;
var b1=20;
const c1=30;



greet();//declare se phele v call kr skte hai
function greet(){
    console.log("Hello Greet");
}
greet();

// meet();//declare se phele call nhi kr skte hai
const meet = function(){
    console.log("Hello Meet");
}
meet();







