function deplacementPerso(dir) {

	//Le joueur peut déplacer le perso, en appuyant sur les flèches
	//Le touche appuyé est enregistré 
	var currentKeyCheck = currentKey;

	// Assimiliation de code
	if (dir == 'up') dir = 'back';
	if (dir == 'down') dir = 'front';

	charStep++;
	if (charStep == 5) charStep = 1;

	//On supprime la classe actuel
	$('#character').removeAttr('class');

	//On alterne les classes pour pouvoir animer le sprite
	//Tout le compte est en intéraction avec la page parameter.js
	switch(charStep) {
			
		case 1: 
			$('#character').addClass(dir+'-stand'); 
			setTimeout(function() { 
				charStep++;
				if (charStep == 5) charStep = 1;
				$('#character').removeAttr('class');
				$('#character').addClass(dir+'-right'); 
			}, (charSpeed/3));
			
			setTimeout(function() { 
				charStep++;
				if (charStep == 5) charStep = 1;
				$('#character').removeAttr('class');
				$('#character').addClass(dir+'-stand'); 
			}, ((charSpeed/3)*2));
			break;
			
		case 2: 
			$('#character').addClass(dir+'-right');
			setTimeout(function() { 
				charStep++;
				if (charStep == 5) charStep = 1;
				$('#character').removeAttr('class');
				$('#character').addClass(dir+'-stand'); 
			}, (charSpeed/3));
			
			setTimeout(function() { 
				charStep++;
				if (charStep == 5) charStep = 1;
				$('#character').removeAttr('class');
				$('#character').addClass(dir+'-left'); 
			}, ((charSpeed/3)*2));
			break;
			
		case 3: 
			$('#character').addClass(dir+'-stand');
			setTimeout(function() { 
				charStep++;
				if (charStep == 5) charStep = 1;
				$('#character').removeAttr('class');
				$('#character').addClass(dir+'-left'); 
			}, (charSpeed/3));
			
			setTimeout(function() { 
				charStep++;
				if (charStep == 5) charStep = 1;
				$('#character').removeAttr('class');
				$('#character').addClass(dir+'-stand'); 
			}, ((charSpeed/3)*2)); 
			break;
			
		case 4: 
			$('#character').addClass(dir+'-left');
			setTimeout(function() { 
				charStep++;
				if (charStep == 5) charStep = 1;
				$('#character').removeAttr('class');
				$('#character').addClass(dir+'-stand'); 
			}, (charSpeed/3));
			
			setTimeout(function() { 
				charStep++;
				if (charStep == 5) charStep = 1;
				$('#character').removeAttr('class');
				$('#character').addClass(dir+'-right'); 
			}, ((charSpeed/3)*2));
			break;
	}

	//Déplacement du personnage
	switch(dir) {
			
		case'front':
			if (verfifMouv(dir) == 'map') {
				$('#map').animate({top: '-=32'}, charSpeed, "linear", function() {
					if (currentKey == currentKeyCheck) deplacementPerso(dir);
				});
			}
			else if (verfifMouv(dir) == 'character') {
				$('#character').animate({top: '+=32'}, charSpeed, "linear", function() {
					if (currentKey == currentKeyCheck) deplacementPerso(dir);
				});
			}
			break;
			
		case'back':
			if (verfifMouv(dir) == 'map') {
				$('#map').animate({top: '+=32'}, charSpeed, "linear", function() {
					if (currentKey == currentKeyCheck) deplacementPerso(dir);
				});
			}
			else if (verfifMouv(dir) == 'character') {
				$('#character').animate({top: '-=32'}, charSpeed, "linear", function() {
					if (currentKey == currentKeyCheck) deplacementPerso(dir);
				});
			}
			break;
			
		case'left':
			if (verfifMouv(dir) == 'map') {
				$('#map').animate({left: '+=32'}, charSpeed, "linear", function() {
					if (currentKey == currentKeyCheck) deplacementPerso(dir);
				});
			}
			else if (verfifMouv(dir) == 'character') {
				$('#character').animate({left: '-=32'}, charSpeed, "linear", function() {
					if (currentKey == currentKeyCheck) deplacementPerso(dir);
				});
			}
			break;
			
		case'right':
			if (verfifMouv(dir) == 'map') {
				$('#map').animate({left: '-=32'}, charSpeed, "linear", function() {
					if (currentKey == currentKeyCheck) deplacementPerso(dir);
				});
			}
			else if (verfifMouv(dir) == 'character') {
				$('#character').animate({left: '+=32'}, charSpeed, "linear", function() {
					if (currentKey == currentKeyCheck) deplacementPerso(dir);
				});
			}
			break;
	}

}

function verfifMouv(dir) {
	switch(dir) {
		case'front':
			//Si le personnage est supérieur ou égal à 64px en partant du bas de l'encadré
			//Et si le perso n'est pas inférieur ou équal à 64px en partant du haut
			//Et que la map n'est pas en bas
			//Math.abs renvoie la valeur absolue d'un int
			if ($('#character').position().top <= (stageHeight - 64)
				&& $('#character').position().top >= 64
				&& (Math.abs($('#map').position().top) + stageHeight) < mapHeight) {
				return 'map';
			} 
			else if ($('#character').position().top + 32 < stageHeight) { 
				return 'character';
			} 
			else {
				return false;
			}
			break; //Rupture de la condition if précédente

		case'back':
			//Si le personnage est supérieur ou égal à 64px en partant du bas de l'encadré
			//Et si le perso n'est pas inférieur ou équal à 64px en partant du haut
			//Et que la map n'est pas en haut
			if ($('#character').position().top >= 64
				&& $('#character').position().top < (stageHeight - 64)
				&& $('#map').position().top < 0) {
				return 'map';
			} 
			else if ($('#character').position().top - 32 >= 0) { 
				return 'character';
			} 
			else {
				return false;
			}
			break; //Rupture de la condition if précédente

		case'left':
			//Si le personnage est supérieur ou égal à 64px en partant du bas de l'encadré
			//Et si le perso n'est pas inférieur ou équal à 64px en partant du haut
			//Et que la map n'est pas pas à sa droite
			if ($('#character').position().left < (stageWidth - 64) 
				&& $('#character').position().left >= 64
				&& $('#map').position().left < 0) {
				return 'map';
			} 
			else if ($('#character').position().left - 32 >= 0) { 
				return 'character';
			} 
			else {
				return false;
			}
			break; //Rupture de la condition if précédente

		case'right':
			//Si le personnage est supérieur ou égal à 64px en partant du bas de l'encadré
			//Et si le perso n'est pas inférieur ou équal à 64px en partant du haut
			//Et que la map n'est pas pas à sa gauche
			if ($('#character').position().left <= (stageWidth - 64) 
				&& $('#character').position().left >= 64
				&& (Math.abs($('#map').position().left) + stageWidth) < mapWidth) {
				return 'map';
			} 
			else if ($('#character').position().left + 32 < stageWidth) { 
				return 'character';
			} 
			else {
				return false;
			}
			break; //Rupture de la condition if précédente
	}
}