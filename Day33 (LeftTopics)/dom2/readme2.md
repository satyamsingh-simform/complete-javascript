<!-- 4. addEventListener Options -->
    elem.addEventListener("click", handler, {
      once: true,
      capture: false,
      passive: true
    });
<!--once -->
Default: false
Meaning:
Handler will run every time event occurs
Not auto-removed
<!--passive -->
Default: false
Meaning:
You CAN use event.preventDefault()
Browser assumes handler might block behavior
<!--capture -->
Default: false
Meaning:
Event runs in bubbling phase (normal behavior)


<!-- 3. Stopping Bubbling -->
1. stopPropagation
    Stops event going to parent
    But other handlers on same element still run
2. stopImmediatePropagation
    stops Bubbling
    stops Other handlers on same element
3. preventDefault() → stops browser default action


<!-- /* Mouse Events (Important Summary + Use ⭐) -->

    // click
    - Triggered when user clicks (mousedown + mouseup)
    - Used for buttons, UI actions

    // dblclick
    - Triggered on double click
    - Used for edit mode, zoom, special actions

    // mousedown ⭐
    - Triggered when mouse button is pressed
    - Used for drag start, custom controls, games

    // mouseup
    - Triggered when mouse button is released
    - Used for drag end, completing actions

    // mousemove ⭐
    - Triggered when mouse moves
    - Used for drag & drop, drawing, tracking cursor

    // mouseover ⭐
    - Triggered when mouse enters element (bubbles)
    - Used for hover effects with delegation

    // mouseout
    - Triggered when mouse leaves element (bubbles)
    - Used for removing hover effects

    // mouseenter ⭐
    - Triggered when mouse enters element (no bubbling)
    - Used for clean hover (no child interference)

    // mouseleave
    - Triggered when mouse leaves element (no bubbling)
    - Used for stable hover exit

    // contextmenu ⭐
    - Triggered on right click
    - Used for custom right-click menus

    // Important Notes ⭐⭐⭐
    - mouseover/out → bubble (good for delegation)
    - mouseenter/leave → no bubbling (clean but limited)
    - mousemove may skip elements (performance optimization)
    - relatedTarget → tells from where/to where mouse moved
*/