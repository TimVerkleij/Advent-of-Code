// import text file
const fs = require('fs')
let text = fs.readFileSync('input.txt', 'utf-8')

// text = `0 3 6 9 12 15
// 1 3 6 10 15 21
// 10 13 16 21 30 45`

let chronicles = text.split('\n').map(history => history.split(' ').map(number => parseInt(number)))

let sum = 0
for (let chronicle of chronicles) {
    let differenceMap = createDifferenceMap(chronicle)

    // console.log(differenceMap)
    let mostRecentPredictedDifference
    for (let i = 0; i < differenceMap.length; i++) {
        let differences = differenceMap[i]
        let nextDifferences = differenceMap[i + 1]
        // console.log(nextDifferences)
        if (nextDifferences !== undefined) {
            let predictedDifference = differences[differences.length - 1] + nextDifferences[nextDifferences.length - 1]
            mostRecentPredictedDifference = predictedDifference
            nextDifferences.push(predictedDifference)
        } else {
            sum += mostRecentPredictedDifference
            // console.log(mostRecentPredictedDifference)
        }
        // console.log(nextDifferences)
    }
}

console.log(sum)

function createDifferenceMap(array, currentlyCalculatedDifferences = [array]) {
    let differences = []
    for (let i = 0; i < array.length; i++) {
        let currentValue = array[i]
        let nextValue = array[i + 1]
        if (nextValue !== undefined) {
            let difference = nextValue - currentValue
            differences.push(difference)
        }
    }

    currentlyCalculatedDifferences.unshift(differences)

    if (differences.every(number => number === differences[0])) {
        // console.log(currentlyCalculatedDifferences)
        // console.log(differences.length)
        currentlyCalculatedDifferences.unshift(new Array(differences.length - 1).fill(0))
        return currentlyCalculatedDifferences
    }

    return createDifferenceMap(differences, currentlyCalculatedDifferences)
}


// console.log(createDifferenceMap([10, 13, 16, 21, 30, 45, 68]))

// console.log(createDifferenceMap([
//     12, 25, 47, 76,
//     112, 155, 205, 262
// ]))