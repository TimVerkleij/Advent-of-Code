// Run all days for the advent of code 2024
import { $ } from "bun";

const folders = await $`ls`.text();
const days = folders.split("\n").filter((x) => x.match(/day/g));
console.log(days);

for (const day of days) {
	const files = await $`cd ${day} && ls`.text();
	const parts = files.split("\n").filter((x) => x.match(/.ts/g));

	console.log(("=".repeat(10) + day + "=".repeat(10)).padEnd(30, "="));

	for (const part of parts) {
		console.log(("-".repeat(10) + part + "-".repeat(10)).padEnd(30, "-"));

		const subprocess = Bun.spawn({
			cwd: `./${day}`,
			cmd: ["bun", "run", part],
			stdout: "pipe",
		});

		const reader = subprocess.stdout.getReader();
		const decoder = new TextDecoder();

		// Continuously read the stdout stream
		while (true) {
			const { value, done } = await reader.read();
			if (done) break;

			console.log(decoder.decode(value));
		}
	}
}
