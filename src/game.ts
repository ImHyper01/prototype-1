import * as PIXI from 'pixi.js'
import fishImage from "./images/fish.png"
import bubbleImage from "./images/bubble.png"
import waterImage from "./images/water.jpg"


const pixi = new PIXI.Application({ width: 800, height: 450 })
document.body.appendChild(pixi.view)

const loader = new PIXI.Loader()
loader.add('fishTexture', fishImage)
      .add('bubbleTexture', bubbleImage)
      .add('waterTexture', waterImage)
loader.load(()=>loadCompleted())


function loadCompleted() {
    let fish = new PIXI.Sprite(loader.resources["fishTexture"].texture!)
    pixi.stage.addChild(fish)
}