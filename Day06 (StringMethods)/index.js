/*
const a=10;
let b=a;
console.log(a);
console.log(b);
*/

/*OBJECT UPDATION
// primitive data type
const num = 10;
//num=20; //error bcz const var ko update nhi kr skte hai
console.log(num);

// Non Primitive datatype
const obj = {
    id:10,
    balance:200
}
obj.id = 11;//yaha pe update kr pa rahe hai kyuki obj address store krta hai or o change thodi kr rahe hai, or const obj ko update krege tb error dega na 
console.log(obj);

let obj2 = {
    id:20,
    money:30
};
obj = obj2;//ye error dega kyuki abb obj ka reference ko change kr rahe hai jo ki const var hai
            //or ohi const ke place pe let hota to ye krna v possible tha
//location of obj2 is 8000
//location of obj is 6521
*/


/*STRING METHOD & PROPERTIES
Complete List from Your Code
    -length	        Count characters
    -toUpperCase()	Convert to uppercase
    -toLowerCase()	Convert to lowercase
    -indexOf()	    First occurrence index
    -lastIndexOf()	Last occurrence index
    -includes()	    Check substring exists
    -slice()	    Extract part of string
    -substring()	Extract part (no negative index)
    -replaceAll()	Replace all matches
    -trim()	        Remove spaces from start & end
    -split()	    Convert string → array

Template Literals (backticks ``)
    Used with ${} for embedding expressions.
    Example: `Price is ${price}`

Concatenation with + Operator--> string with + operator will convert everything into string but with + operator only 
    Combines two or more strings.
    Example: let s3 = s1 + s2;

.length
    Property (not a method) that returns the number of characters in a string.
    Example: s3.length

.charAt(index)
    Returns the character at the specified index.
    Example: special.charAt(3)

Bracket Notation str[index]
    Also used to access characters by index.
    Example: special[3]

.toLowerCase()
    Converts the string to lowercase.
    Example: special2.toLowerCase()

.toUpperCase()
    Converts the string to uppercase.
    Example: special2.toUpperCase()

.indexOf(substring)
    let hero="Hellow Coder Army"
    Returns the first index where the substring is found.
    Example: hero.indexOf("Coder")//7

.lastIndexOf(substring)
    Returns the last index where the substring is found.
    Example: hero.lastIndexOf("Coder")

.includes(substring)
    Returns true if the substring exists in the string, otherwise false.
    Example: hero.includes("koder")

.slice(start, end)
    Extracts a section of a string but last index include nhi rhta hai(can accept negative indices as well).
    Example: newstring.slice(-6, 5)
    if only start is provided then it means from start till last+1;
        -str.slice(start):end = str.length;

.substring(start, end)
    Similar to .slice(), but does not accept negative indices.
    Example: newstring.substring(1, 3)
*/


/*
// string in js-ye teeno tarika se bana skte hai
let str1 = "Hello Coder army,";
let str2 = 'Mein toh mast hu,';
let str3 = `Aur bhaiya kya haal chaal`;//latest way
let price = 80;

console.log(`Tomato is very cheap right now its price is ${price}`);//new way 
console.log(`price of the fresh tomato is ${price} , get it asap`);
console.log("price of the fresh tomato is", price , "get it asap");//old way


let x="lkjhgfhgfd";
let y=`kjhgflkjhgfkjhg`;
let z=100;
let z1=`you have got ${z} rupees`;

//console.log(str1, str2, str3);
*/
/*

//string concatentaion
//.lenght ko chor ke sb string fn ke sath ye () lagega
let s1 = "hello";
let s2 = " Coder Army";
let s3 = s1+s2;
console.log(s3);
console.log(s3.length);//15//string me kitna char hai o dedega
*/

/*
//  "hello coder army" ko print krna hai with "" 
console.log('"hello coder army"');
// 'hello coder army' ko print krna hai with ''
console.log("'hello coder army'");


// Rohit Bhaiya bhut bade badmash hai. \nWo bhut gande insaan hai.
let message = "Rohit Bhaiya bhut bade badmash hai. \nWo bhut gande insaan hai.";
console.log(message);//\n ko v print krna hai
// escape character \   -\iske baad jo v char hai usko as it is print kr dena uska meaning smjhne ka need nhi hai
let comment = "Rohit Bhaiya bhut bade badmash hai. \\nWo bhut gande insaan hai."
console.log(comment);

let arr=['arenu','ari','ama',10];
console.log(arr[2]);

let special = "Rohit";
console.log(special[3]);//i
console.log(special[4]);//t
console.log(special.charAt(3));//i
console.log(special.charAt(2));//h
*/


/*
// to lowercase
// to uppercase
let special2='Rohit'
console.log(special2.toLowerCase());//variable special ke andar change nhi krega 
let strtemp = special2.toUpperCase();
console.log(strtemp);//ROHIT
console.log(special2);//Rohit //og string variable me change nhi krta hai
*/

/*
let hero = "Hello Coder Army Coder";
console.log(hero.indexOf("Coder"));//6
console.log(hero.indexOf("coder")); //jb present nhi hoga tb -1 dega
console.log(hero.lastIndexOf("Coder"));//6 (last me coder nhi hota tb) 17(jb last me coder hai tb)
console.log(hero.includes("koder"));//false //check krega o word present hai ki nhi hero var me
console.log(hero.includes("oder"));//true 

               //0123456  
let newstring = "HeloDon";
            //  -7-6-5-4-3 -2-1 
console.log(newstring.slice(1,3));//el last index included nhi rhta hai .slice(1,5) me //slice can take negative index also;
console.log(newstring.substring(1,3));//el last index included nhi rhta hai .substring(1,6) me //substring() cant take -ve index
console.log(newstring.slice(-6,5));//eloD
console.log(newstring.slice(-2,4));//
console.log(newstring.slice(-2,6));//o
*/


let str10 = "Hello Ji Kaise ho Ji";
console.log(str10.replace("Ji","Money"));//Hello Money Kaise ho ji
console.log(str10.replaceAll("Ji","Money"));//Hello Money Kaise ho Money
console.log(str10);//original as it is rehega

//let str11 = "Money! honey! sunny funny";//[ 'Money', 'honey', 'sunny funny' ]
let str11 = "Money! honey! sunny! funny";//[ 'Money', 'honey', 'sunny, 'funny' ]
console.log(str11.split("!"));//convert kr dega array me//[ 'Money', 'honey', 'sunny', 'funny' ]
console.log(str11.split(" "));//convert kr dega array me//[ 'Money!', 'honey!', 'sunny!', 'funny' ]

let str12 = " hello ji ";
console.log(str12.length);//10
console.log(str12.trim().length);//trim starting and last ka space ko remove kr dega


// New way to create string-hardly used (dont use)
let lasteststring = new String("Hello Coder Army");
console.log(lasteststring);
console.log(typeof lasteststring);//obj
