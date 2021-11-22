# LEGO Power Functions Controller

Control your LEGO Power Functions devices simultaneously with Micro:bit and an 940 nm emitting diode. 
For sending IR signals to LEGO receiver I use extension: [Power Functions IR Sender](https://github.com/philipphenkel/pxt-powerfunctions).

## Use as Extension
This repository can be added as an **extension** in MakeCode.
* open [https://makecode.microbit.org/](https://makecode.microbit.org/)
* click on **New Project**
* click on **Extensions** under the gearwheel menu
* search for **https://github.com/aorczyk/pf-recorder** and import

# Documentation

## soroban.showNumber

Show number. When column is not given clears the screen and displays number part which fit the screen and align right.

```sig
soroban.showNumber(1, 0)
```

### Parameters
     * @param n the number, eg: 3.14
     * @param col the starting column, eg: 0
- `number` - the number
- `column` - the starting column (not required). 

## MakeCode Example

```blocks
soroban.showNumber(12345)
```

## License

Copyright (C) 2021 Adam Orczyk

Licensed under the MIT License (MIT). See LICENSE file for more details.
