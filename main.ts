basic.forever(function () {
    basic.showString("score ")
    basic.showNumber(300)
    basic.showString("" + (0 * 0))
    basic.showNumber(0 * 0)
    images.createImage(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `).showImage(200, 400)
    basic.showString("win")
})
