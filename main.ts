input.onPinPressed(TouchPin.P0, function () {
    music.play(music.stringPlayable("E B C5 A B G A F ", 1000), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Ghost)
})
input.onPinPressed(TouchPin.P2, function () {
    music.play(music.stringPlayable("G F G A - F E D ", 1000), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Giraffe)
})
input.onPinPressed(TouchPin.P1, function () {
    music.play(music.stringPlayable("B A G A G F A C5 ", 1000), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Skull)
})
