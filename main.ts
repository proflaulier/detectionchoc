input.onGesture(Gesture.Shake, function () {
    music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.showIcon(IconNames.Sad)
    basic.pause(2000)
    basic.showIcon(IconNames.Heart)
})
basic.showIcon(IconNames.Heart)
