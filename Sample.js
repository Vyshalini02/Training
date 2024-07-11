console.log("Hello World");


/*const js = 'vysha';
console.log(Number(js));
const js1 = 2.31;
console.log(js + js1);
console.log(typeof 3.14);//type of is used to which data type the given value belongs to
// example for if else statement
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
    const naum = `First Value is ${ten} ten and second value is ${Two} Two`;
    return naum;

}
const numvalue = paramete(10, 20);
console.log(numvalue);*/

//Funcion declaration and expressiion
function Age(birthyear) {
    agev = 2024 - birthyear;
    return (agev)
}
let value = Age(2000);
console.log(value);

const age1 = function (birthyear) {//function expression :> writing the function without function name and declaring it to a variable age1 and  age1 acts as function name
    return 2024 - birthyear;
}
const value1 = age1(1998);
console.log(value1);


