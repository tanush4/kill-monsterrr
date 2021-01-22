class Superhero{
    constructor(x,y,width,height,angle){
        var options={
            frictionAir:0.05,
            density:2
            
        }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width
    this.height=height
    this.image=loadImage("Superhero-01.png")
    World.add(world,this.body)
    }
display(){
    var pos=this.body.position
  var angle=this.body.angle
  push()
  translate(pos.x,pos.y)
  rotate(angle)
 image(this.image,0,0,this.width,this.height)
pop()
}

}