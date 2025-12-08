let input = await Bun.file('./input.txt').text()

input = `987654321111111
811111111111119
234234234234278
818181911112111`

const banks = input.split('\n')

let sum = 0

for (const bank of banks) {

    const max = {
        previousFirst: 0,
        previousSecond: 0,
        first: 0,
        second: 0
    }

    for (let dig of bank) {
        let num = +dig
        if (max.first < num) {
            max.previousFirst = max.first
            max.first = num

            max.previousSecond = max.second
            max.second = 0
        } else if (max.second < num) {
            max.previousSecond = max.second
            max.second = num
        }
    }

    if (!max.second) {
        console.log(+`${max.previousFirst}${max.previousSecond}`)
        sum += +`${max.previousFirst}${max.previousSecond}`
    }

    console.log(+`${max.first}${max.second}`)
    sum += +`${max.first}${max.second}`
}

console.log(sum)