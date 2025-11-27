/*
    STRING LITERAL
    Format untuk menyisipkan code JS kedalam string 
    
    var fullName = 'Defryan';
    var hobby = 'Nonton Bola';
    var address = 'Jabodetabek';

    Output: 
    Nama saya adalah Defryan. Hobi saya yaitu Nonton Bola. Alamat saya Jabodetabek.
*/

var fullName = 'Defryan';
var hobby = 'Nonton Bola';
var address = 'Jabodetabek';

console.log(
    'Nama saya adalah ' + fullName + '. Hobi saya yaitu ' + hobby + '. Alamat saya ' + address
); 

/* STRING LITERAL: */
console.log(
    `Nama saya adalah ${fullName}. Hobi saya yaitu ${hobby}. Alamat saya ${address}.`
)