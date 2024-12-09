import { findLoop } from "./part2";

// biome-ignore lint/style/noVar: <explanation>
declare var self: Worker;

self.onmessage = (event: MessageEvent) => {
	const { x, y, newDirection } = event.data;
	const isLoop = findLoop(x, y, newDirection);
	if (isLoop) {
		postMessage("loop");
	} else {
		postMessage("no loop");
	}
	self.terminate();
	process.exit(0);
};
