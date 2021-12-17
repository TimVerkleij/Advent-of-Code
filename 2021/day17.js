let input = `target area: x=96..125, y=-144..-98`

let targetArea = { "X": [96, 125], "Y": [-144, -98] }

let trajectory = [15, 143]


let distancesX = []
let maxHorizontalDistance = 0
for (let i = trajectory[0]; i >= 1; i--) {
    maxHorizontalDistance += i
    distancesX.push(maxHorizontalDistance)
}

let maxHeight = 0
let currentHeight = 0
let heightsInRange = []
let heights = []
let hits = []
for (let i = trajectory[1], j = 0; i >= targetArea["Y"][0]; i--, j++) {
    currentHeight += i
    if (currentHeight > maxHeight) {
        maxHeight = currentHeight
    }
    heights.push(currentHeight)
    if (currentHeight >= -144 && currentHeight <= -98) {
        // heightsInRange.push(currentHeight)
        // console.log(distancesX[j] ? distancesX[j] : distancesX[distancesX.length - 1], currentHeight)
        let currentDistance = distancesX[j] ? distancesX[j] : distancesX[distancesX.length - 1]
        // if (currentDistance <= targetArea["X"][1] && currentDistance >= targetArea["X"][0]) {
            hits.push({ "X": currentDistance, "Y": currentHeight })
        // }
    }
}

console.log(maxHeight)