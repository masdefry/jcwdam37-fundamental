/*
    Buatlah conditional statement untuk memvalidasi data dari sebuah variable input. 
    Apabila input memiliki value berupa '' atau 0 atau null atau undefined atau NaN, tampilkan error message. 
    Selain value diatas, tampilkan message success
    Example. 

        Input: 
        const input = '';

        Output: 
            'Input cannot be empty'


        Input: 
        const input = 0;

        Output: 
            'Input cannot be empty'

        Input: 
        const input = 'hello'

        Output: 
            'Input is valid'
*/

const input = '';

if (
  input === '' ||
  input === 0 ||
  input === undefined ||
  input === NaN ||
  input === null
) {
  console.log('Input cannot be empty');
} else {
  console.log('Input is valid');
}

if (input) {
  console.log('Input is valid');
} else {
  console.log('Input cannot be empty');
}

/*
    TERNARY OPERATOR 
*/
input ? console.log('Input is valid') : console.log('Input cannot be empty');

100 > 1000
  ? console.log('true')
  : 1000 > 10000
  ? console.log('true')
  : console.log('false');
