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
    -need not to be converted into array befor looping.

  HTMLCollection
    -An HTMLCollection is a collection of only HTML elements (tags).
    -It does not include text nodes or comments.
    -It is a live collection, meaning it updates automatically when the DOM changes.
    -Returned by methods like:
        getElementsByClassName()
        getElementsByTagName()
        children
    -Does not support forEach() directly, so usually a for loop is used.
    -Its array like ,which needs to be converted to array first using spread operator or using Array.from(collection)
*/

/*
1.Event Propagation
    -when an event occurs, it travels in 3 phases:
        -Capturing phase (top → target)
        -Target phase
        -Bubbling phase (target → top)

2.stopPropagation()
    -event.stopPropagation() stops the event from moving further in the propagation flow (either capturing or bubbling).
    -Prevents the event from reaching parent elements
    -Does NOT stop other handlers on the same element

3.stopImmediatePropagation()
    -event.stopImmediatePropagation() stops propagation AND prevents other handlers on the same element from executing
    -Stops:
        -Event going to parent
        -Other listeners on the same element
*/
