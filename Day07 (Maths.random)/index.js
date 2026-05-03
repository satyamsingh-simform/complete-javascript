/*
//we can create no. in 2 ways
let num1 = 231; //type no.
let num2 = new Number(231);//type object
let num3 = new Number(231);
console.log(typeof num2);
console.log(num2);
console.log(num1==num2);//T--yaha pe object se no. me convert hoga kyuki comp ke liye dono same type ke hone chaiye
console.log(num2==num3);//F--yaha pe dono hi obj hai to conversion nhi hoga or num2 and num3 dono me alag addres hai isliye F 
*/

/*
let num = 231.68;
console.log(num.toFixed(1));//point ke baad kitna digit hona chaiye ,sath me round off v kr deta hai .toFixed method
console.log(num.toFixed(3));//point ke baad kitna digit hona chaiye 
console.log(num.toFixed(5));//231.68000
console.log(num.toFixed(2));//231.68
console.log(num.toPrecision(4));//231.7-mtlb total (not after decimal) 4 digit hona chaiye or ye round off kr dega
console.log(num.toPrecision(3));//232
console.log(num.toPrecision(2));//2.3e+2
console.log(num.toPrecision(5));//231.68
console.log(num.toExponential(2));//2.32e+2--point ke baad kitna digit chaiye
console.log(num.toExponential(3));//2.317e+2
console.log(typeof num.toString());//string
console.log(num.valueOf());//num ka value kitna hai //231.68
*/


/*
////  Math
console.log(Math.E)
console.log(Math.LN10);//log10 to base e
console.log(Math.PI);
console.log(Math.LOG10E);
*/
// min=1
// max=6
// ((Math.random()*(max-min+1)+min));
// console.log(Math.floor(Math.random()*(6-1+1)+1));
// Math.floor(Math.random()*(max-min+1)+min);


/*
//// floor and ceil
let num1 = 23.1;
console.log(Math.floor(num1));//23//Math.floor(num)-round off to floor value
console.log(Math.ceil(num1));//24//Math.ceil(num)-round off to ceil value

console.log(Math.random());// 0<=value<1 //0-1 ke beech me math.random value dega
console.log(Math.floor(Math.random()*10)+0);//0-9
//1-10 generate
console.log(Math.floor(Math.random()*10)+1)
// 11-20 generate
console.log(Math.floor(Math.random()*10)+11);// 0-9 + 11
// min = 40 , max =50;
let max=50;
let min=40;
console.log(Math.floor(Math.random()*(max-min+1)+min));

// 0-9
// console.log(Math.floor(Math.random()*10));

// 0-10
// 2-12
// console.log(Math.floor(Math.random()*11+2));
// 30-40
// console.log(Math.floor(Math.random()*(40-30+1)+30));

// Ludo
// 1-6
//console.log(Math.floor(Math.random()*(6-1+1)+1));
*/
console.log(Math.floor(Math.random()*(6-1+1)+1));
