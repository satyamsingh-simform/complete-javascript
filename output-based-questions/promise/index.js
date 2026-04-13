

Promise.resolve(1)
.then(x => x + 1)
.then(x => 100/0)
.then(x => console.log(x))
.catch((err) =>{
    console.log('error:',err);
    return 5
})
.finally(()=>{
    console.log('i will always run');
    throw new Error('promise rejected by finally');
})
.then(x => console.log('return from catch fullfilled promise',x))
.catch((err) =>{
    console.log('error:',err.message);
})