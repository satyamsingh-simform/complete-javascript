
/*
const a = { a: 'bfe' };
const b = { a: 'bfed' };

const c = [1, "a", '4'];
const d = [1, "a", '4'];

const obj10= {name:"satya", age:21}
const obj11= {name:"satya", age:21}


function objCompare(obj1,obj2){

    if(Array.isArray(obj1) && Array.isArray(obj2)){
        console.log(`array check`);
        return obj1.length===obj2.length && obj1.every((val,ind)=>val===obj2[ind]);
    }

    let key1=Object.keys(obj1);
    let key2=Object.keys(obj2);
    
    if(key1.length!==key2.length){
        return false;
    }
    
    for(let key of key1){        
        if(obj1[key]!==obj2[key]){
            return false;
        }
    }

    return true

}
// let res=objCompare(a,b);
// let res=objCompare(c,d);
let res=objCompare(obj10,obj11);

res==true?console.log(`equal`):console.log(`not equal`);
*/

// const a = { a: 'bfe' };
// const b = { a: 'bfe' };
// const a = { a: 'bfe' };
// const b = { a: "bfe" };
// b.myObj=b;


const a = {};
a.self = a;

const b = {};
b.self = b;

const c = [1, a, '4'];
const d = [1, b, '4'];

const obj10=null;
const obj11=null;

/*problem without weakMap
    objCompare(a, b)
  → compare a.self with b.self
      → objCompare(a, b)
          → again same call
              → infinite recursion:->because JS keeps going deeper with no memory of past comparisons

with weakMap
visited = {} (empty)

visited.has(a) → false

visited.set(a, b)
Now:
    visited = {
       a → b
    }

visited.get(a) === b
This is:
    b === b 
*/


function objCompare(obj1,obj2,visited=new WeakMap()){
    
    console.log(obj1);
    console.log(obj2);

    if(visited.has(obj1)){
        return visited.get(obj1)===obj2;
    }

    if(Array.isArray(obj1) && Array.isArray(obj2)){
        console.log(`array check`);
        visited.set(obj1,obj2);
        return obj1.length===obj2.length && obj1.every((val,ind)=>objCompare(val,obj2[ind],visited));
    }

    if(typeof obj1==='object' && obj1!==null && typeof obj2==='object' && obj2!==null){
        let key1=Object.keys(obj1);
        let key2=Object.keys(obj2);
    
        if(key1.length!==key2.length){
            return false;
        }
        visited.set(obj1, obj2);
    
        for(let key of key1){        
            if(!objCompare(obj1[key],obj2[key],visited)){
                return false;
            }
        }

        return true;
    }

    //typeof null === 'object' to handle this case
    if(obj1==null || obj2==null ) return false;
    return obj1===obj2;
}

let res=objCompare(a,b);
// let res=objCompare(obj10,obj11);
res==true?console.log(`equal`):console.log(`not equal`);