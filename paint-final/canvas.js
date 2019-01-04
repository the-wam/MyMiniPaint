// initialisation Ardoise
var canvas = document.querySelector('#ardoise');
var context = canvas.getContext('2d');

//canvas tout blanc !!
function debutcanvas() {
  context.clearRect(0,0,window.innerWidth, window.innerHeight);
};

// gestion de la palette de couleur 
var palette = document.querySelector('#palette');
var ctx = palette.getContext('2d');

// dégradé couleur vertical 
var lineaire = ctx.createLinearGradient(0,0, 300, 0);
lineaire.addColorStop(0, 'red');
lineaire.addColorStop(0.1, 'magenta');
lineaire.addColorStop(0.3, 'blue');
lineaire.addColorStop(0.5, 'cyan');
lineaire.addColorStop(0.7, 'green');
lineaire.addColorStop(0.9, 'yellow');
lineaire.addColorStop(1, 'red');
ctx.fillStyle = lineaire;
ctx.fillRect(0,0, 300, 300);

// dégradé noir et blanc horizontal 
var toto = ctx.createLinearGradient(0,0, 0, 300);
toto.addColorStop(0, 'white');
toto.addColorStop(0.5, 'rgba(255, 255, 255, 0)');
toto.addColorStop(0.5, 'rgba(0,0,0,0)');
toto.addColorStop(1, 'black');

ctx.fillStyle = toto;
ctx.fillRect(0,0, 300, 300);