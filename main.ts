let de = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("stephane")
})
input.onGesture(Gesture.Shake, function () {
    de = randint(0, 6)
    basic.showString("" + (de))
})
basic.forever(function () {
	
})
