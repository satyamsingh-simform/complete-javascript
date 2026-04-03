/*What is Promise.any
    -Takes an array of promises
    -Returns the first fulfilled (resolved) promise
    -Ignores rejected promises
    -Rejects only if all promises fail
    -Rejection error = AggregateError
*/
/*
Promise.any([
  Promise.reject("Error 1"),
  Promise.resolve("Another Success"),
  Promise.resolve("Success"),
])
Promise.any([
    Promise.reject('handle1'),
    Promise.reject('handle2'),
    Promise.resolve("Success"),
])
.then(()=>{
    console.log('fullfielled');
})
.catch((err)=>{
    console.log('custom:',err.message);//No Promise in Promise.any was resolved
});


if (!Promise.any) {
  Promise.any = function (promises) {
    return new Promise((resolve, reject) => {
      let errors = [];
      let rejectedCount = 0;

      if (promises.length === 0) {
        return reject(new AggregateError([], "All promises were rejected"));
      }

      promises.forEach((promise, index) => {
        Promise.resolve(promise)
          .then(resolve) // immediately resolve if any succeeds
          .catch((err) => {
            errors[index] = err;
            rejectedCount++;

            if (rejectedCount === promises.length) {
              reject(new AggregateError(errors, "All promises were rejected"));
            }
          });
      });
    });
  };
}

const p1 = Promise.reject("Fail 1");
const p2 = Promise.reject("Fail 2");
const p3 = Promise.resolve("Success");

Promise.any([p1, p2, p3])
  .then(console.log)
  .catch(console.error);
*/




/*What is Promise.race
    -Takes an array of promises
    -Returns a promise that settles as soon as first promise settles
    -resolve → if first settles resolved
    -reject → if first settles rejected
    -race = first settled wins
*/
/*
const p11 = new Promise((res) => setTimeout(() => res("A"), 1000));
const p12 = new Promise((res) => setTimeout(() => res("B"), 1500));
const p13=new Promise((res,rej)=>setTimeout(()=>rej('handle'),500))

Promise.race([p11, p12, p13])
  .then(console.log)
  .catch(console.error);
*/

Promisess.race = function (promises) {
  return new Promise((resolve, reject) => {
    for (let p of promises) {
      Promise.resolve(p)
        .then(resolve)
        .catch(reject);
    }
  });
};

const p1 = new Promise((res) => setTimeout(() => res("First"), 1000));
const p2 = new Promise((_, rej) => setTimeout(() => rej("Error"), 500));

Promisess.race([p1, p2])
  .then(console.log)
  .catch(console.error);