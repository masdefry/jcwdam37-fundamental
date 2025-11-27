/*
    METHODS 
    Function bawaan dari Javascript yang berfungsi untuk memanipulasi sebuah tipe data
*/

// STRING
// .slice   : Memotong jumlah karakter tertentu dari sebuah string
var text = 'Javascript fundamental 2025';
console.log(text.slice(0, 3)); // 0, 3 -> .slice dari 0 sampai index ke-2
var school = 'Telkom University';
console.log(school.slice(0, 5)); // 0, 5 -> .slice dari 0 sampai index ke-4
console.log(school.slice(3, 6)); // 3, 6 -> .slice dari 3 sampai index ke-5

// .substring: Basicly mirip seperti .slice. Namun ketika index pertama lebih besar dari index ke-2,
//             otomatis akan di switch. Tapi kalo .slice tidak di switch dan akan
//             menghasilkan output undefined
var streetName = 'Ahmad Yani';
console.log(streetName.substring(0, 3));
console.log(streetName.substring(3, 0)); // 3, 0 -> 0, 3
console.log(streetName.slice(3, 0)); // Undefined

// .replace
var fullName = 'Defryan';
console.log(fullName.replace('e', '#'));

// .toUpperCase: Convert menjadi huruf besar
// .toLowerCase: Convert menjadi huruf kecil
var schoolName = 'Purwadhika';
console.log(schoolName.toUpperCase());
console.log(schoolName.toLowerCase());

// .length: Menghitung jumlah karakter di dalam string
var fruit = 'Semangka';
console.log(fruit.length);

// NUMBER
// .toString: Convert number menjadi tipe data string
var point = 1000;
console.log(point.toString());
console.log(typeof point.toString());

// Number & parseInt: Convert string menjadi tipe data number
var phoneNumber = '08112182182';
console.log(parseInt(phoneNumber));
console.log(Number(phoneNumber));

var platNomor = '116F6';
console.log(parseInt(platNomor));
console.log(Number(platNomor));
