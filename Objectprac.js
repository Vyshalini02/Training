/*
//Methods in object

// Copies properties from a source object to a target object
Object.assign(target, source)

// Creates an object from an existing object
Object.create(object)

// Returns an array of the key/value pairs of an object
Object.entries(object)

// Creates an object from a list of keys/values
Object.fromEntries()

// Returns an array of the keys of an object
Object.keys(object)

// Returns an array of the property values of an object
Object.values(object)

// Groups object elements according to a function
Object.groupBy(object, callback)

//Method 1
Object.assign()
The Object.assign() method copies properties from one or more source objects to a target object.

    Example
// Create Target Object
const person1 = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// Create Source Object
const person2 = { firstName: "Anne", lastName: "Smith" };

// Assign Source to Target
Object.assign(person1, person2); //O/P:firstName,Anne,lastName,Smith,age,50,eyeColor,blue

//Method 2
//JavaScript Object.entries()

Object.entries() returns an array of the key / value pairs in an object:

Example
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

let text = Object.entries(person); //O/P firstName,John,lastName,Doe,age,50,eyeColor,blue

//Method 3
//JavaScript Object.fromEntries()
The fromEntries() method creates an object from a list of key / value pairs.

    Example
const fruits = [
    ["apples", 300],
    ["pears", 900],
    ["bananas", 500]
];

const myObj = Object.fromEntries(fruits);
console.log(fruits);// O/P: {apples: 300, pears: 900, bananas: 500}

//Method 4
JavaScript Object.values()
Object.values() is similar to Object.entries(), but returns a single dimension array of the object values:

Example
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

let text = Object.values(person);//O/p: John,Doe,50,blue




//Method 5
// Object.groupBy()
The Object.groupBy() method groups elements of an object according to string values returned from a callback function.

The Object.groupBy() method does not change the original object.

// Create an Array
const fruits = [
    { name: "apples", quantity: 300 },
    { name: "bananas", quantity: 500 },
    { name: "oranges", quantity: 200 },
    { name: "kiwi", quantity: 150 }
];

// Callback function to select low volumes 
function myCallback({ quantity }) {
    return quantity > 200 ? "ok" : "low";
}

// Group by ok and low
const result = Object.groupBy(fruits, myCallback);
console.log(result); // O/P: {ok: Array(2), low: Array(2)}

// Method 6
JavaScript Object.keys()
The Object.keys() method returns an array with the keys of an object.

    Example
// Create an Object
const person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue"
};

// Get the Keys
const keys = Object.keys(person); //O/P; firstName,lastName,age,eyeColor

// Method 7
Object.groupBy() vs Map.groupBy()
The difference between Object.groupBy() and Map.groupBy() is:

Object.groupBy() groups elements into a JavaScript object.

    Map.groupBy() groups elements into a Map object.

*/

