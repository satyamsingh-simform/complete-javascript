// game-data.js

export const state={
    first: null,
    second: null,
    lock: false,
    move: 0,
    sec: 0
};

export let arrEmojis = ["😀","😀","🥳","🥳","🎁","🎁","🎊","🎊","🎈","🎈","👏","👏","🏆","🏆","🐇","🐇"];

export function shuffleEmojis(){
    return arrEmojis.sort(() => (Math.random() - 0.5));
}

export function resetFunc(){
    state.first=null;
    state.second=null;
    state.lock=false;
}

export function totalMove(moveDetail){
    state.move++;
    moveDetail.innerHTML=`<strong>Total Move:${state.move}</strong>`;
}

export function checkWin(all_P, clear, msg){
    let count=0
    all_P.forEach((p)=>{
        if(p.classList.contains('matched')){
            count++
        }
    })
    if(count==16){
        clearInterval(clear);
        msg.innerHTML=`<strong class="won">YOU WON</strong>`
        console.log(`you took total ${state.move} move to win this game`);
        console.log('winner');
    }
}