// const counter = createCounter();

// counter(); // 1
// counter(); // 2
// counter(); // 3

// const anotherCounter = createCounter();
// anotherCounter(); // 1

function createCounter(){
    let value=0;
    function createCounterInner(){
        value++;
        return value;
    }
    return createCounterInner;
}

let counter=createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

console.log();

let anotherCounter=createCounter();
console.log(anotherCounter());



