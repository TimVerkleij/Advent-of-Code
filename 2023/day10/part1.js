// import text file
const fs = require('fs')
let text = fs.readFileSync('input.txt', 'utf-8')

// text = `..F7.
// .FJ|.
// SJ.L7
// |F--J
// LJ...`


const directions = {
    'north': {
        pipes: ['F', '7', '|'],
        translation: {
            x: 0,
            y: -1
        }
    },
    'east': {
        pipes: ['J', '7', '-'],
        translation: {
            x: 1,
            y: 0
        }
    },
    'south': {
        pipes: ['L', 'J', '|'],
        translation: {
            x: 0,
            y: 1
        }
    },
    'west': {
        pipes: ['F', 'L', '-'],
        translation: {
            x: -1,
            y: 0
        }
    }
}

const pipes = {
    '|': ['north', 'south'],
    '-': ['east', 'west'],
    'L': ['north', 'east'],
    'J': ['north', 'west'],
    '7': ['south', 'west'],
    'F': ['south', 'east'],
    'S': ['north', 'east', 'south', 'west']
}


const start = {
    x: 0,
    y: 0
}

let map = text.split('\n').map((line, index) => {
    if (line.includes('S')) {
        start.y = index

        line.split('').map((char, index) => {
            if (char === 'S') {
                start.x = index
            }
            return char
        })
    }
    return line.split('')
})

const compassInverse = {
    'north': 'south',
    'east': 'west',
    'south': 'north',
    'west': 'east'
}


let pipe = map[start.y][start.x]
let x = start.x
let y = start.y
let origin

let loopFinished = false
let totalAmountOfPipesInLoop = 0
while (!loopFinished) {
    totalAmountOfPipesInLoop++
    let compassDirections = pipes[pipe]
    compassDirections = compassDirections.filter(direction => direction !== origin)
    for(let compassDirection of compassDirections) {
        pipe = map[y + directions[compassDirection].translation.y][x + directions[compassDirection].translation.x]
        if(pipe === 'S') {
            loopFinished = true
            break
        }
        if (directions[compassDirection].pipes.includes(pipe)) {
            x = x + directions[compassDirection].translation.x
            y = y + directions[compassDirection].translation.y
            origin = compassInverse[compassDirection]

            break
        }
    }
}

console.log(totalAmountOfPipesInLoop / 2)