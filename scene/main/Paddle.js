var Paddle = function (game) {
    var o = game.imageByName("paddle")
    o.speed = 10
    o.x = 400
    o.y = 400
    o.w = 200
    o.h = 30
    o.moveLeft = function () {
        if (o.x > 0) {
            o.x -= o.speed
        }
    }
    o.moveRight = function () {
        if (o.x + o.w < 1000) {
            o.x += o.speed
        }
    }
    var aInb = function(x, x1, x2) {
        return x > x1 && x < x2 
    }
    o.collide = function (ball) {
        // if (ball.x < o.x + o.w && ball.x > o.x) {
        //     if (ball.y + ball.h > o.y) {
        //         return true
        //     }
        // }
        // return false
        var a = o,
            b = ball
        if(aInb(a.x, b.x, b.x + b.w) || aInb(b.x, a.x, a.x + a.w)) {
            if(aInb(a.y, b.y, b.y + b.h) || aInb(b.y, a.y, a.y + a.h)) {
                return true
            }
        }
        return false
    }
return o
}