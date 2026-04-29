/* What is Promise.race
    - Takes an array of promises
    - Executes all promises in parallel
    - Returns a single promise
    - Settles as soon as the FIRST promise settles (resolve or reject)
    - Returns the value/error of the first settled promise
    - Does NOT wait for other promises
    - Winner is based on completion time (not index)
    - Can resolve OR reject (whichever happens first)
    - Remaining promises continue executing (not cancelled)

    -usecase
        -top waiting if API is too slow
            const fetchData = fetch("api");

            const timeout = new Promise((_, reject) => {
                setTimeout(() => reject("Request Timeout"), 2000);
            });

            Promise.race([fetchData, timeout])
                .then(res => console.log(res))
                .catch(err => console.log(err));
*/


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
            // reject('handle me f2')
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


//CUSTOM PROMISE.RACE
Promise.myPromiseRace=function(PromiseArr){
    return new Promise((resolve,reject)=>{
        if(!Array.isArray(PromiseArr)){
            reject(new Error('not a array'));
            return;
        }
        let n=PromiseArr.length;
        if(n==0){
            resolve();
            return;
        }
        /*below 72 line is same as doing this
            Promise.resolve(promise)
                .then((value) => {
                    resolve(value);
                })
                .catch((error) => {
                    reject(error);
                });
        */
        PromiseArr.forEach((promise,index)=>{
            return Promise.resolve(promise)
                .then(resolve)  //“When this promise resolves → call outer resolve with same value”
                .catch(reject)
        })
    })
    

}

// Promise.race([f1(),f2(),f3()])
// .then((res)=>{
//     console.log(res);
// })
// .catch((err)=>{
//     console.log(err);
// })


Promise.myPromiseRace([f1(),f2(),f3()])
.then((res)=>{
    console.log(res);
})
.catch((err)=>{
    console.log(err);
})
