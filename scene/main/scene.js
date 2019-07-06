var Scene = function (game) {
    var s = {
        game: game,
    }
    var paddle = Paddle(game)
    var ball = Ball(game)
    blocks = loadLevel(game, 1)
    var score = 0
    game.registerAction("a", function () {
        paddle.moveLeft()
    })
    game.registerAction("d", function () {
        paddle.moveRight()
    })
    game.registerAction("f", function () {
        ball.fire()
    })

    document.getElementById("speed").addEventListener("input", function () {
        var input = event.target
        window.fps = Number(input.value, 10) + 1
    })
    s.draw = function () {
        game.drawImage(paddle)
        game.drawImage(ball)
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.alive) {
                game.drawImage(block)
            }
        }
        game.ctx.fillText("分数:" + score, 10, 480)
    }
    s.update = function () {
        if (window.paused) {
            return
        }
        if(ball.y > paddle.y + paddle.h) {
            var end = new SceneEnd(game)
            game.replaceScene(end)
        }
        ball.move()
        if (paddle.collide(ball)) {
            ball.rebound()
        }
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.collide(ball)) {
                block.kill()
                ball.rebound()
                score += 100
            }
        }
    }
    //mouse event
    var enableDrag = false
    window.addEventListener("mousedown", function (event) {
        var x = event.offsetX
        var y = event.offsetY
        if (ball.hasPoint(x, y)) {
            if (window.paused == false) {
                enableDrag = false
            } else {
                enableDrag = true
            }
        }
    })
    window.addEventListener("mousemove", function (event) {
        if (enableDrag) {
            ball.x = event.offsetX
            ball.y = event.offsetY
        }
    })
    window.addEventListener("mouseup", function (event) {
        enableDrag = false
    })
    return s
}