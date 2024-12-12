const input = await Bun.file("./input.txt").text();

// input = `............
// ........0...
// .....0......
// .......0....
// ....0.......
// ......A.....
// ............
// ............
// ........A...
// .........A..
// ............
// ............`;

const antennas: Record<string, { x: number; y: number }[]> = {};

const map = input.split("\n").map((row, i) => {
	return row.split("").map((location, j) => {
		// console.log(location);
		if (location !== ".") {
			antennas[location]
				? antennas[location].push({ x: j, y: i })
				: // biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
					(antennas[location] = [{ x: j, y: i }]);
		}

		return location;
	});
});

let total = 0;
for (const [frequency, locations] of Object.entries(antennas)) {
	// console.log(frequency, locations);
	const pairs = getAllPairs(locations);
	for (const [A, B] of pairs) {
		// console.log([A, B]);
		const deltaX = A.x - B.x;
		const deltaY = A.y - B.y;
		const antinodeA = { x: A.x + deltaX, y: A.y + deltaY };
		const antinodeB = { x: B.x - deltaX, y: B.y - deltaY };

		if (map[antinodeA.y]?.[antinodeA.x]) {
			if (map[antinodeA.y][antinodeA.x] !== "#") {
				total++;
			}
			map[antinodeA.y][antinodeA.x] = "#";
		}

		if (map[antinodeB.y]?.[antinodeB.x]) {
			if (map[antinodeB.y][antinodeB.x] !== "#") {
				total++;
			}
			map[antinodeB.y][antinodeB.x] = "#";
		}
	}
}
// console.log(antennas);
map.map((x) => {
	console.log(x.join(""));
});

console.log(total);
function getAllPairs<T>(items: T[]): T[][] {
	const pairs = [];
	for (let i = 0; i < items.length; i++) {
		for (let j = i + 1; j < items.length; j++) {
			pairs.push([items[i], items[j]]);
		}
	}
	return pairs;
}
