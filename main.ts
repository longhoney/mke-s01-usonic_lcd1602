basic.forever(function () {
    lcd.clearScreen()
    lcd.displayText("MKE-S01 (cm):", 1, 1)
    lcd.displayText(convertToText(ultraSonic.readDistance(ultraSonic.PingUnit.Centimeters, ultraSonic.PinKit.Port1)), 1, 2)
    basic.pause(500)
})
