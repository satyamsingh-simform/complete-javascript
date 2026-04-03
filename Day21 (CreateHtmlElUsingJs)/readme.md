<!-- Create Node -->
1: Create a Element
2: Create a Text Node
3: Create a Attribute Node

1.Create a Element //1.using appendChild(node) 
let el=document.createElement('li');       //el created
el.innerText="TS";                         //el ke andar text dal diye
let divs=document.getElementById('root');  //jis parent me isko dalna hai uska access le liye
divs.appendChild(el);                      //usse parent ke andar created el ko append kr diye



<!-- Accessing Attributes -->
1: getAttribute
2: setAttribute()
3: removeAttribute


<!-- Add Nodes to the DOM -->

1: appendChild(node)
   Adds a node as the last child of a parent.
2: append(node1,node2,...)
   Adds Multiple Node as the last child of a parent.
3: insertBefore(newNode, referenceNode)
4: prepend
   Adds a node as the first child of a parent.
5: replaceChild()
6: Using innerHTML
   Directly sets the HTML content of an element.
7: Using insertAdjacentHTML() or insertAdjacentElement():
   
beforebegin: Before the element itself.
afterbegin: Inside the element, before its first child.
beforeend: Inside the element, after its last child.
afterend: After the element itself.

8: removeChild(node) Homework
9: The .remove() method in JavaScript is used to remove an element from the 
   DOM (Document Object Model).



<!-- Practice on projects -->
