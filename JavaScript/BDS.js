// 8. Copy an Array with the Spread Operator
// Instruction:
/* We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments.
The function is supposed to return a new array made up of num copies of arr.
We have done most of the work for you, but it doesn't work quite right yet.
Modify the function using spread syntax so that it works correctly
(hint: another method we have already covered might come in handy here!). */

function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr.unshift([...arr]);
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine([true, false, true], 2));

// 9. Combine Arrays with the Spread Operator
// Instruction:
/* We have defined a function spreadOut that returns the variable sentence.
Modify the function using the spread operator
so that it returns the array ['learning', 'to', 'code', 'is', 'fun']. */

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];; // Change this line
  return sentence;
}

console.log(spreadOut());

// 10. Check For The Presence of an Element With indexOf()
// Instruction:
/* indexOf() can be incredibly useful for
quickly checking for the presence of an element on an array.
We have defined a function, quickCheck, that takes an array and an element as arguments.
Modify the function using indexOf() so
that it returns true if the passed element exists on the array,
and false if it does not. */

function quickCheck(arr, elem) {
  // Only change code below this line
  if (arr.indexOf(elem) != -1) {
    return true;
  } else {
    return false;
  }
  // Only change code above this line
}

console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));

// 11. Iterate Through All an Array's Items Using For Loops
// Instruction:
/* We have defined a function, filteredArray,
which takes arr, a nested array, and elem as arguments,
and returns a new array. elem represents an element that may or may not be present
on one or more of the arrays nested within arr.
Modify the function, using a for loop, to return a filtered version of the passed array
such that any array nested within arr containing elem has been removed. */
