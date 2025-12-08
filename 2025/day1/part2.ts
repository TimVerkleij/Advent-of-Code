let input = await Bun.file('./input.txt').text()

// input = `L68
// L30
// R48
// L5
// R60
// L55
// L1
// L99
// R14
// L82`

const instructions = input.split('\n').map(x => [x.slice(0, 1), x.slice(1)])

let password = 0
let dial = 50

for (const [direction, amount] of instructions) {
    for (let i = 0; i < +amount; i++) {
        if (direction === 'R') {
            dial++
        } else {
            dial--
        }

        if (dial % 100 == 0) {
            password++
        }
    }
}

console.log(password)