var urls = {
    "github": "https://github.com/BuptStEve",
    "blog": "https://buptsteve.github.io/blog/",
    "fp": "https://slides.com/yangzhenyu/functional-programming-in-javascript/",
    "zhihu": "https://www.zhihu.com/people/stevesasuke/activities",
    "sf": "https://segmentfault.com/u/buptsteve",
    "juejin": "https://juejin.im/user/59226162570c350069b8ce42",
    "tua": "https://tuateam.github.io/tua-mp/",
}

var slides = Object.keys(urls)

var game = require('voxel-hello-world')({
    texturePath: "./images/",
    playerSkin: "./images/player.png",
    materials: ["yellow"].concat(slides),
    materialFlatColor: false,
    generateVoxelChunks: false,
    chunkDistance: 1,
})

var z = -5
var y = 3
slides.map(function (slide) {
    game.setBlock([0, y, z], slide)
    z += 2
    if (z > 5) {
        z = -5
        y += 2
    }
})

game.on('setBlock', function (pos, val, old) {
    if (old === 1 || val === 1) return
    var url = urls[slides[old - 2]]
    var win = window.open(url)
})

game.interact.on('release', function () { game.paused = true })
game.interact.on('attain', function () { game.paused = false })

window.game = game
