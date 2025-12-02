const campusPwd = ['BSD', 'JKT', 'BDG', 'BTM', 'JGJ', 'SBY', 'BKS', 'BGR'];

for (let i = 0; i <= campusPwd.length - 1; i++) {
  // 2<=5? TRUE
  //   console.log(campusPwd[i]); // campusPwd[2]
}

for (let i = 0; i < campusPwd.length; i++) {
  //   console.log(campusPwd[i]);
}

/* FOR OF */
for (let item of campusPwd) {
  console.log(item);
}

/* FOR EACH */
campusPwd.forEach((item, index) => {
  console.log(item);
  console.log(index);
});
