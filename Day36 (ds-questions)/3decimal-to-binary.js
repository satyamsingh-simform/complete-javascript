let decimalNum=10;
let pow=1;//10^0, 10^1, 10^2, 10^3
let ans=0;

while(decimalNum>0){
    let digit=(decimalNum%2)*pow;//remainder
    console.log(digit);
    ans=ans+digit;
    decimalNum=Math.floor(decimalNum/2);
    pow=pow*10;
}