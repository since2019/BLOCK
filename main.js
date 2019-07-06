var loadLevel = function (game, n) {
    n = n - 1
    var blocks = []
    var level = levels[n]
    for (var i = 0; i < level.length; i++) {
        var p = level[i]
        var b = Block(game, p)
        blocks.push(b)
    }
    return blocks
}

var enableDebugMode = function (game, enable) {
    if (!enable) {
        return
    }
    window.paused = false
    window.addEventListener("keydown", function (event) {
        var k = event.key
        if (k == "p") {
            window.paused = !window.paused
        } else if ("123456".includes(k)) {
            blocks = loadLevel(game, Number(k))
        }
    })
}

var _main = function () {
    var images = {
        ball: "img/ball.png",
        block: "img/block.png",
        paddle: "img/paddle.png",
    }
    var game = zGame.instance(30, images, function(g) {
        var s = new SceneTitle(g)
        g.runWithScene(s)
    })

    enableDebugMode(game, true)
}

_main()