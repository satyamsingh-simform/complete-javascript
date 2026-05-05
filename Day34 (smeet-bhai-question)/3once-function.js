// function Once(){
//     let flag=false;

//     function Inner(){
//         if(!flag){
//             flag=true;
//             console.log('running for the first time');
//         }
//     }
//     return Inner;
// }

// let initialize=Once();
// initialize()//running for the first time
// initialize()
// initialize()


/*
How do you know rest vs spread?
    -If ... is used in a function parameter it is a rest parameter that collects arguments into an array.
    -If ... is used in function calls, arrays, or objects it is the spread operator that expands values.
*/

function once(fun){
  let called=false;
  return function(){
    if(!called){
      called=true;
      fun();
    }
  }
}

let callOnce=onec();
callOnce();

function Once(fn, turn){
  let called=1;

  function Wrapper(...rest){ //Rest:collect arguments into array
    if(called<=turn){
      called++;
      fn(...rest);          //spread:expand array into arguments
    }
  };
  return Wrapper
}

const addOnce=Once((a,b)=>{
    let sum=a+b;
    console.log(`sum:${sum}`);
},2)

addOnce(10,20);
addOnce(30,20);
addOnce(100,10);

