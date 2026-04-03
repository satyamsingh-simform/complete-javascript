const arr=['hello World'];

function revArr(arr){;
    let tempArr=arr.join('').split('');

    for(let i=tempArr.length-1;i>=0;i--){
        console.log(tempArr[i]);
    }
}
revArr(arr);

