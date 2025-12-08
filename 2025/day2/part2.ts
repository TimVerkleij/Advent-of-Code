let input = await Bun.file('./input.txt').text()

// input = `11-22,95-115,998-1012,1188511880-1188511890,222220-222224,1698522-1698528,446443-446449,38593856-38593862,565653-565659,824824821-824824827,2121212118-2121212124`

const ranges = input.split(',').map(x => x.split('-').map(x => +x))

const isValid = (id: number) => {
    const stringId = id.toString()

    for (let size = 1; size <= stringId.length / 2; size++) {
        const parts = stringId.match(new RegExp(`.{1,${size}}`, "g"))
        if (parts?.every(x => x === parts[0])) {
            return false
        }
    }

    return true

}

let sum = 0

for (const [start, end] of ranges) {
    for (let i = start; i <= end; i++) {
        if (!isValid(i)) {
            sum += i
        }
    }
}
console.log(sum)