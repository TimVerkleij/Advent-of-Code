let input = await Bun.file('input.txt').text()

input = `123 328  51 64 
 45 64  387 23 
  6 98  215 314
*   +   *   +  `

const problems: string[][] = []
const lines = input.split('\n')
const numbers = lines.map((x, i) => {
    if (i == lines.length - 1)
        return x.trim().split(/\s+/g)

    return x.match(/\d+\s*/g)
})

// console.log(numbers)
for (const list of numbers) {
    // console.log(list)
    list?.map((x, i) => problems[i] ? problems[i].push(x) : problems[i] = [x])
}


for (const problem of problems) {
    const operator = problem.pop()
    const numbers: string[] = []

    console.log(problem)
    let numberCount = Math.max(...problem.map(x => x.length))
    for (let i = 0; i < numberCount; i++) {
        for (const number of problem) {
            const endIndex = -(i + 1) + 1 == 0 ? undefined : -(i + 1) + 1
            // console.log(-(i + 1), endIndex)
            const addedNumber = number.slice(-(i + 1), endIndex)
            if (numbers[i]) {
                numbers[i] += addedNumber
            } else {
                numbers[i] = addedNumber
            }
        }
    }
    // console.log(numbers)


    // console.log(problem.map(x => x.length))
}
