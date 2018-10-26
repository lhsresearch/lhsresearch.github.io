function Pipe(){
this.topy = floor(random(350));
this.x = 650;
this.gap = 100;
this.thick = 45;
this.vel= 6;

this.show = function(){
	rect(this.x,0,this.thick,this.topy);
	rect(this.x,this.topy+this.gap,this.thick,480-this.topy);

}
this.update = function(){
	this.x -=this.vel;
}


this.isColliding = function(birb)
{

if((birb.x>this.x) && (birb.x<(this.x+this.thick)))
{

	if((birb.y>this.topy) && (birb.y<(this.topy+this.gap))){

		score++;		

	}else{
		gamestate = false;
	}

}

}
}
