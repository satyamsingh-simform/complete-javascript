
<!-- Corrected Hierarchy -->
window
  ├── Global (JS variables & functions)
  │     ├── var, function  ✅ (attached to window)
  │     ├── let, const ❌ (not attached)
  │
  ├── document (DOM root)
  │     └── html (document.documentElement)
  │           ├── head
  │           └── body   ✅ (child of html)
  │                 ├── div
  │                 ├── p
  │                 └── ...
  │
  ├── location
  ├── navigator
  ├── history
  └── screen
  └── innerHeight
  └── innerWidth

<!-- What DOM actually does -->
According to the (DOM), every HTML tag is an object. The text inside a tag is an object as well.
Browser converts HTML → DOM (object tree)
Each element becomes a JavaScript object (node)
JS can manipulate objects
You're modifying an object property, not raw HTML
Flow:HTML → Browser parses → DOM (objects) → JS modifies → Page updates

<!-- BOM (Browser Object Model) -->
BOM → handles browser features
DOM → handles HTML page (content)

window.location.href = "https://google.com"
window.navigator.userAgent // browser info

<!-- Everything in HTML, even comments, becomes a part of the DOM. -->
there’s a rule – if something’s in HTML, then it also must be in the DOM tree.

<!-- type of node -->
document – the “entry point” into DOM.
element nodes – HTML-tags.
text nodes(#) – contain text.
comments node(#) – sometimes we can put information there, it won’t be shown, but JS can read it from the DOM.


<!-- The topmost tree nodes are available directly as document properties: -->
<html> = document.documentElement
<body> = document.body
<head> = document.head


<!-- 1. For ALL nodes (includes text, comment, elements) -->
parentNode
👉 Direct parent node (can be element, document, etc.)
childNodes
👉 All child nodes (includes text + elements + comments)
firstChild
👉 First child node (can be text node like whitespace)
lastChild
👉 Last child node
previousSibling
👉 Previous node at same level (can be text)
nextSibling
👉 Next node at same level

<!-- 2. For ELEMENT nodes only -->
parentElement
👉 Parent only if it's an element (else null)
children
👉 Only child elements (ignores text nodes)
firstElementChild
👉 First child that is an element
lastElementChild
👉 Last child element
previousElementSibling
👉 Previous element (ignores text)
nextElementSibling
👉 Next element


<!-- Don’t use for..in to loop over collections -->
<!-- We can use for..of to iterate over it: -->


<!-- Searching: getElement*, querySelector* -->
getElementById = safe
window.id = shortcut but not reliable
window.id if we access the element → is it global id
Global id = using element id as a global variable (window.id), which is unsafe and not recommended

elem.querySelectorAll(css) returns all elements inside elem matching the given CSS selector
elem.querySelector(css) returns the first element for the given CSS selector.


<!-- The “nodeType” property -->We can use it to see if a node is a text or an element node
The nodeType property provides one more, “old-fashioned” way to get the “type” of a DOM node.
It has a numeric value:
  -elem.nodeType == 1 for element nodes,
  -elem.nodeType == 3 for text nodes,
  -elem.nodeType == 9 for the document object,

<!-- Is there any difference between tagName and nodeName? -->
The tagName property exists only for Element nodes.
The nodeName is defined for any Node:
  -for elements it means the same as tagName.
  -for other node types (text, comment, etc.) it has a string with the node type.


<!-- innerHTML: the contents -->
<!-- outerHTML: full HTML of the element -->
Compare clearly
<div id="box">Hi</div>
innerHTML
box.innerHTML = "<p>Hi</p>";

✔ Keeps <div>
✔ Changes inside

outerHTML
box.outerHTML = "<p>Hi</p>";

❌ Removes <div>
✔ Replaces whole element

<!-- interview -->
let elem = document.getElementById("box");
elem.outerHTML = "<p>New</p>";
console.log(elem); 
👉 elem still points to old removed element
<!-- Reason -->
JS variables store reference to object
outerHTML creates new object
Old reference is not auto-updated

<!-- textContent: pure text -->
The textContent provides access to the text inside the element: only text, minus all <tags>.


<!-- DOM nodes are regular JavaScript objects. We can alter them. -->
For instance, let’s create a new property in document.body
  document.body.myData = {
    name: 'Caesar',
    title: 'Imperator'
  };
  alert(document.body.myData.title); 

We can add a method as well

<!-- HTML attributes -->
if an attribute is non-standard, there won’t be a DOM-property for it
When a standard attribute changes, the corresponding property is auto-updated

elem.hasAttribute(name) – checks for existence.
elem.getAttribute(name) – gets the value.
elem.setAttribute(name, value) – sets the value.
elem.removeAttribute(name) – removes the attribute.


<!-- Creating an element -->
document.createElement(tag)
document.createTextNode(text)
document.body.append(div);
.remove()
elem.cloneNode(true) creates a “deep” clone of the element – with all attributes and subelements.
elem.cloneNode(false), then the clone is made without child elements.

<!-- document.write  -->
There’s one more, very ancient method of adding something to a web-page
<!-- following important limitation: -->
The call to document.write only works while the page is loading.
If we call it afterwards, the existing document content is erased.
  eg:-<p>After one second the contents of this page will be replaced...</p>
      <script>
        // document.write after 1 second
        // that's after the page loaded, so it erases the existing content
        setTimeout(() => document.write('<b>...By this.</b>'), 1000);
      </script>


<!-- className and classList -->
If we assign something to elem.className, it replaces the whole string of classes
The elem.classList is a special object with methods to add/remove/toggle a single class.
classList is iterable, so we can list all classes with for..of


<!-- Window sizes and scrolling -->
window.innerWidth/innerHeight
  includes the scrollbar
document.documentElement.clientHeight/clientWidth.
  If there exists a scrollbar, and it occupies some space, clientWidth/clientHeight provide the width/height without it (subtract it)
document.documentElement.scrollWidth/scrollHeight.
<!-- Forbid the scrolling -->
To make the document unscrollable, it’s enough to set document.body.style.overflow = "hidden". The page will “freeze” at its current scroll position.


<!-- Coordinates -->
clientX/clientY:Position inside the viewport (visible screen)
pageX/pageY:Position relative to full page
Full Page (3000px)
-------------------------
|                       |
|   Viewport (800px)    |
|   👇 visible part     |
|                       |
-------------------------
Viewport = what you see, Full page = entire content (including hidden part)


NodeList:-A NodeList is a collection of DOM nodes.
    -It can contain:
        HTML elements
        text nodes
        comment nodes
    -Usually static, meaning the list does not update automatically when the DOM changes.
    -Returned by methods like:
        querySelectorAll()
        childNodes
    -Supports modern looping methods like forEach(), for...of, and normal for loop.


  HTMLCollection
    -An HTMLCollection is a collection of only HTML elements (tags).
    -It does not include text nodes or comments.
    -It is a live collection, meaning it updates automatically when the DOM changes.
    -Returned by methods like:
        getElementsByClassName()
        getElementsByTagName()
        children
    -Does not support forEach() directly, so usually a for loop is used.