let input = await Bun.file('./input.txt').text()

// input = `3-5
// 10-14
// 16-20
// 12-18

// 1
// 5
// 8
// 11
// 17
// 32`

let lines = input.split('\n\n').map(x => x.split('\n'))

const ranges = lines[0].map((x: string) => x.split('-').map(x => +x)) as [number, number][]
const availableIds = lines[1].map((x: string) => +x) as number[]

let sum = 0

for (const id of availableIds) {
    sum += +ranges.some(x => x[0] <= id && id <= x[1])
}

console.log(sum)