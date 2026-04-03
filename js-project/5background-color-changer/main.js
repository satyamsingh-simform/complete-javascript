
/*without event delegation
let btnRed=document.getElementById('red');
let btnSkyBlue=document.getElementById('sky-blue');
let btnYellow=document.getElementById('yellow');
let btnPurple=document.getElementById('purple');
let btnOrange=document.getElementById('orange');

console.log(btnRed);
//getElementsByTagName('body') returns an HTMLCollection (array-like), not a single element.
let body=document.getElementsByTagName('body')[0];//To access the actual <body> element:
// let body=document.querySelector('body');//is prefered to use,it will return single elements
console.log(body);


btnRed.addEventListener('click',(e)=>{
    body.style.backgroundColor='red';
})

btnSkyBlue.addEventListener('click',()=>{
    body.style.backgroundColor='blue'
})
btnYellow.addEventListener('click',()=>{
    body.style.backgroundColor='yellow'
})
btnPurple.addEventListener('click',()=>{
    body.style.backgroundColor='purple'
})
btnOrange.addEventListener('click',()=>{
    body.style.backgroundColor='Orange'
})
*/

//with event delegation
let div=document.getElementById('container');
console.log(div);

div.addEventListener('click',(evt)=>{
    console.log(evt.target);//<button id="red" class="red"> 
    console.log(evt.target.id);
    
    if(evt.target.tagName==='BUTTON'){
        document.body.style.backgroundColor=evt.target.id;
    }
})