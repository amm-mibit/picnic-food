let Cerry = sprites.create(img`
    . . . . . . 7 7 7 7 . . . . . . 
    . . . . . . 7 . . 7 . . . . . . 
    . . . . . . 7 . . 7 . . . . . . 
    . . . . . 2 2 . . 2 2 . . . . . 
    . . . . . 2 2 . . 2 2 . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
Cerry.setPosition(25, 45)
let Chicken = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . e e e e . . . . . . 
    . . . . . . e e e e . . . . . . 
    . . . . . . e e e e . . . . . . 
    . . . . . . e e e e . . . . . . 
    . . . . . . e e e e . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . . 1 1 . . . . . . . 
    . . . . . . 1 . . 1 . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Food)
Chicken.setPosition(120, 80)
let mySprite = sprites.create(img`
    . . . . 5 5 5 5 5 5 . . . . . . 
    . . . . 5 8 . . 8 5 . . . . . . 
    . . . . 5 . . . . 5 . . . . . . 
    . . . . 5 5 5 5 5 5 . . . . . . 
    . . . 7 7 7 7 7 7 7 7 . . . . . 
    . . . 7 . . . . . . 7 . . . . . 
    . . . 7 . . . . . . 7 . . . . . 
    . . . 7 7 . . . . 7 7 . . . . . 
    . . . 7 . . . . . . 7 . . . . . 
    . . . 7 7 7 7 7 7 7 7 . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    . . . . . 2 . . . 2 . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
