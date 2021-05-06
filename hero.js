class Hero{
    constructor(x, y, width, height){
        var options ={
            isStatic :false
        }

        this.body = Bodies.rectangle(x, y, width, height, options)
        this.width = width
        this.height = height
        World.add(world, this.body)
        this.image = loadImage("images/Superhero-01.png")
    }

    display() {
        var pos = this.body.position
        imageMode(CENTER)
        image(this.image, pos.x, pos.y, this.width, this.height)
    }
}