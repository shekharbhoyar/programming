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

    //factors
    // for (let i = 0; i <= Math.floor(n / 2); i++) {
    //   if (n % i === 0) {
    //     console.log(i);
    //   }
    // }
    // console.log(n);

    //factorial

    // let fact = 1;
    // for (let i = 1; i <= n; i++) {
    //   fact *= i;
    // }
    // console.log(fact);

    //sum of n natural numbers

    // let sum = 0;
    // for (let i = 0; i <= n; i++) {
    //   sum += i;
    // }
    // console.log(sum);

    //sum of digits
    // let sum = 0;
    // while (n > 0) {
    //   rem = n % 10;
    //   sum += rem;
    //   n = Math.floor(n / 10);
    // }
    // console.log(sum);

    // reverse a number
    // let rev = 0;
    // while (n > 0) {
    //   rem = n % 10;
    //   rev = rev * 10 + rem;
    //   n = Math.floor(n / 10);
    // }
    // console.log(rev);

    //strong number
    // let sum = 0;
    // let copy = n;
    // while (n > 0) {
    //   let rem = n % 10;
    //   let fact = 1;
    //   for (let i = 1; i <= rem; i++) {
    //     fact *= i;
    //   }
    //   sum += fact;
    //   n = Math.floor(n / 10);
    // }
    // if (copy === sum) {
    //   console.log("strong number");
    // } else {
    //   console.log("not a strong number");
    // }
  } else if (n <= 0) {
    console.log("number should be positive and above zero");
  }
  if (isNaN(n)) {
    console.log("invalid input");
  }
}
