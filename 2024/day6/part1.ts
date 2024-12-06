const input = await Bun.file("./input.txt").text();

// input = `....#.....
// .........#
// ..........
// ..#.......
// .......#..
// ..........
// .#..^.....
// ........#.
// #.........
// ......#...`;

const pos = {
	x: 0,
	y: 0,
};

const map = input.split("\n").map((x, i) => {
	let index: number;
	// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
	if ((index = x.indexOf("^")) !== -1) {
		pos.x = index;
		pos.y = i;
	}
	return x.split("");
});

const transmutations: Record<direction, { x: number; y: number }> = {
	N: { x: 0, y: -1 },
	S: { x: 0, y: 1 },
	W: { x: -1, y: 0 },
	E: { x: 1, y: 0 },
};

let total = 0;
move(pos.x, pos.y, "N");
console.log(total);

function move(x: number, y: number, direction: direction) {
	const currentTile = map[y][x];
	if (currentTile !== "X") {
		map[y][x] = "X";
		total++;
	}
	const nextTile =
		map[y + transmutations[direction].y]?.[x + transmutations[direction].x];
	if (nextTile === undefined) {
		return;
	}
	if (nextTile === "#") {
		const newDirection = turn90Degrees(direction);
		return move(x, y, newDirection);
	}

	return move(
		x + transmutations[direction].x,
		y + transmutations[direction].y,
		direction,
	);
}

function turn90Degrees(direction: direction): direction {
	if (direction === "N") return "E";
	if (direction === "E") return "S";
	if (direction === "S") return "W";
	return "N";
}

type direction = "N" | "S" | "W" | "E";
