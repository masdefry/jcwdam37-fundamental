/*
    ARRAY
    Struktur data yang digunakan untuk mengelompokan tipe-tipe data lainnya
*/

// Create Array
const firstArray: any[] = [
  'Apel',
  100000,
  true,
  false,
  undefined,
  null,
  'Semangka',
];
const secondArray = new Array('Honda', 'Toyota', 'Wuling');

// Read Data Array
const products = ['Indomie Goreng', 'Indomie Kuah', 'Sarimi Kuah'];
products[1];
products[0];
products[2];

// Update Data Array
const property = ['Hotel', 'Apartment', 'Villa'];
property[2] = 'Guest House';

// Delete Data Array
const foods = ['Pizza', 'Burger', 'Ketoprak'];
delete foods[0];
console.log(foods);
