class Chain{
    constructor(bodyA, pointB){
        var options1 = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.002,
            length: 10
        }
        this.shot = Constraint.create(options1);
        World.add(world, this.shot);
    }
    fly(){
        this.shot.bodyA = null;
    }
    attach(){
        this.shot.bodyA = stone.body;   
    }
    display(){
        if(this.shot.bodyA != null){
        var pointA = this.shot.bodyA.position;
        var pointB = this.shot.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}