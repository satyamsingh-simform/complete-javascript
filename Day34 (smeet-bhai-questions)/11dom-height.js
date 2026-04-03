function maxDomHeight(rootEl){
    if(!rootEl.children){
        return 1;
    }
    let maxHeight=0;
    for(key of rootEl.children){
        let childHeight= maxDomHeight(key);
        maxHeight=Math.max(maxHeight,childHeight);
    }
    console.log(maxHeight);
    
    return maxHeight+1;//+1 for current node
}

let root= document.body;
console.log(root);

let height=maxDomHeight(root);
console.log(`ans`,height);
