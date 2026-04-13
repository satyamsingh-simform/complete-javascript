/*
let box=document.getElementById('container');

let turn="O";
box.addEventListener('click',(e)=>{
    console.log(e.target);
    if(turn=="O"){
        e.target.innerText='O';
        turn="X";
        e.target.disabled=true;
    }
    else{
        e.target.innerText='X';
        turn="O";
    }
})
*/

let boxes=document.querySelectorAll('.box');

let turn="O";
let arr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
boxes.forEach((box)=>{
    box.addEventListener('click',(e)=>{
        if(turn=="O"){
            box.innerText=turn;
            turn="X";
            box.style.pointerEvents = "none";
        }
        else{
            box.innerText=turn;
            turn="O";
            box.style.pointerEvents = "none";
        }        
    })
})

