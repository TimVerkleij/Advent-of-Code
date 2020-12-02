// var input = ["R5", "L5", "R5", "R3"];
var input = ["R2", "L5", "L4", "L5", "R4", "R1", "L4", "R5", "R3", "R1", "L1", "L1", "R4", "L4", "L1", "R4", "L4", "R4", "L3", "R5", "R4", "R1", "R3", "L1", "L1", "R1", "L2", "R5", "L4", "L3", "R1", "L2", "L2", "R192", "L3", "R5", "R48", "R5", "L2", "R76", "R4", "R2", "R1", "L1", "L5", "L1", "R185", "L5", "L1", "R5", "L4", "R1", "R3", "L4", "L3", "R1", "L5", "R4", "L4", "R4", "R5", "L3", "L1", "L2", "L4", "L3", "L4", "R2", "R2", "L3", "L5", "R2", "R5", "L1", "R1", "L3", "L5", "L3", "R4", "L4", "R3", "L1", "R5", "L3", "R2", "R4", "R2", "L1", "R3", "L1", "L3", "L5", "R4", "R5", "R2", "R2", "L5", "L3", "L1", "L1", "L5", "L2", "L3", "R3", "R3", "L3", "L4", "L5", "R2", "L1", "R1", "R3", "R4", "L2", "R1", "L1", "R3", "R3", "L4", "L2", "R5", "R5", "L1", "R4", "L5", "L5", "R1", "L5", "R4", "R2", "L1", "L4", "R1", "L1", "L1", "L5", "R3", "R4", "L2", "R1", "R2", "R1", "R1", "R3", "L5", "R1", "R4"];

var north = 0;
var east = 0;
var facing = 0;

input.forEach(myFunction);

function myFunction(value, index, array) {
	var direction = value.charAt(0);
	var amount = value.slice(1, 6);
	amount = parseInt(amount);
	console.log(amount);
	console.log(direction);
	if (direction == "R") {
		facing = facing + 1;
		if (facing == 4) {
			facing = 0;
		}
	}
	if (direction == "L") {
		facing = facing - 1;
		if (facing == -1) {
			facing = 3;
		}
	}
	if (facing == 0) {
		north = north + amount;
	}
	if (facing == 1) {
		east = east + amount;
	}
	if (facing == 2) {
		north = north - amount;
	}
	if (facing == 3) {
		east = east - amount;
	}

}
if (north < 0) {
	north = north * -1;
}
if (east < 0) {
	east = east * -1;
}
console.log(north + east);