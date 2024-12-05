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
	N: { x: 0, y: -1 },
	NE: { x: 1, y: -1 },
	W: { x: -1, y: 0 },
	E: { x: 1, y: 0 },
	SW: { x: -1, y: 1 },
	S: { x: 0, y: 1 },
	SE: { x: 1, y: 1 },
};

let total = 0;

for (let y = 0; y < map.length; y++) {
	const row = map[y];
	for (let x = 0; x < row.length; x++) {
		const char = row[x];
		if (char !== "X") {
			continue;
		}
		total += findNextLetter(x, y, char);
	}
}

console.log(total);

function findNextLetter(
	x: number,
	y: number,
	letter: string,
	direction: string,
): boolean;
function findNextLetter(x: number, y: number, letter: string): number;
function findNextLetter(
	x: number,
	y: number,
	letter: string,
	direction?: string,
): number | boolean {
	if (letter === "S") {
		return true;
	}

	const expectedLetter = letters[letters.indexOf(letter) + 1];

	const nextLetters: {
		x: number;
		y: number;
		letter: string;
		direction: string;
	}[] = [];

	if (!direction) {
		for (const [direction, { x: horizontal, y: vertical }] of Object.entries(
			directions,
		)) {
			if (map[y + vertical]?.[x + horizontal] === expectedLetter) {
				nextLetters.push({
					x: x + horizontal,
					y: y + vertical,
					letter: map[y + vertical][x + horizontal],
					direction,
				});
			}
		}
	} else {
		const { x: horizontal, y: vertical } = directions[direction];
		if (map[y + vertical]?.[x + horizontal] === expectedLetter) {
			return findNextLetter(
				x + horizontal,
				y + vertical,
				expectedLetter,
				direction,
			);
		}
		return false;
	}

	let total = 0;
	for (const nextLetter of nextLetters) {
		const result = findNextLetter(
			nextLetter.x,
			nextLetter.y,
			nextLetter.letter,
			nextLetter.direction,
		);
		if (result) {
			total++;
		}
	}

	return total;
}

// refs/remotes/origin/OFK-4936/new-transaction-service
