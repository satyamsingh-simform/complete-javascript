/*Object:key value pair DS
    -Keys can only be string or symbol (other types are converted to string).
    -Uses property notation to add or access values.
    -Does not have a direct property to get size.
    -Not directly iterable.
    -Commonly used for structured data (JSON-like data).

  Map:key value pair DS
    -Keys can be any data type.
    -Uses methods like set, get, has, and delete ,clear to work with data.
    -Has a built-in .size property to get the number of entries.
    -Directly iterable.

  Map
    -No. In a Map, one key can store only one value. If you assign another value to the same key, the previous value gets overwritten.
    -the Map constructor expects an iterable of key–value pairs, not just two values.
        -this would be consider as wrong:let map11=new Map([1,10]);
    -Rule for initializing a Map
        -The constructor must receive an array of arrays, where each inner array represents [key, value].
            -right syntax:let map11 = new Map([[1,10]]);
*/          

/*MAP BASIC OPERATIONS
const map0=new Map();
//map0.set(key,val)
map0.set("a",1);
map0.set("b",2);
console.log(map0);//Map(2) { 'a' => 1, 'b' => 2 }
map0.set("a",10);//with this value get updated
console.log(map0);//Map(2) { 'a' => 10, 'b' => 2 }
map0.set("c",3);
map0.set("d",5)

//map0.get(key)
console.log(map0.get("a"));//10
console.log(map0.get("d"));//5
console.log(map0.get("c"));//3

//map.has(key) //not value 
console.log(map0.has(10));//false
console.log(map0.has("a"));//true
console.log(map0.has("e"));//false
console.log(map0.has("d"));//true
*/



//  key value pair: key should be unique,
// const map1 = new Map();
// map1.set(3,90);
// map1.set("Rohit",45);
// map1.set(20,"Mohan");
// // map1.set("Rohit",40); value ko update karega

// map1.delete(3);


// // console.log(map1);
// console.log(map1.has("Rohit"));
// console.log(map1.size);
// map1.clear();
// console.log(map1);

const map1 = new Map([[4,"rohit"],["Moahn","rohan"],[30,9], [63,78]]);
console.log(map1);

// let map11=new Map([1,10]);
let map11=new Map([[1,10],[2,20],[3,30]]);
console.log(map11);//Map(3) { 1 => 10, 2 => 20, 3 => 30 }

console.log(map11.get(1));//10
console.log(map11.get(2));//20
console.log(map11.get(3));//30


//iterate
for(let [key,val] of map11){
    console.log(key,val);
}
// 1 10
// 2 20
// 3 30
