const input = await Bun.file("./input.txt").text();

// input = `7 6 4 2 1
// 1 2 7 8 9
// 9 7 6 2 1
// 1 3 2 4 5
// 8 6 4 4 1
// 1 3 6 7 9`;

const reports = input.split("\n").map((x) => x.split(" ").map((v) => +v));

let count = 0;

for (const report of reports) {
	let isIncreasing: boolean | undefined;
	let safe = true;
	for (let i = 1; i < report.length; i++) {
		const previousLevel = report[i - 1];
		const currentLevel = report[i];

		if (previousLevel - currentLevel === 0) {
			safe = false;
			break;
		}

		// console.log("isIncreasing: ", isIncreasing);
		if (isIncreasing === undefined) {
			isIncreasing = previousLevel - currentLevel < 0;
		}

		// console.log(previousLevel - currentLevel);
		if (isIncreasing !== previousLevel - currentLevel < 0) {
			safe = false;
			break;
		}

		if (Math.abs(previousLevel - currentLevel) > 3) {
			safe = false;
			break;
		}
	}

	if (safe) {
		count++;
	}
}

console.log(count);
