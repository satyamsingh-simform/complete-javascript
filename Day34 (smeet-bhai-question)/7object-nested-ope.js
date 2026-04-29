/*
const obj1={
    a:{
        b:{
            name:"satya",
            c:[1,2,3]
        }
    }
}
// console.log(obj1);
// console.log(obj1.a);
// console.log(obj1.a.b);
// console.log(obj1.a.b.c);
// console.log(obj1.a.b.name);
// console.log(obj1['a']);


function get(obj,key){
    let arr=key.split('');
    console.log(arr);
    console.log(arr[0]);
    
    console.log(obj.arr[0]);
    
}
get(obj1,'a.b.c')

// get(obj, 'a.b.c'); // [1,2,3]
// get(obj, 'a.b.c.0'); // 1
// get(obj, 'a.b.c[1]'); // 2
// get(obj, ['a', 'b', 'c', '2']); // 3
// get(obj, 'a.b.c[3]'); // undefined
// get(obj, 'a.c', 'dev'); // 'dev'

*/


/*
When we do:
obj["a"]    this is called bracket notation.

It is equivalent to:
obj.a       But bracket notation is dynamic, meaning we can use variables.

let key = "a"
obj[key]

Dot notation cannot do this.

*/

// const arr=[1,2,3,4,5];
// console.log(arr['0']);
// console.log(arr[0]);

// const obj={
//     a:{
//         b:{
//             name:"satya",
//             c:[1,2,3]
//         }
//     }
// }



// function get(obj,para,defaul='wrong key'){
//     if(typeof para=='string'){
//         para= para.replaceAll('[' ,'.').replaceAll(']','').split('.');
//         console.log(para);    //'a.c.d'--->[ 'a', 'c', 'd' ]
//     } 
//     for(let key of para){
//         obj=obj[key];
//         console.log(obj);
//         if(obj==null)return defaul;
//     }
//     return obj;
// }


// console.log(get(obj, ['a','b','c','0']));
// console.log(get(obj, ['a','b','name']));
// console.log(get(obj, 'a.b.c'));   // dev

/*
const obj={
    a:{
        b:{
            name:"satya",
            c:[1,2,3]
        }
    }
}

// function set(obj,para,value){
//     if(typeof para=='string'){
//         para= para.replaceAll('[' ,'.').replaceAll(']','').split('.');
//         console.log(para);    //'a.b.age' ---> [ 'a', 'b', 'age' ]
//     }
//     for(let i=0;i<para.length-1;i++){
//         let key=para[i];
//         obj=obj[key];
//         if(obj==null)return 'wrong key format'
//     } 
//     obj[para[para.length-1]]=value;
//     console.log(obj);
// }

// let res=set(obj,'a.x',5);
// console.log(res);
*/

/*
const obj2={
    name:'satya',
    age:20,
}
console.log(obj2);
obj2['email']='satya@8409';
console.log(obj2);
*/


const obj={
    a:{
        b:{
            name:"satya",
            c:[1,2,3]
        }
    }
}

function set(obj,para,value){
    if(typeof para=='string'){
        para= para.replaceAll('[' ,'.').replaceAll(']','').split('.');
        console.log(para);    //'a.b.age' ---> [ 'a', 'b', 'age' ]
    }
    for(let i=0;i<para.length-1;i++){
        let key=para[i];
        if(obj[key]==null){
            obj[key]={};
        }
        obj=obj[key];
    } 
    obj[para[para.length-1]]=value;
    console.log(obj);
}

set(obj,'a.x.y',5);
console.log(obj); //{ a: { b: { name: 'satya', c: [Array] }, x: { y: 5 } } }


// set(obj,'a.b.age',20);
// set(obj,'a.name','raj')
// set(obj,'a.b.c.3',100);
// let res=set(obj,'a.c.0',20)
// console.log(res);

// console.log(obj);


// get(obj, 'a.b.c[1]')
// console.log(get(obj, 'a.b.c'));        // [1,2,3]
// console.log(get(obj, 'a.b.c.0'));      // 1
// console.log(get(obj, 'a.b.c[1]'));     // 2
// console.log(); // 3
// console.log(get(obj, 'a.b.c[3]'));     // undefined
// console.log(get(obj, 'a.c', 'dev'));   // dev