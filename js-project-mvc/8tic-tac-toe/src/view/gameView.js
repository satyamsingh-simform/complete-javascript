// Responsibility: UI (DOM only)

// view/gameView.js

export const boxes = document.querySelectorAll('.box');
export const msg = document.querySelector('.msg');
export const restartBtn = document.getElementById('Restart');

export function celebrate() {
    confetti({
        particleCount: 150,
        spread: 80,
        origin: { y: 0.6 }
    });
}