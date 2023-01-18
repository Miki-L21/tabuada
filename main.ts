input.onButtonPressed(Button.A, function () {
    _1ºn = randint(1, 10)
    _2ºn = randint(1, 10)
    basic.showNumber(_1ºn)
    basic.showString("x")
    basic.showNumber(_2ºn)
    NºJogadas += 1
    basic.pause(1000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(conta)
    basic.showString("de")
    basic.showNumber(NºJogadas)
    basic.pause(2000)
    NºJogadas = 0
    conta = 0
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(_1ºn * _2ºn)
    basic.pause(1000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    conta += 1
    basic.showString("!Boa!")
    basic.showIcon(IconNames.Happy)
    basic.pause(1000)
    basic.clearScreen()
})
let NºJogadas = 0
let conta = 0
let _2ºn = 0
let _1ºn = 0
_1ºn = 0
_2ºn = 0
conta = 0
NºJogadas = 0
