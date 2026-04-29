//CountDown Timer for IPL(2026)
let dateI1=new Date();
let dateI2=new Date("2026-03-28T19:30:00");
console.log(dateI1);

timeLeft=(dateI2-dateI1);
console.log(timeLeft);

let dayLeft=Math.floor(timeLeft/(1000*60*60*24));
let hourLeft=Math.floor(timeLeft/(1000*60*60)%24);
let minLeft=Math.floor(timeLeft/(1000*60)%60);
let secLeft=Math.floor(timeLeft/(1000)%60);
let millisecLeft=Math.floor(timeLeft%60);

console.log(`Exact time left is=Day:${dayLeft} hours:${hourLeft} min:${minLeft} sec:${secLeft} millisec:${millisecLeft}`);
