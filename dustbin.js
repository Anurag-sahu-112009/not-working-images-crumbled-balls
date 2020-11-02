class Dustbin {
    constructor(x, y,width,height) {
      var options = {
        'isStatic':true
      }
      
      var side1 = createSprite(700,530,10,100);
      var side2 = createSprite(750,575,100,10);
      var side3 = createSprite(800,530,10,100);

      this.body = Bodies.rectangle(x, y, 20, 20, options);
      this.width = 20;
      this.height = 20;
      
      World.add(world, this.body);
    }

    display(){
      var angle = this.body.angle;
      translate(this.body.position.x, this.body.position.y);
      rect(0, 0, this.width, this.height);
    }
  }