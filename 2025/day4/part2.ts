let input = await Bun.file('./input.txt').text()

// input = `..@@.@@@@.
// @@@.@.@.@@
// @@@@@.@.@@
// @.@@@@..@.
// @@.@@@@.@@
// .@@@@@@@.@
// .@.@.@.@@@
// @.@@@.@@@@
// .@@@@@@@@.
// @.@.@@@.@.`

const map = input.split('\n').map(x => x.split(''))

const getNeighbourCount = (x: number, y: number) => {
    let count = 0
    count += +(map[y - 1]?.[x - 1] == '@')
    count += +(map[y - 1]?.[x] == '@')
    count += +(map[y - 1]?.[x + 1] == '@')
    count += +(map[y]?.[x - 1] == '@')
    count += +(map[y]?.[x + 1] == '@')
    count += +(map[y + 1]?.[x - 1] == '@')
    count += +(map[y + 1]?.[x] == '@')
    count += +(map[y + 1]?.[x + 1] == '@')
    return count
}

let sum = 0

let rollsRemoved = true
while (rollsRemoved) {
    rollsRemoved = false
    for (let y = 0; y < map.length; y++) {
        const row = map[y]
        for (let x = 0; x < row.length; x++) {
            if (map[y][x] !== '@') {
                continue
            }
            const neighbourCount = getNeighbourCount(x, y)
            if (neighbourCount < 4) {
                map[y][x] = 'X'
                rollsRemoved = true
                sum++
            }
        }
        // console.log(map[y].join(''))
    }
}



console.log(sum)