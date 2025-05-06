let pr = prompt("give any number");
let n = Number(pr);
if (pr === null) {
  console.log("cancelled");
} else {
  if (n > 0) {
    //   let primehai = true;

    //   for (let i = 2; i <= Math.floor(n / 2); i++) {
    //     if (n % i === 0) {
    //       primehai = false;
    //       break;
    //     }
    //   }

    //   console.log(primehai);

    for (let i = 0; i <= Math.floor(n / 2); i++) {
      if (n % i === 0) {
        console.log(i);
      }
    }
    console.log(n);
  } else if (n <= 0) {
    console.log("number should be positive and above zero");
  }
  if (isNaN(n)) {
    console.log("invalid input");
  }
}
