let input = await Bun.file('input.txt').text()

input = `162,817,812
57,618,57
906,360,560
592,479,940
352,342,300
466,668,158
542,29,236
431,825,988
739,650,466
52,470,668
216,146,977
819,987,18
117,168,530
805,96,715
346,949,466
970,615,88
941,993,340
862,61,35
984,92,344
425,690,689`

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
            if (distance === 0) {
                continue
            }
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

const maxConnections = 10
let connectionCount = 0

console.log(pairs)

for (const [box1, box2] of pairs) {
    if (connectionCount === maxConnections) {
        break
    }

    const stringifiedBox1 = `${box1.x},${box1.y},${box1.z}`
    const stringifiedBox2 = `${box2.x},${box2.y},${box2.z}`

    const groupIndexForBox1 = groups.findIndex(x => x.has(stringifiedBox1))
    const groupIndexForBox2 = groups.findIndex(x => x.has(stringifiedBox2))

    // Neither one is in a group yet
    if (groupIndexForBox1 + groupIndexForBox2 === -2) {
        connectionCount++
        groups.push(new Set([stringifiedBox1, stringifiedBox2]))
        continue
    }

    // They're in the same group
    if (groupIndexForBox1 === groupIndexForBox2) {
        continue
    }


    // only box two is in a group
    if (groupIndexForBox1 === -1) {
        connectionCount++
        groups[groupIndexForBox2].add(stringifiedBox1)
        continue
    }

    // only box one is in a group
    if (groupIndexForBox2 === -1) {
        connectionCount++
        groups[groupIndexForBox1].add(stringifiedBox2)
        continue
    }

    // They are in different groups (time to merge)

    const group1 = groups[groupIndexForBox1]
    const group2 = groups[groupIndexForBox2]

    groups.push(group1.union(group2))

    groups.splice(groupIndexForBox1, 1)
    groups.splice(groupIndexForBox2, 1)
    connectionCount++
}

console.log(groups)
// Check duplicates
// const list = pairs.map(([first, second]) => {
//     const { x: x1, y: y1, z: z1 } = first
//     const { x: x2, y: y2, z: z2 } = second

//     return `${x1}${y1}${z1}${x2}${y2}${z2}`
// })

// const set = new Set(list)

// console.log(set.size)