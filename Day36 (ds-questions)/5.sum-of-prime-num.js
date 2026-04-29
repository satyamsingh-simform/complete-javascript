function checkPrimeNum(...num1){
    let sum=0;
    let j=0;
    while(j<num1.length){
        let count=0;
        for(let i=2;i<num1[j];i++){
            if(num1[j]%i==0){
                count++;
                break;
            }
        }
        if(!count){
            sum=sum+num1[j];
        }
        j++;
    }
    return sum;
}
let result= checkPrimeNum(4,6,8,5,7);
console.log(`sum:${result}`);


