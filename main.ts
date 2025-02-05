let sortie = 0
input.onButtonPressed(Button.A, function () {
    basic.showString("stephane")
})
input.onGesture(Gesture.Shake, function () {
    sortie = randint(1, 3)
    if (sortie == 1) {
        basic.showIcon(IconNames.Scissors)
    } else if (sortie == 2) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . . # . .
            . # # # .
            . . # . .
            . . . . .
            `)
    }
})
basic.forever(function () {
	
})
