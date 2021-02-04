class Rubber{
    constructor(x, y, r) {
        var options = {
            'restitution': 0.3,
            'friction': 5,
            'density': 1
        };
        this.body = Bodies.circle(x, y, radius);
        this.radius = radius;
        World.add(world, this.body);
    }
    display() {
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);   
        ellipse(0, 0, this.radius);
        pop();
    }
}