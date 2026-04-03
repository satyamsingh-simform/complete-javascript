<!-- Event type -->
1: input   -
2: change
3: focus
<!-- focus: Does not bubble, so it needs to be directly attached to individual input elements.
focusin: Bubbles, so it can be attached to the form element for event delegation. -->
4: blur or focusout
5: click
<!-- 6: dbclick Explain later -->
7: submit
8: reset
9: FormData 


<!-- form without submition -->
http://127.0.0.1:5501/03JS/Day24/index.html  
<!-- form after submition -->
http://127.0.0.1:5501/03JS/Day24/index.html?Name=Rohit&LastName=Negi&Age=23

<!--keys=value
    Name=Rohit
    LastName=Negi
    Age=23 
-->


<!-- 🔹 Input-related Events -->
1.input
    -Fires on every keystroke
    -Real-time value capture
    -Used for live validation / typing detection

1.change
    -Fires when user finishes editing (blur or Enter)
    -Gives final updated value
    -Not triggered on every keystroke

<!-- 🔹 Focus Events -->
1.focusin
    -Fires when element gains focus
    -Works with event bubbling
    -Can access current value in input

1.focusout
    -Fires when element loses focus
    -Similar to change (but triggers even if value not changed)

<!-- 🔹 Mouse Events -->
1.click
    -Fires on single click
    -Gives current value of input

1.dblclick
    -Fires on double click
    -Same as click but requires 2 clicks

<!-- 🔹 Form Events -->
1.submit
    -Fires when form is submitted
    -event.target → whole form
    -Used to handle form data
    -Usually used with event.preventDefault()

1.reset
    -Fires when form is reset
    -Clears all input fields
    -event.target → whole form
    -Input values become empty / undefined