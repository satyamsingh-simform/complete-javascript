let user1 = {
    Uname: "Rohit",
    age: 21,
}

let user2 = {
    name:"satya",
    amount:20,
    money:50,
}
console.log(user2.amount);//access kr skta hai
console.log(user2.money);//ko v access kr skta hai

//lakin ky user2 user1 ka koi property ko access kr skta hai nhi, pr ke tarika se kr skta hai-agar user1 ko user2 ka prototype bana de tb
console.log(user2.age);//undefined

user2.__proto__=user1;//ye krne se user2 user1 ka property ko v use kr skta hai
console.log(user2.age);//21
console.log(user2.name);//satya
console.log(user2.Uname);//Rohit


//user2.__proto__ = user1;
//obj jb banate hai tb Object.prototype jur jata hai khud hi sabi obj ke sath
//array jb banta hai tvi uske sath Array.prototype jur jata hai or Array.prototype ke sath Object.prototype jur jata hai 
let arr = [10,20,30,40];
console.log(arr.__proto__== Array.prototype)//T
console.log(arr.__proto__.__proto__== Object.prototype)//T
console.log(arr.__proto__.__proto__.__proto__== null)//T
