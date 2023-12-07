// import text file
const fs = require('fs')
let text = fs.readFileSync('input.txt', 'utf-8')

const hands = text.split('\n').map(hand => {
    let [cards, bid] = hand.split(' ')
    return {
        cards,
        bid
    }
})

const cardValues = {
    'A': '14',
    'K': '13',
    'Q': '12',
    'J': '11',
    'T': '10',
}

let types = {
    'fiveOfaKind': {
        match: /(\w)\1{4}/,
        hands: []
    },
    'fourOfaKind': {
        match: /(\w)\1{3}/,
        hands: []
    },
    'fullHouse': {
        hands: []
    },
    'threeOfaKind': {
        match: /(\w)\1{2}/,
        hands: []
    },
    'twoPair': {
        hands: []

    },
    'onePair': {
        hands: []

    },
    'highCard': {
        hands: []

    }
}

const sortString = (string) => string.split('').sort().join('')

hands.forEach(hand => {
    let cardType = ''
    if (types.fiveOfaKind.match.test(hand.cards)) {
        cardType = 'fiveOfaKind'
    } else if (types.fourOfaKind.match.test(sortString(hand.cards))) {
        cardType = 'fourOfaKind'
    } else if (matchFullHouse(hand.cards)) {
        cardType = 'fullHouse'
    } else if (types.threeOfaKind.match.test(sortString(hand.cards))) {
        cardType = 'threeOfaKind'
    } else if (matchTwoPair(hand.cards)) {
        cardType = 'twoPair'
    } else if (matchOnePair(hand.cards)) {
        cardType = 'onePair'
    } else if (new Set(hand.cards.split('')).size === 5) {
        cardType = 'highCard'
    }

    types[cardType].hands.push({
        cards: hand.cards,
        bid: hand.bid
    })
})


function matchFullHouse(string) {
    const match = sortString(string).match(/(\w)\1{2}/)
    const differentCharacters = new Set(string.split('')).size
    if (match && differentCharacters === 2) {
        return match
    } else {
        return false
    }
}

function matchTwoPair(string) {
    const match = sortString(string).match(/(\w)\1{1}/)
    const differentCharacters = new Set(string.split('')).size
    if (match && differentCharacters === 3) {
        return match
    } else {
        return false
    }
}

function matchOnePair(string) {
    const match = sortString(string).match(/(\w)\1{1}/)
    const differentCharacters = new Set(string.split('')).size
    if (match && differentCharacters === 4) {
        return match
    } else {
        return false
    }
}

let sum = 0
let i = 1

Object.keys(types).reverse().forEach(type => {
    types[type].hands.sort((a, b) => {
        let aCards = replaceCardsWithValues(a.cards)
        let bCards = replaceCardsWithValues(b.cards)
        for (let [index] of aCards.entries()) {
            if(aCards[index] === bCards[index]) {
                continue
            }
            return aCards[index] - bCards[index]
        }
    })

    types[type].hands.forEach(hand => {
        sum += parseInt(hand.bid * i)
        i++
    })
    
})

console.log(sum)

function replaceCardsWithValues(string) {
    const array = string.split('').map(card => {
        return parseInt(cardValues[card] || card)
    })

    return array
}
