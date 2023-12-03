// import text file
const fs = require('fs')
const text = fs.readFileSync('input.txt', 'utf-8')

const lines = text.split('\n').map(line => line.split(''))
const charactersToIgnore = '0123456789.'
const numbers = '0123456789'
let sum = 0

for (let i = 0; i < lines.length; i++) {
  for (let j = 0; j < lines[i].length; j++) {
    const symbol = lines[i][j]

    if (charactersToIgnore.includes(symbol)) continue

    for (let k = -1; k < 2; k++) {
        for ( let l = -1; l < 2; l++) {
            if (numbers.includes(lines[i+k][j+l])) {
                let currentNumber = lines[i+k][j+l]
                lines[i+k][j+l] = '.'
                currentNumber = checkForDigitsOnTheLeft(i + k, j + l, currentNumber)
                sum += checkForDigitsOnTheRight(i + k, j + l, currentNumber)
            }
        }
    }
  }
}

console.log(sum)


function checkForDigitsOnTheLeft(i, j, number = '') {
    const character = lines[i]?.[j-1]
    


    if (numbers.includes(character)) {
        lines[i][j-1] = '.'
        number = character + number
        return checkForDigitsOnTheLeft(i, j - 1, number)
    }
    return number
}

function checkForDigitsOnTheRight(i, j, number = '') {
    const character = lines[i]?.[j+1]

    if (numbers.includes(character)) {
        lines[i][j+1] = '.'

        number += character
        return checkForDigitsOnTheRight(i, j + 1, number)
    }
    return parseInt(number)
}