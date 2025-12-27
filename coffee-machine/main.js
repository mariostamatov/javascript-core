const input = require("sync-input")

let
    remainingWater = 400,
    remainingMilk = 540,
    remainingCoffeeBeans = 120,
    remainingDisposableCups = 9,
    remainingMoney = 550

let espressoRecepie = [250, 0, 16] // water, milk, coffee beans
let latteRecepie = [350, 75, 20] // water, milk, coffee beans
let cappuccinoRecepie = [200, 100, 12] // water, milk, coffee beans
let prices = [4, 7, 6] //espresso, latte, cappuccino

let canMakeCoffee;

while (true) {
    let chooseAction = input("Write action (buy, fill, take, remaining, exit): \n")
    if (chooseAction === "exit") {
        break;
    }

switch (chooseAction) {
    case "buy":
        let typeOfCoffee =
            Number(input("What do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino: \n"))
        actionBuy(typeOfCoffee)
        console.log(canMakeCoffee)
        continue;
    case "fill":
        actionFill()
        break;
    case "take":
        actionTake()
        break;
    case "remaining":
        showRemainingSupplies()
        break;
    }
}


function actionBuy(typeOfCoffee) {

    let neededWater;
    let neededMilk;
    let neededCoffeeBeans;

    if (typeOfCoffee === 1) {
        neededWater = espressoRecepie[0];
        neededMilk = espressoRecepie[1];
        neededCoffeeBeans = espressoRecepie[2];
    } else if (typeOfCoffee === 2) {
        neededWater = latteRecepie[0];
        neededMilk = latteRecepie[1];
        neededCoffeeBeans = latteRecepie[2];
    } else if (typeOfCoffee === 3) {
        neededWater = cappuccinoRecepie[0];
        neededMilk = cappuccinoRecepie[1];
        neededCoffeeBeans = cappuccinoRecepie[2];
    }
    if (remainingWater < neededWater) {
        canMakeCoffee = "Sorry, not enough water!"
    } else if (remainingMilk < neededMilk) {
        canMakeCoffee = "Sorry, not enough milk!"
    } else if (remainingCoffeeBeans < neededCoffeeBeans) {
        canMakeCoffee = "Sorry, not enough coffee beans!"
    } else{
        switch (typeOfCoffee) {
            case 1:
                remainingWater -= espressoRecepie[0];
                remainingMilk -= espressoRecepie[1];
                remainingCoffeeBeans -= espressoRecepie[2];
                remainingDisposableCups --;
                remainingMoney += prices[0];
                break;
            case 2:
                remainingWater -= latteRecepie[0];
                remainingMilk -= latteRecepie[1];
                remainingCoffeeBeans -= latteRecepie[2];
                remainingDisposableCups --;
                remainingMoney += prices[1];
                break;
            case 3:
                remainingWater -= cappuccinoRecepie[0];
                remainingMilk -= cappuccinoRecepie[1];
                remainingCoffeeBeans -= cappuccinoRecepie[2];
                remainingDisposableCups --;
                remainingMoney += prices[2];
                break;
        }
        canMakeCoffee = "I have enough resources, making you a coffee!"
    }

}

function actionFill () {
    let addWater = Number(input("Write how many ml of water you want to add: \n"));
    let addMilk = Number(input("Write how many ml of milk you want to add: \n"));
    let addCoffeeBeans = Number(input("Write how many grams of coffee beans you want to add: \n"))
    let addDisposableCups = Number(input("Write how many disposable cups you want to add: \n"))
    remainingWater += addWater;
    remainingMilk += addMilk;
    remainingCoffeeBeans += addCoffeeBeans;
    remainingDisposableCups += addDisposableCups;
}

function actionTake() {
    remainingMoney -= remainingMoney;
}


function showRemainingSupplies() {
    console.log(`The coffee machine has:
${remainingWater} ml of water
${remainingMilk} ml of milk
${remainingCoffeeBeans} g of coffee beans
${remainingDisposableCups} disposable cups
$${remainingMoney} of money
`)
}