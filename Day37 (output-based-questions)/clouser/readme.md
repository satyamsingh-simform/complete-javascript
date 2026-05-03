function outer() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const a = outer();
const b = outer();

console.log(a(), a(), b(), b());
<!-- ✅ Output -->
1 2 1 2

<!-- 🔹 Reason -->
Each outer() call creates a new execution context
Each returned function gets its own count reference
a and b do NOT share memory


<!-- 🔥 2. var in loop (classic bug) -->
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}
✅ Output
3 3 3
🔹 Reason
var is function-scoped (one shared variable)


<!-- Loop finishes → i = 3 -->
All callbacks run later → all see same i
🔥 3. let in loop (fix)
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i);
  }, 0);
}
✅ Output
0 1 2
🔹 Reason
let creates new binding per iteration
Each callback closes over different i


<!-- 🔥 4. IIFE fix (manual closure) -->
for (var i = 0; i < 3; i++) {
  (function (i) {
    setTimeout(function () {
      console.log(i);
    }, 0);
  })(i);
}
✅ Output
0 1 2
🔹 Reason
IIFE creates new scope per iteration
i passed as parameter → copied into new scope



<!-- 🔥 5. Closure captures scope, not global -->
function test() {
  let x = 10;

  return function () {
    console.log(x);
  };
}

const fn = test();

let x = 20;
fn();
✅ Output
10
🔹 Reason
Closure captures lexical scope at creation time
It does NOT look at outer/global x


<!-- 🔥 6. Functions inside loop (shared var) -->
function test() {
  var arr = [];

  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      return i;
    });
  }

  return arr;
}

const res = test();

console.log(res[0](), res[1](), res[2]());
✅ Output
3 3 3
🔹 Reason
All functions close over same i
Loop ends → i = 3
All return same final value



<!-- 🔥 7. Same with let (correct) -->
function test() {
  let arr = [];

  for (let i = 0; i < 3; i++) {
    arr.push(function () {
      return i;
    });
  }

  return arr;
}

const res = test();

console.log(res[0](), res[1](), res[2]());
✅ Output
0 1 2
🔹 Reason
Each iteration → new i
Each function closes over different variable instance



<!-- 🔥 8. Shared closure state (object methods) -->
function outer() {
  let x = 1;

  return {
    inc: function () {
      x++;
      return x;
    },
    get: function () {
      return x;
    }
  };
}

const obj = outer();

console.log(obj.inc());
console.log(obj.get());
✅ Output
2
2
🔹 Reason
Both methods share same closure
x is mutated → reflected everywhere



<!-- 🔥 9. Shadowing (lexical scope priority) -->
let x = 1;

function outer() {
  let x = 2;

  return function () {
    console.log(x);
  };
}

outer()();
✅ Output
2
🔹 Reason
Closest scope wins (lexical lookup)
Inner function uses outer’s x, not global



<!-- 🔥 10. Closure with parameters -->
function outer(x) {
  return function (y) {
    return x + y;
  };
}

const add5 = outer(5);

console.log(add5(3));
✅ Output
8
🔹 Reason
x stored in closure
Function remembers it across calls