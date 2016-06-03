//On génére les paramètres de la carte

var currentKey; //Pour enregistrer la touche appuyé
var charStep = 2; //Pour générer les pas 1 = 1 pas, 2 = debout
var charSpeed = 400; //On génére la vitesse d'exécution
var stageWidth = 800; //Afin de gérer l'effet de caméra en width
var stageHeight = 800; //Afin de gérer l'effet de caméra en height
var mapWidth = 1500; //Taille de la map Maximal en Width
var mapHeight = 1200; //Taille de la map Maximal en Height


//Création de l'objet Context
//canvas.getContext renvoie un contexte de dessin sur canvas
var Context = {
	canvas : null,
	context : null,
	create: function(canvas_tag_id) {
		this.canvas = document.getElementById('canvas_tag_id');
		this.context = this.canvas.getContext('2d');
		return this.context;
	}
};