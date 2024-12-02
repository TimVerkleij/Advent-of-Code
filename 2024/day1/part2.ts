const input = await Bun.file("./input.txt").text();

const lines = input.split("\n");
const leftList: number[] = [];
const rightList: Record<number, number> = [];
lines.map((x) => {
	const [left, right] = x.split(/\s+/);
	leftList.push(+left);
	// biome-ignore lint/suspicious/noAssignInExpressions: <explanation>
	rightList[+right] ? rightList[+right]++ : (rightList[+right] = 1);
});

leftList.sort((a, b) => a - b);

let total = 0;

for (let i = 0; i < leftList.length; i++) {
	total += leftList[i] * (rightList[leftList[i]] ?? 0);
}

console.log(total);
