input.onButtonPressed(Button.A, function () {
    envirobit.setColourIntegrationTime(24)
    pins.digitalWritePin(DigitalPin.P0, 1)
    control.waitMicros(400)
    Light = envirobit.getLight()
    Red = envirobit.getRed()
    Green = envirobit.getGreen()
    Blue = envirobit.getBlue()
    control.waitMicros(20)
    basic.showIcon(IconNames.Yes)
    control.waitMicros(500)
    Pushed_A = 1
    pins.digitalWritePin(DigitalPin.P0, 0)
})
input.onButtonPressed(Button.B, function () {
    if (Pushed_A == 1) {
        basic.showString("R:")
        basic.showNumber(Red)
        basic.showString("G:")
        basic.showNumber(Green)
        basic.showString("B:")
        basic.showNumber(Blue)
        basic.showString("L:")
        basic.showNumber(Light)
    } else {
        basic.showString("A")
        basic.showLeds(`
            . . # . .
            . # . . .
            # # # # #
            . # . . .
            . . # . .
            `)
        control.waitMicros(400)
    }
})
let Blue = 0
let Green = 0
let Red = 0
let Light = 0
let Pushed_A = 0
basic.showIcon(IconNames.Heart)
Pushed_A = 0
Light = 0
Red = 0
Green = 0
Blue = 0
pins.digitalWritePin(DigitalPin.P0, 0)
control.waitMicros(400)
basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
    basic.pause(5000)
})
