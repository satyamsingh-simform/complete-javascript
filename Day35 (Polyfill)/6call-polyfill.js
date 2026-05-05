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

/*
// CALL
Function.prototype.myCall = function (context, ...args) {
  const key = Symbol();
  context[key] = this;

  const result = context[key](...args);

  delete context[key];
  return result;
};


// APPLY
Function.prototype.myApply = function (context, argsArray) {
  const key = Symbol();
  context[key] = this;

  const result = context[key](...argsArray);

  delete context[key];
  return result;
};


// BIND
Function.prototype.myBind = function (context, ...args1) {
  const fn = this;

  return function (...args2) {
    const key = Symbol();
    context[key] = fn;

    const result = context[key](...args1, ...args2);

    delete context[key];
    return result;
  };
};

*/