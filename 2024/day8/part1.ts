const input = await Bun.file("./input.txt").text();

const antennas: Record<string, { x: number; y: number }[]> = {};

const map = input.split("\n").map((row, i) => {
	return row.split("").map((location, j) => {
		// console.log(location);
		antennas[location]
			? antennas[location].push({ x: j, y: i })
			: // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
				(antennas[location] = [{ x: j, y: i }]);
		return location;
	});
});

const width = map[0].length - 1;
const height = map.length - 1;
// console.log(map);

for (const [frequency, locations] of Object.entries(antennas)) {
	console.log(frequency, locations);
	// const pairs = getAllPairs(locations);
	// for (const pair of pairs) {
	// 	console.log(pair);
	// }
}
console.log(antennas);

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
function getAllPairs(items: any[]) {
	const pairs = [];
	for (let i = 0; i < items.length; i++) {
		for (let j = i + 1; j < items.length; j++) {
			pairs.push([items[i], items[j]]);
		}
	}
	return pairs;
}
