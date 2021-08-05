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

// 6. Use a Constructor to Create Objects
/*
Use the Dog constructor from the last lesson
to create a new instance of Dog, assigning it to a variable hound.
*/

function Dog() {
  this.name = "Rupert";
  this.color = "brown";
  this.numLegs = 4;
}
// Only change code below this line
let hound = new Dog();

// 7. Extend Constructors to Receive Arguments
/*
Create another Dog constructor.
This time, set it up to take the parameters name and color,
and have the property numLegs fixed at 4.
Then create a new Dog saved in a variable terrier.
Pass it two strings as arguments for the name and color properties.
*/

function Dog(name, color) {
 this.name = name;
 this.color = color;
 this.numLegs = 4;
}

let terrier = new Dog("Spot", "brown");

// 8. Verify an Object's Constructor with instanceof
/*
Create a new instance of the House constructor,
calling it myHouse and passing a number of bedrooms.
Then, use instanceof to verify that it is an instance of House.
*/

function House(numBedrooms) {
  this.numBedrooms = numBedrooms;
}

// Only change code below this line

let myHouse = new House(2);
myHouse instanceof House;

// 9. Understand Own Properties
/*
Add the own properties of canary to the array ownProps.
*/

function Bird(name) {
  this.name = name;
  this.numLegs = 2;
}

let canary = new Bird("Tweety");
let ownProps = [];
// Only change code below this line

for (let property in canary) {
  if (canary.hasOwnProperty(property)) {
    ownProps.push(property);
  }
}

// 10. Use Prototype Properties to Reduce Duplicate Code
/*
Add a numLegs property to the prototype of Dog
*/

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

// Only change code above this line
let beagle = new Dog("Snoopy");

// 11. Iterate Over All Properties
/*
Add all of the own properties of beagle to the array ownProps.
Add all of the prototype properties of Dog to the array prototypeProps.
*/

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Only change code below this line

for (let property in beagle) {
  if (beagle.hasOwnProperty(property)) {
    ownProps.push(property);
  } else {
    prototypeProps.push(property);
  }
}

// 12. Understand the Constructor Property
/*
Write a joinDogFraternity function that takes a candidate parameter and,
using the constructor property,
return true if the candidate is a Dog, otherwise return false.
*/

function Dog(name) {
  this.name = name;
}

// Only change code below this line
function joinDogFraternity(candidate) {
  if (candidate.constructor === Dog) {
    return true;
  } else {
    return false;
  }
}

// 13. Change the Prototype to a New Object
/*
Add the property numLegs and the two methods eat() and describe()
to the prototype of Dog by setting the prototype to a new object.
*/

function Dog(name) {
  this.name = name;
}

Dog.prototype = {
  // Only change code below this line
  numLegs: 4,
  eat: function() {
    console.log("munch munch munch");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

// 14. Remember to Set the Constructor Property when Changing the Prototype
/*
Define the constructor property on the Dog prototype.
*/

function Dog(name) {
  this.name = name;
}

// Only change code below this line
Dog.prototype = {
  constructor: Dog,
  numLegs: 4,
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

// 15. Understand Where an Object’s Prototype Comes From
/*
Use isPrototypeOf to check the prototype of beagle.
*/

function Dog(name) {
  this.name = name;
}

let beagle = new Dog("Snoopy");

// Only change code below this line

Dog.prototype.isPrototypeOf(beagle);
