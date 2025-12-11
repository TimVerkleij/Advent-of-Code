let input = await Bun.file('input.txt').text()

const problems: string[][] = []

input.split('\n').map(x => x.trim().split(/\s+/g).map((x, i) => problems[i] ? problems[i].push(x) : problems[i] = [x]))

let sum = 0

problems.map(x => {
    const operator = x.pop()
    sum += eval(x.join(operator))
})

console.log(sum)