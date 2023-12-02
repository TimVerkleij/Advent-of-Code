// import text file
const fs = require('fs')
const text = fs.readFileSync('input.txt', 'utf-8')

let sum = 0

text.split('\n').forEach(line => {
    let [gameID, results] = line.split(': ')
    gameID = gameID.replace('Game ', '')

    const rounds = results.split('; ').map(round => {
        let roundResults = {}
        
        round.split(', ').forEach(dice => {
            const [amount, colour] = dice.split(' ')
            roundResults[colour] = parseInt(amount)
        })
         
        return roundResults
    })

    const highestValues = rounds.reduce((accumulator, round) => {
        const red = Math.max(accumulator.red ?? 0, round.red ?? 0)
        const blue = Math.max(accumulator.blue ?? 0, round.blue ?? 0)
        const green = Math.max(accumulator.green ?? 0, round.green ?? 0)

        return {red, blue, green}
    })
    
    if (highestValues.red <= 12 && highestValues.blue <= 14 && highestValues.green <= 13) {
        sum += parseInt(gameID)
    }
})

console.log(sum)