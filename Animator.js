class Animator {
	constructor(spritesheet, xstart, ystart, width, height, frameCount, frameDuration){
		Object.assign(this, {spritesheet, xstart, ystart, width, height, frameCount, frameDuration});
		
		this.elapsedTime = 0;
		this.totalTime = frameCount * frameDuration;
	};

	drawframe(tick, ctx, x, y){
      this.elapsedTime += tick;
	  if (this.elapsedTime > this.totalTime) this.elapsedTime -= this.totalTime;
		const frame = this.currentframe();

		ctx.drawImage(this.spritesheet,
			this.xstart + this.width*frame, this.ystart, 
			this.width, this.height,
			x, y,
			this.width*3, this.height*3);
	};

	currentframe(){
		return Math.floor(this.elapsedTime / this.frameDuration);
	};

	isDone() {
		return (this.elapsedTime >= this.totalTime);
	   };
	};
