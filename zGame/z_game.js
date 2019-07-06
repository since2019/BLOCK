class zGame {
    constructor(fps, images, runCallback) {
        window.fps = 60
        this.images = images
        this.runCallback = runCallback
        this.scene = null
        this.actions = {}
        this.keydowns = {}
        this.canvas = document.getElementById('id-canvas')
        this.ctx = this.canvas.getContext('2d')
        var self = this
        window.addEventListener("keydown", function (event) {
            self.keydowns[event.key] = true
        })
        window.addEventListener("keyup", event => {
            this.keydowns[event.key] = false
        })
        this.init()
    }   
    static instance(...args) {
        this.i = this.i || new this(...args)
        return this.i
    }
    drawImage(img) {
        this.ctx.drawImage(img.image, img.x, img.y)
    }
    update() {
        this.scene.update()
    }
    draw() {
        this.scene.draw()
    }
    registerAction(key, callback) {
        this.actions[key] = callback
    }
    runloop() {
        var g = this
        var actions = Object.keys(g.actions)
        for (var i = 0; i < actions.length; i++) {
            var key = actions[i]
            if (this.keydowns[key]) {
                this.actions[key]()
            }
        }
        this.update()
        this.ctx.clearRect(0, 0, 1000, 500)
        this.draw()
        setTimeout(function () {
            g.runloop()
        }, 1000 / window.fps)
    }
    imageByName(name) {
        var img = this.images[name]
        var image = {
            w: img.width,
            h: img.height,
            image: img,
        }
        return image
    }
    runWithScene(scene) {
        var g = this
        g.scene = scene
        setTimeout(function () {
            g.runloop()
        }, 1000 / window.fps)
    }
    replaceScene(scene) {
        this.scene = scene
    }
    __start(scene) {
        this.runCallback(this)

    }
    init() {
        var g = this
        var loads = []
        var names = Object.keys(g.images)
        for (var i = 0; i < names.length; i++) {
            let name = names[i]
            var path = g.images[name]
            let img = new Image()
            img.src = path
            img.onload = function () {
                g.images[name] = img
                loads.push(1)
                if (loads.length == names.length) {
                    g.__start()
                }
            }
        }
    }
}