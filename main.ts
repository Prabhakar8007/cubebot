input.onButtonPressed(Button.A, function () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 100)
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P1, 100)
})
input.onGesture(Gesture.ScreenUp, function () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P1, 100)
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P0, 100)
})
input.onButtonPressed(Button.AB, function () {
    ContinuousServo.spin_one_way_with_speed(AnalogPin.P0, 100)
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P1, 100)
})
input.onButtonPressed(Button.B, function () {
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P0, 100)
    ContinuousServo.spin_other_way_with_speed(AnalogPin.P1, 100)
})
input.onGesture(Gesture.LogoDown, function () {
    ContinuousServo.turn_off_motor(DigitalPin.P0)
    ContinuousServo.turn_off_motor(DigitalPin.P1)
})
basic.forever(function () {
	
})
