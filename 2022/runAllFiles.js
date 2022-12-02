const execSync = require('child_process').execSync;

const fileCount = execSync('dir', { encoding: 'utf-8' }).split('\n').length - 11

for (let i = 1; i <= fileCount/2; i++) {
    console.log("\x1b[33m", `Running day ${i}`)
    let output = execSync(`node day${i}`, { encoding: 'utf-8' })
    console.log("\x1b[32m", 'Part 1:')
    console.log("\x1b[0m", output)
    output = execSync(`node day${i}p2`, { encoding: 'utf-8' })
    console.log("\x1b[32m", 'Part 2:')
    console.log("\x1b[0m", output)
}