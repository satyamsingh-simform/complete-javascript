/*diff ways of handling arguments */

//CASE1
function names(fun){
    fun("Satyam", 21);//jaha pe fn cll hota hai udher argument pass krte hai
}

names(function(name, age){
    console.log(name, age);
});


//CASE2
function Once(fn, turn){
  let called = 1;

  function Wrapper(...rest){
    if(called <= turn){
      called++;
      fn(...rest);
    }
  };

  return Wrapper;
}
/*
const addOnce = Once(callback,2)
addOnce === Wrapper
addOnce(10,20)
Inside Wrapper
rest = [10,20]
fn(...rest)
fn(10,20)
*/

