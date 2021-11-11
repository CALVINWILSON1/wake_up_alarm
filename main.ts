basic.forever(function () {
    basic.showNumber(input.lightLevel())
    if (120 < input.lightLevel()) {
        music.setVolume(239)
        music.playMelody("C D - D C D - D ", 120)
    }
})
