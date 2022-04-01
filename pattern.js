/*
1 1 1
2 2 2
3 3 3
*/
const patternOne = () => {
  for (let i = 1; i <= 3; i++) {
    let j = 1;
    while (j <= 3) {
      process.stdout.write(`${i} `);
      j++;
    }
    console.log();
  }
};
// patternOne();

/*
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4
*/
const patternTwo = () => {
  let n = 4;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      process.stdout.write(`${j} `);
    }
    console.log();
  }
};
// patternTwo();
/*
5 4 3 2 1
5 4 3 2 1
5 4 3 2 1
5 4 3 2 1
*/
const patternThree = () => {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      process.stdout.write(`${n - j + 1} `);
    }
    console.log();
  }
};

// patternThree();

/*
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16
*/
const patternFour = () => {
  let count = 1;
  let n = 4;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
      process.stdout.write(`${count} `);
      count++;
    }
    console.log();
  }
};
// patternFour();

/*
 *
 * *
 * * *
 * * * *
 * * * * *
 */
const patternFive = () => {
  const n = 5;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`* `);
    }
    console.log();
  }
};
// patternFive();
/*
 1
 2 2
 3 3 3
 4 4 4 4
 5 5 5 5 5
 */
const patternSix = () => {
  const n = 5;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(`${i} `);
    }
    console.log();
  }
};
patternSix();
