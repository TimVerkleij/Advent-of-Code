const input = await Bun.file("./input.txt").text();

// input = `
// MMMSXXMASM
// MSAMXMSMSA
// AMXSXMAAMM
// MSAMASMSMX
// XMASAMXAMM
// XXAMMXXAMA
// SMSMSASXSS
// SAXAMASAAA
// MAMMMXMMMM
// MXMXAXMASX`;

const map = input.split("\n").map((x) => x.split(""));
const letters = ["X", "M", "A", "S"];

const directions: Record<string, { x: number; y: number }> = {
	NW: { x: -1, y: -1 },
	NE: { x: 1, y: -1 },
	SW: { x: -1, y: 1 },
	SE: { x: 1, y: 1 },
};

let total = 0;

for (let y = 0; y < map.length; y++) {
	const row = map[y];
	for (let x = 0; x < row.length; x++) {
		const char = row[x];
		if (char !== "A") {
			continue;
		}
		if (findCross(x, y)) total++;
	}
}

console.log(total);

function findCross(x: number, y: number): boolean {
	const letters: Record<string, string> = {};

	for (const [direction, { x: horizontal, y: vertical }] of Object.entries(
		directions,
	)) {
		const letter = map[y + vertical]?.[x + horizontal];
		if (letter === "M" || letter === "S") {
			letters[direction] = letter;
		} else {
			return false;
		}
	}

	if (letters.NW === letters.SE) {
		return false;
	}

	if (letters.NE === letters.SW) {
		return false;
	}

	return true;
}
