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
console.log(deepsumArray([12, 24, 12]));

function deepsumArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    let numstring = arr[i].toString();
    for (let j = 0; j < numstring.length; j++) {
      sum += parseInt(numstring[j]);
    }
  }
  return sum;
}

firstNonRepeatedCharacter("swiss"); // Output: "w"

function firstNonRepeatedCharacter(string) {
  let charcount = {};
  for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase();
    charcount[char] = (charcount[char] || 0) + 1;
  }

  for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase();
    if (charcount[char] === 1) {
      return string[i];
    }
  }
  return null;
}
console.log(firstNonRepeatedCharacter("swiss"));

function findsmallestnumber(a, b, c) {
  let numbers = [a, b, c];
  let smallest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }
  return smallest;
}
console.log(findsmallestnumber(24, 12, 68));
console.log(findsmallestnumber(8, 3, 2));

//Write a function that takes a number as input and returns true if it is even, otherwise false.

function even(num) {
  // if (num % 2 === 0) {
  //   return "true";
  // } else {
  //   return "false";
  // }
  return num % 2 === 0;
}
console.log(even(4));

//Create a function that reverses a string without using .reverse().

function stringrev(string) {
  let arr = string.split("");
  let reverse = "";
  for (let i = arr.length - 1; i >= 0; i--) {
    reverse += arr[i];
  }
  return reverse;
}
console.log(stringrev("nagpur"));

function stringpalindrome(string) {
  let original = string;
  let reverse = "";
  for (let i = string.length - 1; i >= 0; i--) {
    reverse += string[i];
  }
  const palindrome =
    original === reverse
      ? `${string} is palindrom`
      : `${string} isn't palindrom`;
  return palindrome;
}
console.log(stringpalindrome("nagpur"));
console.log(stringpalindrome("madam"));

//Find the largest number in an array.

function bignumber(arr) {
  let largest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
      largest = arr[i];
    }
  }
  return largest;
}
console.log(bignumber([6, 2, 9, 10, 23, 61, 2, 37]));

//Write a function to calculate the factorial of a number.

function factorial(num) {
  let factorial = 1;
  for (let i = num; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}
console.log(factorial(5));

//Create a function that accepts a string and counts the number of vowels.

function findvowels(string) {
  let count = 0;
  let vowels = "aeiou";
  for (let i = 0; i < string.length; i++) {
    if (vowels.includes(string[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
console.log(findvowels("chandrashekhar"));
console.log(findvowels("nayan"));

//Write a function that generates a random number between two given numbers.
function genraterandomno(min, max) {
  [min, max] = [max, min];
  let randomseed = new Date().getTime();
  console.log(randomseed);
  let range = randomseed % (max - min + 1);
  return min + range;
}
console.log(genraterandomno(7, 1));
// console.log(genraterandomno(9, 3));
// console.log(genraterandomno(9, 3));
// console.log(genraterandomno(1, 3));

//write a function which takes a string and char count char occurance

function countchar(string, char) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === char) {
      count++;
    }
  }
  return count;
}
console.log(countchar("nayan", "m"));

function justcheak() {
  return;
}
justcheak();
// console.log(justcheak())

// const string = "abcdefgh@gmail.com";
// console.log(string.split("@")[0]);

function extractusername(string) {
  // const result = string.split("@")[0];
  // return result;
  let username = "";
  for (let i = 0; i < string.length; i++) {
    if (string[i] === "@") {
      break;
    }
    username += string[i];
  }
  return username;
}
let email = "chandrabhoyar@gmail.com";
console.log(extractusername(email));

function checkleapyear(year) {
  let result =
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
      ? `${year} is a leap year`
      : `${year} isn't a leap year`;
  return result;
}
console.log(checkleapyear(2000));

//Write a function to remove duplicates from an array.

function duplicatecheck(arr) {
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    let isDuplicate = false;
    for (let j = 0; j < unique.length; j++) {
      if (arr[i] === unique[j]) {
        isDuplicate = true;
        break;
      }
    }
    if (!isDuplicate) {
      unique[unique.length] = arr[i];
    }
  }
  return unique;
}
console.log(duplicatecheck("swiss"));
//
// Create a function that returns the Fibonacci sequence up to a given number.

function fibonaccinum(num) {
  let fibcollection = [];
  if (num >= 1) fibcollection[0] = 0;
  if (num >= 2) fibcollection[1] = 1;

  for (let i = 2; i < num; i++) {
    fibcollection[i] = fibcollection[i - 1] + fibcollection[i - 2];
  }
  return fibcollection;
}
console.log(fibonaccinum(10));

//make pattern
//*
//**
//***
//****/
// let numbers1 = 10;
// let stars = "";
// for (let i = 0; i < numbers1; i++) {
//   stars += "*";
//   console.log(stars);
// }

function printPattern(num) {
  for (let i = num; i >= 1; i--) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
      stars += `${j}`;
    }
    console.log(stars);
  }
}
printPattern(4);

function printPattern1(num) {
  for (let i = 1; i <= num; i++) {
    let string = "";
    for (let j = 1; j <= i; j++) {
      string += `${j}`;
    }
    console.log(string);
  }
}
printPattern1(4);

function printPattern2(num) {
  for (let i = 1; i <= num; i++) {
    let str = "";
    for (let k = 1; k <= num - i; k++) {
      str += " ";
    }
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    console.log(str);
  }
}
printPattern2(4);
