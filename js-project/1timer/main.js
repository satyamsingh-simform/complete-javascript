
function timer(){
    let p=document.querySelector('p');
    let date=new Date().toLocaleTimeString();
    // console.log(date);
    p.innerHTML=date;
}
timer();
setInterval(timer,1000);