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
palindromeCheck('aba');
palindromeCheck('madam');
palindromeCheck('satya')