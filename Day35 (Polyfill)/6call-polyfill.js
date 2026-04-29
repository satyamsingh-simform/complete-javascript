//WITH SYMBOL
Function.prototype.myCall=function(context, ...arg){  // console.log(this);//greet
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