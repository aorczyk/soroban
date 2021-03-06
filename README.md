# Soroban

Displaying numbers on the micro:bit screen as on the soroban abacus. This allows the user to display a 5 digit number on the screen. It's also much faster than displaying normal number:  
1. Single digit number  
``basic.showNumber(9)`` - takes about 760 ms  
``soroban.showNumber(9)`` - takes about 1 ms
2. Multiple digits number (e.g. temperature)  
``basic.showNumber(25)`` - takes about 2657 ms  
``soroban.showNumber(25)`` - takes about 1 ms
3. Multiple digits number (e.g. Pi)  
``basic.showNumber(3.141)`` - takes about 4458 ms  
``soroban.showNumber(3.141)`` - takes about 1 ms  
  
Soroban: https://en.wikipedia.org/wiki/Soroban  

### Representation of digits 0 - 9, minus and decimal separator on the micro:bit screen (- led is off, + led is on):

``- - - - - + + + + + - -``  
``- + + + + - + + + + - -``  
``- - + + + - - + + + + -``  
``- - - + + - - - + + - -``  
``- - - - + - - - - + - +``  
  
``0 1 2 3 4 5 6 7 8 9 - .``  

# Documentation

## soroban.showNumber

Displays number as on the soroban abacus.

```sig
soroban.showNumber(3.14)
```

### Parameters
- `number` - the number
- `alignment` - align to the given column, by default align right
- `refresh` - specify whether the screen should be cleared before displaying number, by default true


## MakeCode Example

```blocks
soroban.showNumber(12345)
```

## License

Copyright (C) 2021 Adam Orczyk

Licensed under the MIT License (MIT). See LICENSE file for more details.

## Supported targets

* for PXT/microbit
