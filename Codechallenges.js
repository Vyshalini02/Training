// CC 1
let massMark = 78;
let massJohn = 92;
let heightMark = 1.69;
let heightJohn = 1.95;
let BMIMark = massMark / (heightMark * heightMark);
let BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark);
console.log(BMIJohn);




//CC 2 if else condition
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

const BMIMark = massMark / (heightMark * heightMark);
const BMIJohn = massJohn / (heightJohn * heightJohn);
console.log(BMIMark, BMIJohn);
if (BMIMark > BMIJohn) {
    console.log("Mark's BMI is higher than John's!");
}
else {
    console.log("John's BMI is higher than Mark's!");
}



//CC 3
let s1 = 96;
let s2 = 108;
let s3 = 89;
let k1 = 88;
let k2 = 91;
let k3 = 110;
let scoreDolphins = (s1 + s2 + s3) / 3;
let scoreKoalas = (k1 + k2 + k3) / 3;
if (scoreDolphins > scoreKoalas) {
    console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
    console.log("Koalas win the trophy");
} else {
    console.log("Both win the trophy");
}


//CC4
const bill = 275;
let tip;
let total;
if (bill > 50 && bill < 300) {
    tip = (bill * 15 / 100)
    total = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}.`);
} else {
    tip = (bill * 20 / 100)
    total = bill + tip;
    console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${total}.`);
}
