const name = 'Freddy'
typeof name === 'string'

if (!('serviceWorker' in navigator)) {
    // you have an old browser :-(
}

const greeting = 'hello'
console.log(`${greeting} world!`)
    // ; gets rid of Unexpected newline between object and [ of property access
    ;[(1, 2, 3)].forEach(x => console.log(x))