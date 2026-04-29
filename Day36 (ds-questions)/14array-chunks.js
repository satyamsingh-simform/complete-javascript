//Q6.Array Chunking :convert 1d array to 2d array no.of size as el in each array
function arrChunk(arr,size){
    let result=[];
    for(let i=0;i<arr.length;i=i+size){
        let subArr=arr.slice(i,i+size);
        console.log(subArr);
        result.push(subArr);
    }
    console.log(result);
}
arrChunk([1,2,3,4,5],2)