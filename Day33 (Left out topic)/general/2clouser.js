
//lexical scope:It determines the accessibility of variables and functions based on their location in the source code.
// let global = 30;
// function greet(){
//     let global = 40;
//     function meet(){
//         let global = 10;//sbse phele apne scope me check krega fir outer scope me jayega-lexical scope
//         console.log(global);//10 ,andar wala variable hi print hoga ,agar andar var nhi present hai tb bhar scope me jayega udher v nhi hai tb global scope 
//     }
//     meet();
// }
// greet();
// // meet();//fn defined inside fn cannot be accessed outside the fn it is created.


//CASE-1
// function createCounter(){
//     function increment(){
//         console.log('i am increment fn');
//         return 20;
//     }
//     increment();
//     return 100;
// }
// // createCounter();
// console.log(createCounter());//100


//CASE-2
// function createCounter(){
//     function increment(){
//         console.log('i am increment fn that has been return');
//         return 10;
//     }
//     return increment();//createCounter ke pass iska reference jayega ,jisko value me store krke cll v kr skte hai
// }
// console.log(createCounter());//10 //undefined-->increment fn kuch return nhi kr raha hai agar krta to o value print hota

//CASE-3
// function createCounter(){
//     function increment(){
//         console.log('i am increment fn that has been return');
//     }
//     return increment; //aise return krne se cll direct nhi hoga rather var me store krke cll krna prega
// }
// console.log(createCounter());//[Function: increment] fn ka reference return kr diya
// const increment_fnRef=createCounter();
// console.log(increment_fnRef);//[Function: increment] fn ka reference return kr diya
// increment_fnRef()//increment fn call hoga bcz uska ref isme hai
// console.log(increment_fnRef());//ab jo fn return kr raha hoga o print hoga


////CLOUSER:-CLOUSER is when a inner fn remember and uses variable from its outer fn even after the outer fn has finished its execution.
function createCounter(){
    let count = 0;
    function increment(){
        count++;
        return count;
    }
    // increment();//aise krke cll krege tb to inner fn ka return nhi jayega outer fn ka return me jo hai o jayega.
    // return incement() //aise krke cll krte to reference pass nhi hoga tb inner fn jo return kr raha hai o pass hoga
    return increment;
}
// console.log(count);//error bcz fn scope ke bar access nhi kr skte hai fn me defined var ko

const counter = createCounter();//counter me increment fn ka ref gaya
console.log(counter());//1  // how this is happening increment fn is able to use the variable of createCounter(cC) even when cC fn execution is over that means its var count has been removed from the memory stack
console.log(counter());//2  // resaon:it is CLOSURE as increment fn ref is stored in counter then it will see increment fn body it will see count is need for this fn also so count var now will get mem in heap which 
console.log(counter());//3  //        incremment fn will point and uses it. This how CLOSUER works. 
console.log(counter());//4  //

