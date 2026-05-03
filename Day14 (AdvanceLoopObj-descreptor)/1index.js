// obj.toString()//used to return string representation of an object 
//for in loop is used to iterate over object in js in very easy way as compare to traditional for loop
let obj1 = {
    name: "rohan",
    age:23,
    gender:"male",
    city:"kotdwar"
};

/* for in loop-can iterate directly over keys in an object
        -previous class wala lecture me ye kaam krna kitna tough hogaya tha, using this Object.key(obj) 
        -or for in loop se kitna aasan hogaya hai
        -obj[key[i]]
*/

/*
//////for in Loop
console.log(`for in loop to iterate over obj keys directly`);
for(let abc in obj1){
    //console.log(`${abc} : ${obj1[abc]}`);
    console.log(`${abc} : ${obj1[abc]}`);
}
// console.log();

// for(let a1 in obj1){
//     console.log(a1, ":", obj1[a1]);    
// }
*/

/*
console.log(`traditional method to iterate over obj`);
//Object.keys(obj1)
let arrKey=Object.keys(obj1);//[ 'name', 'age', 'gender', 'city' ] returns an array of keys
for(let i=0; i<arrKey.length; i++){
    console.log(arrKey[i], obj1[arrKey[i]]);//obj1[name]=rohit
}
*/
/*
// difference bw traditional for loop and for in loop for iterating on object
//     -traditional for loop(will not print inherted property)
//     -prbm with for in loop
//          -for in loop(ye wala method se inherited key ko v print kr dega)
//          -it ignore the key which is Symbol.
//          -Isko array ke sath nahi use krte hai advicable
//              -normal loop string key ko print hi nhi krega array ka but ohi for in loop usko v print kr deta hai
//          -Yes. Order not guaranteed is also considered a problem with for...in.

*/ 

let obj2 = Object.create(obj1);//obj1 ko obj2 ka prototype bana dega//obj2 obj1 ka property inherit kr lega Object.create()
obj2.money = 420;
obj2.id = "Roh";
console.log(obj2);//sirf obj2 ko print krega inherted property ko print nhi krega
console.log(Object.keys(obj2));//sirf obj2 ka keys ko print krega

//ye wala method se inherited key (ka v access hoga) ko v print kr dega
console.log("ye wala method se inherited key (ka v access hoga) ko v print kr dega");
for(let key in obj2){
    console.log(key);//money id name age gender city
}
/*
//Q.ye hai ki object ka prototype ka method(like .toString etc) ko kyu nhi print kiya pr obj1 ka sara ko print kr diya, kyu ki by default Object.Prototype method ka e_able:false set ho rakha hai isliye for in loop Prototype method ko print nhi kr pa raha hai
    -reason:-kyuki unsabka enumerable:false set hai.
    -reason:-writable enumerable configurable-obj ka key value pair ke sath ye 3 attribute set hota hai

//default value for Object prototype 
writable:true
enumerable:false
configurable:true

 writable   :   value ko kya mein change kar sakta hu :T-->yes:F-->No
 enumerable :   determine if the method(Object.prototype)(like .toString etc) will visible in operation like iteration or not :T->visible :F->not visible
 configurable:  w_able,e_able ka property ko change kr skte hai ki nhi :T-->yes :F-->No


*/    