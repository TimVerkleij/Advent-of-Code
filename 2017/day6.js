var input = [5, 1, 10, 0, 1, 7, 13, 14, 3, 12, 8, 10, 7, 12, 0, 6]
var newArray = [
	[5, 1, 10, 0, 1, 7, 13, 14, 3, 12, 8, 10, 7, 12, 0, 6]
]
var steps = 0
console.log(input)
for (let j = 0; j > 10; j++) {
	var highest = Math.max(...input)
	var index = input.indexOf(highest)
	var next = index
	input.splice(next, 1, 0)

	for (let i = 0; i < highest; i++) {
		next++
		if (next >= input.length) {
			next = 0
		}
		var newValue = input[next] + 1
		input.splice(next, 1, newValue)
	}
console.log(input)

}
console.log(steps)