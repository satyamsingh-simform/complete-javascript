

//const original_answer = ["Sachin Tendulkar","West Indies","Sachin Tendulkar","264","Muttiah Muralitharan"]
const original_answer = {
   q1: "Sachin Tendulkar",
   q2: "West Indies",
   q3: "Sachin Tendulkar",
   q4: "264",
   q5: "Muttiah Muralitharan"
}

/*
const form = document.querySelector('form');
form.addEventListener('submit',(event)=>{
   event.preventDefault();
   const data = new FormData(form); //html name:value   ke format me data backend me jata hai

   
//    const answer = Array.from(data.values());
//    let result = 0;
//    for(let i=0;i<answer.length;i++)
//    { if(answer[i]===original_answer[i])
//         result++;
//    }

   let result = 0
   let arr=Array.from(data.values());
   console.log(arr.length);
   
   if(arr.length==0){
      const out = document.getElementById('out');
      out.innerText = `must solve question to check result`;
   }
   else{
      for(let [key,value] of data.entries()){
         if(value===original_answer[key])
           result++;
      }
      const out = document.getElementById('out');
      out.innerText = `${result} out of 5 is correct`;
   }
//    document.getElementById('container').append(out);
//    form.reset();

})
*/


//Array method:solved by myself
let correctAns=["Sachin Tendulkar","West Indies","Sachin Tendulkar","264","Muttiah Muralitharan"]

let result=0;
let form=document.querySelector('form');
form.addEventListener('submit',(evt)=>{

   evt.preventDefault();
   let myAns=new FormData(form);
   let myAnsArr=Array.from(myAns.entries());
   console.log(myAnsArr);
   
   for(let [key,val] of myAnsArr){
      if(val===original_answer[key]){
         result++;
      } 
   }

   let div=document.getElementById('out');
   div.innerText=`out of 5 you attempted ${myAnsArr.length} score ${result}`;

})
