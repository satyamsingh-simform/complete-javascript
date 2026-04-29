//custom filter
const arr = [10,20,30,40,24,26];

arr.filtering=function(compare){
    const ans=[];
    for(let num of this){
        if(compare(num)){
            ans.push(num);
        }
    }
    return ans;
}

console.log(arr.filtering((num)=>num>25));