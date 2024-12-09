const input = await Bun.file("./input.txt").text();

const calibrations = input.split("\n").map((x) => {
	const [testValue, numbers] = x.split(": ");
	const parsedNumbers = numbers.split(" ").map((x) => +x);
	return [+testValue, parsedNumbers];
});

const operators = ["*", "+"];

for (const [testValue, numbers] of calibrations) {
	console.log(testValue, numbers);
}
