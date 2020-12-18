class Mango{
    constructor(x, y) {
        var options = {
            isStatic:true,
            restitution:0.001,
            friction:1.0,
            density:1.2
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("mango.png");
        World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, 60, 60);
        pop();
    } 
}