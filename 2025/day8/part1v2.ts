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

class Box {
    readonly x: number
    readonly y: number
    readonly z: number
    readonly code: string

    constructor(x: number, y: number, z: number) {
        this.x = x
        this.y = y
        this.z = z

        this.code = `${x},${y},${z}`
    }

    calculateDistance = (compareBox: Box) => {
        return Math.sqrt((this.x - compareBox.x) ** 2 + (this.y - compareBox.y) ** 2 + (this.z - compareBox.z) ** 2)
    }
}

class Tree {
    root = new Map<string, string>()

    findRoot(x: string): string {
        const parent = this.root.get(x)!
        if (parent != x) {
            const grandParent = this.findRoot(parent)
            this.root.set(x, grandParent)
            return grandParent
        }

        return parent
    }

    makeTree(x: string) {
        this.root.set(x, x)
    }

    union(a: string, b: string) {
        const rootA = this.findRoot(a)
        const rootB = this.findRoot(b)

        if (rootA === rootB) return false

        this.root.set(rootA, rootB)
        return true
    }

}

const tree = new Tree()


const boxes = input.split('\n').map(box => {
    const [x, y, z] = box.split(',').map(x => +x)
    const newBox = new Box(x, y, z)
    tree.makeTree(newBox.code)
    return newBox
})

const graph: [string, string, number][] = []

for (let i = 0; i < boxes.length; i++) {
    for (let j = i + 1; j < boxes.length; j++) {
        const box1 = boxes[i]
        const box2 = boxes[j]
        const distance = box1.calculateDistance(box2)
        graph.push([box1.code, box2.code, distance])
    }
}

graph.sort((a, b) => a[2] - b[2])

let connectionCount = 0

for (const vertex of graph) {
    const createdLinked = tree.union(vertex[0], vertex[1])
    if (createdLinked) {
        connectionCount++
        if (connectionCount >= 10) {
            break
        }
    }

}


const obj: Record<string, number> = {}

for (const value of tree.root.values()) {
    obj[value] ? obj[value]++ : obj[value] = 1
}

const groupSizes = Object.values(obj).sort((a, b) => b - a)

// console.log(groupSizes)
console.log(groupSizes[0] * groupSizes[1] * groupSizes[2])