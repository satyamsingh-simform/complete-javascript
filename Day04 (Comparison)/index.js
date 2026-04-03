// comparison operartor
/*== both are equal
   < less than, > greater than
   <= less than equal to , >= greater than equal to
*/
/*
// number to number
let a1 = 1;
let a2 = 2;
console.log(a1==a2);//F

let num = 10;
let str = "20";
console.log(num==str);//F
// // Type conversion hga string to number

let a11 = 10;
let str1 = "10";
console.log(a11==str1);//T

// === type check, then compare the value
console.log(a11===str1);//F


let a21 = 30;
let a3 = 40;
console.log(a21===a3);//F


//It is RULE //memorized it
null == undefined // true
null=== undefined // false bcz type obj and type undefine

//null can only be equivalent to undefined, kisi or se == hamesa false dega
//null or undefined ka comparison(== wala nhi hona chiye bs) ho raha hai to null 0 me convert hoga undefined NaN me 
console.log(null==undefined);//T
console.log(null===undefined);//F
console.log(null==null);//T 
console.log(undefined==undefined);//T 

console.log(null==0);//F-yaha pe already define hai null sirf equal hoga undefine se isliye direct F ans -isse me type conversion hoga hi nhi
console.log(null<0);//F-pr isse case me type conversion hoga or Null ka type-conversion Number(null) 0 hota hai 0<0 F
console.log(null>0);//F  0>0 F
console.log(null<=0);//T 0<=0 T
console.log(null>=0);//T 0>=0 T
*/
/*
// undefined comparison
// console.log(undefined==0);//F--//undefined sirf null ke == ho skta hai or kisi ke nhi
// console.log(undefined<0);//F--type conversion hoga or undefine ka type-Conversion NaN hota hai --{NaN < 0} -False
// console.log(undefined>0);//F  NaN>0
// console.log(undefined<=0);//F NaN<=0
// console.log(undefined>=0);//F NaN>=0

console.log(NaN==NaN);//F
//reason
// let str3 = "rohit"; 
// let str4 = "moahan"; 
// console.log(Number(str3));NaN ky ye dono NaN same hai nhi isliye NaN==NaN gives F
// console.log(Number(str4));NaN

/*
 let abc1 = 123;
 let abc2 = "123";
// let abc3 = 123;
// console.log(abc1==abc2==abc3);//F
//  reason:-         T==abc3
 console.log(abc1==abc2==true);//T

 console.log(undefined!=null); //Homework
*/
 
console.log('good question');
console.log(undefined!=null); //Homework


//logical comparison && || !
// AND :phela F ho gaya dursra cond check v nhi hoga or usse ko return ke dega as a value or sab T hua to last oprand ko return kr dega
// OR  :phela T ho gaya dursra cond check v nhi hoga or usse ko return ke dega as a value or sab F hua to last oprand ko return kr dega
// NOT :phele boolean me convert krega or fir uska ulta value bhej dega boolean me hi 
let age = 18;
let money =420;
console.log(age<18 && money>200);//F-dono T tb hi T hoga //

console.log(age>100 || money>200)//T-ek v T tb T ho jayega
console.log( !(age>10));//F


// //  bitwise operartor
// console.log(4&5);//100 & 101  == 100
// console.log(11&14);
// console.log(11|14); 
// console.log(5^7); //1001 0101 == 001
// console.log(5<<3);
// 5 multiply by 2 power 3 // left shift
// 101.0000000000000000
// 101000.0000000

// console.log(20>>2);
// right shift , 20 divided by 2 power 2
// 10100.000000
// 101.0000000


