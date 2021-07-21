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
  let astr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    astr += str[i];
  }
  return astr;
}

reverseString("hello");