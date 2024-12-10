const input = await Bun.file("./input.txt").text();
const t0 = performance.now();
// input = `190: 10 19
// 3267: 81 40 27
// 83: 17 5
// 156: 15 6
// 7290: 6 8 6 15
// 161011: 16 10 13
// 192: 17 8 14
// 21037: 9 7 18 13
// 292: 11 6 16 20`;

const calibrations: [number, number[]][] = input.split("\n").map((x) => {
	const [testValue, numbers] = x.split(": ");
	const parsedNumbers: number[] = numbers.split(" ").map((x) => +x);
	return [+testValue, parsedNumbers];
});

const operators = ["+", "*", "||"];
let total = 0;
for (const [testValue, numbers] of calibrations) {
	const max = Number.parseInt("2".repeat(numbers.length - 1), 3);
	let isValid = false;
	for (let i = 0b0; i <= max; i++) {
		const operatorOrder = i
			.toString(3)
			.padStart(numbers.length - 1)
			.split("")
			.map((x) => operators[+x]);

		let result = numbers[0];
		for (let j = 0; j < operatorOrder.length; j++) {
			const op = operatorOrder[j];
			const nextNumber = numbers[j + 1];
			if (op === "+") {
				result += nextNumber;
			} else if (op === "*") {
				result *= nextNumber;
			} else if (op === "||") {
				result = +(result.toString() + nextNumber.toString());
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
}
const t1 = performance.now();
console.log(`time: ${t1 - t0}ms`);
console.log(total);
