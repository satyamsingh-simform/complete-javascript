// let test=function(){
//     console.log('i run for 1st time');
//     test=undefined;
// }
// test();
// test();


// const greetOnce=Once((name, age)=>{
//     console.log(`Hello ${name}`);
// })
// greetOnce('Satya',20);


/*//CASE1
function names(fun){
    fun("Satyam", 21);//jaha pe fn cll hota hai udher argument pass krte hai
}
names(function(name, age){
    console.log(name, age);
});
*/
// const func=(agr1, arg2)=>{
//     console.log('hello call me only when args are diff');
//     return agr1+arg2;
// };



// function Memo(fn, ...rest){
//     if(true){
//         return fn(...rest);
//     }
// }
// const memoed = Memo(func, 5,6);
// console.log(memoed);



/*
const func = (arg1, arg2) => {
    console.log("hello call me only when args are diff");
    return arg1 + arg2;
};
function Memo(fn){
    return function(...args){
        return fn(...args);
    }
}
const memoed = Memo(func);
console.log(memoed(5,6));
*/



// function func(arg1,arg2){
//     console.log('hello call me only when args are diff');
//     return arg1+arg2;
// }
// function Memo(fn){
//     function Wrapper(...arg){
//         let reVal=fn(...arg);
//        return reVal;
//     }
//     return Wrapper
// }
// const memoed=Memo(func);
// console.log(memoed(5,5));


// function Memo(fn){
//     let finalRes=0;
//     let arr=0;
//     function Wrapper(args){
//         if(arr!=args){
//             finalRes=fn(args);
//             arr=args;
//         }
//         return finalRes;
//     }
//     return Wrapper;
// }
// const memoized=Memo((a)=>{
//     console.log('hello call me only when args are diff');
//     return a;
// })

// console.log(memoized(2));//
// console.log(memoized(3));//


/*memo without map
function Memo(fn){
    let finalRes=0;
    let arr=[0,0];
    function Wrapper(args1,args2){
        if(arr[0]!=args1 || arr[1]!=args2){
            finalRes=fn(args1,args2);
            arr[0]=args1;
            arr[1]=args2;
        }
        return finalRes;
    }
    return Wrapper;
}
const memoized=Memo((a,b)=>{
    console.log('hello call me only when args are diff');
    return a+b;
})
console.log(memoized(2,3));
console.log(memoized(2,4));
*/


/*Memoized using Map
    1.map.set(key, value)
        -Stores key → value pair in the Map.
        -eg const cache = new Map();
            cache.set("2,3", 5);

    2.map.get(key)
        -Returns the value stored at that key.
        -cache.get("2,3"); //5

    3.map.has(key)
        -Checks whether the key exists in the Map.
        -cache.has("2,3");//true
*/
// function Memo(fn){
//     let cache = new Map();

//     function Wrapper(args1,args2){
//         let key = `${args1},${args2}`;

//         if(!cache.has(key)){
//             let result = fn(args1,args2);
//             cache.set(key,result);
//         }

//         return cache.get(key);
//     }

//     return Wrapper;
// }

// const memoized = Memo((a,b)=>{
//     console.log('hello call me only when args are diff');
//     return a+b;
// })

// console.log(memoized(2,3));
// console.log(memoized(2,4));
// console.log(memoized(2,3));

/*
function memo(func){
    let cach=new Map();

    function wrapper(arg1,arg2){
        let key=`${arg1},${arg2}`;
        if(!cach.has(key)){
            console.log('run me only if arg change');
            let res=func(arg1,arg2);
            cach.set(key,res);
            return res;
        }
        else{
            return cach.get(key);
        }
    }

    return wrapper;
}

let refWraper=memo((num1,num2)=>num1+num2);

console.log(refWraper(2,3));
console.log(refWraper(2,3));//cached value did not run the fn
console.log(refWraper(3,3));
*/


function memo(func){
    let cach=new Map();

    function wrapper(...arg){//rest
        let key=`${arg1},${arg2}`;
        if(!cach.has(key)){
            console.log('run me only if arg change');
            let res=func(...arg);//spread
            cach.set(key,res);
            return res;
        }
        else{
            return cach.get(key);
        }
    }

    return wrapper;
}

let refWraper=memo((...arg)=>{//rest
    let result=0;
    for(let {key} of arg)
        result=result+key;
    return result;
});

console.log(refWraper(2,3));
console.log(refWraper(2,3));//cached value did not run the fn
console.log(refWraper(3,3));


function memo(func) {
    let cache = new Map();

    function wrapper(...args) {
        let key = JSON.stringify(args);

        if (!cache.has(key)) {
            console.log("run me only if arg change");

            let result = func(...args);
            cache.set(key, result);

            return result;
        }

        return cache.get(key);
    }

    return wrapper;
}

let refWrapper = memo((...args) => {
    let result = 0;

    for (let num of args) {
        result += num;
    }

    return result;
});

console.log(refWrapper(2,3));
console.log(refWrapper(2,3)); // cached value
console.log(refWrapper(3,3));
console.log(refWrapper(1,2,3,4));
console.log(refWrapper(1,2,3,4)); // cached
