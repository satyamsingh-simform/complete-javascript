// import { thriceClick } from "https://cdn.jsdelivr.net/gh/satyamsingh-simform/utility-javascript@main/script.js";



let button=document.getElementById('btn');


// function thriceClick(element, callback){
//     let count=0;
//     element.addEventListener('click',(event)=>{
//         count++;
//         setTimeout(()=>{
//             count=0;
//         },1000)
//         if(count==3){
//             callback(event);
//         }
//     })
// }

// thriceClick(button,(e)=>{
//     // alert('clicked thrice event');
//     console.log(e.target);
// })


function thriceClick(element,callback){
    let count=0;
    let timeFirst=0;
    element.addEventListener('click',(e)=>{
        let timeNow=Date.now();
        if(timeNow-timeFirst<=1000){
            count++;
        }
        else{
            count=1;
        }
        timeFirst=timeNow;
        if(count==3){
            callback(e);
            count=0;
        }
    })
}
thriceClick(button,(e)=>{
    console.log(e.target);
})


/*
let button=document.getElementById('btn');

function longPress(el,callback){
    let start=0;
    let end=0;
    console.log(end-start);

    el.addEventListener('mousedown',()=>{
        start=performance.now();
        console.log(start);
    })
    el.addEventListener('mouseup',()=>{
        end=performance.now();
        console.log(end);
        if(end-start>200){
            console.log('duration:',end-start);
            callback();
        }
    })
}

longPress(button, ()=>{
    alert('long press implemented');
})
*/