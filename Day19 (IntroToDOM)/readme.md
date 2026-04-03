DOM:Document object Model
  -The DOM (Document Object Model) is a way to represent a web page in object, so that programs(like JavaScript) can      
   interact with it.

  -document is a built-in JavaScript object that represents the entire web page (HTML document) loaded in the browser.


* A browser takes your HTML document and turns it into the DOM.
With the object model, JavaScript gets all the power it needs to create dynamic HTML:

1: JavaScript can change all the HTML elements in the web page
2: JavaScript can change all the HTML attributes in the web page
3: JavaScript can change all the CSS styles in the web page
4: JavaScript can remove existing HTML elements and attributes
5: JavaScript can add new HTML elements and attributes
6: JavaScript can react to all existing HTML events in the web page
7: JavaScript can create new HTML events in the web page


Use NodeList when working with querySelectorAll() (more flexible, supports forEach)
   Returned by:querySelectorAll, childNodes
   ncludes:All node types (elements, text, comments...)


Use HTMLCollection with older DOM methods, but you'll need loops supports for of loop & traditional loop
   Returned by:getElementsByClassName, getElementsByTagName, forms, etc.
   Includes:Only HTML elements


*********************************1: Accessing Element**********************************

1: Accessing Element(html tag & el):so that it can be dynamically manipulated by js

a: Accessing by ID:
   Method: document.getElementById("id")
   Description: Retrieves a single element with the specified id attribute.
   Returns a single element with the matching id.

b: Accessing by Class Name:
   Method: document.getElementsByClassName('className')
   Description: Returns a live HTMLCollection(it works similar to array) of all elements with the specified class name.

Day20
c: Accessing by CSS Selectors:
   i: Single Element:
      Method: document.querySelector("selector")
      Description: Returns the first element matching the specified CSS selector.
    
    ii: Multiple Elements:
        Method: document.querySelectorAll("selector")
        Description: Returns a static NodeList of all elements matching the specified CSS selector.
                   : Can be looped through using forEach(). 

d: Accessing by Tag Name
   Method: document.getElementsByTagName("tagName")
   Description: Returns a live HTMLCollection of all elements with the specified tag name (e.g., div, p, a).


e: Accessing Using Relationships
   i: Parent Node:
   Method: element.parentNode or element.parentElement
   Description: Access the immediate parent of an element.

   ii: Child Nodes:
   Method: element.childNodes (includes text nodes) or element.children (only element nodes)
   Description: Access all child nodes of an element.

   iii: First and Last Child:
   Methods: element.firstChild, element.lastChild, 
   element.firstElementChild, element.lastElementChild

   iV: Sibling Nodes:
   Methods: element.nextSibling, element.previousSibling
   Element Siblings: element.nextElementSibling, 
   element.previousElementSibling



*********************************2:Read & Update content of Html el**********************************

2.innerHTML, textContent, and innerText properties of DOM elements.
   -used in JavaScript to read or update the content of HTML elements, but each works a little differently.

a.innerHTML 
b.textContent
c.innerText 

<h1 id="first" class="header1">Hello Coder <strong style="display: none;">Army</strong></h1>
let acc=document.querySelector('h1');

//andar ka html tag ko v show kra deta hai
console.log(acc.innerHTML);   //Hello Coder <strong style="display: none;">Army</strong>    

//jiska display none hai usko show nhi krega 
console.log(acc.innerText);   //Hello Coder                                                 


//ye display none wale ko v show krega
console.log(acc.textContent); //Hello Coder Army      


