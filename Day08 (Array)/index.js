/*
    JavaScript arrays are not stored in contiguous memory locations because of the following reasons: can store val of all type
        1. Dynamic Nature of JavaScript Arrays  
        
    if JavaScript arrays aren't stored in contiguous memory, then how are we able to access elements using sequential indices    
        “When you create let arr = [10, 20, 30];, the engine behind the scenes does something like:
            Turn each position into a string key:
                index 0 ⟶ property "0"
                index 1 ⟶ property "1"
                index 2 ⟶ property "2"
            Store each value under its key, so arr["1"] holds 20.
            When you write arr[1], it simply looks up the object property "1". therefore we can say array internally is object
 */


/*           0  1  2  3  4  5    6   7
            -8 -7 -6 -5 -4 -3   -2  -1
const arr = [2,35,1,8,9,"rohit",true,8];
console.log(arr[1]);//35
console.log(arr[0]);//2
console.log(arr[-1]);//undefined, dega kyuki isse trika se -ve index ko access nhi kr skte hai uske liye .at ka use krna prega 
console.log(arr.at(-2));//true// at is latest, negative index le leta hai
console.log(arr.at(-8));//2// at is latest, negative index le leta hai
console.log(arr.length);//8(0-7)

const newArr=arr;//arr me address hai heap me rakhe hue arr ka ,to newArr me v usse arr ka reference gaya isliye dono same array ko point kr raha hai
console.log(newArr);
console.log(newArr==arr);//dono me same addr hai isliye equal hoga so T
const newarr = structuredClone(arr);//structuredClone() se arr ka data to copy hoga pr dono array ko alag alag mem milega  
console.log(newarr==arr);//F
*/

/*
// push()-->add element at end
let arr=[1,2,3,4,5,'satya','abhijeet','aman'];
console.log(arr);
arr.push(30);
arr.push(50);
arr.push(100);
console.log(arr);//[ 1, 2, 3, 4, 5, 'satya', 'abhijeet', 'aman', 30, 50, 100 ]

// pop()-->pop out the last element from array
arr.pop();
arr.pop();
arr.pop();
console.log(arr);//[ 1, 2, 3, 4, 5, 'satya', 'abhijeet', 'aman' ]

//unshift()-->add element at start
arr.unshift(5);
arr.unshift(30);
console.log(arr);//[ 30, 5, 1, 2, 3, 4, 5, 'satya', 'abhijeet', 'aman' ]

//shift()-->delete element from start ,this method is used in place of delete(bcz pata chalega) 
arr.shift();
console.log(arr);//[ 5, 1, 2, 3, 4, 5, 'satya', 'abhijeet', 'aman' ]


//delete operation-this is the drawback of this method
// [hole,2,35,1,8,9,"rohit"];
delete arr[0];//[ <1empty item>, 1, 2, 3, 4, 5, 'satya', 'abhijeet', 'aman' ]
console.log(arr);
delete arr[4]// [ <1empty item>, 1, 2, 3, <1empty item> , 5, 'satya', 'abhijeet', 'aman' ]
console.log(arr);
console.log(arr[0]);//undefined


console.log(arr);//[ 5, 1, 2, 3, 4, 5, 'satya', 'abhijeet', 'aman',10 ]
console.log(arr.indexOf(5));//0 //ye 1st el jo match krega uska index dedega ,nhi hoga koi el match tb -1 dega 
console.log(arr.lastIndexOf(5));//5
console.log(arr.lastIndexOf(8));//-1
console.log(arr.lastIndexOf(4));//4
console.log(arr.includes(10));//T/F //10 hoga arr me to T else F
*/

/*
//arr.slice()-->jo v doo index pass krge uska new arr bana ke dedega
let arr=[1,2,3,4,5,'satya','abhijeet','aman'];
console.log(arr);
let a = arr.slice(2,5);//last index excluded hai
console.log(a);//[ 3, 4, 5 ]
console.log(arr);//[ 1, 2, 3, 4, 5, 'satya', 'abhijeet', 'aman' ]


//arr.splice()-->jo v el splice ke range me aayega o og array me nhi rhega
console.log(arr); //[ 1, 2, 3, 4, 5, 'satya', 'abhijeet', 'aman' ]
let newsplice = arr.splice(2,5);//index 2 se leke total 5 el dedega
console.log(newsplice);//[ 3, 4, 5, 'satya', 'abhijeet' ]
console.log(arr);//[ 1, 2, 'aman' ]

// //splice(starting_index,total_element_delete,add value)
arr.splice(2,0,"money",90);
console.log(arr);//[ 1, 2, 'money', 90, 'aman' ]
console.log(arr.toString());//1,2,money,90,aman
let str=arr.toString();
console.log(str[0]);//1
console.log(arr.join("+"));//1+2+money+90+aman //1*2*money*90*aman
*/

//concat
/*
let arr1 = [2,3];
let arr2 = [5,1];
let arr4 = [0,4,9,7];
let arr3 = arr2.concat(arr1,arr2,arr4);//[ 5, 1, 2, 3, 5,1, 0, 4, 9, 7]
let arr6 = arr1.concat(arr2,arr4);
console.log(arr6);//[ 2, 3, 5, 1,0, 4, 9, 7]
console.log(arr1);//[ 2, 3 ]
console.log(arr3[6]);//9
console.log(arr3[0]);//2

arr1.push(arr4);//this will create 2D array
console.log(arr1);//[ 2, 3, [ 0, 4, 9, 7 ] ]
console.log(arr4);
console.log(arr1[2][2]);//9
console.log(arr1[1]);//3
console.log(arr1[2]);//[ 0, 4, 9, 7 ]
console.log(arr1[3]);//undefined
*/


/*
// 2d array
let arrr = [1,2,3,4,5,6,7,8,9];
let arr2d = [[1,2,3,[23,432,123,[331,123,123]]],[4,5,6],[7,8,9]];
// flat ka use to convert into 1d array
let newarr = arr2d.flat(3);
// [1,2,3]
// [4,5,6]
// [7,8,9]
console.log(newarr);


let abc = [2,1,4,1];
console.log(Array.isArray(abc));

// let ac = new Array(10);
// console.log(ac.length);
*/
