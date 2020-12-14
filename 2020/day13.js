myTOA = 1008713
input = `13,x,x,41,x,x,x,x,x,x,x,x,x,467,x,x,x,x,x,x,x,x,x,x,x,19,x,x,x,x,17,x,x,x,x,x,x,x,x,x,x,x,29,x,353,x,x,x,x,x,37,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,23`

let busIDs = []


// myTOA = 939
// let busIDs = [
//     7,
//     13,
//     59,
//     31,
//     19
// ]

input.split(",").map(x => {
    if (x !== "x") {
        busIDs.push(Number(x))
    }
})

let waitingTimes = {}

const {PerformanceObserver, performance} = require('perf_hooks');

let t0 = performance.now()

for (let i = 0; i < busIDs.length; i++) {
    const busID = busIDs[i];
    let waitingTime = busID - (myTOA % busID)
    waitingTimes[waitingTime] = {
        "BusID": busID,
        "Answer": waitingTime * busID
    }
}


let t1 = performance.now()
console.log(waitingTimes);
console.log(t1 - t0 + " ms")
