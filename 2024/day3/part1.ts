const input = await Bun.file("./input.txt").text();

const operations = input.match(/mul\([0-9]{1,3}\,[0-9]{1,3}\)/g);

if (!operations) {
	process.exit(1);
}

let total = 0;
for (const operation of operations) {
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
