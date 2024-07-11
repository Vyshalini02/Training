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

// Using ternary operator
const bill2 = 430;
const tip1 = bill2 > 50 && bill2 < 300 ? (15 / 100) * bill2 : (20 / 100) * bill2;
console.log(`The bill was ${bill2}, the tip was ${tip1}, and the total value ${bill2 + tip1}.`);