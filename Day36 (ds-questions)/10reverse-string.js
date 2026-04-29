//Q2.Reverse a String //For example, if the input is "hello," the output should be "olleh."
function revString(str){
    let revStr='';
    for(let i=str.length-1;i>=0;i--){
        revStr+=str[i];
    }
    return revStr;
}
// console.log(revString('Hello'));