/*direct way to add class

  1.classList.add()
    let timer = document.getElementById("timer");
    timer.classList.add("timer");

  2.classList.toggle()
    Adds class if not present, removes if present.
    timer.classList.toggle("timer");

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


// let h1=document.getElementById('timer');

// let fun=setInterval(()=>{
//     let h1=document.querySelector('h1')
//     h1.innerText=new Date().toLocaleTimeString();
// },1000)
// fun();



//Khud se Timer banaye
function setTimer(){
    let timer=document.getElementById("timer");    
    let now=new Date();
    let time=now.toLocaleTimeString();
    timer.innerHTML=time;

    //This is called inline style via JavaScript.//it is applied at each call so don't do styling here apply it outside the setInterval
    /*
    timer.style.fontSize = "150px";
    timer.style.display = "flex";
    timer.style.backgroundColor= "pink"
    timer.style.height = "";
    timer.style.justifyContent = "center";
    timer.style.alignItems = "center";

    let p=document.querySelector('p');
    p.style.fontSize='5rem';
    p.style.backgroundColor='salmon'
    */
}
setTimer();
setInterval(setTimer,1000);

    let timer=document.getElementById("timer");    
    timer.style.fontSize = "150px";
    timer.style.display = "flex";
    timer.style.backgroundColor= "pink"
    timer.style.height = "";
    timer.style.justifyContent = "center";
    timer.style.alignItems = "center";

    let p=document.querySelector('p');
    p.style.fontSize='5rem';
    p.style.backgroundColor='salmon'



















/*NodeList & Html collection
Use NodeList when working with querySelectorAll() (more flexible, supports forEach)
   Returned by:querySelectorAll, childNodes
   ncludes:All node types (elements, text, comments...)


Use HTMLCollection with older DOM methods, but you'll need loops supports for of loop & traditional loop
   Returned by:getElementsByClassName, getElementsByTagName, forms, etc.
   Includes:Only HTML elements
*/




//C.Accessing by CSS Selectors:
/*
const id1 = document.querySelector('#first');
id1.innerHTML = "Hello Money";
const class1 = document.querySelector('.header2');
console.log(class1);
// class1.innerText='one'
class1.style.backgroundColor = "pink";
*/
//How to iterate over NodeList
/*//1st way forEach
const obj = document.querySelectorAll('.header1')
console.log(obj);
obj.forEach((val)=>{
    console.log(val);
    console.log(val.innerText);
    // val.style.backgroundColor="red";
})
*/
/*//2nd way for of
let obj=document.querySelectorAll('.header1')
for(let val of obj){
    console.log(val)
    val.style.backgroundColor="purple"
}
*/
/*3rd way traditional
const obj = document.querySelectorAll('.header1')
for(i=0;i<obj.length;i++)
    obj[i].style.color = "red";
*/
//Convert NodeList into array
/*
let obj=document.querySelectorAll('.header1');
console.log(obj);
let arr=Array.from(obj)
console.log(arr);
for(let val of arr){
    console.log(val.innerText);
}
// arr.forEach((num)=>{
//     console.log(num.textContent);
// })
*/



//d.Accessing by Tag Name  // Returns a live HTMLCollection of all elements with the specified tag name (e.g., div, p, a)
/*
const obj = document.getElementsByTagName('h1');
let team = document.getElementsByTagName('li');
*/
// How to iterate over HTMLCollection
/*//3rd way traditional
let lis=document.getElementsByTagName('lis')
console.log(lis);
for(let i=0;i<lis.length;i++){
    lis[i].style.color = "green";
}
*/
/*//2nd way for of
let lis=document.getElementsByTagName('li')
console.log(lis);
for(let val of lis)
    console.log(val.innerText);
    // val.style.color = "red";
*/
/*//forEach ispe aise work krega phele arrar me convert krna prega
let lis=document.getElementsByTagName('li')
console.log(lis);
Array.from(lis).forEach((val)=>{
console.log(val);
console.log(val.innerText);

 })
*/

//diff bw HTMLCollection & NodeList
/*
HTMLCollection:-it returns only el Node (id and class)
NodeList:-it return both el node + text Node
*/

//e.Accessing Using Relationships
/* i.Parent Node:
const list = document.querySelector('li');
console.log(list.parentElement);//both will return the immediate parent
console.log(list.parentNode);
const divss = document.querySelector('#first');
console.log(divss.parentElement);//return div(immediate parent)
const divs = document.querySelector('h1');//querySelector me tag name v deke access kr skte hai
console.log(divs.parentElement);//return div(immediate parent)
*/
/*ii: Child Nodes   iii.First and Last Child    iV.Sibling Nodes:
const par = document.querySelector('ul');
//console.log(par);
// console.log(par.childNodes);  //return NodeList(textNode+el Node)            //Access all child nodes of an element.
// console.log(par.children);    //return HTMLCollection      //Access all child nodes of an element.

console.log(par.firstChild);            //return textNode(isme empty space ko v text node ke trh consider krega)
console.log(par.firstElementChild);     //return 1st element
console.log(par.lastChild);
console.log(par.lastElementChild);

console.log(par.nextElementSibling);
console.log(par.previousElementSibling); //return h2
*/


//diff bw //innerHTML  //textContent  //innerText
/*
//<h1 id="first" class="header1">Hello Coder <strong style="display: none;">Army</strong></h1>
let acc=document.querySelector('h1');
console.log(acc.innerHTML);   //Hello Coder <strong style="display: none;">Army</strong>    //andar ka html tag ko v show kra deta hai
console.log(acc.textContent); //Hello Coder Army                                            //ye display none wale ko v show krega
console.log(acc.innerText);   //Hello Coder                                                 //jiska display none hai usko show nhi krega 
*/

/*
let h1s=document.getElementsByClassName('header1');
console.log(h1s);

let h2=document.querySelectorAll('h1');
console.log(h2);
*/















