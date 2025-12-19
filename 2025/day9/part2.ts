let input = await Bun.file('input.txt').text()

const map = new Map<string, [number, number]>()
input.split('\n').map(x => map.set(x, x.split(',').map(x => +x) as [number, number]))



// const xsorted = [...tiles.sort((a, b) => a[0] - b[0])]
// const ysorted = tiles.sort((a, b) => a[1] - b[1])
const fileWriter = Bun.file('out.txt').writer()

// const row = Array(100000)
// const grid = []
fileWriter.start()
// for (let i = 0; i < 100000; i++) {
//     // grid.push([...row])
//     const row = Array(100000).fill('.')

//     fileWriter.write()
// }

fileWriter.end()
// console.log(xsorted)
// const highestX = xsorted[xsorted.length - 1][0]
// const highestY = ysorted[ysorted.length - 1][0]

// console.log(highestX, highestY)
const tiles = [...map.keys()]


// const ylinesArray = []
// for (const [] of tiles) {

// }

let highestArea = 0

for (let i = 0; i < tiles.length; i++) {
    for (let j = i + 1; j < tiles.length; j++) {

        const [xA, yA] = map.get(tiles[i])!
        const [xB, yB] = map.get(tiles[j])!
        // const [xA, yA] = tileA
        // const [xB, yB] = tileB

        const tileCName = `${xA},${yB}`
        const tileDName = `${xB},${yA}`

        const tileC = map.get(tileCName)
        const tileD = map.get(tileDName)

        const thirdTile = tileC ?? tileD

        if (!thirdTile) { // if answer is too big then this is probably not reliable
            const area = (Math.abs(xA - xB) + 1) * (Math.abs(yA - yB) + 1)
            highestArea = Math.max(highestArea, area)
            continue
        }

        const [tileX, tileY] = thirdTile

        const area = (Math.abs(xA - xB) + 1) * (Math.abs(yA - yB) + 1)

        highestArea = Math.max(highestArea, area)
    }
}

// console.log(highestArea)