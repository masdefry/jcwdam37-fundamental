var name: string = 'Defryan';
var number: number = 100;
var isGraduated: boolean | number | string | undefined | null = true;
isGraduated = 120;
isGraduated = '';
console.log(isGraduated);

// var number1: number = 100;
// var number2: number = '5';
// console.log(number1 + number2);

/*
                    VAR | LET | CONST 
    Duplicate Name   v     x      x
    Re-assign Value  v     v      x
    Rules of Scope   x     v      v
*/

var fullName = 'Defryan';
var fullName = 'Yuke';
console.log(fullName);

// Re-assign Value  v     v      x
// const point = 100;
// point = 5;

const isMarried = true;
{
  const isMarried = false;
}
console.log(isMarried);
