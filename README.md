# Soroban number

Displaying number on the micro:bit screen using Soroban abacus notation. This allows to display 5 digit number on the screen.

# Documentation

## soroban.showNumber

Show number usign Soroban abacus notation.

```sig
soroban.showNumber(1)
```

### Parameters
- `number` - the number
- `column` - col align to the given column
- `refresh` - specify whether the screen should be cleared before displaying number


## MakeCode Example

```blocks
soroban.showNumber(12345)
```

## License

Copyright (C) 2021 Adam Orczyk

Licensed under the MIT License (MIT). See LICENSE file for more details.
