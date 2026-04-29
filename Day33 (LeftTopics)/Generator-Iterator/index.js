/*Iterator
    -how for...of loop knows(to traverse the array) that it has to move from L to R 
    -bcz array has built in Iterator fn -->that tell if array comes then how can print its value  
    -but every time we will not have built in iterator fn for all collection ,then we need to create a custom iterator 
        -so to create the custom iterator we have 
            -iterator protocol, generator fn, yield
*/
for(let val of [1,2,3,4,5]){ 
    console.log(val);
}

/*
Iterable (data source)
    -An iterable is something we can loop over.
    -It must have:obj[Symbol.iterator]()
    -Array is iterable  Because it has [Symbol.iterator]
    -It is a special method (protocol) in JavaScript
        -It tells JS: Hey, this object knows how to behave in a loop”

Iterator (pointer/controller)
    -An iterator is the object that actually:
    -keeps track of position
    -returns next value
    -It must have:next()
*/



/*How to create the custom Iterator
    -this custom iterator cant be used in js built in for ...of loop to iterator ,so to make it work we need generator fn
    -Rule for for...of
        -for...of only works on iterables, i.e. objects that have:
        -[Symbol.iterator]()
*/

//this is Iterator
function customIterator(start = 0, end = Infinity, step = 1){
    let nextStart = start;
    let iterationCount = 0;

    return {
        next(){
            let result;
            if(iterationCount < end){
                result = { value: nextStart, done: false };
                nextStart = nextStart + step;
                iterationCount++;
                return result;
            }
            return {value: iterationCount, done: true};
        }
    }
}

const myIterator = customIterator(1, 10, 1);
let result = myIterator.next();

while(!result.done){
    console.log(result.value);
    result = myIterator.next();
}

//using customIterator in ,built in for..of loop: error
for(let val of customIterable(1,10)){
    console.log(val);
}

/*Generator
    -What problem generator solves
        -Without generator:
            You manually manage:
                -state (nextStart, iterationCount)
                -next() logic
                -[Symbol.iterator]
        -Code becomes complex and error-prone
    -Generator functions exist so you don’t have to manually implement iterators + iterables

✔ Iterable
✔ Iterator
✔ Has execution pause/resume capability

yield
    -What yield does
        -Pauses function execution
        -Returns a value
        -Resumes from same point on next .next()
*/

function* count(){
    yield 2;
    yield 4;
    yield 6;
    yield 8;
    yield 10;
}

const even=count();

//for of is able to iterate the even
for(val of even){
    // console.log(val);
}

function* makeMyIterable(start,end,stepSize){
    for(let i=start;i<end;i=i+stepSize){
        yield i;
    }
}
let value=makeMyIterable(2,10,2)

for(let val of value){
    // console.log(val);
}