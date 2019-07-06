var log = console.log.bind(console)

var imageFromPath = function (path) {
    var img = new Image()
    img.src = path
    return img
}

var rectIntersects = function (a, b) {
    if (Math.abs(a.x - b.x) < a.w / 2 + b.w / 2) {
        if (Math.abs(a.y - b.y) < a.w / 2 + b.w / 2) {
            return true
        }
    }
    return false
}