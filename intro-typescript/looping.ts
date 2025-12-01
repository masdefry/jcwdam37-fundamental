/*
    LOOP STATEMENT 
    Digunakan untuk perulangan 

    - WHILE
    - DO WHILE
    - FOR LOOP

    3 syarat untuk melakukan looping: 
    1. Menentukan start condition
    2. Menentukan condition
    3. Menentukan exit way
*/
const text = 'Halo Dunia!';
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);
console.log(text);

/*
    while(condition){
        Block of code
    }
*/
let start = 1; // 1 -> 2 -> 3 -> 4 -> 5 -> ... -> 10 -> 11
while (start <= 10) {
  //  11 <= 10? FALSE
  console.log(text); // 10x
  start++;
}

/*
    do{
        Block of code
    }while(condition)
*/
{
  let start = 1; // 1 -> 2 -> 3 -> 4

  do {
    console.log(text); // 3x
    start++;
  } while (start <= 3); // 4 <= 3? FALSE
}

{
  // 01
  let init = 1;

  while (init < 1) {
    // FALSE
    console.log('web development');
    init++;
  }

  // 02
  let start = 1; // 1 -> 2
  do {
    console.log('ui/ux');
    start++;
  } while (start < 1); // 2 < 1? FALSE
}

/*
    for(let start; condition; exit way){
        Block of code
    }
*/
for (let i = 1; i <= 3; i++) {
  console.log(text);
}
