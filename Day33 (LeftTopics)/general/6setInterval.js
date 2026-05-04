/*setTimeout()
    -let timerId = setTimeout(func|code, [delay], [arg1], [arg2], ...).
    -developers sometimes make a mistake by adding brackets () after the function.--don’t run it//doesn’t work, because setTimeout expects a reference to a function
    -Canceling with clearTimeout
        -A call to setTimeout returns a “timer identifier” timerId that we can use to cancel the execution.
*/
// function func(a,b){
//     console.log(`${a}  ${b}`);
// }
// setTimeout(func,2000,'sat','ya');//Pass a function, but don’t run it//doesn’t work, because setTimeout expects a reference to a function

/*case1
setTimeout(()=>{
    console.log('love');
},1000)
*/

function sayHi(){
  console.log('Hello');
}
// setTimeout(sayHi,1000);



const timerId= setTimeout(sayHi,3000);
clearTimeout(timerId);
console.log(timerId);
