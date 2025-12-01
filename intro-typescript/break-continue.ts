/*
    BREAK & CONTINUE
    Break   : Menghentikan looping 
    Continue: Men-skip atau melewati 1x looping
*/

for (let i: number = 1; i < 5; i++) {
  console.log(i);
  if (i === 3) break;
}

for (let i: number = 1; i < 5; i++) { // 3 < 5? TRUE
  if (i === 3) continue; // 3 === 3? TRUE
  console.log(i); // 1, 2
}
