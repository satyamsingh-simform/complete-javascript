/* What is Promise.all
    - Takes an array of promises
    - Executes all promises in parallel
    - Returns a single promise
    - Resolves only when all promises are fulfilled
    - Returns results as an array (same order as input)
    - Rejects immediately if any one promise fails
    - Rejection error = first rejected promise's error
    - Output order is preserved (not based on completion time)
    - Faster than sequential execution
    - Used when all results are required
*/

/*//eg to understand promise
const f1=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('promise resolved f1');
        },2500)
    })
}
const f2=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject('promise resolved f2');
        },1000)
    })
}
const f3=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('promise resolved f3');
        },1500)
    })
}

//1st way
Promise.all([f1(),f2(),f3()])
.then((res)=>{
    console.log(res); 
    console.log('all promise resolved');
})
.catch((err)=>{
    console.log('err:',err);
})
*/
/*2nd way
async function handlePromise(){
    let arr= await Promise.all([f1(),f2(),f3()])
    console.log(arr);
}
handlePromise()
*/

/*//ASYNC-AWAIT EXECUTION FLOW
const f1 = () => new Promise(res => setTimeout(() => res("f1 done"), 2500));
const f2 = () => new Promise(res => setTimeout(() => res("f2 done"), 500));
const f3 = () => new Promise(res => setTimeout(() => res("f3 done"), 1000));

async function test() {
    console.log("start");

    const r1 = await f1();
    console.log(r1);

    const r2 = await f2();
    console.log(r2);

    const r3 = await f3();
    console.log(r3);

    console.log("end");
}

test();

//O/P
before
start
after
// (after 2500ms)
f1 done
end
*/

/*//LOOP asyn-await behaviour
// Key observations
// await pauses only inside async function
// Outside code keeps running (after)
// JS is non-blocking

arrPromise.forEach(async (promise, index) => {
    let res = await promise;
});

forEach does NOT wait for async callbacks

//BUT:IT IS NOT PARALLEL EXECUTION AS PROMISE RUN PARALLEL SO CANT BE USED
To make it sequential (just for understanding)
for (let i = 0; i < arrPromise.length; i++) {
    let res = await arrPromise[i];
    console.log(res);
}
This will run:
f1 → f2 → f3 (strict order)
*/


//CUSTOM PROMISE
const f1=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('promise resolved f1');
        },2500)
    })
}
const f2=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('promise resolved f2');
        },500)
    })
}
const f3=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('promise resolved f3');
        },1500)
    })
}



//Promise.all-->returns promise hence our custome promise should also returned the promise 
Promise.myall=function(arrPromise){
    console.log('custom promise');
    
    return new Promise((resolve,reject)=>{
        if(!Array.isArray(arrPromise)){//Promise.all if does not get array of promise then error
            reject(new Error('accepting array'))
        }
        let n=arrPromise.length;
        let resultArr=[];
        if(n===0){
            resolve(resultArr);
            return;
        }
        //actual promise resolve kr rahe hai
        // arrPromise.forEach(async(promise,index)=>{
        //     let res=await promise;
        //     console.log(res,'all promise');
        //     resultArr[index]=res;
        //     if(index==n-1){
        //         resolve(resultArr);
        //         return;
        //     }
        // })
        let completed = 0; // add this
        arrPromise.forEach(async(promise, index) => {
            try{
                let res = await promise;
                // console.log(res,'all promise');
                resultArr[index] = res;
                completed++; // track completion
                if (completed === n) { // instead of index == n-1
                    resolve(resultArr);
                    return;
                }
            }
            catch(err){
                reject('err');
                return;
            }
        });
    })
}

Promise.myall([f1(),f2(),f3()])
.then((res)=>{
    console.log("res:",res); 
    console.log('all promise resolved');
})
.catch((err)=>{
    console.log('err:',err);
})



