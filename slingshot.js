class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB
        this.body = Constraint.create(options);
        World.add(world, this.body);
    }

    display(){
        if(this.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y); 
        }
        
    }

    fly(){
        this.body.bodyA = null;
    }

    attach(bodyA){ 
        this.body=bodyA; 
    }
    
