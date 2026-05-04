/*//STATIC EXPORT
// import {sum,sub} from './cal.js';
console.log('hello how are you');

// import {sum,sub} from './cal.js'; //
import {sum as add, sub as minu} from './cal.js'  //alise
import myName from "./sayFn.js"; //default export so can be imported by any name bcz default export ensure only one fn export


// console.log(sum(2,5));
// console.log(sub(10,5));

//alise
console.log(add(2,5));
console.log(minu(10,5));

//name space:used when we have many fn exported from a single file ,at that time it become useful 
import * as cal from './cal.js';
console.log(cal.sum(2,5));
console.log(cal.sub(10,5));

//combined export:import everything in a single file ,and from there import it helps in reducing time to import diff diff fn from diff diff file

console.log(myName());
*/


//DYNAMIC IMPORT-load only when needed
if(0){
    const{sum,sub}=await import ('./cal.js');
    console.log(sum(2,5));
    console.log(sub(10,5));
}
else{
    console.log('dynamic export will not work');
}

//TREE SHAKING-remove unused code from your final bundle
