/* 
    CONDITIONAL STATEMENT
    Pengkondisian, digunakan untuk memberikan keputusan.

    Syntax:
    - if
    - if else
    - if else if else
*/

/*
    IF 
    if(condition){
        Block of code
    }
*/
let age: number = 20;
if (age >= 17) {
  console.log('You can create national id card');
}

/*
    IF ELSE
    if(condition){
        Block of code
    }else{
        Block of code    
    }
*/
let examScore: number = 69;
if (examScore >= 70) {
  console.log('Your exam is passed');
} else {
  console.log('Your exam is not passed');
}

/*
    IF ELSE IF ELSE
    if(condition){
        Block of code
    }else if(condition){
        Block of code
    }else if(condition){
        Block of code
    }...{
        ...
    }else{
        Block of code    
    }
*/
let studentScore: number = 80;

if (studentScore >= 85) { // FALSE
  console.log('Grade: A');
} else if (studentScore >= 75) { // TRUE
  console.log('Grade: B');
} else if (studentScore >= 70) {
  console.log('Grade: C');
} else {
  console.log('Grade: D');
}
