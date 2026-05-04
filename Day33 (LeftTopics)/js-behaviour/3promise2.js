/*1. Promise.all()
✅ Behavior
Waits for ALL promises to resolve
If any one rejects → immediately rejects
📌 Output
Key Points
✔ All success → .then runs
❌ One fails → .catch runs
⚡ Runs in parallel


2. Promise.any()
✅ Behavior
Returns FIRST fulfilled (resolved) promise
Ignores rejected ones
📌 Output
Single resolved value
❌ If all fail
Returns AggregateError
🧠 Key Points
✔ Fastest success wins
❌ All fail → catch


3. Promise.allSettled()
✅ Behavior
Waits for ALL promises (resolve OR reject)
📌 Output
Array of objects:
[
  { status: "fulfilled", value: ... },
  { status: "rejected", reason: ... }
]
🧠 Key Points
✔ Never fails
✔ Useful for reporting/logging
✔ You get full result of each promise


4. Promise.race()
✅ Behavior
Returns FIRST settled promise
(resolve OR reject)
📌 Output
Whatever comes first
🧠 Key Points
✔ Fastest wins (success OR failure)
❌ Can reject early

*/


Promise.all([promise_1, promise_2, promise_3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
})



Promise.any([promise_1, promise_2, promise_3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
})


// settling a promise = fulfilling(resolve) + rejecting
Promise.allSettled([promise_1, promise_2, promise_3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
})


Promise.race([promise_1, promise_2, promise_3])
.then((result) => {
    console.log(result);
})
.catch((error) => {
    console.error(error);
})

Promise.resolve()
// let promise = new Promise(resolve => resolve(value));

Promise.reject()
// let promise = new Promise((resolve, reject) => reject(error));


// How to Cancel a Promise