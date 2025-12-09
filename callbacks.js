function Calculator(num1, num2, operator, cb) {
  if (operator === '+') {
    cb(num1 + num2); // Displayer(3+15)
  } else if (operator === '-') {
    cb(num1 - num2);
  }
}

function Displayer(result) {
  // 18
  return result; // return 18
}

// Indirect Callback
Calculator(5, 13, '+', Displayer);

// Direct Callback
Calculator(5, 13, '+', function (result) {
  // 18
  return result; // return 18
});

{
  // WITHOUT CALLBACK
  function Calculator(num1, num2, operator) {
    if (operator === '+') {
      return num1 + num2;
    } else if (operator === '-') {
      return num1 - num2;
    }
  }

  function Displayer(result) {
    return result;
  }

  const res = Calculator(3, 9, '-');
  console.log(Displayer(res));
}
