//Q1.Truncate a String :print string till provided limit
function truncate(str,limit){
    let result='';
    for(let i=0;i<=limit;i++){
        result+=str[i];
    }
    return result+'...';
}
let res=truncate('My name is Satya, I am from JSR',14);