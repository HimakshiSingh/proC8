class Box {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density': 0.5,
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      
      this.image = loadImage("ice cube.jpg");

      
      World.add(world, this.body);
    }
    display(){
      
      image(this.image)
  var angle = this.body.angle;
  push();
  translate(this.body.position.x, this.body.position.y);
  rotate(angle);
  imageMode(CENTER);
  image(this.image, 0, 0, this.width, this.height);
  pop();
}
}