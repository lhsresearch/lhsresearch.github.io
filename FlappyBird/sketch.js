function setup()
{

		createCanvas(640,480);

		frameRate(60);

		this.bird = new Bird();
		this.score =0;
		this.gamestate = false;
		this.pipes = [];
							
this.diff = 75;





}

function keyPressed() 
{

		this.gamestate = true;
		console.log("GOING UP");
		bird.goUP();

}


function draw()
{

		if(this.gamestate)
		{

						fill(255,255,255);
						this.current= new Pipe();  

								if(frameCount%floor(this.diff) ==0)
								{
										 pipes.push(this.current);

								}

						bird.update();

								for(i=0;i<pipes.length;i++)
								{
								
										pipes[i].update();

								}

								
						background(0,0,0);

						bird.show();
								
								for(i=0;i<pipes.length;i++)
								{
										
										pipes[i].show();

										pipes[i].isColliding(bird);
								
								}



						textSize(32);
						text('Score:', 400, 30);
						text(floor(this.score/8), 500, 30);

			this.storescore = this.score/8;
		}
		else
		{ 
			this.score = 0; 
						background(0,0,0);

						textSize(100);
						fill(255,255,255);

						text('Flappy Ball', 85, 100);
						textSize(20);

						text("Just a P5JS Demo By Surya", 210, 150);
						text("Score:  "+floor(this.storescore),300, 200);


						text('Press Space to begin', 225, 400);
						pipes = [];
						
			this.time = 0; 


		}

}