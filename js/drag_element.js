/* Drag and Drop sur le canvas*/
var canvas=document.getElementById("map");
var ctx=canvas.getContext("2d");
var $canvas=$("#map");
var canvasOffset=$canvas.offset();
var offsetX=canvasOffset.left;
var offsetY=canvasOffset.top;




/************************* première competence **********/
var image1=new Image();
image1.src = "img/competence_1.png";

var img_competence_1=$("#img_competence_1");
var $canvas=$("#map");

img_competence_1.draggable({
    helper:'clone'
});
// set the data payload
img_competence_1.data("image",image1); // key-value pair

/************************* deuxième competence **********/
var image2=new Image();
image2.src = "img/competence_2.png";

var img_competence_2=$("#img_competence_2");
$canvas=$("#map");

img_competence_2.draggable({
    helper:'clone'
});
// set the data payload
img_competence_2.data("image",image2); // key-value pair

$canvas.droppable({
    drop:dragDrop
});

/************************* troisième competence **********/
var image3=new Image();
image3.src = "img/competence_3.png";

var img_competence_3=$("#img_competence_3");
$canvas=$("#map");

img_competence_3.draggable({
    helper:'clone'
});
// set the data payload
img_competence_3.data("image",image3); // key-value pair

$canvas.droppable({
    drop:dragDrop
});

/************************* quatrième competence **********/
var image4=new Image();
image4.src = "img/competence_4.png";

var img_competence_4=$("#img_competence_4");
var $canvas=$("#map");

img_competence_4.draggable({
    helper:'clone'
});
// set the data payload
$.data("image",image4); // key-value pair

img_competence_4.data("image",image4); // key-value pair

$canvas.droppable({
    drop:dragDrop
});

/************************* cinquième competence **********/
var image5=new Image();
image5.src = "img/competence_5.png";

var img_competence_5=$("#img_competence_5");
var $canvas=$("#map");

img_competence_5.draggable({
    helper:'clone'
});
// set the data payload
$.data("image",image5); // key-value pair

img_competence_5.data("image",image5); // key-value pair

$canvas.droppable({
    drop:dragDrop
});

/************************* sixème competence **********/
var image6=new Image();
image6.src = "img/competence_6.png";

var img_competence_6=$("#img_competence_6");
var $canvas=$("#map");

img_competence_6.draggable({
    helper:'clone'
});
// set the data payload
$.data("image",image6); // key-value pair

img_competence_6.data("image",image6); // key-value pair

$canvas.droppable({
    drop:dragDrop
});

/************************* septième competence **********/
var image7=new Image();
image7.src = "img/competence_7.png";

var img_competence_7=$("#img_competence_7");
var $canvas=$("#map");

img_competence_7.draggable({
    helper:'clone'
});
// set the data payload
$.data("image",image7); // key-value pair

img_competence_7.data("image",image7); // key-value pair

$canvas.droppable({
    drop:dragDrop
});

/************************* huitième competence **********/
var image8=new Image();
image8.src = "img/competence_8.png";

var img_competence_8=$("#img_competence_8");
var $canvas=$("#map");

img_competence_8.draggable({
    helper:'clone'
});
// set the data payload
$.data("image",image8); // key-value pair

img_competence_8.data("image",image8); // key-value pair

$canvas.droppable({
    drop:dragDrop
});

/************************* huitième competence **********/
var image9=new Image();
image9.src = "img/competence_9.png";

var img_competence_9=$("#img_competence_9");
var $canvas=$("#map");

img_competence_9.draggable({
    helper:'clone'
});
// set the data payload
$.data("image",image9); // key-value pair

img_competence_9.data("image",image9); // key-value pair

$canvas.droppable({
    drop:dragDrop
});


function dragDrop(e,ui){
    var element=ui.draggable;
    var data=element.data("image");
//	$('#map').on('mousemove', function(e){
//	console.log(e.pageX + ' ' + e.pageY);
//
//});
    var x=parseInt(ui.offset.left-offsetX);
    var y=parseInt(ui.offset.top-offsetY);
    ctx.drawImage(element.data("image"),x,y);
}

 