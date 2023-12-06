// import text file
const fs = require('fs')
let text = fs.readFileSync('input.txt', 'utf-8')

// text = `Time:      7  15   30
// Distance:  9  40  200`

let [times, distances] = text.split('\n').map(line => line.split(/\s+/).slice(1))
let time = parseInt(times.join(''))
let distance = parseInt(distances.join(''))


const optimalTimeToHoldDownButton = Math.floor(time / 2)
const remainingTime = time - optimalTimeToHoldDownButton

let possibleWaysToWin = 0
let buttonTime = optimalTimeToHoldDownButton
let raceTime = remainingTime
while (buttonTime * raceTime > distance) {
    buttonTime--
    raceTime++
    possibleWaysToWin++
}

if (time % 2 === 0) {
    console.log(possibleWaysToWin * 2 - 1)
} else {
    console.log(possibleWaysToWin * 2)
}
