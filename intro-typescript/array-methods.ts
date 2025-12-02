// .slice   : Memotong suatu data didalam array
const alphabets = ['a', 'b', 'c', 'd', 'e'];
console.log(alphabets.slice(0, 3)); // === slice(0 sampai 2)

// .indexOf & .lastIndexOf
const foods = ['Bubur', 'Ketoprak', 'Soto', 'Ketoprak'];
console.log(foods.indexOf('Ketoprak'));
console.log(foods.lastIndexOf('Ketoprak'));

// .includes    : Mengecek data didalam array
const drinks = ['Es Teh', 'Es Jeruk', 'Es Teller'];
console.log(drinks.includes('Es Teh'));
console.log(drinks.includes('es teh'));

// .push        : Menambah data di index terakhir
// .unshift     : Menambah data di index awal
const campusPwd = ['Jkt', 'Bsd', 'Bdg'];
campusPwd.push('Btm');
campusPwd.unshift('Sby');
console.log(campusPwd);

// .pop          : Menghapus data di index terakhir
// .shift        : Menghapus data di index awal
const programsInPwd = ['WD', 'UI', 'VD', 'DS', 'DM'];
programsInPwd.pop();
programsInPwd.shift();
console.log(programsInPwd);

// .splice
// .splice(startIndex, totalDataToDelete, newData, newData, newData, ...)
const cars = ['Honda', 'Suzuki', 'Wuling'];
cars.splice(1, 1);
console.log(cars);

const motors = ['Yamaha', 'Suzuki', 'Kawasaki'];
motors.splice(2, 1, 'Honda');
console.log(motors);

const electronics = ['Polytron', 'Lenovo', 'Electrolux'];
electronics.splice(1, 0, 'LG');
console.log(electronics);

const clubs = ['Borneo', 'Persija', 'Persib'];
clubs.splice(10, 0, 'PSM');
console.log(clubs);
