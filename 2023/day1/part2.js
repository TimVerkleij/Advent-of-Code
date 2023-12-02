// import text file
const fs = require('fs')
const text = fs.readFileSync('input.txt', 'utf-8')


const lines = text.split('\n')
console.log(lines)