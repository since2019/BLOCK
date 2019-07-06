class SceneEnd extends zScene {
    constructor(game) {
        super(game)
        game.registerAction("r", function () {
            var s = new Scene(game)
            game.replaceScene(s)
        })
    }
    
    draw() {
        this.game.ctx.fillText("游戏结束,按r重玩", 400, 380)
    }
    update() {

    }
}