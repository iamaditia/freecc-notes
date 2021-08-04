// 1. Create a Basic JavaScript Object
/*
Create a dog object with name and numLegs properties, and set them to a string and a number, respectively.
*/

let dog = {
  name: "Spot",
  numLegs: 4
};

// 2. Use Dot Notation to Access the Properties of an Object
/*
Print both properties of the dog object to your console.
*/

let dog = {
  name: "Spot",
  numLegs: 4
};
// Only change code below this line
console.log(dog.name);
console.log(dog.numLegs);

// 3. Create a Method on an Object
/*
Using the dog object, give it a method called sayLegs.
The method should return the sentence This dog has 4 legs.
*/

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + dog.numLegs + " legs."}
};

dog.sayLegs();

// 4. Make Code More Reusable with the this Keyword
/*
Modify the dog.sayLegs method to remove any references to dog.
Use the duck example for guidance.
*/

let dog = {
  name: "Spot",
  numLegs: 4,
  sayLegs: function() {return "This dog has " + this.numLegs + " legs.";}
};

dog.sayLegs();

// 5. Define a Constructor Function
/*
Create a constructor, Dog, with properties name, color, and numLegs
that are set to a string, a string, and a number, respectively.
*/

function Dog() {
  this.name = "Spot";
  this.color = "white";
  this.numLegs = 4;
}
