
// What Will We Learn Today?

// 1. What is a Class
// 2. Syntax
// 3. Initialize the Object
// 4. Class as Expression
// 5. Class Fields
// 6. Getters and Setters
// 7. Static Properties
// 8. Private and Public
// 9. Extending
// 10. OOP with Classes


/*
// 2. Syntax
class AClass {
    constructor() {}//constructor helps to create obj(instance of) of class //if there is no constructor then default constructor runs
    method1() {
        console.log('method1');
    }
    method2() {}
    method3() {}
    method4() {}
}

//obj a will have class all property and method
const a = new AClass(); // Here we are calling the constructor with the new keyword to create the object instance of the class.
console.log(a);//AClass {}
console.log(a.method1());//method1

const b=new AClass();
console.log(a==b);//false
*/



/*
// 3. Initialize the Object
class Car {
    constructor(model) {
        this.carModel = model; //this-->points to the current obj that called constructor
    }
    printModel() {
        console.log(this.carModel);
    }
}
const bmwCar = new Car("BMW");
bmwCar.printModel();//BMW
const audiCar=new Car('audi');
audiCar.printModel();//audi


/*prototype
    Car.prototype.constructor
    console.log(Car.prototype.constructor);//[class Car]
    Why?
        -Every prototype object automatically has a property:
            constructor
            which points back to the function that created it.

        -So internally JavaScript does something like:
            Car.prototype = {
               constructor: Car,
               printModel: function(){...}
            }
        -So:
            Car.prototype.constructor → Car
/
console.log(typeof Car); // function //In JavaScript, classes are actually special functions.
console.log(Car.prototype);
console.log(Car)
console.log(Car.prototype.constructor);
console.log(Car === Car.prototype.constructor); // true
*/



/*
// 4.Class as Expression
const Employee = class {
    welcome() {
        console.log("Hello Employee");
    }
}
const emp1 = new Employee();
emp1.welcome();
const emp2=new Employee();
emp2.welcome()

//Named Class
const Dept = class Department {
    welcome() {
        console.log("Welcome to Department");
        console.debug(Department)//it can only access inside the class 
    }
}
const d = new Dept(); //Department name can't be accessed outside the class
d.welcome();
*/



/*
// 5. Class Fields

class Phone {
    brand = "Apple";

    make() {
        console.log(this.brand)
    }
};
const phone = new Phone();
phone.make(); // Apple
console.log(phone.brand);//apple
console.log(phone);//Phone { brand: 'Apple' }
// console.log(Phone.prototype.make()); // undefined
*/


/*
// 6. Getters and Setters:
//      -these are at method level they used to get and set the value of property(variable)
//      -they give some control while getting and setting the value we can apply some checks
class Animal {
    constructor(name) {
        this.name = name;//before this initiaization set is called to check the condn
    }

    get name(){
        return this._name;
    }
    set name(value){
        if(!value){
            console.log('name must be provided');
            return;
        }
        if(value.length<3){
            console.warn("name should have more letter");
            return;
        }
        this._name = value;
    }

}
const animal = new Animal("Tiger");
console.log(animal.name);//get is called   //Tiger
console.log(animal)         //Animal { _name: 'Tiger' }

// console.log(Animal.prototype)
// animal.name = "";

// const animal2=new Animal('fo');//name should have more letter
const animal3=new Animal();//name must be provided
*/



/*
// 7. Static Properties

//using static keyword we can create a static method
//to call a static method of class we do not required object. 
//for static method this points to class in which static method is created, as obj is not needed ,so it cant point to any object
class MyClass {
    static staticMethod() {
        console.log(this);
    }
}
MyClass.staticMethod();


class User{
    constructor(name,email){
        this.name=name;
        this.email=email;
    }
    
    greet(){
        console.log(`Hi i am ${this.name}`);
    }

    // Static utility method:to check email validation
    static isValidEmail(email) {
        return email.includes("@") && email.includes(".");// Very basic check
    }
    // Static factory method to create guest user
    static createGuest() {
        return new User("Guest", "guest@example.com");
    }
}

const user1=new User('satya','satya@.com')
console.log(user1.name);//satya
console.log(user1.email);//satya@.com
user1.greet()//Hi i am satya
*/


/*
// Using static method without creating any user
console.log(User.isValidEmail("john@example.com"));  // true
console.log(User.isValidEmail("johnexample.com"));   // false

// Creating a guest user using static method
const guestUser = User.createGuest();
guestUser.greet(); // Hi, I’m Guest

// Creating a real user
const user1 = new User("John", "john@example.com");
user1.greet(); // Hi, I’m John
*/



/*
// 8.Private and Public:there are useful for creating abstraction and encapsulation.
// Public: These fields and methods are accessible from anywhere.
// Private: These fields and methods are accessible only from the inside of the class.

class WashingMachine {
    // Public field
    brand;

    // Private fields:with # public field become private field
    #powerStatus = false;
    #currentCycle = null;

    // Simulated Protected field (naming convention)
    _log = [];

    constructor(brand) {
      this.brand = brand;
    }

    //public method
    //user only need to know about start methods of washing mc //inside start they can be spin, drain etc method but user need not to care about them i.e.,they need to be private method
    start(cycle){
      if (!this.#powerStatus)this.#turnOn();
      this.#currentCycle = cycle;
      console.log(`Starting ${cycle} cycle...`);

      this.#spin();
      this.#drain();
      this._log.push(`Cycle ${cycle} completed.`);
      this.stop();
    }
    //user only need to know about start methods of washing mc //inside stop they can be turn off etc method but user need not to care about them
    stop(){
      console.log("Washing machine stopped.");
      this.#turnOff();
    }

    //Private method:using # in js create private method
    #turnOn(){
      this.#powerStatus = true;
      console.log("Power ON");
    }
    #turnOff(){
      this.#powerStatus = false;
      console.log("Power OFF");
    }
    #spin(){
      console.log("Spinning...");
    }
    #drain() {
      console.log("Draining...");
    }


    // Simulated protected method
    _showLog() {
      console.log("Internal Logs:", this._log);
    }
}
const lgWasher = new WashingMachine("LG");
lgWasher.start("Quick Wash");
console.log(lgWasher.brand); //LG

// Private access not allowed
// console.log(lgWasher.#powerStatus); // SyntaxError
// lgWasher.#turnOn(); // SyntaxError
// Public methods
lgWasher.stop(); // Washing machine stopped. Power OFF
// Accessing protected (not recommended but possible)
lgWasher._showLog(); // Internal Logs: [ 'Cycle Quick Wash completed.' ]
*/




//9.Extending:to perform inheritance in js extends keyword is used
class Human{
    species = "Homo Sapiens"; //Public field

    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    introduce(){
      console.log(`Hi, I'm ${this.name}, and I'm ${this.age} years old.`);
    }
    sleep(){
      console.log(`${this.name} is sleeping.`);
    }
}

// Subclass/derived class:Student
class Student extends Human{
    species = "Homo Sapiens (Student)";

    constructor(name, age, grade){
        super(name, age); //super: calls the constructor of parent class(Human)
        this.grade = grade;
    }
    //polymorphism:same method behave differently // Method overriding
    introduce(){
        console.log(
          `Hey! I'm ${this.name}, ${this.age} years old and I study in grade ${this.grade}.`
        );
    }
    study(){
      console.log(`${this.name} is studying...`);
    }
}

// Subclass: Teacher
class Teacher extends Human{
    constructor(name, age, subject){
        super(name, age);//super keyword power // Inherit name and age from Human 
        this.subject = subject;
    }
    // Overriding the introduce method
    introduce(){
        console.log(`Hello, I’m ${this.name}, a ${this.subject} teacher.`);
    }
    teach(){
        console.log(`${this.name} is teaching ${this.subject}.`);
    }
}

// Usage
const alice = new Student("Alice", 14, 9);
const bob = new Teacher("Bob", 35, "Mathematics");

alice.introduce();//"Hey! I'm Alice, 14 years old and I study in grade 9."      // Overridden method in Student
bob.introduce();//"Hello, I’m Bob, a Mathematics teacher."     // Overridden method in Teacher
alice.sleep();//"Alice is sleeping."   // Inherited from Human
bob.sleep();// "Bob is sleeping."      // Inherited from Human

console.log(alice.species); // "Homo Sapiens (Student)"
console.log(bob.species);   // "Homo Sapiens" (inherited from Human)