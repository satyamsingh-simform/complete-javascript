
/*
function memoize(fn) {
    let cache = {};

    return function (...args) {
        if (cache[args]) return cache[args];

        //calling directly → loses `this`
        const result = fn(...args);

        cache[args] = result;
        return result;
    }
}



function memoize(fn) {
    let cache = {};

    return function (...args) {
        if (cache[args]) return cache[args];

        // ✅ forward `this`
        const result = fn.apply(this, args);

        cache[args] = result;
        return result;
    }
}
*/

/*

const obj={
    name:"simform",
    fn:memoize(someFn)
}

obj.fn()

*/

/*
const obj = {
  name: "simform",
  fn: memoize(someFn),//for fn this == obj //bcz for normal fn (obj.fn()) left of . becomes it this
};

function someFn() {
  console.log(this.name);
}

function memoize(Func){
  return function () {
    Func.call(this);//simform
    Func.call(obj); //simform
  };
}

obj.fn();

*/


let name = "Ashish";

const obj={
  name: "simform",
  fn: memoize(someFn),
  getName: () => {
    console.log(name);
  },
};

function someFn(value) {
  console.log(value);
  obj.getName();
}

function memoize(Func) {
  return function () {
    Func.apply(this, [this.name]);
  };
}

obj.fn();
 
