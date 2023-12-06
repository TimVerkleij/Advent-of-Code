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


//for some reason my code could not find the spelled out words correctly. instead of fixing it, I just replaced the words with numbers
text.split('\n')
.map(e=>e.replace(/oneight/g,"oneeight"))
.map(e=>e.replace(/threeight/g,"threeeight"))
.map(e=>e.replace(/fiveight/g,"fiveeight"))
.map(e=>e.replace(/nineight/g,"nineeight"))
.map(e=>e.replace(/twone/g,"twoone"))
.map(e=>e.replace(/sevenine/g,"sevennine"))
.map(e=>e.replace(/eightwo/g,"eighttwo"))
.map(e=>e.replace('one', '1'))
.map(e=>e.replace('two', '2'))
.map(e=>e.replace('three', '3'))
.map(e=>e.replace('four', '4'))
.map(e=>e.replace('five', '5'))
.map(e=>e.replace('six', '6'))
.map(e=>e.replace('seven', '7'))
.map(e=>e.replace('eight', '8'))
.map(e=>e.replace('nine', '9'))
.forEach(line => {
    const firstDigit = findFirstDigit(line)
    const lastDigit = findLastDigit(line)
    fs.writeFile('output.txt', '', (err) => {
        if (err) return;
    })
    fs.appendFile('output.txt', line + '\n' + `${firstDigit} ${lastDigit}` + '\n' + `${sum} + ${parseInt(firstDigit.toString() + lastDigit.toString())} = ${sum + parseInt(firstDigit.toString() + lastDigit.toString())}` + '\n', (err) => {
        if (err) throw err;
    })
    console.log(line)
    console.log(firstDigit, lastDigit)
    console.log(`${sum} + ${parseInt(firstDigit.toString() + lastDigit.toString())} = ${sum + parseInt(firstDigit.toString() + lastDigit.toString())}`)
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