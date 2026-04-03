
// document.body.addEventListener('click', function (e) {
//     const circle = document.createElement('div');
//     circle.className = 'circle';
    
//     const x = e.clientX;
//     const y = e.clientY;
//     circle.style.left = `${x - 25}px`;  
//     circle.style.top = `${y - 25}px`;   
  
   
//     const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3F033', '#8E44AD'];
//     circle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
  

//     const messages = ['Hi', 'Hello', 'Welcome', 'Hey there', 'Hola'];
//     circle.textContent = messages[Math.floor(Math.random() * messages.length)];
  
//     document.body.appendChild(circle);
  

//     setTimeout(() => {
//       circle.remove();
//     }, 5000);
//   });


/*
// document.body.addEventListener("click", (event)=>{
  
//   const circle = document.createElement('div');
//   circle.className = 'circle';
//   circle.textContent="Hi";
  
//   const x = event.clientX;
//   const y = event.clientY;

//   circle.style.left = `${x-25}px`
//   circle.style.top= `${y-25}px`


//   const color = ["red", "blue", "orange", "green","purple", "white","yellow", "wheat"];
//   circle.style.backgroundColor = color[Math.floor(Math.random()*color.length)];
//   document.body.appendChild(circle);

//   setTimeout(()=>{
//     circle.remove();
//   } ,5000)
// })
*/


document.addEventListener('mouseover', (e)=>{
  let div=document.createElement('div');
  div.className='circle';   //gives div el a class 'circle' 
  div.id='wow';
  document.body.appendChild(div);           //document.querySelector('body').appendChild(div);

//position changing
let x=e.clientX;
let y=e.clientY;
//div position is absolute so .left, .right 
div.style.left=`${x-25}px`;//height and width of div is 50 so -25 
div.style.top=`${y-25}px`;

//background color and text
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F3F033', '#8E44AD'];
  const text = ['hi', 'you', 'good', 'hello', 'forever'];
  let index=Math.floor(Math.random()*colors.length);
  div.style.backgroundColor=colors[index]
  div.innerText=text[index];
  div.style.color='black'

  setTimeout(()=>{
    div.remove();//to remove the created element
  },5000)
})


/*direct way to add class

  1.classList.add()
    let timer = document.getElementById("timer");
    timer.classList.add("timer"); //best method to give className to any el            

  2.classList.toggle()
    Adds class if not present, removes if present.
    timer.classList.toggle("timer");  //best method to give className to any el

  3.Using className
    timer.className = "timer";
    This replaces all existing classes.
    previous classes are removed.  

  4.Using setAttribute()
    timer.setAttribute("class","timer");
    This also replaces existing classes.
    equivalent to:  timer.className = "timer";  
  
  
    Method	            Removes existing classes?
    classList.add()	        ❌ No
    classList.toggle()	    ❌ No
    className	            ✅ Yes
    setAttribute()	        ✅ Yes
*/







