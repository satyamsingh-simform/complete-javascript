/*//First 16 Questions
console.log("" + 1 + 0);  // → "10"         | + with a string causes string concatenation, evaluated left-to-right
console.log("" - 1 + 0);  // → -1           | - forces numeric conversion, so "" → 0, giving 0 - 1 + 0
console.log(true + false);  // → 1          | Booleans convert to numbers (true=1, false=0) during arithmetic
console.log(6 / "3");  // → 2               | / converts "3" to number 3
console.log("2" * "3");  // → 6             | * converts both strings to numbers
console.log(4 + 5 + "px");  // → "9px"      | 4 + 5 evaluates first (9), then string concatenation with "px"
console.log("$" + 4 + 5);  // → "$45"       | First operand is string so both + operations perform concatenation
console.log("4" - 2);  // → 2               | - converts "4" to number 4
console.log("4px" - 2);  // → NaN           | "4px" cannot convert to a number so result becomes NaN
console.log(" -9 " + 5);  // → " -9 5"      | + with string performs concatenation without numeric conversion
console.log(" -9 " - 5);  // → -14          | - converts " -9 " to number -9 (spaces ignored)
console.log(null + 1);  // → 1              | null converts to 0 in numeric operations
console.log(undefined + 1);  // → NaN       | undefined converts to NaN during numeric conversion
console.log(" \t \n" - 2);  // → -2         | whitespace string converts to 0
console.log("abc" ** 0);  // → 1            | any value raised to power 0 returns 1
console.log("abc" ** 2);  // → NaN          | "abc" converts to NaN, and NaN ** 2 remains NaN
*/

// This is a JavaScript Quiz from BFE.dev
console.log(Boolean('false')) //true
console.log(Boolean(false))   //false
console.log('3' + 1)          //31
console.log('3' - 1)          //2
console.log('3' - ' 02 ')     //1
console.log('3' * ' 02 ')     //6
console.log(Number('1'))      //1
console.log(Number('number')) //NaN 
console.log(Number(null))     //0
console.log(Number(false))    //0

// This is a JavaScript Quiz from BFE.dev
console.log(null === undefined) //false
console.log(null == undefined)  //true
console.log(null == 0)          //false
console.log(null < 0)           //false
console.log(null > 0)           //false
console.log(null <= 0)          //true
console.log(null >= 0)          //true
console.log(undefined == 0)     //false
console.log(undefined < 0)      //false              
console.log(undefined > 0)      //false    
console.log(undefined <= 0)     //false    
console.log(undefined >= 0)     //false    

// This is a JavaScript Quiz from BFE.dev
console.log(0 == false)             //true            
console.log('' == false)            //true
console.log(undefined == false)     //false    
console.log(null == false)          //false
console.log('1' == true)            //true
console.log(1n == true)             //true
console.log(' 1     ' == true)      //true    

// This is a JavaScript Quiz from BFE.dev
console.log(1 + 2)                  // 3 | normal numeric addition
console.log(1 + +2)                 // 3 | unary + converts 2 to number (already number)
console.log(1 + + +2)               // 3 | multiple unary + still convert to number
console.log(1 + '2')                // "12" | string present so + does string concatenation
console.log(1 + +'2')               // 3 | unary + converts "2" to number before addition
console.log('1' + 2)                // "12" | string + number results in string concatenation
console.log('1' + +2)               // "12" | +2 → 2 then string concatenation with "1"
console.log(1 + true)               // 2 | true converts to 1 in numeric addition
console.log(1 + +true)              // 2 | unary + converts true → 1
console.log('1' + true)             // "1true" | string present so concatenation occurs
console.log('1' + +true)            // "11" | +true → 1 then string concatenation
console.log(1 + null)               // 1 | null converts to 0 in numeric addition
console.log(1 + +null)              // 1 | unary + converts null → 0
console.log('1' + null)             // "1null" | string concatenation converts null → "null"
console.log('1' + +null)            // "10" | +null → 0 then string concatenation
console.log(1 + undefined)          // NaN | undefined converts to NaN in numeric operations
console.log(1 + +undefined)         // NaN | +undefined → NaN so result is NaN
console.log('1' + undefined)        // "1undefined" | string concatenation converts undefined → "undefined"
console.log('1' + +undefined)       // "1NaN" | +undefined → NaN then string concatenation
console.log('1' + + +undefined)     // "1NaN" | multiple unary + still produce NaN then concatenation           





// JavaScript Coercion Trap Questions
console.log([] + []);  // → "" | arrays convert to empty strings via toString() before concatenation
console.log([] + {});  // → "[object Object]" | [] → "" and {} → "[object Object]" during string conversion
console.log({} + []);  // → 0 | {} is parsed as an empty block so expression becomes unary +[] → 0
console.log([] == false);  // → true | [] → "" → 0 and false → 0, so 0 == 0
console.log("" == 0);  // → true | empty string converts to 0 in loose equality
console.log(JSON.stringify([1,2,null,3]))
console.log(JSON.stringify([1,2,undefined,3]))
console.log([] == false)            //
console.log([] + [])
console.log([] + 1)
console.log([[]] + 1)
console.log([[1]] + 1)
console.log([[[[2]]]] + 1)
console.log([] - 1)
console.log([[]] - 1)
console.log([[1]] - 1)
console.log([[[[2]]]] - 1)
console.log([] + {})
console.log({} + {})
console.log({} - {})
console.log([] == 0)
console.log([] == false)
console.log(!![])
console.log([1] == 1)
console.log(!![1])
console.log(Boolean([]))
console.log(Boolean(new Boolean([])))
console.log(Boolean(new Boolean(false)))
console.log( [] + {} )
console.log( + {} )
console.log( + [] )
console.log( {} + [])
console.log( ({}) + [])
console.log( ({}) + [])
console.log( ({}) + [])
console.log( {} +  + [])
console.log( {} +  + [] + {} )
console.log( {} +  + [] + {}  + [])