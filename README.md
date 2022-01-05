# Soroban number

Displaying number on the micro:bit screen using Soroban abacus notation. This allows to display 5 digit number on the screen.

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

Show number usign Soroban abacus notation.

```sig
soroban.showNumber(1)
```

### Parameters
- `number` - the number
- `column` - align to the given column, by default align right
- `refresh` - specify whether the screen should be cleared before displaying number, by default true


## MakeCode Example

```blocks
soroban.showNumber(12345)
```

## License

Copyright (C) 2021 Adam Orczyk

Licensed under the MIT License (MIT). See LICENSE file for more details.
