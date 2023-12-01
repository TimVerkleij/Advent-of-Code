// import text file
const fs = require('fs')
const text = fs.readFileSync('input.txt', 'utf-8')

const lines = text.split('\n').map(string => string.split('').filter(char => char == parseInt(char)).join(''))

let sum = 0
for (const line of lines) {
    sum += parseInt(line[0] + line[line.length - 1])
}
console.log(sum)