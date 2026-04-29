//custom Flatten Array
function flatArray(arr){
    let res=[];
    for (let i=0; i<arr.length; i++) {
        let value=arr[i];

        if(Array.isArray(value)){
            let flat=flatArray(value);
            res=res.concat(flat);
        } 
        else{
            res.push(value);
        }
    }
    return res;
}
console.log(flatArray([1,[2,3],[4,[5,6]],7]));