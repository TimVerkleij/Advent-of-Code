let input = await Bun.file("input.txt").text();

input = `..90..9
...1.98
...2..7
6543456
765.987
876....
987....`;

const trailHeads: cords[] = [];

const map = input.split("\n").map((x, i) => {
	x.matchAll(/0/g)
		.toArray()
		.map((x) => trailHeads.push({ x: x.index, y: i }));
	return x.split("").map((x) => +x);
});

let count = 0;

const scores: Record<string, Set<string>> = {};

for (const trailHead of trailHeads) {
	const headId = `${trailHead.x},${trailHead.y}`;
	move(trailHead, 0, headId);
}
console.log(count);

function move(location: cords, height: number, headId: string) {
	if (height === 9) {
		if (scores[headId] !== undefined) {
			scores[headId].add(`${location.x},${location.y}`);
		}
		count++;
		return;
	}
	const nextMoves = findNextStep(location, height);

	for (const next of nextMoves) {
		move(next, height + 1, headId);
	}
}

function findNextStep(location: cords, height: number): cords[] {
	const expectedHeight = height + 1;

	const possibleDirections = [];

	const { x, y } = location;

	if (map[y - 1]?.[x] === expectedHeight) {
		possibleDirections.push({ x, y: y - 1 });
	}
	if (map[y + 1]?.[x] === expectedHeight) {
		possibleDirections.push({ x, y: y + 1 });
	}
	if (map[y][x - 1] === expectedHeight) {
		possibleDirections.push({ x: x - 1, y });
	}
	if (map[y][x + 1] === expectedHeight) {
		possibleDirections.push({ x: x + 1, y });
	}

	return possibleDirections;
}

type cords = {
	x: number;
	y: number;
};
