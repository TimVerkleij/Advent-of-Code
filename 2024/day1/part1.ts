const input = await Bun.file("./input.txt").text();

const lines = input.split("\n");
const leftList: number[] = [];
const rightList: number[] = [];
lines.map((x) => {
	const [left, right] = x.split(/\s+/);
	leftList.push(+left);
	rightList.push(+right);
});

leftList.sort((a, b) => a - b);
rightList.sort((a, b) => a - b);

let total = 0;

for (let i = 0; i < leftList.length; i++) {
	total += Math.abs(leftList[i] - rightList[i]);
}

console.log(total);
