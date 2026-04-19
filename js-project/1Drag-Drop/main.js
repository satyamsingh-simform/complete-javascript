let items=document.querySelectorAll('.box');
let leftBox=document.querySelector('.left');
let rightBox=document.querySelector('.right');

/*
Why e.preventDefault() is required in dragover
    -By default, most elements DO NOT allow dropping, Calling it removes that block, so drop event can fire.
    if you skip dragover completely:-
    This element does NOT accept drops
        Browser assumes:
            So it:
            blocks drop
            never triggers drop event
*/

items.forEach((item)=>{
    item.addEventListener('dragstart',(e)=>{
        let selectedItem=e.target;
        console.log(selectedItem);
        
        rightBox.addEventListener('dragover',(e)=>{
            e.preventDefault();
        })
        rightBox.addEventListener('drop',()=>{
            rightBox.appendChild(selectedItem);
            selectedItem=null;
        })

        leftBox.addEventListener('dragover',(e)=>{
            e.preventDefault();
        })
        leftBox.addEventListener('drop',()=>{
            leftBox.appendChild(selectedItem);
            selectedItem=null;
        })
    })
})



/*efficient way
let selectedItem = null;

items.forEach((item) => {
    item.addEventListener('dragstart', (e) => {
        selectedItem = e.target;
    });
});

[rightBox, leftBox].forEach((box) => {
    box.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    box.addEventListener('drop', () => {
        if (selectedItem) {
            box.appendChild(selectedItem);
            selectedItem = null;
        }
    });
});

*/