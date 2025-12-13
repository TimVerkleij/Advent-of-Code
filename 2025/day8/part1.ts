let input = await Bun.file('input.txt').text()

type Box = {
    x: number,
    y: number,
    z: number
}

const boxes = input.split('\n').map(box => {
    const [x, y, z] = box.split(',')
    return { x, y, z }
})

const pairs: [Box, Box][] = []

const gridSize = 100

const grid = new Map<string, Box>()