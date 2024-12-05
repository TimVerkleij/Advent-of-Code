const input = await Bun.file("./input.txt").text();

// input = `47|53
// 97|13
// 97|61
// 97|47
// 75|29
// 61|13
// 75|53
// 29|13
// 97|29
// 53|29
// 61|53
// 97|53
// 61|29
// 47|13
// 75|47
// 97|75
// 47|61
// 75|61
// 47|29
// 75|13
// 53|13

// 75,47,61,53,29
// 97,61,53,29,13
// 75,29,13
// 75,97,47,61,53
// 61,13,29
// 97,13,75,29,47`;

const [rules, updates] = input
	.split("\n\n")
	.map((x) => x.split("\n").map((y) => y.split(/\||,/)));

const parsedRules: Record<string, number[]> = {};

rules.map((x) => {
	const [left, right] = x;

	if (parsedRules[left]) parsedRules[left].push(+right);
	else parsedRules[left] = [+right];
});

let total = 0;

for (const update of updates) {
	const seenNumbers: number[] = [];
	let valid = true;
	for (const page of update) {
		const followingNumbers = parsedRules[page];
		for (const seen of seenNumbers) {
			if (followingNumbers?.includes(seen)) {
				valid = false;
				break;
			}
		}
		seenNumbers.push(+page);
		if (!valid) {
			break;
		}
	}
	if (valid) {
		const index = Math.floor(update.length / 2);
		total += +update[index];
	}
}
console.log(total);
