//Q4.Factorial :5!=5*4*3*2*1
function fact(val){
    let result=1;
    for(let i=val;i>=1;i--){
        result=result*i;
    }
    console.log(`the factorial of ${val} :${result}`);
}
fact(5);