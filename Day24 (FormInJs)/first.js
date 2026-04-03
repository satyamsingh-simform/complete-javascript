/*event deligation uses
    -event deligation ke wajh se sab child pe eventListener lagane ka need nhi hai sirf parent pe layege 
    to event bubbling se pata cha jayega konse child se event trigger hua hai
*/

/*
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
    -triggers even if value not changed

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
    -by default, submit already works, you don’t have to write JavaScript for it

1.reset
    -Fires when form is reset
    -Clears all input fields
    -event.target → whole form
    -Input values become empty / undefined

*/


/*//diff diff form event type //pura form event smjh liye
const form = document.querySelector('form');

form.addEventListener('change', (event)=>{   //jb i/p ko fiil krke usse nikalege tb jo value hoga usme o direct utha lega
        console.log(event.target);//<input id="second" class="last-name" type="text" name="LastName" placeholder="Enter your last name">
        console.log(event.target.tagName);//INPUT
        console.log(event.target.className);//last-name
        console.log(event.target.value);//jo v likehe honge ip field me
})


form.addEventListener('input', (event)=>{      //ek ek value jo i/p field me denge usko utha lega   
    console.log(event.target.value, event.target);
})

//jo value i/p field me rakha hai, usse i/p pe jate o print hoga 
form.addEventListener('focusin', (event)=>{
    console.log(event.target);
    console.log(event.target.value);
})
//Similar to change (but triggers even if value not changed)
form.addEventListener('focusout', (event)=>{
    console.log(event.target.value);
})
//i/p field fill krne ke baad jaise hi uspe click krege tb jo usme val hoga usko utha lega
form.addEventListener('click', (evt)=>{
    console.log(evt.target);
    console.log(evt.target.value);
})
//i/p field fill krne ke baad jaise hi uspe double click krege tb jo usme val hoga usko utha lega
form.addEventListener('dblclick', (event)=>{
    console.log(event.target.value);
    // console.log("double click")
})
//form ko submit kr dega

//http://127.0.0.1:5502/Day24%20(FormInJs)/index.html?Name=satyam&LastName=singh&Age=23
form.addEventListener('submit', (evt)=>{
    console.log('form submitted');
    console.log(evt.target);//pura form pe iska effect hota hai(val submit krega sara field ka) isliye iska target pura form hota hai   
})

form.addEventListener('reset', (event)=>{
    console.log(event.target.value); //undefine
    console.log(event.target);       //pura form pe iska effect hota hai(val clear krega sara field ka) isliye iska target pura form hota hai  
    console.log("form Reset");
})
*/

/*In case of submit event
By default:
    Form submits
    Page reloads / redirects
With preventDefault():
    Form does NOT submit
    Page does NOT reload
    You can handle form manually (JS, API, validation)
*/

/*
//understanding form event through project:fetch submitted data from form 
//but ky hum jitna field rhega utna baar access krege- not a feasible way to do so
let form=document.querySelector('form');
form.addEventListener('submit',(evt)=>{
    evt.preventDefault();

    //but ky hum jitna field rhega utna baar access krege- not a feasible way to do so
    let name=document.getElementById('first')
    console.log(name.value);
    let lastName=document.getElementById('second')
    console.log(lastName.value);
    let age=document.getElementById('third')
    console.log(age.value);

    let div=document.getElementById('result')
    div.innerText=`${name.value} ${lastName.value} is from JSR and his age is just ${age.value}`
})
*/

/*new FormData(form)
    -Reads all form fields:
        <input>
        <textarea>
        <select>
    -Stores data as key-value pairs
    -{ Name → "satyam", LastName → "singh", Age → "23" }
*/

//efficient way
let form=document.querySelector('form');
form.addEventListener('submit',(evt)=>{
    evt.preventDefault();

    //ye ek fn hai (actual me API hai) js ka jisme sara form ka submitted data aata hai
    let data=new FormData(form);
    console.log(data)
    console.log(data.keys)

    console.log(Array.from(data.keys()));
    console.log(Array.from(data.values()));
    console.log(Array.from(data.entries()));//convert to array format

    let arrForm=Array.from(data.entries())
    for(let [key,val] of arrForm){
        console.log(key,val);
        let div=document.getElementById('result');
        div.innerText=`${key} : ${val}`;
    }
    /*
    let dataArr=Array.from(data.entries());
    for(let val of dataArr){
        console.log(val);
    }
    */

})


/**
 
    const data = new FormData(form);
    
    for(let [key,value] of data.entries())
        console.log(key, value);

    // console.log(Array.from(data.keys()));
    // console.log(Array.from(data.values()));

    // keys values
 */