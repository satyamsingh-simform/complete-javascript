/*
let favData=[];
let originalData=[];

window.onload=function(){
    favData=JSON.parse(localStorage.getItem('favoritesQuote')) || [];
    originalData=[...favData];
    render(favData);

    // populate filter dropdown
    let filter=document.getElementById('filter-author');
    let authors=[...new Set(originalData.map(q => q.author))];
    authors.forEach((a)=>{
        let opt = document.createElement('option');
        opt.value = a;
        opt.innerText = a;
        filter.appendChild(opt);
    });
}

// render function
function render(data){
    let divEl = document.getElementById('container');

    divEl.innerHTML = data.map((data)=>`
        <div id="content">
            <p class='fav-data'>${data.quote}</p>
            <p class='fav-data'>-${data.author}</p>
            <button class='delete' id=${data.id}>Delete</button>
        </div>
    `).join('');

    let delBtn = document.getElementsByClassName('delete');

    Array.from(delBtn).forEach((button)=>{
        button.addEventListener('click',(e)=>{
            favData = favData.filter((q)=>q.id != e.target.id);
            localStorage.setItem('favoritesQuote', JSON.stringify(favData));

            originalData = [...favData];
            render(favData);
        })
    })
}

// search
document.getElementById('search-input').addEventListener('input',(e)=>{
    let val = e.target.value.toLowerCase();
    let filtered = originalData.filter(q =>
        q.quote.toLowerCase().includes(val) ||
        q.author.toLowerCase().includes(val)
    );
    render(filtered);
});

// filter
document.getElementById('filter-author').addEventListener('change',(e)=>{
    let val = e.target.value;
    if(val === 'all'){
        render(originalData);
    } else {
        let filtered = originalData.filter(q => q.author === val);
        render(filtered);
    }
});

*/

let div=document.querySelector('#container');
let optFilter=document.getElementById('filter-author')

let favQuotes=JSON.parse(localStorage.getItem('favoritesQuote')) || [];
console.log(favQuotes);
let ogData=favQuotes;
console.log('before:',ogData);


function renderQuote(favQuotes2){
    // i was only adding new elements, not removing the old ones, which only remove el from local storage and was creating duplicate el of left one.
    div.innerHTML=``;
    favQuotes2.forEach((quote)=>{
        let quoteContainer=document.createElement('div');
        let p=document.createElement('p');
        let p_quoteBy=document.createElement('p');
        let delBtn=document.createElement('button');

        quoteContainer.classList.add('q-container')
        p.classList.add('quote');
        p_quoteBy.classList.add('quote-by');
        delBtn.classList.add('del-btn')
        delBtn.id=`${quote.id}`;
        

        p.innerText=quote.quote;
        p_quoteBy.innerText=`-${quote.author}`;
        delBtn.innerText=`Delete`

        quoteContainer.appendChild(p);
        quoteContainer.appendChild(p_quoteBy);
        quoteContainer.appendChild(delBtn)


        div.appendChild(quoteContainer)
    })

    //i was doing querySelector which just applied to one btn, and i was debugging why that is happening took lots of time do keep in mind next time
    //i was applying .filter method and comparing  quote.id===e.target.id ,one is string and other is no. which again took lots of time to figure out 
    let deleteBtn=document.querySelectorAll('.del-btn');
    console.log(deleteBtn);
    
    deleteBtn.forEach((btn,index)=>{
        btn.addEventListener('click',(e)=>{
            console.log(e.target);
            favQuotes=favQuotes.filter((quote)=>quote.id!==Number(e.target.id));
            console.log(favQuotes);
            localStorage.setItem('favoritesQuote',JSON.stringify(favQuotes));
            renderQuote(favQuotes);
        })
    })
    console.log(div.children.length);
    
}
renderQuote(favQuotes);


//search
let searchBtn=document.getElementById('search-input')


searchBtn.addEventListener('input',(e)=>{
    let searchVal=e.target.value.toLowerCase();
    let filtered=ogData.filter((q)=>{
        return q.quote.toLowerCase().includes(searchVal) || q.author.toLowerCase().includes(searchVal);
    })
    console.log('after:',filtered);
    renderQuote(filtered);
})


function createOption(fav){
    fav.forEach((quote)=>{
        let option=document.createElement('option');
        option.value=`${quote.author}`
        option.appendChild(document.createTextNode(`${quote.author}`))
        optFilter.appendChild(option);
    })
    
}
createOption(favQuotes);
//filter
optFilter.addEventListener('change',(e)=>{
    console.log(e.target.value);
    console.log(e.target.value==='all');
    
    if(e.target.value==='all'){
        renderQuote(ogData);
        return;
    }
    let filtered=ogData.filter((q)=>{
        return q.author.toLowerCase().includes(e.target.value.toLowerCase());
    })
    console.log(filtered);
    renderQuote(filtered);
})