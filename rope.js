class Rope{
    constructor(bodyA,pointB){
        var options={
            stiffness:1,
            visible:false,
        length:400,
        bodyA:bodyA,
        pointB:pointB

        }
this.pointB=pointB    
  this.rope=Constraint.create(options)
    World.add(world,this.rope)
    }
    attach(body){
        this.rope.bodyA=body
    }
    fly(){
        this.rope.bodyA=null;
      
        
    }
display(){
    

    
    var pointA=this.rope.bodyA.position
    var pointB=this.pointB
    push()
   strokeWeight(10)
  //  line(pointB.x,pointB.y,pointA.x,pointA.y)
    
    pop()
    
}

}