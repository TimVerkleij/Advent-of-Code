const input = await Bun.file("./input.txt").text();
// input = "2333133121414131402";

const array = input.split("");

const disk: (number | null)[] = [];

array.map((x, i) => {
	let n: number | null;
	if (i % 2 === 0) {
		n = i / 2;
	} else {
		n = null;
	}

	for (let j = 0; j < +x; j++) {
		disk.push(n);
	}
});

let i2 = disk.length - 1;

for (let i = 0; i < i2; i++) {
	if (disk[i] !== null) {
		continue;
	}

	while (disk[i2] === null) {
		i2--;
	}

	disk[i] = disk[i2];
	disk[i2] = null;
	i2--;
}

// console.log(disk.join("."));
let total = 0;

disk.map((x, i) => {
	if (x !== null) total += x * i;
});
console.log(total);
