input = `addx 1
noop
addx 2
addx 5
addx 2
noop
noop
noop
addx 5
noop
noop
addx 1
addx 2
addx -5
addx 12
addx 1
addx 4
addx 2
noop
addx -1
addx 4
noop
noop
addx -37
addx 21
addx -13
addx -3
noop
addx 3
addx 2
addx 5
addx -2
addx 7
addx -2
addx 2
addx 11
addx -4
addx 3
noop
addx -18
addx 7
addx 14
addx 2
addx 5
addx -39
addx 1
addx 5
noop
noop
noop
addx 1
addx 4
noop
addx 12
addx 10
addx -17
addx 5
addx -17
addx 14
addx 6
noop
addx 3
addx 7
noop
noop
addx 2
addx 3
noop
addx -40
addx 40
addx -33
addx -2
noop
addx 3
addx 2
addx 5
addx -7
addx 8
noop
addx 6
addx 8
addx -11
addx 8
noop
addx -19
addx 27
noop
addx -2
addx 4
noop
addx -10
addx -27
noop
noop
addx 7
addx 4
addx -3
addx 2
addx 5
addx 2
addx -4
addx -3
addx 10
addx 15
addx -8
addx 2
addx 3
addx -2
addx 5
addx 2
addx 2
addx -39
addx 1
addx 3
addx 3
addx 3
noop
addx 2
addx 1
addx 4
addx -1
addx 2
addx 4
addx 1
noop
noop
addx 2
addx 5
addx 3
noop
noop
addx -27
addx 29
noop
addx 3
noop
noop`

const {performance} = require('perf_hooks')
const t0 = performance.now()
const instructions = input.split('\n')
let cycleNumber = 1
let x = 1
let answer = 0
let cyclesToCheck = [20, 60, 100, 140, 180, 220]

for (let i = 0; i < instructions.length; i++) {
    const command = instructions[i]

    if (command === 'noop') {
        cycleNumber++
        if (cyclesToCheck.includes(cycleNumber)) {
            answer += x * cycleNumber
        }
        continue
    }

    cycleNumber++
    if (cyclesToCheck.includes(cycleNumber)) {
        answer += x * cycleNumber
    }

    cycleNumber++
    x += parseInt(command.split(' ')[1])

    if (cyclesToCheck.includes(cycleNumber)) {
        answer += x * cycleNumber
    }
}

const t1 = performance.now()
console.log(answer)
console.log(`Total time taken: ${t1 - t0}ms`)