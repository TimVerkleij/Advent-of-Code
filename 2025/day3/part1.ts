let input = await Bun.file('./input.txt').text()

// input = `987654321111111
// 811111111111119
// 234234234234278
// 818181911112111`

const banks = input.split('\n')

let sum = 0

const findIndexOfBiggestDigit = (searchString: string, isSecondDigit: boolean = false) => {
    let index: number = -1
    let searchDigit = 9
    while (searchDigit > 0) {
        index = searchString.indexOf(searchDigit.toString())
        if (index === -1 || (index === searchString.length - 1 && !isSecondDigit)) {
            searchDigit--
            continue
        }
        break
    }
    return index
}

for (const bank of banks) {

    const index = findIndexOfBiggestDigit(bank)

    const firstDigit = +bank[index]

    const slicedBank = bank.slice(index + 1)

    const secondDigit = slicedBank[findIndexOfBiggestDigit(slicedBank, true)]
    sum += +`${firstDigit}${secondDigit}`
}


console.log(sum)