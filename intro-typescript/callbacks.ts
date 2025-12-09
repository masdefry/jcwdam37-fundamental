/*
    CALLBACKS
    Function yang dijadikan argument oleh function lain
*/

function Calculator(
  num1: number, // 5
  num2: number, // 13
  operator: string, // +
  cb: (result: number) => void // Displayer
) {
  if (operator === '+') {
    cb(num1 + num2); // Displayer(5 + 13)
  } else if (operator === '-') {
    cb(num1 + num2);
  }
}

function Displayer(result: number) {
  return result;
}

Calculator(5, 13, '+', Displayer)