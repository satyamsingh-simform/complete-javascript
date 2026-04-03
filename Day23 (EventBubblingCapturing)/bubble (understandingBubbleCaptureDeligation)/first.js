/*1.Event bubbling
    -Event bubbling is a concept in the DOM (Document Object Model) where an event starts from the target element and 
    bubbles upward through its ancestors (parent elements) in the DOM tree.
    -child wale eventListner ko active krege to parent GrandParent(GP) tkk propagate hoga
    -order of printing hoga:-child parent GP

  2.Event Capturing  
    -or iska just ulta hota hai Event capturing
    -order of printing hoga:-GP parent child
    -In capturing, the event travels from the outermost (top) element to the innermost (target) element.

  3.addEventListener(event, callback fn, capture)
    -iske paas teen parameter hota hai.


 Event Delegation-uses of event bubling
    -Instead of adding event listeners to every child elements, you attach one listener to their common parent and 
    it will propagate to parent & will let us know which child has invoke by using event.target
    -Saves memory and improves performance.
*/



// event bubbling(by default bubbling chalta hai) and event capturing
const grandParent = document.getElementById('grandParent');
const parent = document.getElementById('parent')
const child = document.getElementById('child')

//bubbling--andar se bahar propagate hoga
child.addEventListener('click', (event)=>{
    console.log("child Clicked"); 
    console.log(event.target);       //jo el se event triger hua hoga usko print krayega
    console.log(event.currentTarget);//jiske andar me currently hai usko priint krga (mtlb child me hai to child ko, parent me hai to parent ko so on)
    //event.stopPropagation();
})   //F mtlb bubbling chalega jo ki default val hai //T mtlb capturing chalega jo ki likhna prta hai 

parent.addEventListener('click', (event)=>{
    console.log("parent Clicked");
    // event.stopPropagation();
    console.log(event.target);
    console.log(event.currentTarget);
},false)

grandParent.addEventListener('click', (event)=>{
    console.log("grandParent Clicked");
    console.log(event.target);
    console.log(event.currentTarget);
},false)



/*//capturing--mtlb bahar se andar
child.addEventListener('click', (event)=>{
    console.log("child Clicked"); 
    // event.stopPropagation();
    // console.log(event.target);
},true)   //f mtlb bubbling chalega jo ki default val hai //T mtlb capturing chalega jo ki likhna prta hai 

parent.addEventListener('click', (event)=>{
    console.log("parent Clicked");
    // event.stopPropagation();
    // console.log(event.target);
    // console.log(event.currentTarget);
},true)

grandParent.addEventListener('click', (event)=>{
    console.log("grandParent Clicked");
    // console.log(event.currentTarget);
},true)
*/

//itna smhje taki event deligation ko smjh sake or background changer me usko use krke efficient code likh sake (to jao 1Project wale follder me)
