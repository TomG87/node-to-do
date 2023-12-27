function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Person.prototype.greet = function () {
  console.log("Hello, " + this.firstname + " " + this.lastname);
};

var john = new Person("John", "Doe");
console.log(john.firstname);
john.greet();

//the above is called prototypal inheritance
// Constructor function for creating Person objects
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;

  // Method to display the full name of the person
  this.fullName = function () {
    return this.firstName + " " + this.lastName;
  };
}

// Creating a new Person object using the constructor
const person1 = new Person("John", "Doe", 30);

// Accessing properties and calling a method
console.log(person1.firstName); // Output: John
console.log(person1.lastName); // Output: Doe
console.log(person1.age); // Output: 30
console.log(person1.fullName()); // Output: John Doe