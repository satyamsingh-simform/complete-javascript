/*What is Promise.any
    -Takes an array of promises
    -Returns the first fulfilled (resolved) promise
    -Ignores rejected promises
    -Rejects only if all promises fail
    -Rejection error = AggregateError

  What is Promise.any
    - Takes an array of promises
    - Executes all promises in parallel
    - Returns a single promise
    - Resolves as soon as the FIRST promise fulfills (resolves)
    - Ignores all rejected promises
    - Rejects only if ALL promises fail
    - Rejection error = AggregateError (contains all errors) :only if all promise rejects
    - AggregateError: No Promise in Promise.any was resolved


    Promise.any = first SUCCESS wins (ignore failures)
*/

/*
// Promise.any([f1(),f2(),f3()])
// .then((res)=>{
//   console.log(res);
// })
// .catch((err)=>{
//   console.log(err);
// })
*/

const f1=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve('promise resolved f1');
            reject('handle me f1')
        },2500)
    })
}
const f2=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve('promise resolved f2');
            reject('handle me f2')
        },500)
    })
}
const f3=()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            // resolve('promise resolved f3');
            reject('handle me f3')
        },1500)
    })
}



// Promise.myAnyPromise=function(promiseArr){
//     return new Promise((resolve,reject)=>{
//         if(!Array.isArray(promiseArr)){
//             reject(new Error('not a array'));
//         }
//         let n=promiseArr.length;
//         let rejected=0;
//         let error=[];
//         if(n==0){
//             resolve();
//         }
      
//         promiseArr.forEach(async(promise,index)=>{
//             try{
//                 const res=await promise;
//                 resolve(res);
//                 return;
//             }catch(err){
//                 rejected++;
//                 error[index]=err;
//                 if(rejected==n){
//                     reject(error);
//                 }
//             }
//         })
//     })
// }

Promise.prototype.myAnyPromise=function(arrP){
    return new Promise((resolve,reject)=>{
        let countP=arrP.length;
        let error=[];
        let rejectC=0;

        arrP.forEach((p,index)=>{
            Promise.resolve(p)
            .then((val)=>resolve(val))
            .catch((err)=>{
                error[index]=err;
                rejectC++;
                if(rejectC===countP){
                    reject(error);
                }
            })
        })
    })
}

Promise.myAnyPromise([f1(),f2(),f3()])
.then((res)=>{
  console.log(res);
})
.catch((err)=>{
  console.log('error',err);
})