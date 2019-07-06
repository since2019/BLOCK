class SceneTitle extends zScene {
    constructor(game) {
        super(game)
        game.registerAction("k", function () {
            var s = new Scene(game)
            game.replaceScene(s)
        })
    }
    
    draw() {
        this.game.ctx.fillText("按k开始游戏!", 400, 380)
    }
    update() {

    }
}