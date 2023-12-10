// import text file
const fs = require('fs')
let text = fs.readFileSync('input.txt', 'utf-8')

let [instructions, network] = text.split('\n\n')

let nodes = {}
network.split('\n').forEach(node => {
    let [id, connections] = node.split(' = ')
    connections = connections.slice(1, -1).split(', ')
    nodes[id] = connections
})

let locations = Object.keys(nodes).filter(key => {
    return key.endsWith('A')
})

const array = []
for (let startingLocation of locations) {

    let operations = 0
    const arr = []
    for (let i = 0; i < instructions.length; i++) {
        operations++
        let instruction = instructions[i] === 'R' ? 1 : 0
        startingLocation = nodes[startingLocation][instruction]
        if (startingLocation.endsWith('Z')) {
            arr.push(operations)
            break
        }

        if (instructions.length - 1 === i) {
            i = -1
        }
    }
    array.push(operations)
}

let sorted = array.sort((a, b) => b - a)

const biggestNumber = sorted[0]

let i = 0
let found = false
let product = 0
while (!found) {
    i++
    product = biggestNumber * i
    found = true
    for (let number of sorted.slice(1)) {
        if (product % number !== 0) {
            found = false
            break
        }
    }
}

console.log(product)
