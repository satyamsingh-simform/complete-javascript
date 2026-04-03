/*addEventListener
  -new quotes tb generate ho jb button pe click kre-yahi event kahata hai
  -provides more power in users hand

*/
/*
  3.addEventListener(event, callback fn(e), bubbling/capturing)
    -iske paas teen parameter hota hai.
    -iska cllback fn ke pas v parameter hota hai ,jisme sara info hota hai kaha pe click hua konsa btn click hua etc
    -F mtlb bubbling chalega jo ki default val hai //T mtlb capturing chalega jo ki likhna prta hai 
*/

const quotes = [
    "The best way to predict the future is to create it. — Peter Drucker",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "The only way to do great work is to love what you do. — Steve Jobs",
    "Don't watch the clock; do what it does. Keep going. — Sam Levenson",
    "It does not matter how slowly you go, as long as you do not stop. — Confucius",
    "Opportunities don't happen, you create them. — Chris Grosser",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky",
    "In the middle of every difficulty lies opportunity. — Albert Einstein",
    "What lies behind us and what lies before us are tiny matters compared to what lies within us. — Ralph Waldo Emerson",
    "The harder you work for something, the greater you'll feel when you achieve it. — Anonymous",
    "Success is not how high you have climbed, but how you make a positive difference to the world. — Roy T. Bennett",
    "Dream big and dare to fail. — Norman Vaughan",
    "Don’t let yesterday take up too much of today. — Will Rogers",
    "The future belongs to those who believe in the beauty of their dreams. — Eleanor Roosevelt",
    "It always seems impossible until it's done. — Nelson Mandela",
    "The way to get started is to quit talking and begin doing. — Walt Disney",
    "Success usually comes to those who are too busy to be looking for it. — Henry David Thoreau",
    "It’s not whether you get knocked down, it’s whether you get up. — Vince Lombardi",
    "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
    "Everything you’ve ever wanted is on the other side of fear. — George Addair"
  ];


/*
//<!-- Event Listener -->//Mouse Event
let btn=document.querySelector('button');

btn.addEventListener('click', ()=>{
  let p=document.getElementById('quote');
  let index=Math.floor(Math.random()*(19-0+1)+0);
  p.innerHTML=quotes[index];
})
*/



/*//Keyboard Event-ko work krne ke liye pura document pe listen krna best option rahega (specific btn pe krayege tb usse btn ke pass press krege tbhi work krega)
document.addEventListener('keyup', ()=>{
  let p=document.getElementById('quote');
  let index=Math.floor(Math.random()*(19-0+1)+0);
  p.innerHTML=quotes[index];

})
*/




//Event Object :-bydefault addEventListener ke cllback fn ko ek event obj milta hai jisme 
//               sara info hota hai kaha pe click hua konsa btn click hua etc
/*
const button = document.querySelector('button');
button.addEventListener('click', (event)=>{
  // console.log(event);
  console.log(event.target);  //<button>Generate Quotes</button>
  console.log(event.type);    //click
  console.log(event.clientX); //384 
  console.log(event.clientY); //440
  const text = document.getElementById("quote");
  const index = Math.floor(Math.random()*quotes.length);
  text.textContent = quotes[index];

})
*/




//specific keyboard btn se hi content change ho
document.addEventListener('keydown', (event)=>{

  console.log("event.target", event.target);  //button
  console.log("event.type", event.type);    //keydown
  console.log("event.clientX", event.clientX);
  console.log("event.clientY", event.clientY); 
  console.log("event", event);          //keyboard event
  console.log("event.key", event.key);      //event.key se milega konsa key press hua hai//Enter

  if(event.key==="Enter"){
  const p = document.getElementById("quote");
  const index = Math.floor(Math.random()*quotes.length);
  p.textContent = quotes[index];
  }

})


/*ALL EVENT PROPERTY */
/*
Property/method   	        Type	          Description	                                          Use Case

event.target	            Property	      Element where event occurred	                  Detect which child element was clicked (event delegation)
event.currentTarget	      Property	      Element where listener is attached	            Know which element is handling the event
event.type	              Property	      Type of event (click, keydown, keyup)	          Handle multiple event types dynamically
event.key	                Property	      Key pressed in keyboard event	                  Detect Enter, Escape, etc.
event.code	              Property	      Physical key (KeyA, Enter)	                    Key-based shortcuts independent of keyboard layout
event.clientX/Y	          Property	      Mouse position in viewport	                    UI interactions (drag, tooltip positioning)
event.pageX/Y	            Property	      Mouse position in full page	                    Scroll-aware positioning
event.button	            Property	      Which mouse button pressed	                    Handle right-click / left-click differently
event.target.value        Property        Value of input field                            Form handling / validation

event.preventDefault()	                  Stops default browser behavior	                Prevent form submit, stop link navigation
event.stopPropagation()	                  Stops event bubbling	                          Prevent parent handlers from triggering
event.stopImmediatePropagation()	        Stops all handlers on same element	            Prevent multiple listeners from firing


*/




