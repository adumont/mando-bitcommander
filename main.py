def my_function():
    radio.send_value("Green", 0)
bitcommander.on_event(BCPins.GREEN, BCEvents.UP, my_function)

def my_function2():
    radio.send_value("Yellow", 1)
bitcommander.on_event(BCPins.YELLOW, BCEvents.DOWN, my_function2)

def my_function3():
    radio.send_value("Joystick", 0)
bitcommander.on_event(BCPins.JOYSTICK, BCEvents.UP, my_function3)

def my_function4():
    radio.send_value("Blue", 1)
bitcommander.on_event(BCPins.BLUE, BCEvents.DOWN, my_function4)

def my_function5():
    radio.send_value("Green", 1)
bitcommander.on_event(BCPins.GREEN, BCEvents.DOWN, my_function5)

def my_function6():
    radio.send_value("Yellow", 0)
bitcommander.on_event(BCPins.YELLOW, BCEvents.UP, my_function6)

def my_function7():
    radio.send_value("Joystick", 1)
bitcommander.on_event(BCPins.JOYSTICK, BCEvents.DOWN, my_function7)

def my_function8():
    radio.send_value("Red", 1)
bitcommander.on_event(BCPins.RED, BCEvents.DOWN, my_function8)

def my_function9():
    radio.send_value("Red", 0)
bitcommander.on_event(BCPins.RED, BCEvents.UP, my_function9)

def my_function10():
    radio.send_value("Blue", 0)
bitcommander.on_event(BCPins.BLUE, BCEvents.UP, my_function10)

radio.set_group(1)

def on_forever():
    radio.send_value("x", bitcommander.read_joystick(BCJoystick.X))
    radio.send_value("y", bitcommander.read_joystick(BCJoystick.Y))
    radio.send_value("Dial", bitcommander.read_dial())
basic.forever(on_forever)
