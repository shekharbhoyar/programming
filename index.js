// //1.sum of natural numbers
// //FUNCTION DECLARATION
// // function sumofnaturalnumber() {
// //   return "hiii";
// // }
// // const hello = sumofnaturalnumber();
// // console.log(hello);

// //FUNCTION DEFINITION
// // const sumofnaturalnumber = function () {
// //   return "hiii";
// // };
// // const hello = sumofnaturalnumber();
// // console.log(hello);

// //ARROW FUNCTION
// // const sum = () => {
// //   return "hiiii";
// // };
// // const hello = sum();
// // console.log(hello);

// const sumofnaturalnumber = function (num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum = sum + i;
//   }
//   return sum;
// };
// console.log(sumofnaturalnumber(10));
// console.log(sumofnaturalnumber(2));
// console.log(sumofnaturalnumber(5));
// console.log(sumofnaturalnumber(4));

// const sumofdigits = function (num) {
//   let numbers = num.toString().split("");
//   let res = numbers.reduce((prev, next) => prev + Number(next), 0);
//   return res;
// };

// console.log(sumofdigits(1234));

// const asumofdigit = function (num) {
//   let sum = 0;
//   while (num > 0) {
//     sum += num % 10;
//     num = Math.floor(num / 10);
//   }
//   return sum;
// };
// console.log(asumofdigit(1234));

// // const countdigit = function (num) {
// //   num = Math.abs(num);
// //   let count = 0;
// //   do {
// //     count++;
// //     num = Math.floor(num / 10);
// //   } while (num > 0);
// //   return count;
// // };
// // console.log(countdigit(12345));

// const findevenorodd = function (num) {
//   // if (num % 2 === 0) {
//   //   return `${num} is even number`;
//   // } else {
//   //   return `${num} is odd number `;
//   // }
//   let res = num % 2 === 0 ? `${num} is even number` : `${num} is odd number`;
//   return res;
// };

// console.log(findevenorodd(25));
// console.log(findevenorodd(26));

// const setnumber = function (array) {
//   console.log(array.sort());
// };
// let numbers = [3, 1, 2, 8, 3, 1, 6, 3, 8];
// setnumber(numbers);

// function getlargernumber(arr) {
//   // let set = array.sort((a, b) => b - a);
//   // let res = set[0];
//   // console.log(res);
//   let largest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }
// let arr = [65, 24, 97, 12, 76, 2, 34, 1, 78];
// console.log(getlargernumber(arr));

// const countdigit = function (num) {
//   num = Math.abs(num);
//   let count = 0;
//   // do {
//   //   count++;
//   //   num = Math.floor(num / 10);
//   // } while (num > 0);

//   while (num > 0) {
//     count++;
//     num = Math.floor(num / 10);
//   }
//   return count;
// };
// console.log(countdigit(100));

// const ispalindrom = function (num) {
//   let originalNum = num;
//   let rev = 0;
//   while (num > 0) {
//     let remainder = num % 10;
//     rev = rev * 10 + remainder;
//     num = Math.floor(num / 10);
//   }
//   if (originalNum === rev) {
//     return `${originalNum} is palindrome`;
//   } else {
//     return `${originalNum} is not a palindrome`;
//   }
// };
// console.log(ispalindrom(112211));

// const reversestring = function (string) {
//   let res = string.split("").reverse().join("");
//   console.log(res);
// };
// reversestring("nagpur");
// reversestring("nayan");
// reversestring("mahi");

// const findLargestNumber = function (arr) {
//   let largest = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// };
// const result = findLargestNumber([2, 5, 8, 1, 9]); // Output: 9
// console.log(result);

// const isPalindrome = function (string) {
//   let originalstring = string;
//   let revstring = string.split("").reverse().join("");
//   if (originalstring === revstring) {
//     console.log("true");
//   } else {
//     console.log("false");
//   }
// };
// isPalindrome("madam"); // Output: true
// isPalindrome("hello"); // Output: false

// console.log(countVowels("hello")); // Output: 2
// function countVowels(string) {
//   let vcount = 0;
//   let vowels = "aeiou";
//   for (let i = 0; i < string.length; i++) {
//     if (vowels.includes(string[i].toLowerCase())) {
//       vcount++;
//     }
//   }
//   return vcount;
// }

// // console.log(sumArray([1, 2, 3, 4])); // Output: 10
// //1.approach
// // function sumArray(arr) {
// //   let result = arr.reduce((a, b) => a + b);
// //   return result;
// // }
// //2approach
// // function sumArray(arr) {
// //   let numbera = Number(arr.join(""));
// //   let sum = 0;
// //   while (numbera > 0) {
// //     let remainder = numbera % 10;
// //     sum = sum + remainder;
// //     numbera = Math.floor(numbera / 10);
// //   }
// //   return sum;
// // }

// // function sumArray(arr) {
// //   let sum = 0;
// //   for (let i = 0; i < arr.length; i++) {
// //     sum += arr[i];
// //   }
// //   return sum;
// // }
// console.log(deepsumArray([12, 24, 12]));

// function deepsumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let numstring = arr[i].toString();
//     for (let j = 0; j < numstring.length; j++) {
//       sum += parseInt(numstring[j]);
//     }
//   }
//   return sum;
// }

// firstNonRepeatedCharacter("swiss"); // Output: "w"

// function firstNonRepeatedCharacter(string) {
//   let charcount = {};
//   for (let i = 0; i < string.length; i++) {
//     let char = string[i].toLowerCase();
//     charcount[char] = (charcount[char] || 0) + 1;
//   }

//   for (let i = 0; i < string.length; i++) {
//     let char = string[i].toLowerCase();
//     if (charcount[char] === 1) {
//       return string[i];
//     }
//   }
//   return null;
// }
// console.log(firstNonRepeatedCharacter("swiss"));

// function findsmallestnumber(a, b, c) {
//   let numbers = [a, b, c];
//   let smallest = numbers[0];
//   for (let i = 0; i < numbers.length; i++) {
//     if (numbers[i] < smallest) {
//       smallest = numbers[i];
//     }
//   }
//   return smallest;
// }
// console.log(findsmallestnumber(24, 12, 68));
// console.log(findsmallestnumber(8, 3, 2));

// //Write a function that takes a number as input and returns true if it is even, otherwise false.

// function even(num) {
//   // if (num % 2 === 0) {
//   //   return "true";
//   // } else {
//   //   return "false";
//   // }
//   return num % 2 === 0;
// }
// console.log(even(4));

// //Create a function that reverses a string without using .reverse().

// function stringrev(string) {
//   let arr = string.split("");
//   let reverse = "";
//   for (let i = arr.length - 1; i >= 0; i--) {
//     reverse += arr[i];
//   }
//   return reverse;
// }
// console.log(stringrev("nagpur"));

// function stringpalindrome(string) {
//   let original = string;
//   let reverse = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     reverse += string[i];
//   }
//   const palindrome =
//     original === reverse
//       ? `${string} is palindrom`
//       : `${string} isn't palindrom`;
//   return palindrome;
// }
// console.log(stringpalindrome("nagpur"));
// console.log(stringpalindrome("madam"));

// //Find the largest number in an array.

// function bignumber(arr) {
//   let largest = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > largest) {
//       largest = arr[i];
//     }
//   }
//   return largest;
// }
// console.log(bignumber([6, 2, 9, 10, 23, 61, 2, 37]));

// //Write a function to calculate the factorial of a number.

// function factorial(num) {
//   let factorial = 1;
//   for (let i = num; i > 0; i--) {
//     factorial *= i;
//   }
//   return factorial;
// }
// console.log(factorial(5));

// //Create a function that accepts a string and counts the number of vowels.

// function findvowels(string) {
//   let count = 0;
//   let vowels = "aeiou";
//   for (let i = 0; i < string.length; i++) {
//     if (vowels.includes(string[i].toLowerCase())) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(findvowels("chandrashekhar"));
// console.log(findvowels("nayan"));

// //Write a function that generates a random number between two given numbers.
// function genraterandomno(min, max) {
//   [min, max] = [max, min];
//   let randomseed = new Date().getTime();
//   console.log(randomseed);
//   let range = randomseed % (max - min + 1);
//   return min + range;
// }
// console.log(genraterandomno(7, 1));
// // console.log(genraterandomno(9, 3));
// // console.log(genraterandomno(9, 3));
// // console.log(genraterandomno(1, 3));

// //write a function which takes a string and char count char occurance

// function countchar(string, char) {
//   let count = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === char) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countchar("nayan", "m"));

// function justcheak() {
//   return;
// }
// justcheak();
// // console.log(justcheak())

// // const string = "abcdefgh@gmail.com";
// // console.log(string.split("@")[0]);

// function extractusername(string) {
//   // const result = string.split("@")[0];
//   // return result;
//   let username = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] === "@") {
//       break;
//     }
//     username += string[i];
//   }
//   return username;
// }
// let email = "chandrabhoyar@gmail.com";
// // console.log(extractusername(email));

// function checkleapyear(year) {
//   let result =
//     (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
//       ? `${year} is a leap year`
//       : `${year} isn't a leap year`;
//   return result;
// }
// // console.log(checkleapyear(2000));

// //Write a function to remove duplicates from an array.

// // function duplicatecheck(arr) {
// //   let unique = [];
// //   for (let i = 0; i < arr.length; i++) {
// //     let isDuplicate = false;
// //     for (let j = 0; j < unique.length; j++) {
// //       if (arr[i] === unique[j]) {
// //         isDuplicate = true;
// //         break;
// //       }
// //     }
// //     if (!isDuplicate) {
// //       unique[unique.length] = arr[i];
// //     }
// //   }
// //   return unique;
// // }
// // console.log(duplicatecheck("swiss"));
// // //
// // // Create a function that returns the Fibonacci sequence up to a given number.

// // function fibonaccinum(num) {
// //   let fibcollection = [];
// //   if (num >= 1) fibcollection[0] = 0;
// //   if (num >= 2) fibcollection[1] = 1;

// //   for (let i = 2; i < num; i++) {
// //     fibcollection[i] = fibcollection[i - 1] + fibcollection[i - 2];
// //   }
// //   return fibcollection;
// // }
// // console.log(fibonaccinum(10));

// // //make pattern
// // //*
// // //**
// // //***
// // //****/
// // // let numbers1 = 10;
// // // let stars = "";
// // // for (let i = 0; i < numbers1; i++) {
// // //   stars += "*";
// // //   console.log(stars);
// // // }

// // function printPattern(num) {
// //   for (let i = num; i >= 1; i--) {
// //     let stars = "";
// //     for (let j = 1; j <= i; j++) {
// //       stars += `${j}`;
// //     }
// //     console.log(stars);
// //   }
// // }
// // printPattern(4);

// // function printPattern1(num) {
// //   for (let i = 1; i <= num; i++) {
// //     let string = "";
// //     for (let j = 1; j <= i; j++) {
// //       string += `${j}`;
// //     }
// //     console.log(string);
// //   }
// // }
// // printPattern1(4);

// // // function printPattern2(num) {
// // //   for (let i = 0; i < num; i++) {
// // //     let str = "";
// // //     for (let k = 0; k < i; k++) {
// // //       str += " ";
// // //     }
// // //     for (let j = 0; j < num - i; j++) {
// // //       str += "*";
// // //     }
// // //     console.log(str);
// // //   }
// // // }
// // // printPattern2(4);

// // function printPattern2(num) {
// //   for (let i = 1; i <= num; i++) {
// //     let str = "";
// //     for (let k = 1; k <= num - i; k++) {
// //       str += " ";
// //     }
// //     for (let j = 1; j <= i; j++) {
// //       str += "*";
// //     }
// //     console.log(str);
// //   }
// // }
// // printPattern2(4);

// // function printPattern4(num) {
// //   for (let i = 1; i <= num; i++) {
// //     let str = "";
// //     for (let j = 0; j < i; j++) {
// //       str += "*";
// //     }
// //     console.log(str);
// //   }
// // }
// // printPattern4(4);

// // function ascendingno(arr){
// //   let ascend=[]
// //   let largest=arr[0]
// //   for(let i=0;i<arr.length;i++){
// //     if(largest<arr[i]){
// //       ascend[i]=arr[i]
// //       largest=3
// //     }
// //   }
// // }

// // let a = 0;
// // let b = 10;
// // let results = (a && b) || (b && a) || a || b;
// // console.log(results);

// let a = 10;
// let b = 20;
// // let c = a + b;
// // a = c - a;
// // b = c - b;
// // console.log(a, b);
// a = a + b;
// b = a - b;
// a = a - b;
// // console.log(a, b);
// // console.log("30" - 10);

// // console.log(Math.round(10.1));
// // console.log(Math.ceil(10.1));
// // console.log(Math.floor(10.9));
// // console.log(Math.trunc(11.9));
// // console.log(Math.random()); //generate number between 0-1
// // console.log(Math.sqrt(25));
// // console.log(Math.cbrt(8));
// // console.log(Math.pow(2, 3));
// // let i = 10.98765;
// // console.log(typeof i.toFixed(3));
// // console.log(Math.abs(-12));

// // //generate otp
// // console.log(Math.trunc(Math.random() * 9000 + 1000));

// // valid voter

// // let age = "sgshsgsh";
// // if (isNaN(age)) {
// //   console.log("wrong input");
// // } else if (age >= 18) {
// //   console.log("voter is valid voter");
// // } else {
// //   console.log("voter is invalid");
// // }

// //payable amount
// // let amount = "fagsf";
// // let dis = 0;
// // if (amount < 0) {
// //   amount = Math.abs(amount);
// //   console.log(amount);
// // }
// // if (isNaN(amount)) {
// //   console.log("wrong input");
// // } else if (amount > 0 && amount <= 5000) {
// //   dis = 0;
// //   console.log(amount - Math.floor((dis * amount) / 100));
// // } else if (amount > 5000 && amount <= 7000) {
// //   dis = 5;
// //   console.log(amount - Math.floor((dis * amount) / 100));
// // } else if (amount > 7000 && amount <= 9000) {
// //   dis = 10;
// //   console.log(amount - Math.floor((dis * amount) / 100));
// // } else if (amount > 9000) {
// //   dis = 20;
// //   console.log(amount - Math.floor((dis * amount) / 100));
// // }

// // electricity bill
// // let unit = 700;
// // let amount1 = 0;
// // if (unit > 400) {
// //   amount1 = (unit - 400) * 13; //3900
// //   unit = 400;
// // }
// // if (unit > 200 && unit <= 400) {
// //   amount1 += (unit - 200) * 8; //1000
// //   unit = 200;
// // }
// // if (unit > 100 && unit <= 200) {
// //   amount1 += (unit - 100) * 6; //600
// //   unit = 100;
// // }
// // if (unit > 0 && unit <= 100) {
// //   amount1 += unit * 4.2; //420
// //   unit = 0;
// // }
// // console.log(amount1);

// // //INR Denomination

// // let amount2 = 510;

// // if (amount2 >= 500) {
// //   console.log("No of 500 notes -- " + Math.floor(amount2 / 500));
// //   amount2 = amount2 % 500;
// // }
// // if (amount2 >= 200) {
// //   console.log("No of 200 rupees notes -- " + Math.floor(amount2 / 200));
// //   amount2 = amount2 % 200;
// // }
// // if (amount2 >= 100) {
// //   console.log("No of 100 rupees notes -- " + Math.floor(amount2 / 100));
// //   amount2 = amount2 % 100;
// // }
// // if (amount2 >= 50) {
// //   console.log("No of 50 rupees notes -- " + Math.floor(amount2 / 50));
// //   amount2 = amount2 % 50;
// // }
// // if (amount2 >= 20) {
// //   console.log("No of 20  rupees notes -- " + Math.floor(amount2 / 20));
// //   amount2 = amount2 % 20;
// // }
// // if (amount2 >= 10) {
// //   console.log("No of 10 rupees notes -- " + Math.floor(amount2 / 10));
// //   amount2 = amount2 % 10;
// // }
// // if (amount2 >= 5) {
// //   console.log("No of 5 rupees notes -- " + Math.floor(amount2 / 5));
// //   amount2 = amount2 % 5;
// // }
// // if (amount2 >= 2) {
// //   console.log("No of 2 rupees notes -- " + Math.floor(amount2 / 2));
// //   amount2 = amount2 % 2;
// // }
// // if (amount2 >= 1) {
// //   console.log("No of 1 rupees notes -- " + amount2);
// // }

// // // ternary operator

// // // let num = -19;

// // // let results = num > 0 ? "positive" : num < 0 ? "negative" : "zero";
// // // console.log(results);

// // // for (let i = 1; i < 10; i++) {
// // //   console.log(i);
// // // }
// // // console.log(i);

// // // for (let i = 10; i >= 1; i--) {
// // //   console.log(i);
// // // }
// // // let number = 10;
// // // let sum = 0;
// // // for (let i = 1; i <= number; i++) {
// // //   sum += i;
// // // }
// // // console.log(sum);
// // // let num = 5;
// // // let fact = 1;
// // // for (let i = num; i >= 1; i--) {
// // //   fact *= i;
// // // }
// // // console.log(fact);

// // // let num = 10;
// // // if (isNaN(num)) {
// // //   console.log("invalid input");
// // // } else {
// // //   if (num > 0) {
// // //     let sum = 0;
// // //     for (let i = 1; i <= num; i++) {
// // //       sum += i;
// // //     }
// // //     console.log(sum);
// // //   } else {
// // //     console.log("is negative and should be more than 0");
// // //   }
// // // }

// // let num = 12;
// // if (isNaN(num)) {
// //   console.log("invalid input");
// // } else {
// //   if (num > 0) {
// //     for (let i = 1; i <= Math.floor(num / 2); i++) {
// //       if (num % i === 0) {
// //         console.log(i);
// //       }
// //     }
// //     console.log(num);
// //   } else {
// //     console.log("num is negative it should be more than 0");
// //   }
// // }

// // let count = 0;
// // let sum = 0;
// // for (let i = 0; i <= 100; i++) {
// //   if (i % 2 === 0) {
// //     sum += i;
// //     count++;
// //   }
// //   if (count === 11) {
// //     break;
// //   }
// // }
// // // console.log(sum);

// // let sum1 = 0;
// // let num = 100;
// // let count1 = 0;
// // for (let i = 0; i <= num; i += 2) {
// //   sum1 += i;
// //   count1++;
// //   if (count1 === 11) break;
// // }
// // // console.log(sum1);

// // let count2 = 0;
// // let sum2 = 0;
// // for (let i = 1; i <= 100; i += 2) {
// //   sum2 += i;
// //   count2++;
// //   if (count2 === 10) break;
// // }
// // // console.log(sum2);

// //find sum of digit

// let num = 1234;
// let sum = 0;

// for (let i = 0; i <= 100; i++) {
//   let rem = num % 10;
//   if (rem === 0) break;
//   sum += rem;
//   num = Math.floor(num / 10);
// }
// // console.log(sum);

// //factors of numbers
// let num1 = 10;
// for (let i = 1; i <= Math.floor(num1 / 2); i++) {
//   if (num1 % i === 0) {
//     console.log(i);
//   }
// }
// // console.log(num1);

// //number is prime or not?

// let num2 = 16;
// let primehai = true;
// for (let i = 2; i <= Math.sqrt(num2); i++) {
//   if (num2 % i === 0) {
//     primehai = false;
//     break;
//   }
// }
// // console.log(primehai);

// function isPrime(num) {
//   if (num <= 1) return false;
//   if (num === 2) return true;
//   if (num % 2 === 0) return false;
//   for (let i = 3; i <= Math.floor(Math.sqrt(num)); i += 2) {
//     if (num % i === 0) return false;
//   }
//   return true;
// }

// // console.log(isPrime(17));

// // console.log(isPrime(10));

// // console.log(isPrime(19));

// // console.log(isPrime(5));

// // console.log(isPrime(16));

// //sum of digit

// var add = 0;
// var num5 = 94736241; //36
// while (num5 > 0) {
//   let rem = num5 % 10;
//   add += rem;
//   num5 = Math.floor(num5 / 10);
// }
// // console.log(add);

// //reverse number

// // var rev = 0;
// // var num5 = 94736241; //14263749
// // while (num5 > 0) {
// //   let rem = num5 % 10;
// //   rev = rev * 10 + rem;
// //   num5 = Math.floor(num5 / 10);
// // }
// // console.log(rev);

// //1.ghar aao
// //2.gate kholo aur lagao
// //3.khana pakao
// //4.khana khalo
// //5.so jao

// // let ans = new Promise((res, rej) => {
// //   return res("ghar aao");
// // });
// // let p2 = ans.then((data) => {
// //   console.log(data);
// //   return new Promise((res, rej) => {
// //     return res("gate kholo aur lagao");
// //   });
// // });
// // let p3 = p2.then((data) => {
// //   console.log(data);
// //   return new Promise((res, rej) => {
// //     return res("khana pakao");
// //   });
// // });
// // let p4 = p3.then((data) => {
// //   console.log(data);
// //   return new Promise((res, rej) => {
// //     return res("khana khao");
// //   });
// // });
// // let p5 = p4.then((data) => {
// //   console.log(data);
// //   return new Promise((res, rej) => {
// //     return res("so jao");
// //   });
// // });
// // let p6 = p5.then((data) => {
// //   console.log(data);
// // });

// // let arr1 = new Array(3);
// // arr1.push(30);
// // console.log(arr1);

// // arr1[0] = 10;
// // console.log(arr1);
// // arr1[1] = 20;
// // console.log(arr1);
// // arr1[2] = 30;
// // console.log(arr1);

// // let arr1 = [10, 20, 30, 40, 50];
// // let sum1 = 0;
// // for (let i = 0; i < arr1.length; i++) {
// //   sum1 += arr1[i];
// //   // console.log(sum1);
// // }
// // console.log(sum1);

// // let arr1 = [2, 17, 28, 35, 10, 45, 26];
// // let max = arr1[0];
// // for (let i = 0; i < arr1.length; i++) {
// //   if (max < arr1[i]) {
// //     max = arr1[i];
// //   }
// // }
// // console.log(max);//45
// // let max1 = Math.max(arr1[0], arr1[1]);
// // let sMax1 = Math.min(arr1[0], arr1[1]);
// // for (let i = 2; i < arr1.length; i++) {
// //   if (max1 < arr1[i]) {
// //     sMax1 = max1;
// //     max1 = arr1[i];
// //   } else if (sMax1 < arr1[i] && max1 !== arr1[i]) {
// //     sMax1 = arr1[i];
// //   }
// // }
// // console.log(sMax1);
// // console.log(max1);

// // let arr2 = [20, 10, 38, 48, 25, 30];
// // let temp = new Array(arr2.length);
// // let j = 0;
// // for (let i = arr2.length - 1; i >= 0; i--) {
// //   temp[j] = arr2[i];
// //   j++;
// // }
// // console.log(temp);
// // let arr2 = [20, 10, 38, 48, 25, 30];
// // let i = 0;
// // let j = arr2.length - 1;
// // while (i < j) {
// //   let temp = arr2[i];
// //   arr2[i] = arr2[j];
// //   arr2[j] = temp;
// //   i++;
// //   j--;
// // }
// // console.log(arr2);

// // let arr2 = [1, 1, 0, 1, 0, 0, 1, 0, 1, 1];
// // let i = 0,
// //   j = 0;
// // while (i < arr2.length) {
// //   if (arr2[i] === 1) {
// //     let temp = arr2[i];
// //     arr2[i] = arr2[j];
// //     arr2[j] = temp;
// //     j++;
// //   }
// //   i++;
// // }
// // console.log(arr2);

// // let aRR = [1, -2, 6, -1, -8, 28, 12, -27, 20, 39, -25];

// // let i = 0,
// //   j = 0;
// // while (i < aRR.length) {
// //   if (aRR[i] < 0) {
// //     let temp = aRR[i];
// //     aRR[i] = aRR[j];
// //     aRR[j] = temp;
// //     j++;
// //   }
// //   i++;
// // }
// // console.log(aRR);

// // let aRR = ["aman", 10, 20, "sumit", 45, "w", 12, 1, "s"];
// // let i = 0,
// //   j = 0;
// // while (i < aRR.length) {
// //   if (typeof aRR[i] === "string") {
// //     let temp = aRR[i];
// //     aRR[i] = aRR[j];
// //     aRR[j] = temp;
// //     j++;
// //   }
// //   i++;
// // }
// // console.log(aRR);
// // let x = [];
// // let y = [];
// // console.log(x === y);

// // class stack {
// //   #item;
// //   constructor() {
// //     this.#item = [];
// //   }
// //   pushh(item) {
// //     this.#item.push(item);
// //   }
// //   popp() {
// //     return this.#item.pop();
// //   }
// //   getstack() {
// //     return this.#item;
// //   }
// // }
// // const mystack = new stack();

// // mystack.pushh(20);
// // console.log(mystack.getstack());

// // class mystack1 extends stack{

// //  constructor(){
// //   super()

// //  }

// // }

// class Car {
//   #color;
//   #model;
//   #year;
//   #speed;
//   constructor(color, model, year, speed) {
//     this.#color = color;
//     this.#model = model;
//     this.#year = year;
//     this.#speed = speed;
//   }
//   break() {
//     if (this.#speed === 0) {
//       console.log("car is already stopped");
//     } else {
//       this.#speed -= 10;
//       if (this.#speed < 0) this.#speed = 0;
//       console.log(`braking..cureent speed is:${this.#speed}kmph`);
//     }
//   }
//   accelerate() {
//     this.#speed += 10;
//     console.log(`accelerating.. current speed is:${this.#speed}kmph`);
//   }
//   currentspeed() {
//     console.log(`current speed is:${this.#speed}kmph`);
//   }

//   getspeed() {
//     return this.#speed;
//   }
//   setspeed(newspeed) {
//     if (newspeed >= 0) {
//       this.#speed = newspeed;
//     } else {
//       console.log("gspeed cant be negative");
//     }
//   }
// }

// const car1 = new Car("red", "as36", 2025, 25);

// class ElectricCar extends Car {
//   #batterylevel;
//   constructor(color, model, year, speed = 0, batterypercentage = 100) {
//     super(color, model, year, speed);
//     this.#batterylevel = batterypercentage;
//   }
//   accelerate() {
//     if (this.#batterylevel <= 0) {
//       console.log("please charge the battery");
//     } else {
//       this.#batterylevel -= 5;
//       super.accelerate();
//       console.log("car is running");
//     }
//   }
//   chargebattery(amount) {
//     if (amount === 100) {
//       console.log("battery is fully charged");
//     } else if (amount < 100 && amount > 0) {
//       this.#batterylevel = amount;
//     }
//   }
//   getBatteryLevel() {
//     console.log(`Current battery level: ${this.#batterylevel}%`);
//   }
// }

// const ev = new ElectricCar("black", "Tesla", 2025, 100, 50);

// class Bank {
//   #name;
//   #accountno;
//   #balance;
//   constructor(name, accountno, balance) {
//     this.#name = name;
//     this.#accountno = accountno;
//     this.#balance = balance;
//   }
//   getbalance() {
//     return this.#balance;
//   }
//   setbalance(balance) {
//     this.#balance = balance;
//     return this.#balance;
//   }
//   getname() {
//     return this.#name;
//   }
//   setname(name) {
//     this.#name = name;
//     return this.#name;
//   }
// }
// // const customer1 = new Bank("chandu", "ASDEF1", 25000);
// // console.log(customer1.getname());
// // console.log(customer1.getbalance());
// // console.log(customer1.setbalance(50000));
// // console.log(customer1.getbalance());

// function primeHai(n) {
//   if (n <= 1) return false;
//   if (n === 2) return true;

//   for (let i = 3; i <= Math.floor(n / 2); i += 2) {
//     if (n % 2 === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// // console.log(primeHai(16));

// // console.log(primeHai(16));
// // console.log(primeHai(0));
// // console.log(primeHai(1));
// // console.log(primeHai(2));
// // console.log(primeHai(13));

// let n = Number(prompt("give any number"));
// if (n === null) {
//   console.log("cancelled");
// } else {
//   if (n > 0) {
//     console.log("positive number");
//   } else if (n < 0) {
//     console.log("number should be positive and above zero");
//   }
//   if (isNaN(n)) {
//     console.log("invalid input");
//   }
// }
// console.log("1");
// setTimeout(() => {
//   console.log("2");
// });
// new Promise((resolve, reject) => {
//   resolve(
//     setTimeout(() => {
//       console.log("3");
//     })
//   );
// });
// new Promise((resolve, reject) => {
//   resolve();
// }).then(() => {
//   console.log("4");
// });

function makeDeepCopy(obj) {
  if (typeof obj !== "object" || obj === null) {
    return obj;
  }

  let copiedval = Array.isArray(obj) ? [] : {};
  let keys = Object.keys(obj);

  for (let i = 0; i < keys.length; i++) {
    copiedval[keys[i]] = makeDeepCopy(obj[keys[i]]);
  }
  return copiedval;
}

let copy = makeDeepCopy({
  name: "ganu",
  address: { city: "pune", country: "india" },
});
console.log(copy);
