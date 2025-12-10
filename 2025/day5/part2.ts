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

let ranges = lines[0].map((x: string) => x.split('-').map(x => +x)) as [number, number][]

// ranges = [
//     [4, 6],
//     [1, 10],
// ]

const set: [number, number][] = []

for (const range of ranges) {
    // console.log(range)
    const isOverlappingWith = set.filter(x => (x[0] <= range[0] && range[0] - 1 <= x[1] || x[0] <= range[1] + 1 && range[1] <= x[1]) ||
        (range[0] <= x[0] && x[0] - 1 <= range[1] || range[0] <= x[1] + 1 && x[1] <= range[1])
    )

    // console.log(isOverlappingWith)
    if (isOverlappingWith.length === 0) {
        set.push(range)
        continue
    }

    const startRanges: number[] = [range[0]]
    const endRanges: number[] = [range[1]]
    isOverlappingWith.map(x => {
        startRanges.push(x[0])
        endRanges.push(x[1])
        set.splice(set.findIndex(setElement => setElement[0] === x[0] && setElement[1] === x[1]), 1)
    })

    set.push([Math.min(...startRanges), Math.max(...endRanges)])

}


let sum = 0
for (const range of set) {
    sum += range[1] - range[0] + 1
}

console.log(sum)