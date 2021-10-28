class Stone{
    constructor(x,y,r){
        var options={
            isStatic:0,
            restitution:0
            
        }
this.body= Bodies.circle(x,y,r,options)
this.x = x
this.y = y
this.r = r

World.add(world,this.body)


    }

    show(){
        push()
        fill("grey")
        ellipseMode(RADIUS)
        ellipse(this.body.position.x,this.body.position.y,this.r)
        pop()


    }
    

}