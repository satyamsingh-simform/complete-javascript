// function cal(){
//     console.log(this);//both will points to global object //as it is simple call
//     function add(){
//         console.log(this);//both will points to global object //as it is simple call
//     }
//     add();
// }
// cal();

/*No. of way fn can be defined in object
sum(){}	✅
sum: function(){}	✅
sum: () => {}	✅
sum: add(){}	❌
*/

//Yes:es, a function inside an object can return the object itself
// const obj={
//     val:0,
//     sum(){
//         return obj;
//     }
// }
// console.log(obj.sum());


const obj = {
  value: 10
};

const add=(num)=>{
  console.log(this.value);
};
add.call(obj);//undefined  //arrow function ignores call/bind/apply