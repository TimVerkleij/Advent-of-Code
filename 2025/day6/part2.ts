let input = await Bun.file('input.txt').text()

// input = `123 328  51 64 
//  45 64  387 23 
//   6 98  215 314
// *   +   *   +  `

const lines = input.split('\n').map(x => x + ' ')
const operators = lines.pop()!

let sum = 0

let currentOperator
let currentProblem: string[] = []
for (let i = 0; i < lines[0].length; i++) {
    if (operators[i] != ' ') {
        currentOperator = operators[i]
    }
    let number = lines.map(x => x[i]).join('').trim()

    if (!number) {
        const problem = currentProblem.join(currentOperator)
        sum += eval(problem)
        // console.log(problem, '=', eval(problem))
        currentProblem = []
        continue
    }

    currentProblem.push(number)

}

console.log(sum)