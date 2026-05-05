

function memo(fun){
  return function(...args){
    fun(...args)
  }
}

function expensiveCal(...args){
  let sum=0;
  for(let val of args){
    sum=sum+val;
  }
  console.log(sum);
}

let sumCal=memo(expensiveCal);
sumCal(1,2,3,4);