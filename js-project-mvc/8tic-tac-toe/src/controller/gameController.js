// Responsibility: control flow (brain)

import { boxes, msg, restartBtn, celebrate } from '../view/gameView.js';
import { turn, move, checkWinner } from '../model/gameModel.js';
import * as model from '../model/gameModel.js';

let board = Array(9).fill("");

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {

        if (box.innerText !== "") return;

        if (model.turn === 'O') {
            box.innerText = 'O';
            board[index] = 'O';
            model.turn = 'X';
        } else {
            box.innerText = 'X';
            board[index] = 'X';
            model.turn = 'O';
        }

        box.style.pointerEvents = 'none';

        let result = checkWinner(board);

        if (result) {
            if (result === "TIE") {
                msg.innerText = 'GAME TIE';
            } else {
                msg.innerText = `${result} WON`;
                celebrate();
            }
        }

        model.move++;
    });
});

restartBtn.addEventListener('click', () => {
    window.location.reload();
});