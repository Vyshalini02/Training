//Giving values to the function from an array
const calage = function (birthyear) {
    return 2037 - birthyear;
}
const years = [1990, 1991, 1993, 2000]; // Array is created
const age = calage(5000); //normal way of passing parameters to function
console.log(age);
const age1 = calage(years[0]); //passing paarameters to function using array
const age2 = calage(years[1]);
const age3 = calage(years[years.length - 1]);// it is a syntax in array which is used to print last element of an array
console.log(age1, age2, age3);
1
//o/ p: 47 46 37
// o/p: -2963


// Methods in array - 1. Add elements methods
const name1 = ['vyshali', 'Venkata', 'Somisetty'];
name1.push('Sai'); //push method is used to add the element at end of array and also returns length of array
console.log(name1); // o/p: (4) ['vyshali', 'Venkata', 'Somisetty', 'Sai']
name1.unshift('John');// unshift method is used to add the element at start of array also returns length of array
console.log(name1); // o/p: (5) ['John', 'vyshali', 'Venkata', 'Somisetty', 'Sai']

//2. Remove elements methods
name1.pop(); //pop method removes last element of array also returns length of array
console.log(name1);// o/p: (4) ['John', 'vyshali', 'Venkata', 'Somisetty']
name1.shift(); //remove first element and returns the length of array
console.log(name1); // o/p: (3) ['vyshali', 'Venkata', 'Somisetty']


let ss = name1.includes('Venkata');//checks if the given data is present it returns true if element is not present it returns false
console.log(ss);// o/p true

if (name1.includes('Venkata')) {
    console.log('Present');
} else {
    console.log('Not presnt');
}
// o/p: Present


let s1 = name1.indexOf('Venkata'); // to finf elements position
console.log(s1); // o/p: 1

let s2 = name1.indexOf('Shalini');// if we try to print the position of element which is not present in array we get output as -1
console.log(s2); // o/p: -1
