/*let boxes = document.querySelectorAll('.box');
let score = document.getElementById('score');

// actual values
let values = ["1", "1", "2", "2"];

let firstValue = null;
let secondValue = null;
let scoreValue = 0;

// hide all values initially
boxes.forEach((box) => {
    box.innerText = "click me to check";
});

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {

        // show value
        box.innerText = values[index];

        if (firstValue === null) {
            firstValue = values[index];
        } else {
            secondValue = values[index];

            // compare
            if (firstValue === secondValue) {
                scoreValue++;
                score.innerText = "Score: " + scoreValue;
            }

            // reset
            firstValue = null;
            secondValue = null;
        }
    });
});
*/

let boxes = document.querySelectorAll('.box');
let score = document.getElementById('score');
let winner = document.getElementById('win');


let values = ["1", "1", "2", "2"];

let firstBox = null;
let secondBox = null;
let scoreValue = 0;
let count=0;

boxes.forEach((box) => {
    box.innerText = "?";
});

boxes.forEach((box, index) => {
    box.addEventListener('click', () => {

        // ignore if already matched
        if (box.classList.contains('matched')) return;

        box.innerText = values[index];

        if (firstBox === null) {
            console.log("box",box);
            firstBox = box;
        } else {
            console.log(box);
            secondBox = box;

            // same box click
            if (firstBox === secondBox) return;

            let firstValue = values[[...boxes].indexOf(firstBox)];
            let secondValue = values[index];

            if (firstValue === secondValue) {
                scoreValue++;
                score.innerText = "Score: " + scoreValue;
                checkWinner();
                // mark matched
                firstBox.classList.add('matched');
                secondBox.classList.add('matched');
            }

            firstBox = null;
            secondBox = null;
        }
        
    });
});
function checkWinner(){
    boxes.forEach((box)=>{
        console.log(count);
        if(box.classList.contains('matched')){
            count++;
            console.log(count);
        }
        if(count==2){
            winner.innerHTML='<h3>You WON</h3>'
            console.log(count);

        }
    })
}
