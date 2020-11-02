class Paper {
    constructor(x, y,width,height) {
      var options = {
        'restitution':0.3,
        'friction':0.5,
        'density':1.2,
      }

      this.body = loadImage("ball.png")
      this.body = Bodies.rectangle(x, y,width,height, options);
      this.width = 20;
      this.height = 20;
      World.add(world, this.body);
    }

    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      stroke("red")
      strokeWeight(5)
      fill("white");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }