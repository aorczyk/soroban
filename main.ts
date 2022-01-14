/**
 * Soroban
 * Displaying number on the micro:bit screen as on the soroban abacus.
 * Soroban: https://en.wikipedia.org/wiki/Soroban
 * 
 * (c) 2021, Adam Orczyk
 */

const enum Align {
    //% block="Right"
    Right = 4,
    //% block="Left"
    Left = -1,
    //% block="Column 1"
    C1 = 0,
    //% block="Column 2"
    C2 = 1,
    //% block="Column 3"
    C3 = 2,
    //% block="Column 4"
    C4 = 3,
    //% block="Column 5"
    C5 = 4,
}

//% block="Soroban" color="#8B4513" weight=100 icon="\uf2a1"
namespace soroban {
    function showDigit(n: number, col: number, refresh: boolean) {
        if (!refresh) {
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
     * Displays number as on the soroban abacus.
     * @param n the number, eg: 0
     * @param alignment align to the given column, eg: Right
     * @param refresh refresh the screen, eg: true
     */
    //% blockId=soroban_show_number
    //% block="show number $n || align $alignment refresh $refresh"
    //% weight=99
    export function showNumber(n: number, alignment: Align = 4, refresh: boolean = true) {
        let nStr = n.toString();

        if (nStr.length > 5){
            nStr = nStr.substr(0,5)
        }

        let chars = nStr.split('')

        let c = 5 - chars.length
        
        if (alignment == -1) {
            c = 0
        } else {
            c = alignment + 1 - chars.length
        }
        
        if (refresh) {
            basic.clearScreen()
        }

        while (c < 5) {
            let p = chars.shift()

            if (p == '.') {
                led.plot(c, 4)
            } else if (p == '-') {
                led.plot(c, 2)
            } else {
                showDigit(parseInt(p), c, refresh)
            }

            c += 1
        }
    }
}