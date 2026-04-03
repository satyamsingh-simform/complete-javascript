/*ye var/let,const hoisting ka alag hone ka reason ky hai
    -kyuki var ko initialize kr dete hai undefined se
    -kyuki let or const ko sirf mem milega kuch v se initialize nhi kiya jayega unlike var

  
  JS:is Single Threaded Synchronous Language
    -Single Threaded :iska mtlb hai ek baar me ek hi task/instruction execute hoga 
    -Synchronous :iska mtlb hai line by line execute hoga, isse code struck hone ka disadvantage hai. 
    -Asynchronous:therefore js needs this behaviour, which is achieved by js through browser web api fn like timeout etc 

  Temporal Dead Zone (TDZ)
    -ye o time hota hai jb memory allocation phase chal raha hai ,
    -in this mem allocation phase var ko undefine se initialize krte hai or
    -let & const ko mem deke chor dete hai ise phase of let ko TDZ(jv val initialize kr dege tb TDZ se bahar aa jata hai let var) bolte hai
    -jb v koi variable TDZ me hota hai usko access nhi kr skte hai.
    
  Hoisting:
    -JS code execute in two phase 1.Memory allocation 2.Code execution.
    -During mem allocation var let const and fn(declarative) get hoisted means gets mem and value which are diff for them
    -Hoisting in js is the behaviour where variable and fn declaration r moved to the top of their 
     scope, let & const are hoisted but it is in TDZ, so accessing before declaration causes an error in case of let.
    -Declarative fn is hoisted and whole body is present while hoisting and hence can be accessed before declare also. 
 */








// console.log(x);//undefinede deta hai error nhi :kyuki var ko initialize kr dete hai undefined se
// console.log(y);//error dega: kyuki inlog ko sirf mem milega kuch v se initialize nhi kiya jayega unlike var
// console.log(b);//error:variable b not defined
// var x = 10;
// let y = 20;


console.log(z1);
let z1;


var z2;






