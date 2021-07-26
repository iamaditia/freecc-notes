// Basic Algorithm Scripting
/*
An algorithm is a series of step-by-step instructions that describe how to do something.

To write an effective algorithm, it helps to break a problem down into smaller parts
and think carefully about how to solve each part with code.

In this course, you'll learn the fundamentals of algorithmic thinking
by writing algorithms that do everything from converting temperatures
to handling complex 2D arrays.
*/

// 1. Convert Celsius to Fahrenheit
/*
You are given a variable celsius representing a temperature in Celsius.
Use the variable fahrenheit already defined and assign it the Fahrenheit temperature
equivalent to the given Celsius temperature.
Use the algorithm mentioned above to help convert the Celsius temperature to Fahrenheit.
*/

function convertToF(celsius) {
  let fahrenheit = (celsius * 9 / 5) + 32; // Solution
  return fahrenheit;
}

convertToF(30);

// 2. Reverse a String
/*
Reverse the provided string.

You may need to turn the string into an array before you can reverse it.

Your result must be a string.
*/

function reverseString(str) {
  let astr = ""; // create a variable to store the reversed string
  for (let i = str.length - 1; i >= 0; i--) { // iterating backwards using for
    astr += str[i]; // fill a string backwards
  }
  return astr;
}

reverseString("hello");

// 3. Factorialize a Number
/*
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!

For example: 5! = 1 * 2 * 3 * 4 * 5 = 120

Only integers greater than or equal to zero will be supplied to the function.
*/

function factorialize(num) {
  if (num == 0) { // for isolating the 0 factorial
    return 1;
  } else {
  for (let i = num - 1; i > 0; i--) { // loop starting from n - 1
    num *= i; // multiply the initial number with n - 1 and assign the product to var num
  }
  return num; // return the factorial
  }
}

factorialize(5);

// Alternative solution using recursion. Source: fcc hints
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}

factorialize(5);

// 4. Find the Longest Word in a String
/*
Return the length of the longest word in the provided sentence.

Your response should be a number.
*/

function findLongestWordLength(str) {
  let arrStr = str.match(/\w+/g); // Create an array made of words from str
  let longest = arrStr[0].length; // Determine the first words's length as the initial number
  for (let i = 0; i < arrStr.length; i++) { // Iterate through the array
     if (longest < arrStr[i].length) {
       longest = arrStr[i].length;
     }
  }
  return longest;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");

// 5. Return Largest Numbers in Arrays
/*
Return an array consisting of the largest number from each provided sub-array.
For simplicity, the provided array will contain exactly 4 sub-arrays.
Remember, you can iterate through an array with a simple for loop, and access each member with array syntax arr[i].
*/

function largestOfFour(arr) {
  let newArr = []; // Create an empty array
  for (let i = 0; i < arr.length; i++) { // Iterate through the main array
    let largestN = arr[i][0]; // Set the largest number as the first number in the sub-array
    for (let j = 0; j < arr[i].length; j++) { // Iterate through the sub arrays
      if (largestN < arr[i][j]) { // Start comparing and set the largest number
        largestN = arr[i][j];
      }
    }
    newArr.push(largestN); // Fill the empty array with the largest number found in the second loop
  }
  return newArr;
}

largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

// 6. Confirm the Ending
/*
Check if a string (first argument, str) ends with the given target string (second argument, target).
This challenge can be solved with the .endsWith() method, which was introduced in ES2015.
But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.
*/

function confirmEnding(str, target) {
  let newPhrase = ""; // Create an empty variable
  for (let i = str.length - target.length; i < str.length; i++) { // Iterate through the last nth characters in a string. N = length of target
    newPhrase += str[i]; // A new string created. It has the same length with the target
  }
  return newPhrase == target; // Comparing
}

confirmEnding("Bastian", "an");

// 7. Repeat a String Repeat a String
/*
Repeat a given string str (first argument) for num times (second argument).
Return an empty string if num is not a positive number.
For the purpose of this challenge, do not use the built-in .repeat() method.
*/

// My own solution

function repeatStringNumTimes(str, num) {
  let newStr = ""; // Create an empty string
  if (num < 0) { // If num is less than 0, return an empty string
    return "";
  } else {
    for (let i = 0; i < num; i++) {
      newStr += str; // Fill the empty string with str for a num of times
    }
  }
  return newStr; // Return the repeated strings
}

repeatStringNumTimes("abc", 3);

// Alternative solutions from freeCodeCamp:

function repeatStringNumTimes(str, num) {
  var accumulatedStr = "";

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}

// Solution with recursion from freeCodeCamp:

function repeatStringNumTimes(str, num) {
  if (num < 1) {
    return "";
  } else {
    return str + repeatStringNumTimes(str, num - 1);
  }
}

// 8. Truncate a String
/*
Truncate a string (first argument) if it is longer than the given maximum string length (second argument).
Return the truncated string with a ... ending.
*/

function truncateString(str, num) {
  let newStr = ""; // Create an empty string
  if (num < str.length) {
    for (let i = 0; i < num; i++) { // If num is less than str's length, create a new string which consist num's length of characters
    newStr += str[i];
    }
    return newStr + "..."; // Add the ... part
  } else {
    return str; // If num >= str's length, return the original str
  }
}

truncateString("A-tisket a-tasket A green and yellow basket", 8);

// Solution from freeCodeCamp using slice

function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

// A more concise solution using ternary operator
function truncateString(str, num) {
  return str.length > num ? str.slice(0, num) + "..." : str;
}

// 9. Finders Keepers
/*
Create a function that looks through an array arr and returns the first element in it
that passes a 'truth test'.
This means that given an element x, the 'truth test' is passed if func(x) is true.
If no element passes the test, return undefined.
*/

function findElement(arr, func) {
  let num = 0;
  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i]) == true) {
    num = arr[i];
    return num
    }
  }
}

findElement([1, 2, 3, 4], num => num % 2 === 0);

// Recursive solution from freeCodeCamp

function findElement(arr, func) {
  return arr.length && !func(arr[0])
    ? findElement(arr.slice(1), func)
    : arr[0];
}

// 10. Boo who
/*
Check if a value is classified as a boolean primitive. Return true or false.

Boolean primitives are true and false.
*/

function booWho(bool) {
  if (bool === true | bool === false) {
    return true;
  } else {
    return false
  }
}

booWho(null);

// Solution using typeof:

function booWho(bool) {
  return typeof bool === "boolean";
}

booWho(null);

// 11. Title Case a Sentence
/*
Return the provided string with the first letter of each word capitalized.
Make sure the rest of the word is in lower case.
For the purpose of this exercise, you should also capitalize connecting words like the and of.
*/

function titleCase(str) {
  return str;
}

titleCase("I'm a little tea pot");
