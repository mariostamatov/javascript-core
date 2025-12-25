const input = require("sync-input")

let
    bubblegumIncome = 202,
    toffeeIncome = 118,
    iceCreamIncome = 2250,
    milkChocolateIncome = 1680,
    doughnutIncome = 1075,
    pancakeIncome = 80;

let totalIncome = bubblegumIncome + toffeeIncome + iceCreamIncome + milkChocolateIncome + doughnutIncome +pancakeIncome;


console.log(`Earned amount: 
Bubblegum: ${bubblegumIncome}
Toffee: $${toffeeIncome}
Ice Cream: $${iceCreamIncome}
Milk Chocolate: $${milkChocolateIncome}
Doughnut: $${doughnutIncome}
Pancake: $${pancakeIncome}

Income: ${totalIncome}`);

let staffExpenses = Number(input("Staff Expenses: "));
let otherExpenses = Number(input("Other Expenses: "));
let netIncome = totalIncome - (staffExpenses + otherExpenses);
console.log(`Net income: $${netIncome}`);