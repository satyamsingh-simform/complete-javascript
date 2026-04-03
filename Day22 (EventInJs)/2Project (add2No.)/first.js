/*
const button = document.querySelector('button');

button.addEventListener('click', ()=>{
    //Read the data
    const input1 = document.getElementById('first');
    const number1 = Number(input1.value);
    const input2 = document.getElementById('second');
    const number2 = Number(input2.value);

    if(isNaN(number1)||isNaN(number2))
        return;

    // Output the result
    const result = number1+number2;
    const re = document.getElementById('res');
    re.textContent = "Result: "+result;
})


// BMI Calculator
// Dhaej Calculator(Male)
// Alimony Calculator(Female)

*/

let btn=document.querySelector('button');

btn.addEventListener('click', ()=>{
    //input value read krna hai 
    let input1=document.getElementById('first');
    let num1=Number(input1.innerText);
    console.log(num1);
    
    let input2=document.getElementById('second');
    let num2=Number(input2.value);
    
    //result display krna hai
    let result=document.getElementById('res'); 
    result.textContent="Result: "+(num1+num2);


})






// let bod=document.querySelector('body');
// console.log(bod);
// bod.style.backgroundColor='red'
















