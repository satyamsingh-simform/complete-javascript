//reduce:it creates a result(obj, string, arr etc)
//format:const result = arr.reduce(callback function(isme 4 paameter milta hai), initialization)

const arr = [10,20,30,40,50];
const result=arr.reduce((acc,curr,index,arr)=>{    //curr-me ek ek kr ke arr se value ayega 
    // console.log(acc,curr);                         //andar se jo v return krege o acc(acc ko initial val initilizer se milega) me jayega
    acc=acc+curr;
    return acc;
},0)                                               //jo v initializer me val dege o acc ka initial val ban jayega
console.log(result);

//reduce((acc,curr)=>,0)
//map() and filter() always return an array, whereas reduce() can return a single value (number, object, array, or anything).
//shorthand representation of reduce
/*
let arr=[10,20,30,40,50];
let result=arr.reduce((acc,curr)=>acc+curr,0)
console.log(result);//150
*/


/*
//real life eg of reduce // final result ek object ke form
let arr = ["orange","apple","banana","orange","apple","banana","orange","grapes"];
const result = arr.reduce((acc,curr)=>{
    if(acc.hasOwnProperty(curr))
        acc[curr]++;
    else
      acc[curr]=1;

    return acc;
},{})
console.log(result);
*/
//shorthand for above code
/*
const result = arr.reduce((acc,curr)=>{
    acc.hasOwnProperty(curr) ? acc[curr]++ : acc[curr]=1;
    return acc;
},{})

console.log(result);
*/