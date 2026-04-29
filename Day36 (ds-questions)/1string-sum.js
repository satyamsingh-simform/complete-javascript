function addNumAsString(num1, num2){
    let i=num1.length-1;
    let j=num2.length-1;
    let result='';
    let carry=0;

    while(i>=0 || j>=0){
        let sum=0;
        let digit1=0,digit2=0;
        if(i>=0) digit1=Number(num1[i]);
        if(j>=0) digit2=Number(num2[j]);

        sum=digit1 + digit2 + carry;
        result=(sum%10)+result;     // % 10 gives unit digit  // divide by 10 remove unit digit
        carry=Math.floor(sum/10);   //math.floor bcz need integer part only
        i--;
        j--;
    }
    if(carry>0){
        result=carry+result;        //order is very imp
    }
    return result;
}
console.log(addNumAsString("569", "67899"));