const input = require('sync-input');
const botName = input("Please enter a bot name \n");

console.log(`Hello! My name is ${botName}.`);
console.log("I was created in 2025.");

let name = input("Please, remind me your name.\n");
console.log(`What a great name you have, ${name}!`);

console.log("Let me guess your age.\nEnter remainders of dividing your age by 3, 5 and 7.");

function guessAge() {
	let remainder3 = Number(input());
	let remainder5 = Number(input());
	let remainder7 = Number(input());

	let age = (remainder3 * 70 + remainder5 * 21 + remainder7 * 15) % 105;
	return age;
}

let guessedAge = guessAge();
console.log(`Your age is ${guessedAge}; that's a good time to start programming!`);

console.log("Now I will prove to you that I can count to any number you want.");

function count() {
	let number = Number(input());
	let current = 0;

	while (current <= number) {
		console.log(`${current} !`);
		current ++;
	}
}

count();

console.log(`Let's test your programming knowledge.
Why do we use methods?
1. To repeat a statement multiple times.
2. To decompose a program into several small subroutines.
3. To determine the execution time of a program.
4. To interrupt the execution of a program.`);

function quiz() {
	let userAnswer = Number(input());
	while (userAnswer !== 2) {
		console.log("Please, try again.");
		userAnswer = Number(input());
	}
}

quiz()

console.log("Congratulations, have a nice day!");