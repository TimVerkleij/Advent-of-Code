let input = await Bun.file('./input.txt').text()

// input = `987654321111111
// 811111111111119
// 234234234234278
// 818181911112111`

const banks = input.split('\n')

let sum = 0

function getHighestJoltage(bank: string, currentJoltage = '') {
    const trimAmount = -11 + currentJoltage.length
    const searchString = bank.slice(0, trimAmount ? trimAmount : undefined)
    if (searchString.length === 0 || currentJoltage.length === 12) {
        return currentJoltage
    }

    let digitToFind = 9
    let index = -1
    while (index === -1) {
        index = searchString.indexOf(digitToFind.toString())
        if (index === -1) {
            digitToFind--
        }
    }

    const newJoltage = currentJoltage + searchString[index]
    const newBank = bank.slice(index + 1)
    return getHighestJoltage(newBank, newJoltage)
}

for (const bank of banks) {
    const joltage = getHighestJoltage(bank)
    sum += +joltage
}

console.log(sum)