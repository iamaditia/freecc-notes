// 8. Copy an Array with the Spread Operator
/*
We have defined a function, copyMachine which takes arr (an array) and num (a number) as arguments.
The function is supposed to return a new array made up of num copies of arr.
We have done most of the work for you, but it doesn't work quite right yet.
Modify the function using spread syntax so that it works correctly
(hint: another method we have already covered might come in handy here!).
*/

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
/*
We have defined a function spreadOut that returns the variable sentence.
Modify the function using the spread operator
so that it returns the array ['learning', 'to', 'code', 'is', 'fun'].
*/

function spreadOut() {
  let fragment = ['to', 'code'];
  let sentence = ['learning', ...fragment, 'is', 'fun'];; // Change this line
  return sentence;
}

console.log(spreadOut());

// 10. Check For The Presence of an Element With indexOf()
/*
indexOf() can be incredibly useful for
quickly checking for the presence of an element on an array.
We have defined a function, quickCheck, that takes an array and an element as arguments.
Modify the function using indexOf() so
that it returns true if the passed element exists on the array,
and false if it does not.
*/

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
/*
We have defined a function, filteredArray,
which takes arr, a nested array, and elem as arguments,
and returns a new array. elem represents an element that may or may not be present
on one or more of the arrays nested within arr.
Modify the function, using a for loop, to return a filtered version of the passed array
such that any array nested within arr containing elem has been removed.
*/

function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
      if (arr[i].indexOf(elem) == -1) {
        newArr.push(arr[i]);
    }
  }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));

// 12. Create complex multi-dimensional arrays
/*
We have defined a variable, myNestedArray, set equal to an array.
Modify myNestedArray, using any combination of strings, numbers, and booleans for data elements,
so that it has exactly five levels of depth (remember, the outer-most array is level 1).
Somewhere on the third level, include the string deep, on the fourth level, include the string deeper,
and on the fifth level, include the string deepest.
*/

let myNestedArray = [
  // Only change code below this line
  ['unshift', false, 1, 2, 3, 'complex', 'nested'],
  ['loop', 'shift', 6, 7, 1000, 'method'],
  ['concat', false, true, 'spread', 'array'],
  ['mutate', 1327.98, 'splice', 'slice', 'push'],
  ['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth'],
  [
    ['deep'], // Level 3
    [
      ['deeper'], // Level 4
      [
        ['deepest'], // Level 5
      ]
    ]
  ],
  // Only change code above this line
];

// 13. Add Key-Value Pairs to JavaScript Objects
/*
A foods object has been created with three entries.
Using the syntax of your choice, add three more entries to it: bananas with a value of 13,
grapes with a value of 35, and strawberries with a value of 27.
*/

let foods = {
  apples: 25,
  oranges: 32,
  plums: 28
};

// Only change code below this line
foods.bananas = 13;
foods.grapes = 35;
foods.strawberries = 27;
// Only change code above this line

console.log(foods);

// 14. Modify an Object Nested Within an Object
/*
Here we've defined an object userActivity, which includes another object nested within it.
Set the value of the online key to 45.
*/

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Only change code below this line
userActivity.data.online = 45;
// Only change code above this line

console.log(userActivity);
