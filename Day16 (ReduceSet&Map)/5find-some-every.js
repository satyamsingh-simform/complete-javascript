/*1.find()
    -What it does
        -Returns the first element that satisfies the condition.
        -Stops searching after the first match.
        -If nothing matches → returns undefined.
    -Syntax
        -array.find(callback)
    -When to use
        -Use find() when you want a single element that matches a condition.



  2.some()
    -What it does
        -Checks whether at least one element satisfies the condition.
        -Returns true or false.
        -Stops as soon as it finds a match.
    -Syntax
        -array.some(callback)
    -When to use
        -Use some() when you want to check if any element matches a condition.



  3.every()
    -What it does
        -Checks if all elements satisfy the condition.
        -Returns true or false.
        -Stops immediately when a condition fails.
    -Syntax
        -array.every(callback)
*/

const products = [
  // Electronics
  { id: 1, name: "Laptop", category: "Electronics", price: 1200, inStock: true },
  { id: 2, name: "Headphones", category: "Electronics", price: 200, inStock: true },
  { id: 3, name: "Smartphone", category: "Electronics", price: 800, inStock: false },
  { id: 4, name: "Monitor", category: "Electronics", price: 300, inStock: true },
  { id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

  // Books
  { id: 6, name: "The Hobbit", category: "Books", price: 25, inStock: true },
  { id: 7, name: "A Brief History of Time", category: "Books", price: 30, inStock: true },
  { id: 8, name: "Dune", category: "Books", price: 28, inStock: false },

  // Appliances
  { id: 9, name: "Coffee Maker", category: "Appliances", price: 150, inStock: false },
  { id: 10, name: "Blender", category: "Appliances", price: 80, inStock: true },
  { id: 11, name: "Toaster", category: "Appliances", price: 45, inStock: true },
  { id: 12, name: "Microwave Oven", category: "Appliances", price: 220, inStock: true },

  // Clothing
  { id: 13, name: "T-Shirt", category: "Clothing", price: 20, inStock: true },
  { id: 14, name: "Jeans", category: "Clothing", price: 60, inStock: false },
  { id: 15, name: "Jacket", category: "Clothing", price: 110, inStock: true },

  // Home Goods
  { id: 16, name: "Desk Lamp", category: "Home Goods", price: 35, inStock: true },
  { id: 17, name: "Scented Candle", category: "Home Goods", price: 15, inStock: true },
  { id: 18, name: "Picture Frame", category: "Home Goods", price: 22, inStock: false },

  // Groceries
  { id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },
  { id: 20, name: "Artisan Bread", category: "Groceries", price: 8, inStock: true }
];

/*
//FIND():Stops searching after the first match.
//first product price less than 100
let result= products.find((obj)=>{
    return obj.price<100;
})
console.log(result);//{ id: 5, name: "Keyboard", category: "Electronics", price: 75, inStock: true },

//first product price less than 10
let ans= products.find(({price})=>price<10)
console.log(ans);   //{ id: 19, name: "Organic Apples", category: "Groceries", price: 5, inStock: true },




//SOME:Stops as soon as it finds a match.

//finds any product is out of stocks, return true if found any and stop searching
let ans2= products.some(({inStock})=>{
    return inStock==false
})
console.log(ans2);//true

let ans3=products.some(({price})=>price==0)
console.log(ans3);//false


//EVERY:Checks if all elements satisfy the condition.
let ans4=products.every(({price})=>{
    return price>0
})
console.log(ans4);//true

//check if all product are in stock
let ans5= products.every(({inStock})=>inStock==true);
console.log(ans5);//false


//find all products which are out of stocks
let ans6= products.filter(({inStock})=>!inStock)
console.log(ans6);
*/


//POLYPHILLS
//1.custom filter
/*
Array.prototype.filtering=function(func){
    let resArr=[];
    for(let value of this){
        if(func(value)){
            resArr.push(value);
        }
    }
    return resArr;
}
let arr=[1,2,3,4,5];

let res=arr.filtering((val)=>val>2);
console.log(res);//[ 3, 4, 5 ]

let arr2=[10,20,35,25,50];
let res2=arr2.filtering((val)=>val%2==0);
console.log(res2);//[ 10, 20, 50 ]
*/

//MAP CUSTOME
/*
Array.prototype.mapping=function(func){
    let resArr=[];
    for(let value of this){
        let res=func(value);
        console.log(res);
        resArr.push(res);
    }
    return resArr;
}
let arr3=[3,4,5,6,7,8];
let res3=arr3.mapping((val)=>val*val);
console.log(res3);//[ 9, 16, 25, 36, 49, 64 ]
*/


