

// Q25)
var a3 = 10;
(function () {
 console.log(a3);//10
 if (true) {
  console.log(a3);//error
  let a3 = 20;      
  console.log(a3);
 }
 console.log(a3);
})();