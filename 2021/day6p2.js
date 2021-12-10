let input = `5,1,1,5,4,2,1,2,1,2,2,1,1,1,4,2,2,4,1,1,1,1,1,4,1,1,1,1,1,5,3,1,4,1,1,1,1,1,4,1,5,1,1,1,4,1,2,2,3,1,5,1,1,5,1,1,5,4,1,1,1,4,3,1,1,1,3,1,5,5,1,1,1,1,5,3,2,1,2,3,1,5,1,1,4,1,1,2,1,5,1,1,1,1,5,4,5,1,3,1,3,3,5,5,1,3,1,5,3,1,1,4,2,3,3,1,2,4,1,1,1,1,1,1,1,2,1,1,4,1,3,2,5,2,1,1,1,4,2,1,1,1,4,2,4,1,1,1,1,4,1,3,5,5,1,2,1,3,1,1,4,1,1,1,1,2,1,1,4,2,3,1,1,1,1,1,1,1,4,5,1,1,3,1,1,2,1,1,1,5,1,1,1,1,1,3,2,1,2,4,5,1,5,4,1,1,3,1,1,5,5,1,3,1,1,1,1,4,4,2,1,2,1,1,5,1,1,4,5,1,1,1,1,1,1,1,1,1,1,3,1,1,1,1,1,4,2,1,1,1,2,5,1,4,1,1,1,4,1,1,5,4,4,3,1,1,4,5,1,1,3,5,3,1,2,5,3,4,1,3,5,4,1,3,1,5,1,4,1,1,4,2,1,1,1,3,2,1,1,4`

const {PerformanceObserver, performance} = require('perf_hooks');

let t0 = performance.now()

let zeros = 0
let ones = 0
let twos = 0
let threes = 0
let fours = 0
let fives = 0
let sixes = 0
let sevens = 0
let eights = 0
let buffer = 0

input = input.split(",").map(fish => { return parseInt(fish) }).forEach(fish => {
    if (fish === 0) {
        zeros++
    } else if (fish === 1) {
        ones++
    } else if (fish === 2) {
        twos++
    } else if (fish === 3) {
        threes++
    } else if (fish === 4) {
        fours++
    } else if (fish === 5) {
        fives++
    } else if (fish === 6) {
        sixes++
    } else if (fish === 7) {
        sevens++
    } else if (fish === 8) {
        eights++
    }
})


for (let i = 0; i < 256; i++) {
    buffer = zeros
    zeros = ones
    ones = twos
    twos = threes
    threes = fours
    fours = fives
    fives = sixes
    sixes = sevens
    sixes += buffer
    sevens = eights
    eights = buffer
}

let fishes = [zeros, ones, twos, threes, fours, fives, sixes, sevens, eights]

total = fishes.reduce((a,b) => a+b)

let t1 = performance.now()

console.log(total)

console.log(t1 - t0 + " ms")
