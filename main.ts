basic.forever(function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 0)
        basic.pause(200)
    }
    for (let index = 0; index <= 4; index++) {
        led.unplot(4 - index, 0)
        basic.pause(200)
    }
})
