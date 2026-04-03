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
