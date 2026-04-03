/*
 writable   :   value ko kya mein change kar sakta hu :T-->yes:F-->No
 enumerable :   determine if the key will visible in operation like iteration or not :T->visible :F->not visible
 configurable:  w_able,e_able ka property ko change kr skte hai ki nhi :T-->yes :F-->No

 enumerable: jis bhi key ka enumerable true hoga, un sabka acces hoga ya print kr payega
  //       : Inherit hoke bhi koi bhi property or key aati hai , uska enumerbale true hua toh hi o  print hoga, nhi to nhi hoga

 */



//obj ke each key value pair ke pss ye property hota hai //key:value, writable enumerable configurable
//by default teeno property True hota hai ,usse obj ke liye jisko humlog khud se banate hai.
//Object.getOwnPropertyDescriptor(obj,'name')->ye batayega teeno pro ka value
//Object.defineProperty(obj, 'key',{})->isse teeno pro ko khud ke hisab se value de skte hai
// let obj = {};             
// obj.name = "Rohit";
// obj.age = 20;
// console.log(Object.getOwnPropertyDescriptor(obj,"name"));
// console.log(Object.getOwnPropertyDescriptor(obj,'age'));//{ value: 20, writable: true, enumerable: true, configurable: true }

/*
  value: 'Rohit',
  writable (value ko kya mein change kar sakta hu): true,
  enumerable: true,
  configurable (teeno property ka value ko change kr skte hai ki nhi): true
*/         

//writeable-how it works

let obj2 = {};
Object.defineProperty(obj2, 'name', {
    value:"rohit",
    writable:true,
    enumerable:true,
    configurable:true,
})
Object.defineProperty(obj2, "name",{
    writable:false,
})
obj2.name = "mohit";//will not allow this in unristict mode //will give error in restrict mode

//When using Object.defineProperty, if you do not specify attributes, JavaScript sets false:
Object.defineProperty(obj2,'age',{
  value:25,
  writable:false,
  enumerable:true,  //configurable value set nhi kiye hai to uska value false hoga
})
obj2.age=50;
console.log(obj2);



//real life eg how writable is useful-accountNo. & name both should not be changed so make its writable:false
/*
const customer = {
    name:"rohit",
    age:23,
    account_number:30001
};
Object.defineProperty(customer, 'account_number',{
    writable:false
})
Object.defineProperty(customer, 'name',{
  writable:false
})
customer.account_number = 20001;//will not allow this action to perform
console.log(customer.account_number);//3001
*/

//understanding enumarable- how it works
/*
const customer = {
  name:"rohit",
  age:23,
  account_number:30001
};
let customer2 = Object.create(customer);
customer2.city = "Haridwar";
customer2.place = "Delhi";

for(let key in customer2){
  console.log(`${key}`); //city place name age account_number //isme se kisi key ko visible nhi krna hai tb uska enumerable:false set kr do
}

Object.defineProperty(customer2, 'account_number',{
    enumerable:false,
})
console.log();

for(let key in customer2){
  console.log(`${key}`); //city place name age // aab account_number visible hi nhi hi kyuki uska e_able: false set kr diye hai
}
*/


//Object.prototype ka .toString key ka enumerable ka value dekho tb pata lagega ki o false set hai isliye usko print nhi kr pa rahe hai
/*
const customer = {
  name:"rohit",
  age:23,
  account_number:30001
};
for(let key in customer)
  console.log(key);//name age account_number

console.log(Object.getOwnPropertyDescriptor(Object.prototype , 'toString'));
Object.defineProperty(Object.prototype,'toString',{
    enumerable:true,
} )

for(let key in customer)
    console.log(key);//name age account_number toString
*/
/*
{
  value: [Function: toString],
  writable: true,
  enumerable: false,
  configurable: true
}
*/

