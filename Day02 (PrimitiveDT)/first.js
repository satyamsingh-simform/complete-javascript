/*
A.Primitive Data Types:
  -They are immutable(cannot be changed directly) in js and stored directly in memory stack.
  -These types are not objects(stored in heap) and are directly stored in the stack.

  types of PDT
    1.Number - Represents numeric values (both integers and floating-point numbers).
    2.String - Represents a sequence of characters (text).
    3.Boolean - Represents logical values (true or false).
    6.BigInt
        -Represents integers larger than the Number type can handle.
        -last me n lagane se smjh jayega ye bigint hai

    4.Null 
        -Represents an intentional absence of any value.
        -jan buch ke value nhi dale hai kuch v.
        -iska typeof object deta hai or ye error hai js ka but ab isko sudhar v nhi skte hai kyuki tb sare previous code ko change krna prega. 
    5.Undefined 
        -Represents a variable that has been declared but not assigned a value by mistake.
        -jb variable declare kr diye pr value dena bhool gaye tb use var ka type undefined hota hai

    7.Symbol - Represents a unique and immutable identifier.

*/

// number
let account_balance = 30;
console.log(account_balance);
console.log(typeof account_balance);//number

// string
let str = "rohit negi is a bad boy, he doesn't know how to use zoom";
console.log(str)
console.log(typeof str)//string
let comment = 'Hello dosoton'
console.log(comment)

// Boolean-true or false
let Papa_ko_block_kara_hai = false;
console.log(Papa_ko_block_kara_hai);
console.log(typeof Papa_ko_block_kara_hai);//boolean

// Undefined-jb var declare kr diye pr value dena bhool gaye tb use var ka type undefined hota hai
let account;
console.log(account);
console.log(typeof account);//undefined

// Null
let bal = null;
console.log(bal);
console.log(typeof bal);//object deta hai or ye error hai js ka //and is not corrected bcz there are old legacy code which can break with this change 

// bigint
let a = 4343147836124791823749832n;
console.log(a);


console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);


// Non Primitive Data Type
// Array, Object , function

