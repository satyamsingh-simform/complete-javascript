/*1.Event bubbling
    -child wale eventListner ko active krege to parent GrandParent(GP) tkk propagate hoga
        -order of printing hoga:-child parent GP
  2.Event Capturing  
    -or iska just ulta hota hai Event capturing
        -order of printing hoga:-GP parent child

  3.event deligation
    -instead of giving eventListener to all child apply on it's parent so that it become efficient  

*/


/*Problem with this code need to add eventListener to every button
const red = document.getElementById('red');
const blue = document.getElementById('blue');
const orange = document.getElementById('orange');
const green = document.getElementById('green');
const purple = document.getElementById('purple');

const body = document.querySelector('body');

red.addEventListener('click',()=>{
    body.style.backgroundColor = 'red';
})

blue.addEventListener('click',()=>{
    body.style.backgroundColor = 'blue';
})

orange.addEventListener('click',()=>{
    body.style.backgroundColor = 'orange';
})

green.addEventListener('click',()=>{
    body.style.backgroundColor = 'green';
})

purple.addEventListener('click',()=>{
    body.style.backgroundColor = 'purple';
})
*/


/*Problem with this code need to add eventListener to every button
const buttons = document.querySelectorAll('button');//node List of all button
const body = document.body;
console.log(buttons);

buttons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        body.style.backgroundColor = button.id;
    })
})
*/

// const root = document.getElementById('root');
// console.log(root);
// root.addEventListener('click',(event)=>{
//     // console.log(event.target.tagName)
//     console.log(event.target);
    
//     if(event.target.tagName === 'BUTTON')
//     document.body.style.backgroundColor = event.target.id;
// })



/*//this is not a good way to implement background changer 
let btn1=document.getElementById('red')
let btn2=document.getElementById('blue')
let btn3=document.getElementById('orange')
let btn4=document.getElementById('green')
let btn5=document.getElementById('purple')

btn1.addEventListener('click',()=>{
    document.body.style.backgroundColor='rgb(236, 126, 126)'
    // document.body.div.h1.backgroundColor='rgb(236, 126, 126)' //not allowed
    
})
btn2.addEventListener('click',()=>{
    document.body.style.backgroundColor='skyblue'
})
btn3.addEventListener('click',()=>{
    document.body.style.backgroundColor='rgb(143, 118, 71)'
})
btn4.addEventListener('click',()=>{
    document.body.style.backgroundColor='rgb(89, 151, 89)'
})
btn5.addEventListener('click',()=>{
    document.body.style.backgroundColor='rgb(169, 89, 169)'
})
*/
/*
//even this is not perfect bcz is consume lot of mem-so this can be solved by event bubbling
let btns=document.querySelectorAll('button');
btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        document.body.style.backgroundColor=btn.id;
    })
})
*/


//most efficient code for background changer using event deligation 
let div=document.getElementById('root')
div.addEventListener('click',(evt)=>{
    console.log(evt.target);//<button id="red" class="red">           //jo el(btn) se event triger hua hoga usko print krayega
    console.log(evt.target.tagName);//BUTTON   //tagname batayega ki o el konsa hai
    console.log(evt.target.id);//red
    console.log(evt.target.className);//red
    
    
    if(evt.target.tagName==='BUTTON')
    document.body.style.backgroundColor=evt.target.id;

})





