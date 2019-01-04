// var du crayon 
var crayon1 = new crayon();
var saveCrayonP1;
var saveCrayonP2;
var color = "black";
var couleur = document.querySelectorAll("a");
var ligne = "3";
var lignes = document.querySelectorAll("input");
var savecouleur = 0;
var saveligneSelect = 1;
var supAll = document.querySelector('#nouveau');

// var canvas palette 
var palette = document.getElementById('palette');
var affichePalette = document.getElementById('pipette');
var couleurPalette = document.getElementById('white');

// var gomme 
var gomme = document.getElementById('gomme');

// var du if pour dessinner juste dans on clique
var isDrawing = false;

// var de localisation de la sourie 
var locationX;
var locationY;



//object crayon
function crayon() {
  
  this.dessin = function(x,y){
    context.beginPath();
    context.moveTo(x,y);
    context.lineTo(locationX,locationY);
    context.closePath();
    context.lineWidth = ligne;
    context.strokeStyle = color;
    context.stroke();
  }
};

//gestion de la couleur
  // gestion du border sélectionné
for(var a = 0; a < couleur.length; a++) {
  couleur[a].setAttribute("name", a);
};
for(var i = 0; i < couleur.length; i++) {
couleur[i].addEventListener('click', function() {
    couleur[savecouleur].classList.remove('border_select');
  });
};
  // gestion de la couleur sélectionné 
for(var i = 0; i < couleur.length; i++) {
  couleur[i].addEventListener('click', function() {
    color = this.id;
    this.classList.add('border_select');
    savecouleur = parseInt(this.name);
  });
};


// gestion de l'épaisseur 
  // gestion du border sélectionné
for(var a = 0; a < lignes.length; a++) {
  lignes[a].dataset.ligneSelect = a;
};
for(var i = 0; i < lignes.length; i++) {
lignes[i].addEventListener('click', function() {
    lignes[saveligneSelect].classList.remove('border_select');
  });
};
  // gestion de la width sélectionné 
for(var index = 0; index < lignes.length;index++) {
  lignes[index].addEventListener('click', function() {
    ligne = this.name;
    this.classList.add('border_select');
    saveligneSelect = this.dataset.ligneSelect;
  });
};

// parti qui dessine 
  // gestion du click pour commencer le dessin : isDrawing = true
canvas.addEventListener('mousedown', function(event){
    var location = getMouseLocation(event);
    locationX = location.x;
    locationY = location.y;
    isDrawing = true;
});
  // gestion du suivi de la sourie : if(isDrawing)
canvas.addEventListener('mousemove', function(event) {
  var location = getMouseLocation(event);
  if(isDrawing) {
    crayon1.dessin(location.x,location.y);
    locationX = location.x;
    locationY = location.y;
  };
});
  // ges du mouseup fin du dessin : isDrawing = false
canvas.addEventListener('mouseup', function() {
  isDrawing = false;
});

canvas.addEventListener('mouseleave', function() {
  isDrawing = false;
});

// choix couleur canvas
affichePalette.addEventListener('click', function() {
  affichePalette.classList.toggle('select');
  palette.classList.toggle('hidden');
  couleurPalette.classList.toggle('hidden');
});

palette.addEventListener('click', function(event) {
    var location = getMouseLocation2(event);
    var img_data = ctx.getImageData(location.x, location.y, 1, 1).data;
    var R = img_data[0];
    var G = img_data[1];
    var B = img_data[2];  
    color = 'rgb(' + R + ',' + G + ',' + B + ')';
    couleur[savecouleur].classList.remove('border_select');
    couleur[couleur.length - 1].classList.add('border_select');
    couleur[couleur.length - 1].style.backgroundColor = color;
    couleur[couleur.length - 1].id = color;
    savecouleur = couleur[couleur.length - 1].name;
});

// supprimé tout pour nouveau dessin 
supAll.addEventListener('click', debutcanvas);

// gomme 
gomme.addEventListener('click', function() {
  gomme.classList.toggle('select');
   if(gomme.getAttribute("class") == "select") {
    saveCrayonP1 = color;
    saveCrayonP2 = ligne;    
    color = "white";
    ligne = 7;
   }
   else {
    color = saveCrayonP1;
    ligne = saveCrayonP2;    
   }
});



debutcanvas();










































































































