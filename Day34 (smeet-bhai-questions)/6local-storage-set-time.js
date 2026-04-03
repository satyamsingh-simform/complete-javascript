/*LocalStorage
    -LocalStorage does not support expiration time. Data remains stored until it is manually removed or the user clears browser storage.
    -If you don’t use JSON.stringify, you cannot store objects in localStorage because it only stores strings.

    -methods:
        1.setItem(key, value)
            -Stores a key–value pair in localStorage.

        2.getItem(key)
            -Retrieves the value associated with the key. Returns null if the key does not exist.

        3.removeItem(key)
            -Deletes the specific key–value pair from localStorage.

        4.clear()
            -Removes all key–value pairs from localStorage.

        5.key(index)
            -Returns the key name stored at a given index.

        6.length
            -Returns the total number of items stored in localStorage.
*/
// localStorage.setItem('name','satyam');
// console.log(localStorage.getItem('name'));
// console.log(localStorage.length);
// localStorage.removeItem('name')
localStorage.clear();

const myLocalStorage={
    prefix:"local__",
    customSetItem(key,value,expire){
        const obj={
            value:value,
            expiry:Date.now() + expire,
        }
        localStorage.setItem(this.prefix+key,JSON.stringify(obj))
    },
    customGetItem(key){
        const obj=JSON.parse(localStorage.getItem(this.prefix+key));
        if(Date.now()>obj.expiry){
            console.log('value expire');
            localStorage.removeItem(this.prefix+key)//key has string in it pass key directly
            // return obj.value;        //this will return the data irrespective of removeItem bcz obj already had the value 
            return null;
        }
        return obj.value;
    }
}

myLocalStorage.customSetItem('data','Jamshedpur',3000);
console.log(myLocalStorage.customGetItem('data'));

setTimeout(()=>{
    console.log('inside setTimeout');
    console.log(myLocalStorage.customGetItem('data'));
},7000)








