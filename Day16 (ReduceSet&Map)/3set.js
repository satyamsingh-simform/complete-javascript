//set:it is collection of unique values-which make it diff from array(array can contain duplicate value)
/*
let arr = [10,20,10,30,10]
const set1=new Set(arr);
console.log(set1); //Set(3) { 10, 20, 30 } //duplicate ko ignore kr dega
console.log(typeof set1);//object

//set1.add(val)
set1.add(50);
set1.add("Rohit");
set1.add(30);
console.log(set1);  //Set(5) { 10, 20, 30, 50, 'Rohit' }    

// set1.delete(val)
set1.delete(50);
console.log(set1);  //Set(4) { 10, 20, 30, 'Rohit' } 

//set1.size               
console.log(set1.size);//4

//set.has(value)
console.log(set1.has(10));//true
console.log(set1.has(50));//false

//set1.clear:delete all values from set
*/
/*diff ways of assign value to set
//A Set in JavaScript can store any iterable when initializing, but values are stored individually, not only as arrays
// Yes, when initializing a Set with multiple values at once, you must pass an iterable (commonly an array). //Set constructor expects one argument → an iterable
let set2=new Set();
console.log(set2);//Set(0) {}
let set3=new Set([2,3,4,5]);
console.log(set3);
*/

//real life eg of set uses: instagram id unique hona chaiye
/*
const user_id = new Set(["rohit_negi9","Mohi_91","ravi.93","chavi_90","sumit._90"]);
let new_user = "rohit_negi9";
console.log(user_id.has(new_user)); //true//T-mtlb hai F-mtlb nhi hai
user_id.clear();
console.log(user_id);               //Set(0) {}
*/

////converting array into set
// let arr = [10,30,20,10,40,50,30];
// const set1 = new Set(arr);
// console.log(set1);                  //Set(5) { 10, 30, 20, 40, 50 }

////converting set into array spred
/*
let set5=new Set([1,2,3,4,5]);  
console.log(set5);      //Set(5) { 1, 2, 3, 4, 5 }
let arr5=[...set5];
console.log(arr5);      //[ 1, 2, 3, 4, 5 ]
arr6={...set5};
console.log(arr6);      //{}
*/



//merging set into a single set
/*
let set11=new Set([1,2,3,4,5]);
let set12=new Set([1,2,10,20]);
let set13=new Set([...set11,...set12])
console.log(set13); //Set(7) { 1, 2, 3, 4, 5, 10, 20 }
let arr14=[...set13]
console.log(arr14); //[1, 2, 3, 4, 5, 10, 20]
let arr13=[...set11,...set12]
console.log(arr13); //[1, 2, 3, 4, 5, 10, 20]
*/

// intersection// filter: array
// const result =  new Set([...set1].filter((num)=>set2.has(num)));
//return same value from two set
let set10=new Set([1,2,3,4,5])
let set20=new Set([1,2,30,40,5])
let res=new Set([...set10].filter((val)=>set20.has(val)));
console.log(res);//Set(3) { 1, 2, 5 }

//return diff value from two set
let set01=new Set([1,2,3,4,5])
let set02=new Set([1,2,30,40,5])
let res0=new Set([...set01].filter((val)=>!set02.has(val)));
console.log(res0);//Set(2) { 3, 4 }

//  Iterate over set
// for of: iterator
for(let val of set01){
    console.log(val);//1 2 3 4 5  
}
set02.forEach((val)=>console.log(val));//1 2 30 40 5


