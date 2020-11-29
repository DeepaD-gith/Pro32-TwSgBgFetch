class Box{

constructor(xpos,ypos,width,height)
{
    var rect_options={
        'restitution':0.2,
        'friction':.5,
        'density':.5
    }
    this.body = Bodies.rectangle(xpos,ypos,width,height,rect_options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);
}
display(num1)
{  
    if(this.body)
    {
    var pos = this.body.position;
    var angle = this.body.angle;
   
    if(this.body.speed<3)
    {
    push();
        rectMode(CENTER);
        stroke("brown");
        strokeWeight(4)
        translate(pos.x,pos.y);
        rotate(angle);  
        if(num1%3===0)
        {
        fill("pink") ;  
        }
        else if (num1%2===0)  
        {
            fill("lightblue")
        } 
        else{
            fill("grey");
        }
        rect(0,0,this.width,this.height)
    pop();
    }
    else
    {
        
           World.remove(world,this.body);
            this.body = null;
            score++;
     
    }
  }
}
}