function camelCase(str){
   let arr=str.split(" ");
   console.log(arr); 
   for(let i=1;i<arr.length;i++){
        arr[i]=arr[i][0].toUpperCase()+arr[i].slice(1);
        console.log(arr[i]);
   }
   console.log(arr);
   return arr.join('');
}

let result=camelCase("my name is Satya");
console.log(result);

