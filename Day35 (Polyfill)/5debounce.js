function debounce(fn,delay){
    let timer;
    return function(...args){
        clearTimeout(timer);

        timer=setTimeout(()=>{
            fn(...args)
            // fn.apply(this,args)
        },delay)
    }
}

function search(val) {
  console.log("Searching:", val);
}

const debouncedSearch=debounce(search, 500);
// simulate typing
debouncedSearch("h");
debouncedSearch("he");
debouncedSearch("hel");







function throttle(fn,delay){
    let lastTime=0;
    return function(...arg){
        let now=new Date();
        if(now-lastTime>delay){
            lastTime=now;
            fn(...arg)
        }
    }
}
function log(msg) {
  console.log("Called:", msg);
}

const throttled = throttle(log, 1000);

setInterval(() => {
  throttled("hello");
}, 200);