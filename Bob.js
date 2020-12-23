class Bob
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:1,
			friction:0,
			density:1.2

			
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			
            var bobpos =this.body.position;		
         /* var bobObject2 = this.body.position;
            var bobObject2 = this.body.position;*/


			push()
			translate(bobpos.x, bobpos.y);
			rectMode(CENTER)
			strokeWeight(4);
            fill("pink")
            ellipse(0,0,this.r,this.r)
			pop()
			
	}

}