/*enumerable: false only affects enumeration methods, not direct access or console display.
    It hides the property from:
        -for...in
        -Object.keys()
        -Object.entries()
        -JSON.stringify()
        -...spread
*/

const obj={
    name:'Satya',
    age:20,
    address:{
        city:"jsr",
        street:20,
        road:10,
    }
};


Object.defineProperty(obj,'age',{
    enumerable : false
})
// console.log(Object.getOwnPropertyDescriptor(obj, 'age'));

const obj2={...obj};
// console.log(obj);
// console.log(obj2);//{ name: 'Satya', address: { city: 'jsr', street: 20, road: 10 } }
// console.log(obj.age);//20
// console.log(obj2.age);//undefined

for(let key in obj){
    console.log(obj[key]);//it will not print age
}

for(let key of Object.keys(obj)){////it will not print age bcz Object.keys(obj) it will not have access
    console.log(obj[key]);
}
