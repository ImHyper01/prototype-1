import * as PIXI from 'pixi.js'

class Fish extends PIXI.Sprite{
    fish: PIXI.Sprite
    loader: PIXI.Loader

    constructor(x: number, y: number) {
        this.fish
        this.loader = new PIXI.Loader()
        this.loader.add('fishTexture', fishImage)

        this.loader.load(() => this.loadcompleted())
        this.update
    }
    loadcompleted() {
        this.fish = new PIXI.Sprite(this.loader.resources["fishTexture"].texture!)

        this.fish.x = 150
        this.fish.y = 200

        this.fish.scale.set(-1, 1)

        this.pixi.stage.addChild(this.fish)

        this.pixi.ticker.add(() => this.update())

    }
    update() {
        console.log("update!!!")
        this.fish.x += 0.2

    }
}