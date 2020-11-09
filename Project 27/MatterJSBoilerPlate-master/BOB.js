class BOB{
constructor(x,y,r){

          var options = {
              isStatic: true
          }
          this.body = Bodies.circle(x,y,PI/2,options);
          this.r = r
          World.add(world, this.body);
        }
        display(){
          var pos =this.body.position;
          ellipseMode(CENTER);
          fill("pink");
          ellipse(pos.x, pos.y, this.r, this.r);
        }
      };
