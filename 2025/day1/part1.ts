const input = await Bun.file('./input.txt').text()

const instructions = input.split('\n').map(x => [x.slice(0, 1), x.slice(1)])

let password = 0
let dial = 50

for (const [direction, amount] of instructions) {
    if (direction === 'R') {
        dial += +amount % 100
    } else {
        dial -= +amount % 100
    }

    if (dial < 0) {
        dial += 100
    } else if (dial > 99) {
        dial -= 100
    }

    if (dial === 0) {
        password++
    }
}

console.log(password)