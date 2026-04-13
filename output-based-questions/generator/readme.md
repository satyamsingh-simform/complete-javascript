

<!-- 1. Basic Generator -->
function* gen() {
  yield 1;
  yield 2;
  yield 3;
}
const g = gen();

g.next();
g.next();
g.next();
g.next();

<!-- ✅ Output -->
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 3, done: false }
{ value: undefined, done: true }

<!-- 🔹 Reason -->
yield pauses
done = true only when function ends


<!-- 2. return in Generator -->
function* gen() {
  yield 1;
  return 2;
  yield 3;
}

const g = gen();

console.log(g.next());
console.log(g.next());
console.log(g.next());
<!-- ✅ Output -->
{ value: 1, done: false }
{ value: 2, done: true }
{ value: undefined, done: true }
<!-- 🔹 Reason -->
return ends generator immediately
code after return never runs


<!-- 3. Execution Flow -->
function* gen() {
  console.log("start");
  yield 1;
  console.log("middle");
  yield 2;
  console.log("end");
}

const g = gen();

console.log(g.next());
console.log(g.next());
console.log(g.next());
<!-- ✅ Output -->
start
{ value: 1, done: false }

middle
{ value: 2, done: false }

end
{ value: undefined, done: true }

<!-- 🔹 Reason -->
execution resumes from last yield



<!-- 4. Passing value via next() -->
function* gen() {
  let x = yield 1;
  console.log(x);
}

const g = gen();

console.log(g.next());
console.log(g.next(10));
<!-- ✅ Output -->
{ value: 1, done: false }
10
{ value: undefined, done: true }
<!-- 🔹 Reason -->
next(value) → goes into previous yield


<!-- 5. Multiple next() values -->
function* gen() {
  let a = yield 1;
  let b = yield a + 2;
  console.log(a, b);
}

const g = gen();

console.log(g.next());
console.log(g.next(5));
console.log(g.next(10));
<!-- ✅ Output -->
{ value: 1, done: false }
{ value: 7, done: false }
5 10
{ value: undefined, done: true }
<!-- 🔹 Reason -->
next(5) → a = 5
next(10) → b = 10


<!-- 6. for...of -->
function* gen() {
  yield 1;
  yield 2;
  return 3;
}

const g = gen();

for (let val of g) {
  console.log(val);
}
<!-- ✅ Output -->
1
2
<!-- 🔹 Reason -->
for...of stops when done: true
ignores return value



<!-- 7. yield* with generator -->
function* gen1() {
  yield 1;
  yield 2;
}

function* gen2() {
  yield 3;
  yield* gen1();
  yield 4;
}

const g = gen2();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
<!-- ✅ Output -->
{ value: 3, done: false }
{ value: 1, done: false }
{ value: 2, done: false }
{ value: 4, done: false }
{ value: undefined, done: true }
<!-- 🔹 Reason -->
yield* → delegates to another generator


<!-- //Q7 b -->
function* gen1() {
  yield 1;
  yield 2;
}

function* gen2() {
  yield 3;
  yield gen1();   // no *
  yield 4;
}

const g = gen2();

console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
console.log(g.next());
<!--  Output -->
{ value: 3, done: false }
{ value: Generator {}, done: false }
{ value: 4, done: false }
{ value: undefined, done: true }
{ value: undefined, done: true }

<!-- reason -->
gen1() is called
It returns an iterator object
yield → returns that object directly


<!-- 8. yield vs yield* -->
yield gen1();   // 
yield* gen1();  // 
🔹 Difference
yield gen1()  → returns iterator object
yield* gen1() → iterates inside it


<!-- LOOP WORKING WITH GENERATOR -->
<!-- for...of / ... does this:
while (true) {
  let res = iterator.next();

  if (res.done) break;   // stops here

  use(res.value);        // only value is used
} -->

<!-- loop -->
function* gen() {
  yield 1;
  yield 2;
  return 3;
}

console.log([...gen()]);
<!-- output -->
[1, 2]


<!-- 9. yield* with Array -->
function* gen() {
  yield 1;
  yield* [2, 3];
  yield 4;
}

console.log([...gen()]);
Output
[1, 2, 3, 4]
<!-- 🔹 Reason -->
yield* works with any iterable (array, string, etc.)
Loops and spread operator use only value and stop when done: true, they never expose done


<!-- generator with try catch -->
function* gen() {
  try {
    yield 1;
    yield 2;
  } catch (err) {
    console.log("caught:", err);
  } finally {
    console.log("finally block");
  }
}

const g = gen();

console.log(g.next());
console.log(g.throw("error"));  // inject error
console.log(g.next());
<!-- Output -->
{ value: 1, done: false }
caught: error
finally block
{ value: undefined, done: true } //generator finish hota hai to ye print krte hue
{ value: undefined, done: true } //generator is over so any further call will not make it run

<!-- reason -->
error caught generator execution finish 
Once generator is finished (done: true), every further next() or throw() returns { value: undefined, done: true }.


<!-- Q11 -->
function* gen() {
  try {
    yield 1;
    yield 2;
  } finally {
    console.log("cleanup");
  }
}

const g = gen();

console.log(g.next());
console.log(g.return("done"));
console.log(g.next());
<!-- ✅ Output -->
{ value: 1, done: false }
cleanup
{ value: 'done', done: true }
{ value: undefined, done: true }

<!-- reason -->
g.return(value)
- immediately ends generator
- runs finally block
- returns { value, done: true }
g.return() forces generator to stop, runs finally, and returns the given value with done: true


<!-- Q12 -->
function* greet() {
  const name = yield "What is your name?";
  yield `Hello, ${name}!`;
}
const g = greet();

console.log(g.next().value);
console.log(g.next("Gemini").value);
<!-- Output -->
What is your name?
Hello, Gemini!
<!-- reason -->
yield splits the line into two phases:
1. send value out
2. later receive value back


<!-- Q12a -->
function* greet() {
  const name = yield "What is your name?";
  yield `Hello, ${name}!`;
}
const g = greet();

console.log(g.next().value);
console.log(g.next().value);
<!-- op -->
What is your name?
Hello, undefined!


<!-- Q13 -->
function* mystery() {
  yield 1;
  yield yield 2;
}
const it = mystery();
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next(5).value);
<!-- console.log(it.next().value); -->

<!-- op -->
1
2
5
<!-- op -->
1
2
undefined