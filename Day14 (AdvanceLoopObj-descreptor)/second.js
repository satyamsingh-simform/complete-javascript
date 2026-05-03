//for in loop : Isko array ke sath nahi use krte hai

/*pr ye makhan ke trh to chal raha hai- fir kyu nhi use krte hai-aisa krege tb dikkat smjh aaeyga 
0:10
1:20
2:40
3:12
4:30
*/
/*
const arr1 = [10,20,40,12,30];
for(let index in arr1){
    console.log(`${index}:${arr1[index]}`);
}
*/

const arr = [10,20,40,12,30];
arr.name = "Rohit";//array ek obj hi hai to ye kr skte hai
arr.age = 20;

for(let key in arr){
    console.log(key);
}
/*but ky array ka index kavi v string ho skta hai nhi
0
1
2
3
4
name
age
*/

//normal loop and for of loop string var ko print hi nhi krega but ohi for in loop usko v print kr deta hai
for(let i=0; i<arr.length; i++){
    console.log(`${i}:${arr[i]}`);   
}
/*
0:10
1:20
2:40
3:12
4:30
*/

for(let val of arr){
    console.log(val);
}
/*
10
20
40
12
30

*/

