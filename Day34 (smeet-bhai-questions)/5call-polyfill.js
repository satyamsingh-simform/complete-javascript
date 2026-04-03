
/*WITHOUT SYMBOL:created key using obj which may overwrite the user key 
Function.prototype.myCall=function(context, ...arg){
    let context1=context;//context has obj person
    context1.fn=this;//this points to greet fn
    context1.fn(...arg);
}

function greet(city){
    console.log(this.name,`hello ${city}`);//. se phele ko this point krta hai //here this points to greet reason:- greet.call(person,'jsr');
}

const person={name:'Satya'}
const person2={name:'Rajan'}

// greet.call(person,'jsr');//. se phele ko this point krta hai
greet.myCall(person,'jsr');
greet.myCall(person2,'jaipur');
*/


//WITH SYMBOL
Function.prototype.myCall=function(context, ...arg){
    // console.log(this);//greet
    let key=Symbol();
    context[key]=this;
    context[key](...arg);
}

function greet(city){
    console.log(`Hi ${this.name} from city ${city}`);
}

const person={name:'Satya'}
const person2={name:'Rajan'}

greet.myCall(person,'jsr');
greet.myCall(person2,'jaipur')