// let divs=document.querySelector('body')
// divs.style.backgroundColor= "pink"

/*//rohit bhaiya code
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

function generatQuote(){  
  const text = document.getElementById("quote");
  const index = Math.floor(Math.random()*quotes.length);
  text.textContent = quotes[index];
}
setInterval(generatQuote,2000);
*/


//quotes generator //Chnage the background color in every 5 second
const arr = [
  "The only true wisdom is in knowing you know nothing. — Socrates",
  "Do what you can, with what you have, where you are. — Theodore Roosevelt",
  "We suffer more in imagination than in reality. — Seneca",
  "In the middle of difficulty lies opportunity. — Albert Einstein",
  "The mind is everything. What you think, you become. — Buddha",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
  "Opportunities don’t happen. You create them. — Chris Grosser",
  "Do what you love and you’ll never work a day in your life. — Confucius",
  "Don’t count the days, make the days count. — Muhammad Ali",
  "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
  "The greatest thing you’ll ever learn is just to love and be loved in return. — Nat King Cole",
  "Love all, trust a few, do wrong to none. — William Shakespeare",
  "We accept the love we think we deserve. — Stephen Chbosky",
  "To love oneself is the beginning of a lifelong romance. — Oscar Wilde",
  "Sometimes the heart sees what is invisible to the eye. — H. Jackson Brown Jr.",
  "Happiness depends upon ourselves. — Aristotle",
  "Life isn’t about finding yourself. Life is about creating yourself. — George Bernard Shaw",
  "Do what makes your soul shine. — Unknown",
  "Act as if what you do makes a difference. It does. — William James",
  "Not how long, but how well you have lived is the main thing. — Seneca"
];
let lightColors = [
  "#FFB6C1", // LightPink
  "#FFD700", // LightGold
  "#ADD8E6", // LightBlue
  "#90EE90", // LightGreen
  "#FFDEAD", // NavajoWhite
  "#FAFAD2", // LightGoldenRodYellow
  "#FFEFD5", // PapayaWhip
  "#D3D3D3", // LightGray
  "#E6E6FA", // Lavender
  "#F0E68C", // Khaki
  "#FFFACD", // LemonChiffon
  "#F5F5DC", // Beige
  "#F0FFFF", // Azure
  "#FFF0F5", // LavenderBlush
  "#F5FFFA", // MintCream
  "#D3D3D3", // LightGray
  "#E6E6FA", // Lavender
  "#F0E68C", // Khaki
  "#FFFACD", // LemonChiffon
  "#F5F5DC", // Beige
];
//Method1:passing fn name as cllback
function quotes(){
  let p=document.getElementById('quote');
  let index=Math.floor(Math.random()*(19-0+1));
  p.innerText=arr[index];
  let div=document.getElementById('quote-box');
  div.style.backgroundColor=lightColors[index];
}
setInterval(quotes,3000)
/*
//Method 2:passing arrow fn as cllback
setInterval(()=>{
  let p=document.getElementById('quote');
  let index=Math.floor(Math.random()*(19-0+1)+0);
  p.innerHTML=arr[index];

  //backgroundcolor code
  let divs=document.querySelector('div')
  divs.style.backgroundColor=lightColors[index];

},5000)
*/



/*
const arr = [
  "The only true wisdom is in knowing you know nothing. — Socrates",
  "Do what you can, with what you have, where you are. — Theodore Roosevelt",
  "We suffer more in imagination than in reality. — Seneca",
  "In the middle of difficulty lies opportunity. — Albert Einstein",
  "The mind is everything. What you think, you become. — Buddha",
  "Success is not final, failure is not fatal: it is the courage to continue that counts. — Winston Churchill",
  "Opportunities don’t happen. You create them. — Chris Grosser",
  "Do what you love and you’ll never work a day in your life. — Confucius",
  "Don’t count the days, make the days count. — Muhammad Ali",
  "Your time is limited, so don’t waste it living someone else’s life. — Steve Jobs",
  "The greatest thing you’ll ever learn is just to love and be loved in return. — Nat King Cole",
  "Love all, trust a few, do wrong to none. — William Shakespeare",
  "We accept the love we think we deserve. — Stephen Chbosky",
  "To love oneself is the beginning of a lifelong romance. — Oscar Wilde",
  "Sometimes the heart sees what is invisible to the eye. — H. Jackson Brown Jr.",
  "Happiness depends upon ourselves. — Aristotle",
  "Life isn’t about finding yourself. Life is about creating yourself. — George Bernard Shaw",
  "Do what makes your soul shine. — Unknown",
  "Act as if what you do makes a difference. It does. — William James",
  "Not how long, but how well you have lived is the main thing. — Seneca"
];

let fun=setInterval(()=>{
  let p=document.querySelector('p');
  let index=Math.floor(Math.random()*(19-0+1));
  console.log(index);
  
  p.innerText=arr[index];
},1000)


fun();
*/








