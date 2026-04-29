// LazyMan('Jack', console.log).eat('banana').sleep(10).eat('apple').sleep(1);
// Hi, I'm Jack.
// Eat banana.
// (after 10 seconds)
// Wake up after 10 seconds.
// Eat Apple.
// (after 1 second)
// Wake up after 1 second.
/*
function lazyMan(name){
    let queue=[];

    function next(){
        let exeFn=queue.shift();
        exeFn && exeFn();//last task call the next() safe check
    }

    const obj={
        eat:(food)=>{
            queue.push(()=>{
                console.log(`Eat ${food}`);
                next();
            });
            return obj;
        },
        sleep:(time)=>{
            queue.push(()=>{
                setTimeout(()=>{
                    console.log(`Wake up after ${time/1000} second`);
                    next();
                },time)
            })
            return obj;
        }
    }

     //first task
    queue.push(()=>{
        console.log(`Hi i am ${name}`);
        next();
    });

    // start execution
    setTimeout(next, 0);

    return obj;
}

lazyMan('Jack').eat('banana').sleep(1000).eat('mango').sleep(2000).eat('grapes');

*/


function lazyMan(name){
    let queue = Promise.resolve();

    const obj = {
        eat: (food) => {
            queue = queue.then(() => {
                console.log(`Eat ${food}`);
            });
            return obj;
        },

        sleep: (time) => {
            queue = queue.then(() => {
                return new Promise((resolve) => {
                    setTimeout(() => {
                        console.log(`Wake up after ${time/1000} second`);
                        resolve();
                    }, time);
                });
            });
            return obj;
        }
    };

    // first task
    queue = queue.then(() => {
        console.log(`Hi i am ${name}`);
    });

    return obj;
}

lazyMan('Jack')
  .eat('banana')
  .sleep(1000)
  .eat('mango')
  .sleep(2000)
  .eat('grapes');