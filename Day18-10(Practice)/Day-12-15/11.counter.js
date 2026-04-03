function createCounter(){
    let value=0;
    function createCounterInner(){
        value++;
        return value;
    }
    return createCounterInner;
}

let counter=createCounter();
console.log(counter());//1
console.log(counter());//2
console.log(counter());//3

console.log();

let anotherCounter=createCounter();
console.log(anotherCounter());//1
