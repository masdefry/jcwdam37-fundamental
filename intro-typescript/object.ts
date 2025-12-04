type User = {
  username?: string;
  password: string;
  email: string;
  greeting: () => void;
  birthDate?: string;
};

const user: User = {
  username: 'Defryan',
  password: 'abc12345',
  email: 'defryan@gmail.com',
  greeting() {
    console.log('hello');
  },
};

console.log(user.username);
console.log(user.password);
console.log(user.email);
user.greeting();

user.birthDate = '2000-12-12';

delete user.username;

/* OPTIONAL CHAINING */
const userProfile: any = {};
console.log(userProfile.name); // undefined
console.log(userProfile.name?.firtsName?.shortName);

// firstname, lastname, email, password, dll
const profile = {
  fullName: {
    firstName: '',
    lastName: '',
  },
  password: '',
  email: '',
};

profile?.fullName?.firstName;

/* ACCESSING KEY: Object.keys(objName) */
const student = {
  fullName: {
    firstName: '',
    lastName: '',
  },
  password: '',
  email: '',
};

console.log(Object.keys(student));
console.log(Object.keys(student?.fullName));

/* 
    MUTABLE     : Suatu variable yang datanya bisa diubah (ex. array, object)
    IMMUTABLE   : Suatu variable yang datanya tidak bisa diubah (ex. string, number, undefined, dll) 
*/

const arrFruits = ['Semangka', 'Apel', 'Jeruk'];
arrFruits.push('Mangga');
arrFruits[0] = 'Durian';

let text = 'Lorem ipsum ...';
text = text + 'hello';
console.log(text);

/*
    COPY BY VALUE 
    COPY BY REFERENCE
*/
// COPY BY VALUE    : Primitive
let name = 'Defryan';
let newName = name;
newName = 'xxx';

console.log(name);
console.log(newName);

// COPY BY REFERENCE: Non Primitive
let cars = ['Honda', 'Wuling'];
let newCars = cars;
newCars.push('Suzuki');
console.log(cars);
console.log(newCars);

let foods = ['Nasi', 'Ayam'];
let newFoods = [...foods]; // Copy by value
newFoods.push('Daging');
console.log(foods);
console.log(newFoods);
