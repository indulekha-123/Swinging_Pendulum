class Bob5 {
    constructor(x,y,radius) {
        var options={
            isStatic: false,
           restitution:0.7,
             friction:0.2,     
             density:1.2  
                 
          
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
     
       
        World.add(world, this.body);
    
    }
    display(){
        var pos =this.body.position;
     fill ("orange");
     ellipseMode(RADIUS);
     ellipse (pos.x,pos.y,this.radius,this.radius);

    }
}
    