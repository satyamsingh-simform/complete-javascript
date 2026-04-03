/* What is the DOM
    -DOM (Document Object Model) is a tree-like structure that represents all the HTML elements of a web page.
        The DOM is an object-based representation of the entire HTML document.
        It’s like a JavaScript object that mirrors all HTML elements and tags in a structured, tree-like form.
    -The DOM is created by the browser when it loads an HTML page.
    -Every HTML tag becomes a node in this tree — like elements, text, attributes, etc.
    
  JavaScript  
    -JS file me jo v likhege o console me dikhega
        So yeah, when you're using Node.js, you're running JavaScript outside the browser — 
        and everything like console.log() goes directly to the terminal. Pretty cool, right?
    -JS help to manipulate web page dynamically, or ye krne ke liye DOM ka help lagta hai
    -JavaScript controls, manipulates, and interacts with the DOM to make web pages dynamic and interactive.

  html class ko Js me className se replace krte hai kyuki js me class keyword hai isse confusion se bachne ke liye
    -class Person{}
        const obj = document.getElementById("first");
        obj.className = "Mohan";
*/



//1.Accessing Element 
//a.Accessing by ID  //Method: document.getElementById(id) //it will return single element
let h1=document.getElementById('second'); //variable h1 me jiska id first hai uska access aa gaya aab h1 se usko manipulate kr skte hai 
//Read
console.log(h1.innerHTML);       //Topics Covered so far <strong>love</strong>
console.log(h1.textContent);     //Topics Covered so far    
console.log(h1.innerText);       //Topics Covered so far
//Update
h1.innerText="I am good how r u" //ye uska content ko change kr ke ye kr diya okh

/*
//b: Accessing by Class Name  //Method: document.getElementsByClassName(className) //it will return html Collection of all el with same className
let clas=document.getElementsByClassName('header1');   //document is a browser-provided object that represents the HTML DOM.

console.log(clas);
*/


/*For of loop/Traditional loop can be used to iterate over html collection
for(let cont of clas){
    console.log(cont.innerText);
}
*/
/*
for(let cont of clas){
    cont.innerText='Updating content using innerText'
}
*/

/*Html Collection pe forEach is not used to iterate
clas.forEach((num)=>{
    console.log(num);
})
*/
/*Html Collection pe for in loop is not used to iterate
for(let num in clas){
    console.log(num.innerText);
    
}
*/

