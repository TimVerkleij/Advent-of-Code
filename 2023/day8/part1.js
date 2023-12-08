// import text file
const fs = require('fs')
let text = fs.readFileSync('input.txt', 'utf-8')

let [instructions, network] = text.split('\n\n')
// console.log(instructions)
// console.log(network)
let nodes = {}
network.split('\n').forEach(node => {
    let [id, connections] = node.split(' = ')
    connections = connections.slice(1, -1).split(', ')
    nodes[id] = connections
})

let location = 'AAA'
let direction
let i = 0
let totalSteps = 0
while (location !== 'ZZZ') {
    totalSteps++
    if (instructions[i] === 'L') {
        direction = 0
    } else {
        direction = 1
    }

    // console.log(location, instructions[i], nodes[location])
    // console.log(nodes[location][direction])
    location = nodes[location][direction]

    if(location === 'ZZZ') {
        break
    }

    i++
    if(!instructions[i]) {
        i = 0
    }
}

console.log(totalSteps)