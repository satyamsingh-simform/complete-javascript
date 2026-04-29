/*What is Currying
    -converting a function with multiple arguments into multiple functions with one argument each
    -execution happens only if all varaible is present, as last varible will call fn.

*/


function add(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(add(2)(3)(6));
