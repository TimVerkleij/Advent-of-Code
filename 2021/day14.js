let template = "PSVVKKCNBPNBBHNSFKBO"

let pairInsertions = `CF -> H
PP -> H
SP -> V
NO -> C
SF -> F
FS -> H
OF -> P
PN -> B
SH -> V
BO -> K
ON -> V
VP -> S
HN -> B
PS -> P
FV -> H
NC -> N
FN -> S
PF -> F
BF -> F
NB -> O
HS -> C
SC -> V
PC -> K
KF -> K
HC -> C
OK -> H
KS -> P
VF -> C
NV -> S
KK -> F
HV -> H
SV -> V
KC -> N
HF -> P
SN -> F
VS -> P
VN -> F
VH -> C
OB -> K
VV -> O
VC -> O
KP -> V
OP -> C
HO -> S
NP -> K
HB -> C
CS -> S
OO -> S
CV -> K
BS -> F
BH -> P
HP -> P
PK -> B
BB -> H
PV -> N
VO -> P
SS -> B
CC -> F
BC -> V
FF -> S
HK -> V
OH -> N
BV -> C
CP -> F
KN -> K
NN -> S
FB -> F
PH -> O
FH -> N
FK -> P
CK -> V
CN -> S
BP -> K
CH -> F
FP -> K
HH -> N
NF -> C
VB -> B
FO -> N
PB -> C
KH -> K
PO -> K
OV -> F
NH -> H
KV -> B
OS -> K
OC -> K
FC -> H
SO -> H
KO -> P
NS -> F
CB -> C
CO -> F
KB -> V
BK -> K
NK -> O
SK -> C
SB -> B
VK -> O
BN -> H`

// template = "NNCB"

// pairInsertions = `CH -> B
// HH -> N
// CB -> H
// NH -> C
// HB -> C
// HC -> B
// HN -> C
// NN -> C
// BH -> H
// NC -> B
// NB -> B
// BN -> B
// BB -> N
// BC -> B
// CC -> N
// CN -> C`

pairInsertions = pairInsertions.split("\n").map(value => { return value.split(" -> ") })

const { performance } = require('perf_hooks')

let t0 = performance.now()

let templatePairs = createTemplatePairs(template)

let output = ""
for (let k = 0; k < 10; k++) {
    output = templatePairs[0][0]
    for (let i = 0; i < templatePairs.length; i++) {
        const templatePair = templatePairs[i]
        const firstLetter = templatePair[0]
        const secondLetter = templatePair[1]
        for (let j = 0; j < pairInsertions.length; j++) {
            const pairInsertion = pairInsertions[j];
            const pair = pairInsertion[0]
            const insertion = pairInsertion[1]
            if (pair[0] === firstLetter && pair[1] === secondLetter) {
                output += insertion + secondLetter
            }
        }
    }
    templatePairs = createTemplatePairs(output)
}


function createTemplatePairs(template) {
    let templatePairs = []

    for (let i = 0; i < template.length - 1; i++) {
        const letter = template[i]
        const pair = template[i + 1]
        templatePairs.push([letter, pair])
    }

    return templatePairs
}

let occurences = {}

for (let i = 0; i < output.length; i++) {
    const letter = output[i];
    if (!occurences[`${letter}`]) {
        occurences[`${letter}`] = 0
    }
    occurences[`${letter}`]++
}

let occurencesList = []
Object.values(occurences).forEach(value => occurencesList.push(value))
occurencesList.sort((a, b) => a - b)


let t1 = performance.now()
console.log(occurencesList[occurencesList.length - 1] - occurencesList[0])

console.log(t1 - t0 + " ms")
