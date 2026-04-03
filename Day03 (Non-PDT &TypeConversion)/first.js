/*
RAM is where a program is loaded and executed.
   -Within RAM:
      a. Stack:
         -Used for managing function calls and local variables.
         -Primitive values (e.g., number, boolean, undefined, null, symbol, bigint) are stored directly on the stack.
         
      b. Heap:
         -Used for storing reference types such as objects, arrays, and functions.
         -Their references (pointers) are stored in the stack, while the actual data lives in the heap.


B.Non-Primitive Data Types:
   -non-primitive data types are objects. 
   -They can store collections of data and more complex entities.
   -Non-primitive types are mutable (can be changed) and stored as references in stack memory but actual data is stored in heap memory.

        1.Object - A collection of key-value pairs.
        2.Array - ek sath diff value of diff type arr me stroe kra skte hai.
        3.Function - A reusable block of code.
        4.Date, RegExp, Error, etc. - Special object types built into JavaScript.

*/

//Primitive type: Number, string, boolean, null, undefined, Bigint, Symbol.

/*
//array
let arr = [10,20,50,"rohit","mohit"];
console.log(arr);
console.log(typeof arr);//object-kyu hota hai baad me padhna hai


// Object- key:value
let user_name = "Rohit";
let account_number= 31242314213;
let balance= 420;
*/

/*
//uper wala tarika se bsko individually print krna prega jo ki boht TC badha dega isliye object 
let obj = {
   user_name: "Rohit",
   account_number: 31242314213,
   balance: 4200
}
console.log(obj);//ek baar me hi sb info aa jayega 
//andaar wale key ka value ko update kr skte hai even const se kyu na obj declare hua ho- rason we know (obj referenc is stored in stack ,update krne se jo ki change nhi hoga)
const obj2={
   username:"satya",
   password:"8409@",
   acc_bal:9999,
}
obj2.username="abhi";//allowed
console.log(obj2);
*/



/*
//function
let fun = function(){
    console.log("Hello Coder army");
    return 10;
}
console.log(fun());

// let num=fun();
// console.log(num);
function abc(){
   console.log("aise v fun ko declare kr skte hai")
   return 10;
}
console.log(abc());
*/


// Type conversion
/*
//1.string convert to number
console.log("start hua string conversion");
let account_balance = "100";
let num = Number(account_balance);//num=100
console.log(typeof account_balance);//string
console.log(typeof num);//number

let account = "100xs";
let bal = "200s"
console.log(Number(account));//NaN
console.log(Number(bal));//NaN


//Boolean convert to number
let x1 = false;
let x7=true;
console.log(Number(x1));//0
console.log(Number(x7));//1
*/
/*
// null
console.log("Null conversion");
let x0 = null;
console.log(Number(x0));//0

// undefined
let x2;
console.log(Number(x2));//NaN

// String ke andar convert
let ab = 20;
console.log(String(ab));//"20"
console.log(typeof String(ab));

let ax = false;
console.log(typeof false)//bolean
console.log(String(ax));//"false"

// string to Boolean  //any non-empty string will convert to T in boolean conversion even this will be true " ","\n \t".
let abc = "";
console.log(Boolean(abc));//false dega
let ab1 = " ";
console.log(Boolean(ab1));//true dega
*/

/*
//Arithmetic Operation
// console.log((((6*(3+18))/6)-9));
// // 18+3-9
// // Divide Multiply Left to Right
// // Add sub Left to right

// // Modulous give reminder
// console.log(20%3); 

// // ++ increment operator , -- decrement operator
// let sum = 20;
// // --sum
// // sum++ post increment , sum-- post decrement
// // ++sum pre increment , --sum. pre decrement
// let total = ++sum;
// console.log(total);
// console.log(sum);

// Assignment operator

// let x = 20;
// x+=10;//x=x+20 //x+=20
// // x = x+10;
// console.log(x);
// // x = x-10;
// x/=10;
// console.log(x);

*/






