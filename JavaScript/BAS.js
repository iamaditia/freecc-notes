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
  
  return str.length;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
