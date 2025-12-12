let input = await Bun.file('input.txt').text()

// input = `.......S.......
// ...............
// .......^.......
// ...............
// ......^.^......
// ...............
// .....^.^.^.....
// ...............
// ....^.^...^....
// ...............
// ...^.^...^.^...
// ...............
// ..^...^.....^..
// ...............
// .^.^.^.^.^...^.
// ...............`

const splitters = input.split('\n').map(x => x.split('').map((x, i) => x == '^' || x == 'S' ? i : null).filter(x => x != null)).filter(x => x.length != 0)


let beams: Record<number, number> = {}
beams[splitters.shift()![0]] = 1
let i = 0
for (const splitter of splitters) {
    i++
    const intersection = Object.keys(beams).filter(x => splitter.includes(+x)).map(x => +x)
    intersection.map(x => {
        const left = x - 1
        const right = x + 1

        beams[left] ? beams[left] += beams[x] : beams[left] = beams[x]
        beams[right] ? beams[right] += beams[x] : beams[right] = beams[x]
        beams[x] = 0
    })
    // console.log(beams)
    // const newBeams: number[] = []
    // intersection.forEach(x => newBeams.push(x - 1, x + 1))
    // beams = beams.filter(x => !intersection.includes(x))
    // beams.push(...newBeams)
    // console.log(i, total)
}

console.log(Object.values(beams).reduce((a, c) => a + c))
