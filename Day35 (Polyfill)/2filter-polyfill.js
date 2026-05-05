//custom filter
/*
Array.prototype.myFilter=fucnction(callback){
  const arr=[];
  for(let i=0;i<this.length;i++){
    if(callback(this[i])){
      arr.push(this[i]);
    }
  }
  return arr;
}

const arr = [1, 2, 3, 4, 5];
const res = arr.myFilter((num) => num > 2);
console.log(res);
*/
/*
Array.prototype.myMap=function(callback){
    const arr=[];
    for(let i=0;i<this.length;i++){
        let res=callback(this[i])
        arr.push(res);
    }
    return arr;
}

const arr = [1, 2, 3, 4, 5];
const res = arr.myMap((num) => num * 2);
console.log(res);
*/

/*
const arr = [1, 2, 3, 4, 5];
// let res=arr.reduce((acc,cur)=>{
//     acc=acc+cur;
//     return acc;
// },0)
// console.log(res);
// // let result=arr.reduce((acc,curr)=>acc+curr,0)

Array.prototype.myReduce=function(callback,initial){
    let acc=initial;
    let startIndex=0;
    if(acc===undefined){
        acc=this[startIndex];
        startIndex++;
    }
    for(let i=startIndex;i<this.length;i++){
        acc=callback(acc,this[i]);
    }
    return acc;
}


let result=arr.myReduce((acc,cur)=>{
    acc=acc+cur;
    return acc
},0)
console.log(result);
*/