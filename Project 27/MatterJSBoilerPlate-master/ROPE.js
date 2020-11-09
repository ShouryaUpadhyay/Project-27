class Rope{
  constructor(body1,body2,offsetX,offsetY){
    this.offsetX = offsetX;
    this.offsetY = offsetY

    var pointA = pointA;
    var pointB = pointB;
    
      var options = {
          bodyA: body1,
          bodyB: body2,
          stiffness: 0.04,
          length: 10
      }
    
      this.rope = Constraint.create(options);
      World.add(world, this.rope );
  }


display(){
   stroke(0)
   line(pointA.x,pointA.y,5,5);
     
  }
}