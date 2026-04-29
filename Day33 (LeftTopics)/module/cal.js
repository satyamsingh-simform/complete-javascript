/*//in this way:here with same name need to import as export otherwise error
export function sum(a,b){
    return a+b;
}

export function sub(a,b){
    return a-b;
}
*/

//default export can be imported with diff name that the diff bw name export and default export, bcz with default export only one fn can be passed from that file 
//name export way:here with same name need to import as export otherwise error
//but using alise we can import with diff name ,it is helpful when we have name conflict.
function sum(a,b){
    return a+b;
}

function sub(a,b){
    return a-b;
}

export {sum,sub}; //name export way