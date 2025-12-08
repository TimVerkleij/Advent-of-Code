let input = await Bun.file("./input.txt").text();
input = "2333133121414131402";

const array = input.split("");

let id = 0;

const disk = array
	.map((x, i) => {
		let value: string;
		if (i % 2 === 0) {
			value = id.toString().repeat(+x);
			id++;
		} else {
			value = ".".repeat(+x);
		}

		return value;
	})
	.join("")
	.split("");

let lastIndex = disk.length - 1;

const newDisk = disk.map((x) => {
	if (x !== ".") {
		return x;
	}
	if (x === null) {
		return null;
	}

	const newValue = disk[lastIndex];
	delete disk[lastIndex];
	lastIndex--;
	return newValue;
});

console.log(newDisk.join(""));
