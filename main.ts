let distance = 0
basic.forever(function () {
    distance = sonar.ping(
    DigitalPin.P0,
    DigitalPin.P1,
    PingUnit.Inches
    )
    basic.showNumber(distance)
    basic.pause(100)
})
