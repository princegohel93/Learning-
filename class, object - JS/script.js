/*
// creating object
const employee = {
  calcTax() {
    console.log("Tax rate is 10%");
  },
};

// new object 
const jay = {
    salary: 50000,
    calcTax() {
        console.log("Tax rate is 20%");
    }
};
//add employee prototype into jay 
jay.__proto__ = employee;

//creating class
class ToyotaCar {
    constructor(brand, milage){
        console.log("creating new object");
        this.brand = brand;
        this.milage = milage;
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stop");
    }

    setBrand(brand){
        this.brand = brand;
    }
}
//creating objects of the class
let highLux = new ToyotaCar("highLux", 5);
console.log(highLux);
let hyrider = new ToyotaCar("hyrider", 15);
console.log(hyrider);

//inheritance :- creating class
class Parent {
    hello(){
        console.log("hello");
    }
}

class Child extends Parent {
}

let obj = new Child();

*/

/*
class Person {
  constructor(name) {
    console.log("enter the Parent con.");
    this.species = "homo sapiens";
    this.name = name;
  }
  eat() {
    console.log("eat");
  }

  sleep() {
    console.log("sleep");
  }

  work() {
    console.log("do nothing");
  }
}

class engineer extends Person {
  constructor(name) {
    console.log("enter the child con.");
    super(name); // to invoke Parent class constructor
    console.log("exit the child con.");
  }
  work() {
    super.eat();
    console.log("solve problems");
  }
}

let princeObj = new engineer("prince");
*/


let data = "secret information";

class user {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log("data = ", data);
    }
}

class admin extends user {
    constructor(name, email){
        super(name, email);
    }
    editData() {
        data = "some new data value";
    }
}

let s1 = new user("prince", "prince@123");
let s2 = new user("rohit", "rohit@123"); 

let t1 = new user("Daen", "dean@123"); 

let a1 = new admin("admin", "admin@123");
