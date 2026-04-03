//// SCOPE, CLOSURE & HOF
// Global_> Accessible to everyone ,in ever fn or block as bcz it is global variable(means variable created outside of any fn or block)
// functional -> accesible only to that function
// Block level scope-> accesible only to that Block but var does not follow this rule only var follow fn scope rule.

// LEXICAL SCOPE:it means var accessibility is determined by where it is declared in the code and not where it is called.
// GARBAGE COLLECTOR:



/// SCOPE
// let a = 10;
// const b = 20;
// function greet(){
//     console.log(b);
// }
// greet();

// if(true){
//     let d = 30;
//     var fault=100;
// }
// console.log(d);//error kyu ki let const respect both fn and block scope 
// console.log(fault);//100 //yaha pe error dena chaiye pr dega nhi reason var does not respect block scope but it respect fn scope

// function greet(){
//      let c = 30;
//      var e = 90;
// }

// console.log(c);//error
// console.log(e);//error
// greet();




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



//USEFULL CASE OF CLOUSER:-Data Privacy etc
// let balance = 500;
// // // balance+="Rohit";
// // balance-=500;
// // console.log(balance);

// let balance = 500;
// private:blance ko aise banana prega ki o sirf fn ke through hi update ho paye 
// let user = {
//     balance:500,
//     deposit: function(amount){
//         if(typeof amount==="number" && amount>0){
//             balance+=amount;
//             return balance;
//         }
//     },
//     withdraw: function(amount){
//         if(typeof amount==="number" && amount>0 && balance>=amount){
//             balance-=amount;
//             return balance;
//         }
//     },
//     getBalance: function(){
//         return balance;
//     }  
// }
//direct manipulate kr pa rahe hai ,since balance is very imp var we cant allow direct access kyuki fir glti se developer usme string(as bcz there are 1000 of line in code that can be possible) value de skta hai jo ki bug ban skta hai future me
// balance="Rohit" 

// console.log(user.getBalance());
// console.log(user.deposit("2sa00"));
// console.log(user.deposit(500));
// user.balance="Rohit"; 
//direct balance ko manipulate kr pa rahe hai ,since balance is very imp var we cant allow direct access kyuki fir glti se developer usme string(as bcz there are 1000 of line in code that can be possible) value de skta hai jo ki bug ban skta hai future me


// method ko access(function)
// balance: ko directly access na kr paye

// function createBankAccount(){
//     let balance = 500;
//     return {
//         deposit: function(amount){
//             if(typeof amount==="number" && amount>0){
//                 balance+=amount;
//                 return balance;
//             }
//         },
//         withdraw: function(amount){
//             if(typeof amount==="number" && amount>0 && balance>=amount){
//                 balance-=amount;
//                 return balance;
//             }
//         },
//         getBalance: function(){
//             return balance;
//         }
//     }
// }
//balance="Rohit"; //now you cant be able to do it directly as var inside fn cant be accessed outside it body.
// const customer = createBankAccount();
// console.log(customer);//3 fn ka ref iske pass hai as a object as below:-
// // {
// //   deposit: [Function: deposit],
// //   withdraw: [Function: withdraw],
// //   getBalance: [Function: getBalance]
// // }
// console.log(customer.deposit(100));
// console.log(customer.withdraw(200));
// console.log(`amount left after withdrawl:`,customer.getBalance());








/* HIGHER ORDER FUNCTION(HOF)
    -passing fn as an argument in another fn ,then this is called HOF i.e., callback fn is HOF
    -returning fn from the fn is also called HOF
*/

//returning fn from the fn is called HOF
// function hof(){
//     function execute(){
//         console.log('i am inner fn');
//     }
//     return execute;
// }

// function hof(value){

//     function execute(num){
//         console.log('i am inner fn');
//         return value*num;
//     }
//     return execute;
// }

// // const execute_ref= hof();
// // execute_ref();//
// // console.log(execute_ref());//NaN

// // const execute_ref = hof(20);
// // console.log(execute_ref(5));//100

// const execute_ref = hof(20)(5);
// console.log(execute_ref);



// function double(value){
//     return function execute(num){
//         return num*value;
//     }
// }

// const n = double(20)(5);
// console.log(n);

