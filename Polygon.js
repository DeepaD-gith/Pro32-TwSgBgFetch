class Polygon{

    constructor(xpos,ypos,radius)
    {
        var poly_options={
            'restitution':0.8,
            'density':1.2,
            'friction':1.0
        }
        this.body = Bodies.circle(xpos,ypos,radius/2,poly_options);
        this.radius = radius;
        
        World.add(world,this.body);
        this.image = loadImage("Images/Polygon.png");
    }
    display()
    {
        
        
        var pos = this.body.position;
        var angle = this.body.angle;
       
        push();
            imageMode(CENTER);            
            translate(pos.x,pos.y);
            rotate(angle);              
            image(this.image,0,0,this.radius,this.radius)
        pop();
    }
    
    }