//1.sum of natural numbers
//FUNCTION DECLARATION
// function sumofnaturalnumber() {
//   return "hiii";
// }
// const hello = sumofnaturalnumber();
// console.log(hello);

//FUNCTION DEFINITION
// const sumofnaturalnumber = function () {
//   return "hiii";
// };
// const hello = sumofnaturalnumber();
// console.log(hello);

//ARROW FUNCTION
// const sum = () => {
//   return "hiiii";
// };
// const hello = sum();
// console.log(hello);

const sumofnaturalnumber = function (num) {
  let sum = 0;
  for (let i = 1; i <= num; i++) {
    sum = sum + i;
  }
  return sum;
};
console.log(sumofnaturalnumber(10));
console.log(sumofnaturalnumber(2));
console.log(sumofnaturalnumber(5));
console.log(sumofnaturalnumber(4));

const sumofdigits = function (num) {
  let numbers = num.toString().split("");
  let res = numbers.reduce((prev, next) => prev + Number(next), 0);
  return res;
};

console.log(sumofdigits(1234));

const asumofdigit = function (num) {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
};
console.log(asumofdigit(1234));

// const countdigit = function (num) {
//   num = Math.abs(num);
//   let count = 0;
//   do {
//     count++;
//     num = Math.floor(num / 10);
//   } while (num > 0);
//   return count;
// };
// console.log(countdigit(12345));

const findevenorodd = function (num) {
  // if (num % 2 === 0) {
  //   return `${num} is even number`;
  // } else {
  //   return `${num} is odd number `;
  // }
  let res = num % 2 === 0 ? `${num} is even number` : `${num} is odd number`;
  return res;
};

console.log(findevenorodd(25));
console.log(findevenorodd(26));

const setnumber = function (array) {
  console.log(array.sort());
};
let numbers = [3, 1, 2, 8, 3, 1, 6, 3, 8];
setnumber(numbers);

function getlargernumber(arr) {
  // let set = array.sort((a, b) => b - a);
  // let res = set[0];
  // console.log(res);
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
let arr = [65, 24, 97, 12, 76, 2, 34, 1, 78];
console.log(getlargernumber(arr));

const countdigit = function (num) {
  num = Math.abs(num);
  let count = 0;
  // do {
  //   count++;
  //   num = Math.floor(num / 10);
  // } while (num > 0);

  while (num > 0) {
    count++;
    num = Math.floor(num / 10);
  }
  return count;
};
console.log(countdigit(100));

const ispalindrom = function (num) {
  let originalNum = num;
  let rev = 0;
  while (num > 0) {
    let remainder = num % 10;
    rev = rev * 10 + remainder;
    num = Math.floor(num / 10);
  }
  if (originalNum === rev) {
    return `${originalNum} is palindrome`;
  } else {
    return `${originalNum} is not a palindrome`;
  }
};
console.log(ispalindrom(112211));

const reversestring = function (string) {
  let res = string.split("").reverse().join("");
  console.log(res);
};
reversestring("nagpur");
reversestring("nayan");
reversestring("mahi");

const findLargestNumber = function (arr) {
  let largest = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
};
const result = findLargestNumber([2, 5, 8, 1, 9]); // Output: 9
console.log(result);

const isPalindrome = function (string) {
  let originalstring = string;
  let revstring = string.split("").reverse().join("");
  if (originalstring === revstring) {
    console.log("true");
  } else {
    console.log("false");
  }
};
isPalindrome("madam"); // Output: true
isPalindrome("hello"); // Output: false

console.log(countVowels("hello")); // Output: 2
function countVowels(string) {
  let vcount = 0;
  let vowels = "aeiou";
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      vcount++;
    }
  }
  return vcount;
}

// console.log(sumArray([1, 2, 3, 4])); // Output: 10
//1.approach
// function sumArray(arr) {
//   let result = arr.reduce((a, b) => a + b);
//   return result;
// }
//2approach
// function sumArray(arr) {
//   let numbera = Number(arr.join(""));
//   let sum = 0;
//   while (numbera > 0) {
//     let remainder = numbera % 10;
//     sum = sum + remainder;
//     numbera = Math.floor(numbera / 10);
//   }
//   return sum;
// }

// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }
console.log(sumArray([12, 24, 12]));

function deepsumArray
