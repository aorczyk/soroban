// --- Displaying numbers as on Soroban abacus ---
// https://en.wikipedia.org/wiki/Soroban

// Display digit
function showSorobanDigit(n:number, col:number){
    if (n == 0){
        for (let i = 0; i <= 4; i++){
            led.unplot(col, i)
        }
    }

    if (n >= 5){
        led.plot(col, 0)
        n = n - 5
    }

    for (let i = 1; i <= n; i++){
        led.plot(col, i)
    }
}

// Display number
function showSorobanNumber(n:number, shift?:number){
    if (shift == undefined){
        basic.clearScreen()
    }

    let s = n.toString().split('')

    while (s.length){
        let col = 5 - s.length
        if (shift){
            col -= shift
        }

        if (col < 0) {
            continue
        }
        let p = s.shift()

        if (p == '.'){
            led.plot(col, 4)
        } else if (p == '-'){
            led.plot(col, 2)
        } else {
            let strN = parseInt(p)
            showSorobanDigit(strN, col)
        }
    }
}

// Example
// showSorobanNumber(12345)
// showSorobanNumber(56789)
// showSorobanNumber(3.14)
// showSorobanNumber(-10)