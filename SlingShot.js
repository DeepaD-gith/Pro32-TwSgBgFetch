class Sling{
    constructor(bodyA1, pointB1){
        var options = {
            bodyA: bodyA1,
            pointB: pointB1,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB1;
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }

    display(){
       
        if(this.chain.bodyA!==null)
        {
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
        
    }

    fly()
    {
       // Matter.Body.applyForce(this.chain.bodyA,this.chain.bodyA.position,{x:50,y:-20})
        this.chain.bodyA = null; 
    }
    attach(body1)
    {
        this.chain.bodyA = body1;
    }
    
}