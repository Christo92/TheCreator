var Sprite = function(fn) {

	this.TO_RADIANS = Math.PI/180;
	this.image = null;
	//pattern systeme d'encapsuler  et de structure du code
	this.is_pattern = false;
	this.pattern = null;
	this.pattern_x_times = 0;
	this.load = function(filename) { this.image = new Image(); this.image.src = filename; return this; };
	this.to_pattern = function(x_times) { this.pattern_x_times = x_times; this.pattern = Context.context.createPattern(this.image, 'repeat'); this.is_pattern = true; };

	this.animationDelay = 0;
	//afin de compter les index
	//Détermine le nombre de fois que l'animation sera jouée avant de s'arrêter
	this.animationIndexCounter = 0;
	//Pour controler les frames, division d'une fenêtre plusieurs parties
	this.animationCurrentFrame = 0;

	// Charger les sprites
	if (fn != undefined && fn != "" && fn != null)
	{
		this.load(fn);
		console.log("Loaded sprite " + fn);
	}
	else
	{
		console.log("Unable to load sprite. Filename '" + fn + "' is undefined or null.");
	}

	// Pour générer les sprites qui composeront la map
	this.draw = function(x, y) {
		Context.context.drawImage(this.image, x, y, BLOCK_W, BLOCK_H);
	};


	this.drawAnimated = function(x, y, spriteSheetIndex)
	{
		if (this.animationDelay++ >= 3) {
			this.animationDelay = 0;
			this.animationIndexCounter++;
			if (this.animationIndexCounter >= spriteSheetIndex.length)
				this.animationIndexCounter = 0;
			this.animationCurrentFrame = spriteSheetIndex[this.animationIndexCounter];
		}
		var res = i2xy(this.animationCurrentFrame, 8);
		Context.context.drawImage(this.image, res[0]*32, res[1]*32, 32, 32, x, y, 32, 32);
	};


	// Pour gérer l'axe des abscisses et des ordonnés
	this.draw2 = function(x, y, w, h) {
		if (this.is_pattern) {
			for (var i = 0; i < this.pattern_x_times; i++) {
				Context.context.drawImage(this.image, x + w*i, y, w, h);
			}
		} else {
			Context.context.drawImage(this.image, x, y, w, h);
		}
	};

	// Rotated draw
	this.rot = function(x, y, angle) {
		Context.context.save();
		Context.context.translate(x,y);
		Context.context.rotate(angle * this.TO_RADIANS);
		Context.context.drawImage(this.image, -(this.image.width/2), -(this.image.height/2));
		Context.context.restore();
	}
};