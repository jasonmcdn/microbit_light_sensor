input.onButtonPressed(Button.A, function () {
    pins.digitalWritePin(DigitalPin.P0, 1)
    control.waitMicros(20)
    Pushed_A = 1
    Light = envirobit.getLight()
    Red = envirobit.getRed()
    Green = envirobit.getGreen()
    Blue = envirobit.getBlue()
    pins.digitalWritePin(DigitalPin.P0, 0)
    basic.showIcon(IconNames.Yes)
    control.waitMicros(400)
})
input.onButtonPressed(Button.B, function () {
    if (Pushed_A == 1) {
        basic.showString("R:")
        basic.showNumber(Red)
        basic.showString("G:")
        basic.showNumber(Green)
        basic.showString("B:")
        basic.showNumber(Blue)
    } else {
        basic.showString("A")
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
    }
})
let Blue = 0
let Green = 0
let Red = 0
let Light = 0
let Pushed_A = 0
basic.showIcon(IconNames.Happy)
Pushed_A = 0
Light = 0
Red = 0
Green = 0
Blue = 0
pins.digitalWritePin(DigitalPin.P0, 0)
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(5000)
})
