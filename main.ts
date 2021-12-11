/**
 * Show Soroban Number
 * Displaying numbers as on Soroban abacus.
 * Soroban: https://en.wikipedia.org/wiki/Soroban
 * 
 * (c) 2021, Adam Orczyk
 */

const enum Column {
    Auto = -1,
    C1 = 0,
    C2 = 1,
    C3 = 2,
    C4 = 3,
    C5 = 4,
}

//% block="Soroban" color="#8B4513" weight=100 icon="\uf2a1"
namespace soroban {
    let currentNumber: number = null;

    function showDigit(n: number, col: number) {
        if (n == 0) {
            for (let i = 0; i <= 4; i++) {
                led.unplot(col, i)
            }
        }

        if (n >= 5) {
            led.plot(col, 0)
            n = n - 5
        }

        for (let i = 1; i <= n; i++) {
            led.plot(col, i)
        }
    }

    /**
     * Show number. When column is not given clears the screen and displays number part which fit the screen.
     * @param n the number
     * @param col the starting column
     * @param clear clear the screen before showing a number
     */
    //% blockId=soroban_show_number
    //% block="show number $n || column $col"
    //% weight=99
    export function showNumber(n: number, col: Column = Column.C1, clear: boolean = true) {
        if (currentNumber != n || col != Column.Auto){
            currentNumber = n

            let nStr = n.toString();

            if (nStr.length > 5){
                nStr = nStr.substr(0,5)
            }

            let chars = nStr.split('')

            let c = 5 - chars.length
            if (clear) {
                basic.clearScreen()
            } else {
                c = col as number
            }

            while (c < 5) {
                let p = chars.shift()

                if (p == '.') {
                    led.plot(c, 4)
                } else if (p == '-') {
                    led.plot(c, 2)
                } else {
                    showDigit(parseInt(p), c)
                }

                c += 1
            }
        }
    }
}