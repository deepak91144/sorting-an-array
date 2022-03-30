const fabonaciNumbers = () => {
  const n = 6;
  let a = -1;
  let b = 1;
  for (let i = 1; i <= n; i++) {
    let c = a + b;
    console.log(c);
    a = b;
    b = c;
  }
};
// fabonaciNumbers();

// coprime Number
const coPrime = () => {
  const a = 8;
  const b = 15;
  let i;
  const min = a < b ? a : b;
  for (i = 2; i <= min; i++) {
    if (a % i === 0 && b % i === 0) {
      break;
    }
  }
  if (i === min + 1) {
    console.log(`${a} and ${b} are co prime`);
  } else {
    console.log(`${a} and ${b} are not  co prime`);
  }
};
coPrime();

// N co prime number
Ncoprime = () => {
  let a = 2;
  let b,
    n = 100;
  let i, min;
  while (n) {
    for (b = 2; b <= a; b++) {
      min = a < b ? a : b;
      for (i = 2; i <= min; i++) {
        if (a % i === 0 && b % i === 0) {
          break;
        }
      }
      if (i === min + 1) {
        console.log(`${(a, b)}`);
        n--;
      }
    }
    a++;
  }
};
// Ncoprime();

// binary to decimal
const binaryToDecimal = () => {
  let binary = 1111;
  let i = 0;
  let s = 0;
  while (binary) {
    s = s + Math.pow(2, i) * (binary * 10);
    binary = binary / 10;
    i++;
  }
  console.log(`decimal number is ${Math.floor(s)}`);
};
// binaryToDecimal();

// binary to decimal Improved logic
const binaryToDecimalImprovedLogic = () => {
  const binary = "101101".split("");
  let i,
    d = 0;
  for (i = 0; binary[i]; i++) {
    if (binary[i] === "0") {
      d = d * 2 + 0;
    } else {
      d = d * 2 + 1;
    }
  }
  console.log(d);
};
binaryToDecimalImprovedLogic();
