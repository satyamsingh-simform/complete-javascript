
/*function allElement(node){
    console.log(node);
    let count=1;
    for(let key of node.children){
        count=count+allElement(key);
    }
    return count;
}
let nodeList=document.body;

let count=allElement(nodeList);
console.log(`child count:${count}`);//child count:3719
*/



let uniqueChild=new Set();
function allElement(node){
    uniqueChild.add(node.tagName);
    for(let key of node.children){
        allElement(key);
    }
    return uniqueChild;
}
let nodeList=document.body;
console.log(nodeList);

let count=allElement(nodeList);
console.log([...count]);
console.log([...count].length);
