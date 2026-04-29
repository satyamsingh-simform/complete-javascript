let binaryNum=101;
let pow=1;//2^0=1 2^1=2 2^2=4 //bcz 
let ans=0;

while(binaryNum>0){
    let binary_digit=(binaryNum%10)*pow;//to get unit digit
    ans=ans+binary_digit;
    binaryNum=Math.floor(binaryNum/10);//to remove unit digit
    pow=pow*2;
}
console.log(ans);