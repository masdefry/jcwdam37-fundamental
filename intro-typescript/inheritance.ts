class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  makeSound(): void {
    console.log('Some generic animal sound');
  }
}

class Dog extends Animal {
  breed: string;

  constructor(name: string, breed: string) {
    super(name); // calls the parent class constructor
    this.breed = breed;
  }

  makeSound(): void {
    console.log('Woof! Woof!');
  }

  makeDog(): void {
    console.log('Guk! Guk!');
  }
}

class Cat extends Dog{
    
}

const myDog = new Dog('Buddy', 'Golden Retriever');
myDog.makeSound();
