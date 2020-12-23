class Rope {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.x = x
      this.y = y
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    
    display(){
      var rope =this.body.position;
      push()
      translate(rope.x,rope.y)
      rectMode(CENTER);
      fill("grey");
      rect(0,0, this.width, this.height);
    }
  };