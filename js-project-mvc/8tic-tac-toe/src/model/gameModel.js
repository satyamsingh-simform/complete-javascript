// Responsibility: data + business logic
//Application state
//Pure functions:


const gameState={
    turn='O',
    move=0,
}

let winArr=[
    [0,1,2],[3,4,5],[6,7,8],
    [0,3,6],[1,4,7],[2,5,8],
    [0,4,8],[2,4,6],
]

export function checkWinner(boxes) {
    for (let win of winArr) {        
        let pos1Val = boxes[win[0]];
        let pos2Val = boxes[win[1]];
        let pos3Val = boxes[win[2]];
        
        if (pos1Val != '' && pos2Val != '' && pos3Val != '') {
            if (pos1Val === pos2Val && pos1Val === pos3Val) {
                return pos1Val;
            }
        }
    }

    if (move === 8) return "TIE";

    return null;
}