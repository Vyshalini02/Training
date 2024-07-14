/*function calsum(a) {
    let sum = 0;
    for (let i = 0; i < a.length; i++) {
        console.log(a[i]);
        sum = sum + a[i];
    }
    return sum;
}

let zz = calsum([1, 2, 3, 4, 5]);
console.log(zz); */


/*function pp(a1) {
    let fact = 1;
    for (let i = 1; i <= a1; i++) {
        fact = fact * i;
    }
    return fact;
}
let rf = pp(5);
console.log(rf);

//string : my name is vyshalini
function sa(stringarra) {
    let sum = "";
    for (let i = 0; i < stringarra.length; i++) {

        sum = sum + stringarra[i] + " ";
    }
    return sum;
}

let conc = sa(["my", "name", "is", "vyshalini"]);
console.log(conc);*/

//For loop Methods

/*Method1
//for in loop over objects :
let obj = { Fname: "VB", Lname: "SV", Age: 23 };
let sum = "";
for (let x in obj) {

    sum = obj[x];
    console.log(sum);
}     //O/P: VB
SV
23*/

/*Method2
//For in loop over arrays
let arr1 = [1, 2, 3, 4, 5];
for (let x in arr1) {
    console.log(arr1[x]);
}
//O/P: 1
2
3
4
5*/
// Summing all the values in an array
let arr = [1, 2, 3, 4, 5];
sum = 0;
for (let x in arr) {
    sum = sum + arr[x];
}
console.log(sum); // O/P: 15

/*Method 3
for each method: The forEach() method calls a function (a callback function) once for each array element.

Example
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value, index, array) {
  txt += value;
}
Note that the function takes 3 arguments:

The item value
The item index
The array itself
The example above uses only the value parameter. It can be rewritten to:

Example
const numbers = [45, 4, 9, 16, 25];

let txt = "";
numbers.forEach(myFunction);

function myFunction(value) {
  txt += value;
}


// for of loop 
The JavaScript for of statement loops through the values of an iterable object.

It lets you loop over iterable data structures such as Arrays, Strings, Maps, NodeLists, and more:

Syntax
for (variable of iterable) {
  // code block to be executed
}
variable - For every iteration the value of the next property is assigned to the variable. Variable can be declared with const, let, or var.
Main diff b/w for in and for of in for in we are not storing the next  value in avariable but in for of we need to store it in a variable
iterable - An object that has iterable properties.


// Method 1 :Looping over an Array
Example
const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
    text += x;
}
console.log(text); //O/P: BMWVolvoMini*/

//Method 2: Looping over a string

let language = "JavaScript";

let text = "";
for (let x of language) {
    text += x + "";
}
console.log(text);