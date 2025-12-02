/*
    FUNCTION
    Sebuah wadah untuk menampung code yang kita tulis. 
    Fungsinya agar code yg kita tulis menjadi re-usable
*/

// Declarative Function
Output();
Output();
Output();
function Output() {
  const fruits = ['Semangka', 'Melon', 'Apel'];
  for (let item of fruits) {
    console.log(item);
  }
}

// Expression Function
const Printout = function () {
  const fruits = ['Semangka', 'Melon', 'Apel'];
  for (let item of fruits) {
    console.log(item);
  }
};
Printout();

// Arrow Function
const PrintLoop = () => {
  const fruits = ['Semangka', 'Melon', 'Apel'];
  for (let item of fruits) {
    console.log(item);
  }
};
PrintLoop();

/*
    FUNCTION with PARAMS & ARGUMENTS
*/

function Greeting(fullName: string, address?: string) {
  console.log(`Hello, ${fullName}. My address at ${address}`);
}

Greeting('Defryan');
Greeting('Wisnu', 'Jabodetabek');

/* FUNCTION with DEFAULT PARAMETER */
function PrintOut(username: string = 'User Customer') {
  console.log(`welcome, ${username}`);
}

PrintOut();
PrintOut('Defryan');

/* 
    FUNCTION with RETURN 
    Function yang menyimpan hasil
*/

function CountStudentScore(exam1: number, exam2: number) {
  return exam1 + exam2
}

let studentScore = CountStudentScore(85, 95); // 180

function StudentResult(finalScore: number) { // finalScore = 180
  if (finalScore >= 70) {
    console.log('Student Graduate');
  } else {
    console.log('Student Not Graduate');
  }
}

StudentResult(studentScore) // StudentResult(180)
