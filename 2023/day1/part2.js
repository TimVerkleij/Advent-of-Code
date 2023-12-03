// import text file
const fs = require('fs')
let text = fs.readFileSync('input.txt', 'utf-8')

// text = `two1nine
// eightwothree
// abcone2threexyz
// xtwone3four
// 4nineeightseven2
// zoneight234
// 7pqrstsixteen`

const spelledOutNumbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
const stringValues = new Map()
spelledOutNumbers.forEach((number, index) => {
    stringValues.set(number, index + 1)
})


let sum = 0

text.split('\n').forEach(line => {
    const firstDigit = findFirstDigit(line)
    const lastDigit = findLastDigit(line)
    // console.log(line)
    // console.log(firstDigit, lastDigit)
    sum += parseInt(firstDigit.toString() + lastDigit.toString())
})

console.log(sum)

function findFirstDigit(input) {
    let currentString = ''
    for (let i = 0; i < input.length; i++) {
        const char = input[i]

        if (!isNaN(parseInt(char))) {
            return parseInt(char)
        }

        const numberOfMatchingNumbers = spelledOutNumbers.filter(number => number.startsWith(currentString + char)).length
        // console.log(currentString, char)
        // console.log(numberOfMatchingNumbers)
        if (numberOfMatchingNumbers === 0) {
            if(currentString.length !== 0) {
                currentString = char
            }
            continue
        }

        if (numberOfMatchingNumbers === 1) {
            if (spelledOutNumbers.includes(currentString + char)) {
                const number = stringValues.get(currentString + char)
                // console.log('value found:', number)
                return number
            } else {
                currentString += char
            }
        } else {
            currentString += char
        }
    }
}

function findLastDigit(input) {
    let currentString = ''
    for (let i = input.length - 1; i >= 0; i--) {
        const char = input[i]
        // console.log(char + currentString)
        if (!isNaN(parseInt(char))) {
            return parseInt(char)
        }

        const numberOfMatchingNumbers = spelledOutNumbers.filter(number => number.endsWith(char + currentString)).length

        if (numberOfMatchingNumbers === 0) {
            if(currentString.length !== 0) {
                currentString = char
            }
            continue
        }

        if (numberOfMatchingNumbers === 1) {
            if (spelledOutNumbers.includes(char + currentString)) {
                const number = stringValues.get(char + currentString)
                return number
            } else {
                currentString = char + currentString
            }
        } else {
            currentString = char + currentString
        }

    }
}