var Ball = function (game) {
    var o = game.imageByName("ball")
    o.speedX = 5
    o.speedY = 5
    o.w = 30
    o.h = 30
    o.x = 400
    o.y = 350
    o.fired = false
    o.fire = function () {
        o.fired = true
    }
    o.rebound = function() {
        o.speedY *= -1
    }
    o.move = function () {
        if (o.fired) {
            if (o.x < 0 || o.x + o.w > 1000) {
                o.speedX = -o.speedX
            }
            if (o.y < 0 || o.y + o.h > 500) {
                o.speedY = -o.speedY
            }
            o.x += o.speedX
            o.y += o.speedY
        }
    }
    o.hasPoint = function(x, y) {
        var xIn = x >= o.x && x <= o.x + o.w
        var yIn = y >= o.y && y <= o.y + o.h
        return xIn && yIn
    }
    return o
}