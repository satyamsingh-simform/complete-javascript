
//isse type ke fn declaration me fn ko defined hone se phele v cll kr skte hai-kyuki greet ko MAP me hi full initialize kr diya jata hia
//isse type ke fn declaration me fn ko defined hone se phele v cll kr skte hai-kyuki() L17:50 min pe lecture dekh lo
greet();//called befor I was declared, possible
function greet(){
    console.log("called befor I was declared possible ");
}


//pr isse typre of fn declaratin me error de dega:kyuki let meet hai or MAP(mem alloca phase) me let ko initialize nhi kiya jata hai o TDZ me rhta hai or TDZ wale ko access nhi kr skte hai
/*
meet();  //Cannot access 'meet' before initialization
let meet =function(){
    console.log("cant cll me befor my body");
}
//meet();
*/


//Memory alloocatioN
//greet: functuion code
// Code execution





var meet = function(){
    console.log("Hello Meet");
}

meet();




// var x;

// console.log(x);
// x = 10;


// Memory allocation:
// meet: function

// Code execution phase:



