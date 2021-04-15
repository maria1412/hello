basic.forever(function () {
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.showIcon(IconNames.Sad)
    basic.pause(1000)
    basic.showLeds(`
        . . . . .
        . # . # .
        . # # # .
        . # . # .
        . # # # .
        `)
    basic.pause(1000)
})
