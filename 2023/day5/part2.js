// import text file
const fs = require('fs')
let text = fs.readFileSync('input.txt', 'utf-8')

// text = `seeds: 79 14 55 13

// seed-to-soil map:
// 50 98 2
// 52 50 48

// soil-to-fertilizer map:
// 0 15 37
// 37 52 2
// 39 0 15

// fertilizer-to-water map:
// 49 53 8
// 0 11 42
// 42 0 7
// 57 7 4

// water-to-light map:
// 88 18 7
// 18 25 70

// light-to-temperature map:
// 45 77 23
// 81 45 19
// 68 64 13

// temperature-to-humidity map:
// 0 69 1
// 1 0 69

// humidity-to-location map:
// 60 56 37
// 56 93 4`

let seeds = text.split('\n\n')[0].split(' ').slice(1).map((number) => parseInt(number))
let maps = text.split('\n\n').slice(1).map((map) => map.split('\n').map((row, index) => {
    if (index === 0) {
        return
    }
    return row.split(' ').map(number => parseInt(number))
}).filter((row) => row))

maps = maps.map(map => {
    return map.map(([destination, start, range]) => {
        return {start, end: start + range, destinationStart: destination, destinationEnd: destination + range, range, translation: destination - start}
    }).sort((a, b) => a.destinationStart - b.destinationStart)
}).reverse()


for (let i = 0; i < seeds.length; i+=2) {
    seeds[i] = {start: seeds[i], end: seeds[i] + seeds[i+1]}
    seeds[i+1] = undefined
}

seeds = seeds.filter(seed => seed).sort((a, b) => a.start - b.start)

let seedIsFound = false
for (let map of maps) {
    for (let range of map) {
        let i = range.destinationStart - range.translation
        while(i < range.end && !seedIsFound) {

            const foundSeed = findOriginalSeed(i)
            for( let seed of seeds) {
                if(seed.start <= foundSeed && seed.end > foundSeed) {
                    console.log(i + range.translation)
                    seedIsFound = true
                    break
                }
            }
            i+=1
        }
        if(seedIsFound) {
            break
        }
    }
    if(seedIsFound) {
        break
    }
}

function findOriginalSeed(location) {
    for (let i = 1; i < maps.length; i++) {
        for (let range of maps[i]) {
            if (range.destinationStart <= location && range.destinationEnd > location) {
                location -= range.translation
                break
            }
        }
    }
    return location
}