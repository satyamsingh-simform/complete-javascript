/*Deep Copy
    -A deep copy creates a completely independent copy of the original object, including all nested objects.
    -let obj3 = structuredClone(obj1)
    -structureclone:-always creates deep copy kitna v nested kyu na ho obj ka
    -JSON.parse(JSON.stringify(obj)); this also create deep copy 
    -Recursive Deep Copy (Interview Favorite)

  Shallow Copy:
    Spread operator ,even object.assign()
        -They are used to create shallow copy
        -used to create deep copy for non-nested obj but create a shllow copy for nested obj.   
        -Spread operator and Object.assign() always create shallow copies. For non-nested objects this behaves like a deep copy, but for nested objects only references are copied.

  Reference assignment:neither shallow copy nor deep copy 
    -let obj2 = obj1;
*/

/*SPREAD vs REST
1.Spread (...)
    -Purpose: Expand values
    -Common usage: Copy arrays/objects, merge arrays/objects, function arguments
    -Usage place: RHS (right-hand side)

2.Rest (...)
    -Purpose: Collect values
    -Common usage: Destructuring, function parameters
    -Usage place: LHS (left-hand side)

*/





/*
let obj1 = {
    a:1,
    b:2,
}
console.log(obj1);


let obj2 = obj1; //pointing to same obj1 //reference assignment
obj2.a=10;       //change will reflect in both, bcz both are pointing to same object
console.log(obj2);
console.log(obj1);

//deep copy-create another object only (using structeredClone()), with same key value pair as of obj from which it is created 
let obj3 = structuredClone(obj1);
obj3.a = 20;    //change will only reflect in obj3, bcz obj3 is independently created
console.log(obj3);
console.log(obj1);
*/

/*
//Nested object-obj ke andar obj is nested obj
const user = {
    name:"Rohit",
    balance: 420,
    address: {
        pincode: 246149,
        city: "kotdwar"
    }
}
// console.log(user.address);//{ pincode: 246149, city: 'kotdwar'}
// console.log(user.address.pincode);//246149
// console.log(user.address.city);//kotdwar

//structureclone:-always creates deep copy kitna v nested kyu na ho obj ka
//Object.asign(obj1) create a prblm, with normal obj it create
// deep copy but with nested obj is create shallow copy of nested part only not whole obj even this is very confusing  
//const user2=Object.assign({}, user):-this will create shallow copy for nested obj but deep copy for non-nested obj
//with spread also it works same as Object.asign()
const user2 = Object.assign({},user);
//console.log(user2);
user2.address.pincode = 321314;//updated pincode in user2, but reflected in user1 also bcz pincode is with nested part 
user2.name="mohit";//updating name in user2 but not reflected in user1 bcz it is not a part of nested obj
console.log(user2);
console.log(user);
*/

/*
//Destructruing of an object:-it means kuch value ko nikalna hai:- let {key1, key3, key2}=obj
let obj = {
    Uname: "Rohit",
    money: 430,
    balance: 30,
    age: 20,
    aadhar: "uudaai"
};
// const{Uname, age}=obj
// console.log(Uname, age);//Rohit 20
// const {Uname, balance, age} = obj;
// console.log(Uname,balance,age);//Rohit 30 20

//const {name:full_name , balance: amount, age:Umar} = obj;
// const{Uname:fullName, balance:accBal, age:umar}=obj;
// console.log(fullName, accBal, umar);//Rohit 30 20//isme new name jo assign kiye hai usko use kr skte hai bas


// spread operator-used to copy object (shallow copy)
const objCopy={...obj};//copy: { Uname: 'Rohit', money: 430, balance: 30, age: 20, aadhar: 'uudaai' }
console.log('spread:',objCopy);

//Rest Operator:-Uname & age to alag ho jayega or rest key value other obj me aa jayega 
//The rest operator (...) is used to collect the remaining properties or values into a single array or object after destructuring the required ones.
const {Uname, age,...obj1} = obj;
console.log(Uname, age);//Rohit 20
console.log(obj1);//{ money: 430, balance: 30, aadhar: 'uudaai' }

const{age:uma, ...obj2}=obj;
console.log(uma);//20
console.log(obj2);//{ Uname: 'Rohit', money: 430, balance: 30, aadhar: 'uudaai' }

//REST behave as SPREAD
const {...objRest}=obj;
console.log('rest:',objRest);//rest: { Uname: 'Rohit', money: 430, balance: 30, age: 20, aadhar: 'uudaai' }
//REST used before = and SPREAD used after =
*/

/*
//destructuring of Array
const arr = [3,2,1,5,10,11];
const [first,second] = arr;
console.log(first,second);//3 2
const[st,nd, ,th]=arr;
console.log(st, nd, th);//3 2 5
const [firs,secon, , ,thir] = arr;
console.log(firs, secon, thir);//3 2 10

//rest Operator in array
const [fir,seco,...thi] = arr;
console.log(fir,seco);//3 2
console.log(thi);//[ 1, 5, 10, 11 ]

//here spread and rest behave same 
const arrC=[...arr];
console.log('spread:',arrC);//copy: [ 3, 2, 1, 5, 10, 11 ]
const [...rest] = arr;
console.log('rest:',rest);
// spread: [ 3, 2, 1, 5, 10, 11 ]
// rest: [ 3, 2, 1, 5, 10, 11 ]
*/

/*Destructure 2D array */
/*//DESTRUCTURING of nested object
let obj = {
    name: "Rohit",
    age: 20,
    arr: [90,40,60,80],
    address: {
        pincode:246149,
        city:"Kotdwar",
        state: "uk",
        arr2:[1,2,3,4],
    }
};
//array of objects
let arr=[{a:1,b:2},{},{}];
let obj23=(arr[0]);
console.log(obj23.a);
console.log(obj23.b);
// const {address:{pincode, city}} = obj;

let arr2D=[1,2,[3,4]];
const [,,[...arrRest]]=arr2D;
const [,,[f,l]]=arr2D;
console.log(f,l);//3 4
console.log('c:',arrRest);// [ 3, 4 ]

// console.log(pincode,city);//246149 Kotdwar--destructing se 
// //console.log(address.pincode,address.city);wrong way
// console.log(obj.address.pincode, obj.address.city);//246149 Kotdwar--without destructing se

const {arr:[...all]}=obj
console.log('all:',all);//all: [ 90, 40, 60, 80 ]
const {address:{arr2:[first]}}=obj;
console.log(first);//1
*/


/*
let user = {
    name: "Rohit",
    amount: 420,
    greet: function(){
        console.log("Hello COder Army");
        return 0     //return nhi likhte hai  to by byfault undefined return krega ,sirfreturn likhne se v undefined hi return krega.
    },
    meet: function(){
        return;
    },
}
console.log(user.greet());//0
//console.log(greet());// error
console.log(user.meet());//undefined
*/


let objc = {
    name:"Rohit",
    amount:420,
    greet: function(){
        return 10;
    }
}
objc.greet();
const objToStr=objc.toString();
console.log(objToStr);//[object Object]

//.toString() //method likhe v nhi hai obj me to fir isko kaise access kr pa rahe hai
//ye sare method ko nikal skte hai :- obj.__proto__
console.log(objc.__proto__);
// console.log(obj.toString())

// // arr is an object-how
let arr = [2,3,1,8];
console.log(arr.__proto__);

// //ye sare method ko nikal skte hai :- arr.__proto__
// //push() method aaya kaha se -ye sb array ka prototype hai
// arr.push(10);
// console.log(arr);





