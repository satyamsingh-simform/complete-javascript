/*1.chrome Browser me js ka code node ke bina v run ho jata hai kyuki uske pas V8 engine phele se hai 
  2.V8 engine
    -ye convert krta hai js code ko machine lang me very faster than any other browser
    -isliye chrome 70% of market isliye capture krke rakha hai. 
    -V8 is written in C++ language upto 70%.
    -agar js ko chrome se bhar v run krna hai tb NODE js ka rhna must hai.

   -ctrl + ` it will open your terminal in vscode

  3.let const var  
   -let, const, and var are keywords used to declare variables.
   -variable declared by them can store any data type as JS is dynamic typed lang(i.e., variable are not bound to any data type).
   -var old tarike, don't use it, it has prblm we will discuss later.
   -A const variable must be assigned a value at the time of declaration
   -they have different behaviors and scoping rules we will learn later.

*/

//to print any thing in js we use console.log
console.log("hello Coder Army");

// let  
let num = 10;
num=20;
console.log(num);
let num1 = 10.5;
console.log(num1);
let ar = "Rohit";
ar='satya';//re-assigning the value is possible
console.log(ar)

//const-value once declare can't be change  
const ids = 20;
console.log(ids);
// ids = 30; //error dega ye line 
console.log(ids)

//var
var x = 10;
var x = 20;  //re-declare is possible ,that is why it is not preferred to be used
x=20;
console.log(x);