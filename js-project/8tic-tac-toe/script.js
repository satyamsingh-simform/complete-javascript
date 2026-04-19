/*
If you are accessing an element via querySelectorAll, then innerText will not work because it returns a NodeList
To make innerText work, you have to target each element from nodeList
For targeting each element, you must use looping
querySelector does not return nodeList
*/
let boxes=document.querySelectorAll('.box');
let msg=document.querySelector('.msg');
// let p=document.getElementById('msg')
// console.log(msg);

let turn="O";
let move=0;
let winArr=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
]
/*
forEach → runs once → attaches listeners
Click → triggers only that element’s listener
No loop happens during click
*/


function checkWinner(){
    for(let win of winArr){        
        let pos1Val=boxes[win[0]].innerText;
        let pos2Val=boxes[win[1]].innerText;
        let pos3Val=boxes[win[2]].innerText;
        
        if(pos1Val!='' && pos2Val!='' && pos3Val!=''){
            if(pos1Val===pos2Val && pos1Val===pos3Val){
                console.log('you won');
                celebrate(); // 🎉 ADD THIS
                msg.innerText=`${pos1Val} WON`;      
            }
        }
    }
    if(move===8){
        console.log('game tie');
        msg.innerText='GAME TIE';
    }
}

boxes.forEach((box)=>{
    box.addEventListener('click',(e)=>{
        if(turn==='O'){
            box.innerText='O';
            turn='X';
            box.style.pointerEvents='none'
            checkWinner();
            move++;
        }
        else{
            box.innerText='X';
            turn='O';
            box.style.pointerEvents='none'
            checkWinner()
            move++;
        }
    })
    
})

document.getElementById('Restart').addEventListener('click',()=>{
    window.location.reload();
})


function celebrate() {
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
    });
}