class Bob3 {
    constructor(x,y,radius) {
        var options={
            isStatic: false,
           restitution:1.50,
             friction:15,     
             density:50  
                 
          
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
     
       
        World.add(world, this.body);
    
    }
    display(){
        var pos =this.body.position;
     fill ("yellow");
     ellipseMode(RADIUS);
     ellipse (pos.x,pos.y,this.radius,this.radius);

    }
}
    