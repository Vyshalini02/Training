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
