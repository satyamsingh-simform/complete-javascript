<!-- Event Listener -->
    el.addEventListener(event, function, useCapture)

        Parameters:
            event: A string representing the event type (e.g., "click", "mouseover", "keydown", etc.).
            function: The function to run when the mention event happens.
            useCapture (optional): A boolean that defines whether the event should be captured in the capturing or bubbling


 Default is false.
<!-- Mouse Event -->
1: click
2: dblclick
3: mouseover
4: mousemove

<!-- Keyboard Event -->

1: keydown → key pressed (fires continuously if held)
2: keyup → key released
3: keypress → ❌ deprecated (avoid)

<!--Event Object
        Events = what happened
        Event object = details about what happened
 -->
1: event
2: event.target
3: event.type
4: event.key
5: event.clientX
6: event.clientY
7: event.pageX → X (full page)
8: event.pageY → Y (full page)
9: event.offsetX → X inside element
10:event.offsetY → Y inside element

<!-- Mouse Events (More) -->
Basic
    -click → single click
    -dblclick → double click
    -mousedown → mouse button pressed
    -mouseup → mouse button released
Movement
    -mousemove → mouse moving continuously
    -mouseover → enters element (bubbles)
    -mouseout → leaves element
    -mouseenter → enters (no bubbling)
    -mouseleave → leaves (no bubbling)
Right Click
    -contextmenu → right-click menu
Wheel
    -wheel → mouse scroll


<!-- Window / Browser Events -->
1: load → page fully loaded
1: DOMContentLoaded → HTML loaded (no images wait)
1: resize → window resized
1: scroll → page scrolled


<!-- Common DOM Element Properties -->
<!-- 🔹 Content Properties -->
    .value → value inside input field
    .innerHTML → HTML content inside element
    .innerText → visible text only
    .textContent → all text (even hidden)