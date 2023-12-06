// import text file
const fs = require('fs')
let text = fs.readFileSync('input.txt', 'utf-8')

// text = `Time:      7  15   30
// Distance:  9  40  200`

let arr = []
const [times, distances] = text.split('\n').map(line => line.split(/\s+/).slice(1).map(Number))
for(let i = 0; i < times.length; i++) {
    const time = times[i]
    const distance = distances[i]


    const optimalTimeToHoldDownButton = Math.floor(time/2)
    const remainingTime = time - optimalTimeToHoldDownButton

    let possibleWaysToWin = 0
    let buttonTime = optimalTimeToHoldDownButton
    let raceTime = remainingTime
    while (buttonTime * raceTime > distance) {
        buttonTime--
        raceTime++
        possibleWaysToWin++
    }
    if(time % 2 === 0) {
        arr.push(possibleWaysToWin*2 - 1)
    } else {
        arr.push(possibleWaysToWin*2)
    }
}

console.log(arr.reduce((a, b) => a * b, 1))