// <li>TS</li>
/*
// Created an element
function attach(content){
    const element = document.createElement('li');
    element.innerHTML = content;

    const element2 = document.createElement('li');
    element2.innerHTML = content+"V2.0";

    const parent = document.getElementById("root");
    // parent.appendChild(element);
    parent.append(element,element2);
};

attach("TS");
attach("React");
attach("Node");
*/

//<!-- Create Node -->

/*1.Create a Element //1.using appendChild(node) //2.append(node1,node2,...)
let el=document.createElement('li');       //el created
el.innerText="TS";                         //el ke andar text dal diye
let divs=document.getElementById('root');  //jis parent me isko dalna hai uska access le liye
divs.appendChild(el);                      //usse parent ke andar created el ko append kr diye
*/

/*create fn of 1.Create a Element //1.using appendChild(node) //2.append(node1,node2,...)
function attachEl(tag, content){
    let el=document.createElement(tag);
    el.innerHTML=content;
    let el2=document.createElement(tag);
    el2.innerHTML=content+"v2";
    
    let paren=document.getElementById('root');
    // paren.appendChild(el,el2);//single el ko append kra skte hai isse
    paren.append(el,el2); //multiple el ko append kra skte hai isse
}
attachEl('li', "TS");
// attachEl('li', "I am inside div el");
*/

//2.Create a TextNode(jisme sirf text likha ho bina kisi tag ke andar )
/*
const element = document.createTextNode("Hello Coder Army");
const parent = document.getElementById("root");
parent.append(element);
*/

//3.Create a Attribute Node //2.setAttributeNode()
/*//access to first list
const el = document.createAttribute("id");
el.value = "first";
const list = document.querySelector('li');  //access to first list
list.setAttributeNode(el);
let lis=document.getElementById('first');   //acces kiye avi jo attribute set kiye usse
lis.style.backgroundColor='red'
*/
/*//access to second list
const el = document.createAttribute("id");
el.value = "first";
const parent = document.getElementById("root"); //access to second list
console.log(parent);
parent.children[1].setAttributeNode(el);
*/


//<!-- Accessing Attributes -->
/*
const element  = document.getElementById("root");
//1.getAttribute()
console.log(element.getAttribute("id"));    //root
console.log(element.getAttribute("class")); //mohan
console.log(element.getAttribute("style")); //null
//2.setAttribute()
element.setAttribute("class", "header");
element.setAttribute("class2", "Roahn");
//3.removeAttribute
element.removeAttribute("class2");
*/



//<!-- Add Nodes(to sase phele parent ka access lena hoga tvi to pata chalega ki attach kaha krna hai) to the DOM -->
/*4: prepend 2: append() 3: insertBefore(newNode, referenceNode) 5: replaceChild(newNode, referenceNode)
const parent = document.getElementById("root");
const element = document.createElement('li');
element.innerHTML = "TS";

// parent.append(element);  
// parent.prepend(element);

const child2 = parent.children[1];
// parent.insertBefore(element,child2);
// parent.replaceChild(element,child2);
*/

/*//6: Using innerHTML
const parent = document.getElementById("root");
// parent.innerHTML ="<li>TS</li>";
// parent.innerHTML =parent.innerHTML+ "<li>TS</li>";  //parent.innerHTML += "<li>TS</li>";
parent.innerHTML = "<li>TS</li>"+parent.innerHTML; 
*/

/*//7: Using insertAdjacentHTML() or insertAdjacentElement():
const parent = document.getElementById("root");
const element = document.createElement("div");
element.innerHTML = "Hello Coder Army";
// parent.insertAdjacentElement("beforebegin", element);
parent.insertAdjacentElement("afterend", element);
*/


// Delete node or element
/*
// const element = document.querySelector('li');
// element.remove();
*/






/*
let h1=document.createElement("li");
h1.className="first";
h1.id="sec"
h1.innerText="abc hello billa";
let ul=document.getElementById('root');
ul.prepend(h1);
*/












