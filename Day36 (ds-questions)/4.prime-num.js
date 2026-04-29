//Check if number is prime or not
function checkPrimeNum(num1){
    for(let i=2;i<num1;i++){
        if(num1%i==0){
            return 0;
        }
        return 1;
    }
}
let result= checkPrimeNum(17);
if(result){
    console.log("prime number");
}
else{
    console.log("not a prime number"); 
}
