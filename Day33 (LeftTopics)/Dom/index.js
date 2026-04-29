/*NodeList:-A NodeList is a collection of DOM nodes.
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
*/

/*
stopPropagation()

Only stops going to parent
Same element → everything runs

👉 stopImmediatePropagation()

Stops everything immediately
Same element → next handlers blocked
Parent → also blocked
*/