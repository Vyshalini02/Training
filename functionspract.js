// function
/*function vyshali() {
    let c = a + b;
    return c;
}
vyshali();
console.log(c);*/

/*parameterized functions
function shal(a, b) {  //function declaration
    c = a + b; // whatever logic or condition we r defining in function body is called function definition

}
shal(10, 20)  // function calling
console.log(c);*/


/* Prog 1
function addition(e, f) {
    g = e + f;
    return g;
}
addition(1, 2)
console.log(g); *///o / p 3

/* Prog 2
function addition(e, f) {
    let g = e + f;
    //return g;
}
addition(1, 2)
console.log(g);
*/
/* O/P : Uncaught ReferenceError ReferenceError: g is not defined
    at <anonymous> (file:///C:/Users/2164263/VSCode/scrap.js:31:13)
    at Module._compile (node:internal/modules/cjs/loader:1455:14)
    at Module._extensions..js (node:internal/modules/cjs/loader:1534:10)
    at Module.load (node:internal/modules/cjs/loader:1265:32)
    at Module._load (node:internal/modules/cjs/loader:1081:12)
    at executeUserEntryPoint (node:internal/modules/run_main:187:14)
    at <anonymous> (node:internal/main/run_main_module:28:49)
 Reason: when we use let keyword and assign variable that variable scope is limited to that particular function(local),
  so when u want to use(in calling function) that particular variable(g) we need to return it. so that it will be stored by a variable during function calling
*/
// Prog 3

/*function addition(e, f) {
    let g = e + f;
    return g;
}
addition(1, 2)
console.log(g);*/
// O/P: g is not defined
/* Reason g is defined inside the function but we are referring it outside the function even though we are
returning it we r not storing it in a variable in function calling
When ever we are returing something(value) from function  we need to store it in a variable to use it later
*/
/*Prog 4
function addition(e, f) {
    let g = e + f;
    return g;
}
let h = addition(1, 2)
console.log(h); */ // o/p: 3
// Note we r overcoming the problem of prog 3 by storing the return variable value in newly created variable

//Function calling other function

/*function hello(name) {
    console.log("hello", name)
}
function greeting(a) {
    console.log("iiiii")
    hello(a)
    console.log("successfully greeted")
}
console.log("kkkk")
greeting("vyshalini")
console.log("jjjjj")*/
/* o/p: kkkk
iiiii
        hello vyshalini
        successfully greeted
jjjjj*/

/*function Dad(){
    Mom()
    let c = 1+2;
    return c;

}function Mom(){
    let m = 3+4;
    return m;
}
console.log("Hi");
let a = Mom();
let d = Dad();*/

/*function Vyshnavi(a, b, c, v, y) {
    let d = a + b + c + v + y;
    return d;
}
function Sai(g, h) {
    let e = Vyshnavi(1, 2, 3, g, h);
    return e;
}
let f = Sai(4, 5);
console.log(f);

function V1() {
    let a = 1;
    let b = 2;
    let c = a + b;
    return c;
}
function V2() {
    let d = V1();
    return d;
}
let z = V2();
console.log(z);*/



//Call back functions
function add(a, b, callback) {
    let added = a + b;
    callback(added);
}
function print(added) {
    console.log(added);
}
let calc = add(1, 2, print); //O/p 3











