
//Q1.Truncate a String :print string till provided limit
function truncate(str,limit){
    let result='';
    for(let i=0;i<=limit;i++){
        result+=str[i];
    }
    return result+'...';
}
// let res=truncate('My name is Satya, I am from JSR',14);
// console.log(res);



//Q2.Reverse a String //For example, if the input is "hello," the output should be "olleh."
function revString(str){
    let revStr='';
    for(let i=str.length-1;i>=0;i--){
        revStr+=str[i];
    }
    return revStr;
}
// console.log(revString('Hello'));



//Q3.Palindrome Check :reverse of string is same as original one
function palindromeCheck(str){
    let revStr='';
    for(let i=str.length-1;i>=0;i--){
        revStr+=str[i];
    }
    if(str==revStr){
        console.log(`${str} is a pallindrome`);
    }
    else{
        console.log(`${str} is not a pallindrome`);
    }
}
// palindromeCheck('aba');
// palindromeCheck('madam');
// palindromeCheck('satya')



//Q4.Factorial :5!=5*4*3*2*1
function fact(val){
    let result=1;
    for(let i=val;i>=1;i--){
        result=result*i;
    }
    console.log(`the factorial of ${val} :${result}`);
}
// fact(5);
/*
function factRecursion(val){
    let res=0;
    if(val==1){
        return val;
    }
    else{
        let res= factRecursion(val-1);
    }
}
*/

//Q5.Fibonacci Number :sum of n is (n-1)+(n-2)
function fibbo(val){
    let a=0;
    let b=1;
    let temp=0;
    temp=val===0?a:b;
    for(let i=2;i<=val;i++){
        temp=a+b;
        a=b;
        b=temp;
    }
    return temp;
}
// console.log(fibbo(6));


//Q6.Array Chunking : Write a function that takes an array and a chunk size as arguments and splits the array into chunks of the specified size.
function arrChunk(arr,size){
    let result=[];
    for(let i=0;i<arr.length;i=i+size){
        let subArr=arr.slice(i,i+size);
        console.log(subArr);
        result.push(subArr);
    }
    console.log(result);
}
// arrChunk([1,2,3,4,5],2)

/*OBJECT
const obj={
    name:'satya',
}
// obj[age]=20;//age is not defined
obj['age']=10;
console.log(obj);
*/

//A string contains characters, and characters are strings of length 1 in JavaScript.
//Q7.Anagram Detection: silent listen
function anagramDetection(str1,str2){
    if(str1.length!==str2.length)return false;

    let count={};
    for(let i=0;i<str1.length;i++){
        let key=str1[i];
        if(!count[key]){
            count[key]=1;
        }
        else{
            count[key]++; 
        }  
    }
    console.log(count);

    for(let i=0;i<str2.length;i++){
        let key=str2[i];
        if(!count[key]){
            return false;
        }
        count[key]--;
    }
    return true;
}
// let res=anagramDetection('silent','listen');
// console.log(res);

//Q8.Title Case Sentence :"my name is satyam"-->"My Name Is Satyam"

//Q9.Missing Number

//Q10.Caesar Cipher

//Q11.