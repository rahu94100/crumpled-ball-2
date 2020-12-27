class Base {
  constructor(x, y, width, height) {
    var options = {
      isStatic:true,
        restitution:0.8,
        friction:1.0,
        density:1.0
    }
    this.image=loadImage("sprites/dustbingreen.png");
    this.body = Bodies.rectangle(x, y, width, height, options);
   this.body1 = Bodies.rectangle(x, y, width, height, options);
    this.body2 = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
   
    
    World.add(world, this.body);
   World.add(world, this.body1);
   World.add(world, this.body2);
  }
  display(){
    var pos =this.body.position;
    var pos1=this.body1.position;
    var pos2=this.body2.position;
    var angle = this.body.angle;
    push();
    
    translate(pos.x, pos.y);
    rotate(angle);
   
    
    
   
    pop();


    push();
    
    translate(pos1.x, pos1.y);
    rotate(angle);
    
     
    pop();



    push();
    
    translate(pos2.x, pos2.y);
    rotate(angle);
    imageMode(CENTER);
    fill(255);
    image(this.image,0,-this.height, this.width, this.height);
    pop();
  }
}