console.log("Hello World");
let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;
let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark);
console.log(BMIJohn);


const js = 'vysha';
console.log(Number(js));

const js1 = 2.31;
console.log(js + js1);
console.log(typeof 3.14);
var a = 10;
var a = 20;
if (a = 100) {
    console.log("hi value is same");
} else {
    console.log("Value is not same");
}
console.log(a);

// Function
function NewCre() { //NewCre is function body
    console.log("Hi i am inside the function");
}
NewCre(); //This is called calling/running/invoking the function, if we donot call this function means the code presnt in func body will not be executed
// Function with parameters
function paramete(ten, Two) {
    console.log(ten, Two);
    let naum = 'First Value is ${ten} ten and second value is ${Two} Two';
    return paramete;

}
let numvalue = paramete(10, 20);
//const numvalue = paramete(10, 20);
console.log(numvalue);
