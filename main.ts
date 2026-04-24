basic.showIcon(IconNames.Fabulous)
basic.pause(200)
basic.forever(function () {
    basic.showIcon(IconNames.Diamond)
    lcd.displayText("MKE-S01", 5, 1)
    lcd.displayText("Distance: " + ultraSonic.readDistance(ultraSonic.PingUnit.Centimeters, ultraSonic.PinKit.Port1) + "cm", 1, 2)
    basic.pause(500)
    basic.showIcon(IconNames.SmallDiamond)
})
