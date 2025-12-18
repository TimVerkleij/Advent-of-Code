let input = await Bun.file('input.txt').text()

let tiles = input.split('\n').map(x => x.split(',').map(x => +x))

// const xsorted = [...tiles.sort((a, b) => a[0] - b[0])]
// const ysorted = tiles.sort((a, b) => a[1] - b[1])


// const highestX = xsorted[xsorted.length - 1][0]
// const highestY = ysorted[ysorted.length - 1][0]

// console.log(highestX, highestY)

let highestArea = 0

for (let i = 0; i < tiles.length; i++) {
    for (let j = i + 1; j < tiles.length; j++) {
        const [xA, yA] = tiles[i]
        const [xB, yB] = tiles[j]

        const area = (Math.abs(xA - xB) + 1) * (Math.abs(yA - yB) + 1)

        highestArea = Math.max(highestArea, area)
    }
}

console.log(highestArea)