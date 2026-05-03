<!-- 3. Object method -->
const obj = {
  x: 10,
  getX: function () {
    console.log(this.x);
  }
};

obj.getX();
<!-- ✅ Output -->
10
<!-- 🔹 Reason -->
Method call → this = object (obj)



<!-- 4. Method extracted -->
const obj = {
  x: 10,
  getX: function () {
    console.log(this.x);
  }
};

const fn = obj.getX;
fn();
<!-- ✅ Output -->
undefined (or error in strict)
<!-- 🔹 Reason -->
Function called independently → loses object context


<!-- 5. Arrow vs normal -->
const obj = {
  x: 10,
  normal: function () {
    console.log(this.x);
  },
  arrow: () => {
    console.log(this.x);
  }
};

obj.normal();
obj.arrow();
<!-- ✅ Output -->
10
undefined
<!-- 🔹 Reason -->
Arrow → no own this, uses outer/global this


<!-- 6. Nested function -->
const obj = {
  x: 10,
  fn: function () {
    function inner() {
      console.log(this.x);
    }
    inner();
  }
};

obj.fn();
✅ Output
undefined
🔹 Reason
inner() is normal function → default this


<!-- 7. Fix with arrow -->
const obj = {
  x: 10,
  fn: function () {
    const inner = () => {
      console.log(this.x);
    };
    inner();
  }
};

obj.fn();
<!-- ✅ Output -->
10
<!-- 🔹 Reason -->
Arrow inherits this from outer (obj)



11. Arrow inside method (tricky)
const obj = {
  x: 10,
  fn: function () {
    return () => {
      console.log(this.x);
    };
  }
};

const f = obj.fn();
f();
✅ Output
10
🔹 Reason
Arrow captures this from fn() → obj


12. setTimeout + this
const obj = {
  x: 10,
  fn: function () {
    setTimeout(function () {
      console.log(this.x);
    }, 0);
  }
};

obj.fn();
✅ Output
undefined
🔹 Reason
Callback is normal function → loses this



13. Fix setTimeout
const obj = {
  x: 10,
  fn: function () {
    setTimeout(() => {
      console.log(this.x);
    }, 0);
  }
};

obj.fn();
✅ Output
10
🔹 Reason
Arrow keeps lexical this