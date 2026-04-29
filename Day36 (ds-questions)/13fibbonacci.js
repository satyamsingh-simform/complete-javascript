//Q5.Fibonacci Number :sum of n is (n-1)+(n-2)
function fibbo(val){
    let a=0;
    let b=1;
    let temp=0;
    temp=val===0?a:b;
    for(let i=2;i<=val;i++){
        temp=a+b;
        a=b;
        b=temp;
    }
    return temp;
}
// console.log(fibbo(6));