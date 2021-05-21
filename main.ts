input.onButtonPressed(Button.A, function () {
    promedioTemp()
    if (promedio >= 30) {
        music.playTone(880, music.beat(BeatFraction.Breve))
    } else {
        music.playTone(988, music.beat(BeatFraction.Double))
    }
})
input.onButtonPressed(Button.B, function () {
    if (promedio >= 30) {
        basic.showIcon(IconNames.Sad)
    } else {
        basic.showIcon(IconNames.Happy)
    }
    basic.pause(5000)
    basic.clearScreen()
})
function promedioTemp () {
    T1 = input.temperature()
    music.playTone(262, music.beat(BeatFraction.Sixteenth))
    basic.showString("T1:" + Math.round(T1) + "ºC")
    basic.pause(5000)
    T2 = input.temperature()
    music.playTone(294, music.beat(BeatFraction.Sixteenth))
    basic.showString("T2:" + Math.round(T2) + "ºC")
    basic.pause(5000)
    T3 = input.temperature()
    music.playTone(330, music.beat(BeatFraction.Sixteenth))
    basic.showString("T3" + Math.round(T3) + "ºC")
    basic.pause(5000)
    promedio = (T1 + T2 + T3) / 3
    basic.showString("Pr:" + Math.round(promedio) + "ºC")
}
let T3 = 0
let T2 = 0
let T1 = 0
let promedio = 0
promedio = 0
T1 = 0
T2 = 0
T3 = 0
basic.forever(function () {
	
})
