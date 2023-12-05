// import text file
const fs = require('fs')
let text = fs.readFileSync('input.txt', 'utf-8')


let seeds = text.split('\n\n')[0].split(' ').slice(1)
let maps = text.split('\n\n').slice(1).map((map) => map.split('\n').map((row, index) => {
    if (index === 0) {
        return
    }
    return row.split(' ').map(number => parseInt(number))
}).filter((row) => row))

let locations = []
for (let seed of seeds) {
    for (const map of maps) {
        for (const [destinationRangeStart, sourceRangeStart, rangeLength] of map) {
            if(sourceRangeStart <= seed && seed < sourceRangeStart + rangeLength) {
                const difference = sourceRangeStart - destinationRangeStart
                seed = seed - difference
                break
            }
        }
    }
    locations.push(seed)
}

console.log(Math.min(...locations))