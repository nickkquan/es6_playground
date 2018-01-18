class Greeting {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return "Hello out there, my name is " + this.name;
  }

  sayGoodbye() {
    return "Farewell dear friend";
  }
}

class Person extends Greeting {
  constructor(name) {
    super(name);
    this.favFood = [];
  }
  saySomething() {
    return `${this.name} said: Let's race`;
  }
  sayHi() {
    return `${super.sayHi()} and I like to eat ramen!`;
  }
}

export default Person;
