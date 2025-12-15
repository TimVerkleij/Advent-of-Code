let input = await Bun.file('input.txt').text()

type Box = {
    x: number,
    y: number,
    z: number
}

const boxes = input.split('\n').map(box => {
    const [x, y, z] = box.split(',').map(x => +x)
    return { x, y, z }
})

const gridSize = 20000

const grid = new Map<string, Box[]>()

for (const box of boxes) {
    const cellX = Math.floor(box.x / gridSize)
    const cellY = Math.floor(box.y / gridSize)
    const cellZ = Math.floor(box.z / gridSize)
    const cell = `${cellX},${cellY},${cellZ}`

    if (!grid.has(cell))
        grid.set(cell, [])

    grid.get(cell)?.push(box)
}

const offsets = [-1, 0, 1]

const calculateDistance = (box1: Box, box2: Box) => {
    return Math.sqrt((box1.x - box2.x) ** 2 + (box1.y - box2.y) ** 2 + (box1.z - box2.z) ** 2)
}

const pairs: [Box, Box][] = []


for (const [cell, boxes] of grid) {
    const [x, y, z] = cell.split(',')

    const compareList = [...boxes]

    for (const dx of offsets) {
        for (const dy of offsets) {
            for (const dz of offsets) {
                const neighbouringCell = grid.get(`${+x + dx},${+y + dy},${+z + dz}`)
                if (!neighbouringCell) continue

                compareList.push(...neighbouringCell)
            }
        }
    }

    for (let i = 0; i < compareList.length; i++) {
        const currentBox = compareList[i]
        let closestDistance = Infinity
        let closestBox: Box | undefined
        for (let j = i + 1; j < compareList.length; j++) {
            const compareBox = compareList[j]
            const distance = calculateDistance(currentBox, compareBox)
            if (distance < closestDistance) {
                closestBox = compareBox
                closestDistance = distance
            }
        }

        if (!closestBox) {
            continue
        }

        // if (pairs.length >= 1000) {
        //     break
        // }

        pairs.push([currentBox, closestBox])
    }


}

const groups: Set<string>[] = []

for (const [box1, box2] of pairs) {
    const stringifiedBox1 = `${box1.x},${box1.y},${box1.z}`
    const stringifiedBox2 = `${box2.x},${box2.y},${box2.z}`

    // groupIndexForBox1

    for (let i = 0; i < groups.length; i++) {
        const group = groups[i]

    }

}
// Check duplicates
// const list = pairs.map(([first, second]) => {
//     const { x: x1, y: y1, z: z1 } = first
//     const { x: x2, y: y2, z: z2 } = second

//     return `${x1}${y1}${z1}${x2}${y2}${z2}`
// })

// const set = new Set(list)

// console.log(set.size)