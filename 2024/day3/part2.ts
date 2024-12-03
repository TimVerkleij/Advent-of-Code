const input = await Bun.file("./input.txt").text();

const operations = input.match(
	/(mul\([0-9]{1,3}\,[0-9]{1,3}\))|(do\(\))|(don\'t\(\))/g,
);

if (!operations) {
	process.exit(1);
}

let total = 0;
let disabled = false;
for (const operation of operations) {
	if (operation === "don't()") {
		disabled = true;
	}

	if (operation === "do()") {
		disabled = false;
		continue;
	}

	if (disabled) {
		continue;
	}

	const [left, right] = parseOperation(operation);
	total += left * right;
}

console.log(total);

function parseOperation(operation: string): [number, number] {
	const numbers = operation.match(/[0-9]{1,3}\,[0-9]{1,3}/);
	if (!numbers) {
		process.exit(1);
	}
	const [left, right] = numbers[0].split(",");

	return [+left, +right];
}
