class Iron{
	constructor(x,y)
	{
	var options = {
		restitution:0.8,
		friction:3,
		density:30
	}

		this.body = Bodies.rectangle(x, y, 90,50,options)
        this.width = 90;
        this.height = 50;
		World.add(world, this.body);

	}
	display()
	{
			var ironpos=this.body.position;		
            var angle = this.body.angle;
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
            rotate(angle);
            fill("red")
            rect(0, 0, this.width, this.height);
            pop()
	}

}