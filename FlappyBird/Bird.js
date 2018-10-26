function Bird()
{
		this.y = height/2;
		this.x = 100;

		this.gravity = 0.5;
		this.yvel = 0;

		this.upForce = 10;

				this.show = function()
				{
					
						fill(255,255,255);
						ellipse(100,this.y,20,20);

				}

				this.update = function()
				{

						if(this.y>height)
						{	
								this.y = height
								this.yvel = 0;
						}
						else
						{

								if(this.y <0)
								{
										this.y = 0;
										this.yvel = 0;
								}	
								else
								{


										this.yvel +=this.gravity;

										this.y += this.yvel;
											
								}

						}

				}


this.goUP = function(){
this.yvel +=-this.upForce;
}

















}


