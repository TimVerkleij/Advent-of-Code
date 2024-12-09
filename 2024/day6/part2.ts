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

exit();

function exit() {
	process.exit(1);
}
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

const total = 0;
move(pos.x, pos.y, "N");
console.log(total);

// for (const obstacle of obstaclePositions) {
// 	map[obstacle[1]][obstacle[0]] = "O";
// }

// map.map((x) => {
// 	console.log(x.join(""));
// });

function move(x: number, y: number, direction: direction) {
	const currentTile = map[y][x];
	if (currentTile === ".") {
		map[y][x] = direction;
	}
	const nextTile =
		map[y + transmutations[direction].y]?.[x + transmutations[direction].x];
	if (nextTile === undefined) {
		return;
	}
	if (nextTile === "#") {
		const newDirection = turn90Degrees(direction);
		map[y][x] = newDirection;
		return move(x, y, newDirection);
	}
	const worker = new Worker("./worker.ts");
	const newDirection = turn90Degrees(direction);
	worker.postMessage({ x, y, newDirection });

	worker.onmessage = (event) => {
		console.log(event);
		worker.terminate();
	};
	// if (findLoop(x, y, turn90Degrees(direction))) {
	// 	total++;
	// }

	return move(
		x + transmutations[direction].x,
		y + transmutations[direction].y,
		direction,
	);
}

export function findLoop(x: number, y: number, direction: direction) {
	const tile = map[y]?.[x];
	if (tile === direction) {
		return true;
	}
	if (tile === "#") {
		const newDirection = turn90Degrees(direction);
		return findLoop(
			x - transmutations[direction].x,
			y - transmutations[direction].y,
			newDirection,
		);
	}
	if (tile === undefined) {
		return false;
	}
	return findLoop(
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
