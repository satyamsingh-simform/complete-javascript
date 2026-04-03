/*understand promise 
    -promise object represent the completion(or failure) of an asynchronous operation. 
    -to overcome the prblm of callbackhell wee use promise
    -we will understand promise with whether project
    -promise is a Object that has three state.

  promise has three state
    -pending:initial state, when we make request promise is in pendiing state
    -resolve:jb data aa jaye(data nhi de skte hai agar server ye bola to o v resolve me hi count hoga)-->isse time pe then run krta hai
    -reject :jb data nhi bheja-->tb catch run hota hai
        -reject condition run if:-failed to talk to server
            -1.Internet down 2.Server Down 3.DNS server down
            -in all above cases server failed to give response
            -if server has responded then it is consider as resolved
                -like rate limit exceed:-data has not not,but still consider as resolved bcz server responded 
                -wrong url also in resolved case.
 // async task:fetch()
*/


/*problem what promise solve to isko use kre kaise o neech bataye hai
const obj=fetch(`http://api.weatherapi.com/v1/current.json?key=34028ea163234432885100605251606&q=London&aqi=yes`);
console.log(obj);//promise//ye promise print krega kyuki upper wala task async task hai(time lega pr wait kiye hi nhi isliye promise print hua)

*/


//const promise=fetch(`http://api.weatherapi.com/v1/current.json?key=34028ea163234432885100605251606&q=London&aqi=yes`);
/*//isse format me hi async task ko use kr skte hai   //.then tvi execute hoga jb tkk val na aa jaye
promise.then((data)=>{  
    const promise2=data.json();//console.log(data);//ye to header de diya data ke liye .json likhna prega   //console.log(data.json());//prblm ye hai ki .json() v promise lake de de raha hai kyu ki ye v async task hai json me convert krna
    promise2.then((data)=>{
        console.log(data);
    })
}).catch((err)=>{
    console.log(err); 
})
*/
/*//upper wale task ko aise v likh skte hai 
const pro2=promise.then((data)=>{
    return data.json();
})
pro2.then((data)=>{
    console.log(data);
})
*/
/*//uper wale ko aise v likh skte hai
promise.then((data)=>{
    return data.json();
}).then((data)=>{  //isse ko promise chaning v bolte hai
    console.log(data);
})
*/
/*//uper wala ko or v short kr ke likh skte hai-->promiseChaning
promise
    .then(data=>data.json())
    .then(data=>console.log(data.current.temp_c))
    .catch(err=>console.log(err))
*/

/*Why it is Promise Chaining
    -Because you are linking multiple .then() calls on the same Promise, where the result of one step is passed to the next.
*/
//upper wale ko aise v likh skte hai
fetch(`http://api.weatherapi.com/v1/current.json?key=34028ea163234432885100605251606&q=London&aqi=yes`)
.then(res=> res.json())
.then(data=>console.log(data.current.temp_c ,"\n",data.current.temp_f))
.catch(err=>console.log(err))

