bitcommander.onEvent(BCPins.Green, BCEvents.Up, function () {
    radio.sendValue("Green", 0)
})
bitcommander.onEvent(BCPins.Yellow, BCEvents.Down, function () {
    radio.sendValue("Yellow", 1)
})
bitcommander.onEvent(BCPins.Joystick, BCEvents.Up, function () {
    radio.sendValue("Joystick", 0)
})
bitcommander.onEvent(BCPins.Blue, BCEvents.Down, function () {
    radio.sendValue("Blue", 1)
})
bitcommander.onEvent(BCPins.Green, BCEvents.Down, function () {
    radio.sendValue("Green", 1)
})
bitcommander.onEvent(BCPins.Yellow, BCEvents.Up, function () {
    radio.sendValue("Yellow", 0)
})
bitcommander.onEvent(BCPins.Joystick, BCEvents.Down, function () {
    radio.sendValue("Joystick", 1)
})
bitcommander.onEvent(BCPins.Red, BCEvents.Down, function () {
    radio.sendValue("Red", 1)
})
bitcommander.onEvent(BCPins.Red, BCEvents.Up, function () {
    radio.sendValue("Red", 0)
})
bitcommander.onEvent(BCPins.Blue, BCEvents.Up, function () {
    radio.sendValue("Blue", 0)
})
radio.setGroup(1)
bitcommander.ledRainbow()
radio.sendValue("cal_x", bitcommander.readJoystick(BCJoystick.X))
radio.sendValue("cal_y", bitcommander.readJoystick(BCJoystick.Y))
basic.showIcon(IconNames.Heart)
basic.pause(500)
bitcommander.ledClear()
basic.forever(function () {
    radio.sendValue("x", bitcommander.readJoystick(BCJoystick.X))
    radio.sendValue("y", bitcommander.readJoystick(BCJoystick.Y))
    radio.sendValue("Dial", bitcommander.readDial())
})
