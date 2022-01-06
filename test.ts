/**
 * Soroban - tests
 */

// Visual test
for (let n = 1; n <= 10; n++){
    soroban.showNumber(n)
    basic.pause(500)
}

function checkScreen(screen: string){
    let out = '';
    for (let c = 0; c < 5; c++){
        for (let r = 0; r < 5; r++){
            let test = led.point(c, r);
            if (test){
                out += '+'
            } else {
                out += '-'
            }
        }
        out += ','
    }
    // console.log(out)
    // console.log(screen)
    return out == screen;
}

soroban.showNumber(1)
control.assert(
    checkScreen('-----,-----,-----,-----,-+---,'),
    "Failed: 1"
);

soroban.showNumber(2)
control.assert(
    checkScreen('-----,-----,-----,-----,-++--,'),
    "Failed: 2"
);

soroban.showNumber(3)
control.assert(
    checkScreen('-----,-----,-----,-----,-+++-,'),
    "Failed: 3"
);

soroban.showNumber(4)
control.assert(
    checkScreen('-----,-----,-----,-----,-++++,'),
    "Failed: 4"
);

soroban.showNumber(5)
control.assert(
    checkScreen('-----,-----,-----,-----,+----,'),
    "Failed: 5"
);


soroban.showNumber(6)
control.assert(
    checkScreen('-----,-----,-----,-----,++---,'),
    "Failed: 6"
);

soroban.showNumber(7)
control.assert(
    checkScreen('-----,-----,-----,-----,+++--,'),
    "Failed: 7"
);

soroban.showNumber(8)
control.assert(
    checkScreen('-----,-----,-----,-----,++++-,'),
    "Failed: 8"
);

soroban.showNumber(9)
control.assert(
    checkScreen('-----,-----,-----,-----,+++++,'),
    "Failed: 9"
);

soroban.showNumber(10)
control.assert(
    checkScreen('-----,-----,-----,-+---,-----,'),
    "Failed: 10"
);

soroban.showNumber(3.14)
control.assert(
    checkScreen('-----,-+++-,----+,-+---,-++++,'),
    "Failed: 3.14"
);

soroban.showNumber(-273.1)
control.assert(
    checkScreen('--+--,-++--,+++--,-+++-,----+,'),
    "Failed: -273.1"
);

soroban.showNumber(15, Align.Left)
control.assert(
    checkScreen('-+---,+----,-----,-----,-----,'),
    "Failed: 15 - left"
);

// Clock format: 12:15
soroban.showNumber(12, Align.C1, true);
soroban.showNumber(15, Align.C4, false);
control.assert(
    checkScreen('-+---,-++--,-----,-+---,+----,'),
    "Failed: 12:15"
);

soroban.showNumber(12345);