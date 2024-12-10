const input = await Bun.file("./input.txt").text();

const calibrations: [number, number[]][] = input.split("\n").map((x) => {
	const [testValue, numbers] = x.split(": ");
	const parsedNumbers: number[] = numbers.split(" ").map((x) => +x);
	return [+testValue, parsedNumbers];
});

const operators = ["+", "*"];
let total = 0;
for (const [testValue, numbers] of calibrations) {
	// const operatorOrder = new Array(numbers.length - 1).fill(operators[0]);
	const max = Number.parseInt("1".repeat(numbers.length - 1), 2);
	// console.log(max);
	// console.log(operatorOrder);
	let isValid = false;
	for (let i = 0b0; i <= max; i++) {
		const operatorOrder = i
			.toString(2)
			.padStart(numbers.length - 1)
			.split("")
			.map((x) => operators[+x]);
		// console.log(operatorOrder);

		let result = numbers[0];
		for (let j = 0; j < operatorOrder.length; j++) {
			const op = operatorOrder[j];
			const nextNumber = numbers[j + 1];
			if (op === "+") {
				result += nextNumber;
			} else if (op === "*") {
				result *= nextNumber;
			}

			if (result > testValue) {
				break;
			}
		}
		if (result === testValue) {
			isValid = true;
			break;
		}
	}
	if (isValid) {
		total += testValue;
	}
	// console.log(testValue, numbers);
}
console.log(total);
