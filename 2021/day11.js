let input = `5651341452
1381541252
1878435224
6814831535
3883547383
6473548464
1885833658
3732584752
1881546128
5121717776`

input = input.split("\n").map(value => { return value.split("").map(value2 => { return parseInt(value2) }) })

for (let y = 0; y < input.length; y++) {
    const row = input[y];
    for (let x = 0; x < row.length; x++) {
        const octopus = row[x];
        input[y][x]++

        if (input[y][x] == 9) {
            addOneToSurroundingOctopuses(x, y)
        }
    }
}


function addOneToSurroundingOctopuses(x, y) {
    let topL, topM, topR, botL, botM, botR
    if (y - 1 >= 0) {
        topL = ++input[y - 1][x - 1]
        topM = ++input[y - 1][x]
        topR = ++input[y - 1][x + 1]
    }

    console.log(input[y])
    input[y][x - 1]++
    input[y][x + 1]++
    let midL = input[y][x - 1]
    let midR = input[y][x + 1]

    if (y + 1 <= 9) {
        botL = ++input[y + 1][x - 1]
        botM = ++input[y + 1][x]
        botR = ++input[y + 1][x + 1]
    }


    if (topL == 9) {
        addOneToSurroundingOctopuses(x - 1, y - 1)
    }
    if (topM == 9) {
        addOneToSurroundingOctopuses(x, y - 1)
    }
    if (topR == 9) {
        addOneToSurroundingOctopuses(x + 1, y - 1)
    }
    if (midL == 9) {
        addOneToSurroundingOctopuses(x - 1, y)
    }
    if (midR == 9) {
        addOneToSurroundingOctopuses(x - 1, y)
    }
    if (botL == 9) {
        addOneToSurroundingOctopuses(x - 1, y - 1)
    }
    if (botM == 9) {
        addOneToSurroundingOctopuses(x, y - 1)
    }
    if (botR == 9) {
        addOneToSurroundingOctopuses(x + 1, y - 1)
    }
}
console.log(input)