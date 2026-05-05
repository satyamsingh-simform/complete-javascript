
//WITHOUT SYMBOL:created key using obj which may overwrite the user key 
Function.prototype.myCall=function(context, ...arg){
    let context1=context;//context has obj person
    context1.fn=this;//this points to greet fn
    context1.fn(...arg);//spread fn hai
}

function greet(city){
    console.log(this.name,`hello ${city}`);//. se phele ko this point krta hai //here this points to greet reason:- greet.call(person,'jsr');
}

const person={name:'Satya'}
const person2={name:'Rajan'}

// greet.call(person,'jsr');//. se phele ko this point krta hai
greet.myCall(person,'jsr');//myCall is normal fn mtlb fn ke andar this jo usko call kiyahai usko point krega ,i.e., greet
greet.myCall(person2,'jaipur');



//WITH SYMBOL
Function.prototype.myCall=function(context, ...arg){
    // console.log(this);//greet
    let key=Symbol();
    context[key]=this;
    context[key](...arg);
    delete context[key];
}

function greet(city){
    console.log(`Hi ${this.name} from city ${city}`);
}

const person={name:'Satya'}
const person2={name:'Rajan'}

greet.myCall(person,'jsr');
greet.myCall(person2,'jaipur')


/*Pollyfill for bind */
Function.prototype.myBind = function (context, ...arg) {
    let context1 = context;        // context = object
    context1.fn = this;            // this = function

    return function (...newArg) {  // bind returns a function
        context1.fn(...arg, ...newArg);
    }
}
const fn1 = greet.myBind(person, 'jsr');
fn1();   // Satya hello jsr

const fn2 = greet.myBind(person2);
fn2('jaipur'); // Rajan hello jaipur


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