class Iron{
	constructor(x,y,r)
	{
	// assign options to the iron
	var options = {
      'restitution':0.8,
	  'friction':3,
	  'density':30


	}
	
	this.x=x;
	this.y=y;
	this.width=70;
	this.height=70;
	this.body=Bodies.rectangle(this.x, this.y,this.width,this.height, options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
			push()
			// translate(rupos.x, rubberpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("black");
			ellipse(ironpos.x,ironpos.y,this.width,this.height)
			pop()
	}

}