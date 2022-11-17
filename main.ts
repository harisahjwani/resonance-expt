music.setVolume(255)
let length = 33.4
let diameter = 2.52
let lamda = 4 * (length + 1.2 * diameter)
pins.digitalWritePin(DigitalPin.P1, 1)
basic.showNumber(input.temperature())
let u = 33200
let v = u + 61 * input.temperature()
let f1 = v / lamda
f1 = f1 - 10
let f2 = f1 + 20
music.setBuiltInSpeakerEnabled(false)
basic.forever(function () {
    music.ringTone(f1)
    basic.pause(5000)
    if (f1 <= f2) {
        f1 += 1
        basic.showNumber(f1)
    } else {
        f1 = v / lamda
        f1 = f1 - 10
    }
})
