// main.js

import {state, shuffleEmojis, resetFunc, totalMove, checkWin} from './game-data.js';

import {all_P, reset, moveDetail, time, msg} from './game-ui.js';

window.addEventListener('DOMContentLoaded', () => {

    alert('you have 60 second to complete the game');

    //data layer
    let emojiShufle = shuffleEmojis();

    all_P.forEach((p,index)=>{
        p.innerText=emojiShufle[index];
    })

    // click logic
    all_P.forEach((p)=>{
        p.addEventListener('click',()=>{

            if(state.lock) return;
            if(p===state.first) return;//same p click avoided

            p.classList.add('flipped')

            if(!state.first){
                state.first=p;
            }
            else{
                state.second=p;
                state.lock=true;

                if(state.first.innerText===state.second.innerText){
                    state.first.classList.add('matched');
                    state.second.classList.add('matched');
                    resetFunc();
                    checkWin(all_P, clear, msg);
                    totalMove(moveDetail);
                }
                else{
                    setTimeout(()=>{
                        state.first.classList.remove('flipped');
                        state.second.classList.remove('flipped');
                        resetFunc();
                        totalMove(moveDetail);
                    },1000)
                }
            }
        })
    })

    reset.addEventListener('click',()=>{
        location.reload();
    })

    // timer
    let clear=setInterval(()=>{
        state.sec++;
        time.innerHTML=`<strong>Total time:${state.sec}</strong>`;
        if(state.sec==60){
            all_P.forEach((p)=>{
                p.classList.add('disabled');
            });
            msg.innerHTML=`
                <p class="try-again">Try again</p>
                <strong>Time limit hit</strong>
            `
            clearInterval(clear)
        }
    },1000)

});