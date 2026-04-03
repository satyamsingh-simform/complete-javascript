
/*
//creating object
let obj11={
    Username:"singhsatyam",
    password:"Satya@8409",
    followers:200,
    following:100,
    like:"1k",
}
console.log(obj11);
obj11.Username="singhsatyam8409";//updation in obj is done like this
console.log(obj11);
delete obj11.like;//delete operation on object
console.log(obj11);
*/



/*
//what object{key(can be no. also, key can be put in "" also, key can also be keyword of js):value Pair} can contain
//          object does not need data type to be mentioned ,direct key:value ,no let const var needed for key if does it will give error.
const obj = {
   0:20,
   1:50,
   2:70, 
   Uname:"rohit", 
   account_balance:420,
   gender: "Male",
   age: 30,
   "account number": 231230,
   undefined: 30,
   null:"mohan",
}

//how can we access object there are diff ways 
console.log(obj.username);//undefined if no such key is present
console.log(obj);
console.log(obj['0']);//20
console.log(obj[1]);//50
console.log(obj[2]);//70
console.log(obj[3]);//undefined

//console.log(obj.2);//is tarika se access nhi kr skte hai no.wale key ko

console.log(obj["Uname"]);
console.log(obj.Uname);
// console.log(obj[Uname]);//is tarika se access nhi kr skte hai normal key ko

console.log(obj.gender);
console.log(obj["gender"]);
console.log(obj["undefined"]);
console.log(obj["null"]);
console.log(obj.account_balance);
console.log(obj["account number"]);
*/



/*
//ye tarika use krega hi nhi
//second method to create object
const person=new Object()
console.log(person);//{}-empty obj
//property add
person.name = "Rohit";
person.age = 80;
person.gender = "Male";
person.weight="70kg"
console.log(person);
// delete
delete person.age;
console.log(person);
// Modify or update
person.name = "satya";
console.log(person);
*/


/*
//third method-using constructor 
class People{
    constructor(na, age, gen){
        this.name = na;
        this.age = age;
        this.gender = gen;
    }
}
let per1 = new People("Rohit", 20, "Male");
let per2 = new People("Mohit", 30, "Female")
let per3 = new People("Aman", 21, "Male")
let per4 = new People("Satya", 23, "male")
console.log(per1);
console.log(per2);
console.log(per3);
console.log(per4);
*/





//common method for object
/*
  Object.keys(obj)
  Object.values(obj)
  Object.entries(obj)
*/

/*
let obj10 = {
    name: "rohit",
    age:30,
    account_balance:420,
    gender:"male",
    "undefine":0,
};

//we want only keys not value in an array for that we can use -Object.keys(obj10)-->ye mthod return krke deta hai ek array
console.log(Object.keys(obj10));//[ 'name', 'age', 'account_balance', 'gender', 'undefine' ]


//we want only values not keys in an array for that we can use -Object.values(obj10)
console.log(Object.values(obj10));//[ 'rohit', 30, 420, 'male', 0 ]
const arr = Object.values(obj10); //[ 'rohit', 30, 420, 'male', 0 ]
console.log(arr);//[ 'rohit', 30, 420, 'male', 0 ]         


//if we want both key and value in an array for that we can use -Object.entries(obj10)
const arr2 = Object.entries(obj10);
console.log('you will get 2d array which looks like this');
console.log(arr2);//gives 2d array
*/
/*
[
  [ 'name', 'rohit' ],
  [ 'age', 30 ],
  [ 'account_balance', 420 ],
  [ 'gender', 'male' ],
  [ 'undefine', 0 ]
]
*/



////Object.assign({},obj1,obj2):-used to create a copy of object
/*
//assign({}, obj1, obj2, obj3,...)- use to combine two or more object
//{}-source obj bolte hai isme hi change hoke jayega
//jb isko {} pass nhi krte hai tb jo v obj phele denge ussiko ye source obj man leta hia or usse me changes kr deta hai
const obj1 = {a:1,b:2};
const obj2 = {c:3,d:4};
const obj6 = Object.assign(obj1,obj2);//prblm with this method is that ki obj1(jo phele denge) ko v change kr de raha hai
// console.log(obj6);//{ a: 1, b: 2, c: 3, d: 4 }
// console.log(obj1);//{ a: 1, b: 2, c: 3, d: 4 }
// console.log(obj2);//{ c: 3, d: 4 }
const obj3 = Object.assign({},obj1,obj2);//just by passing this {} will solve the prblm 
console.log(obj3);//{ a: 1, b: 2, c: 3, d: 4 }
console.log(obj1);//{ a: 1, b: 2 }
console.log(obj2);//{ c: 3, d: 4 }

//When two objects have the same keys, Object.assign() follows a last-write-wins rule. //Spread operator creates a new object and later properties override earlier ones, while Object.assign() mutates the target object.
const obj12={a:1,b:2};
const obj13={a:3,b:4};
const obj14=Object.assign({},obj12,obj13);
console.log(obj14);//{ a: 3, b: 4 }
*/

/*
//spread operator-create a copy of obj
//2nd method to combine objects:-using spread operator  :const obj50 = {...obj41,...obj42,...obj43};
const obj41={
    a:10,
    b:20,
}
const obj42={
    c:30,
    d:40,
}
const obj43={
    e:50,
    f:60,
}
// const obj50 = {...obj41, ...obj42, ...obj43};//{ a: 10, b: 20, c: 30, d: 40, e: 50, f: 60 }
// console.log(obj50);
const obj1={...obj41}
obj1.g=100;
console.log(obj1); //{ a: 10, b: 20, g: 100 }
console.log(obj41);//{ a: 10, b: 20 }
*/

/*
Spread operator and Object.assign() are used to copy and merge objects. Both perform shallow copies and 
overwrite duplicate keys based on order. The main difference is that Object.assign() can mutate the
target object, while spread always creates a new one.
*/




