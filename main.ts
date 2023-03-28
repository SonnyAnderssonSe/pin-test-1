input.onPinPressed(TouchPin.P0, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P0))
    music.playMelody("F G A F F E F - ", 120)
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showNumber(pins.analogReadPin(AnalogPin.P1))
    music.playMelody("E F G E E D E - ", 120)
})
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
    if (pins.analogReadPin(AnalogPin.P2) < 600) {
        basic.showNumber(pins.analogReadPin(AnalogPin.P2))
    }
})
