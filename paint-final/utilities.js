// gestion de la position de la sourie 
function getMouseLocation(event){

var location;
var offset;
var styles;


    // Récupération de l'offset du canvas (sa position par rapport à la zone d'affichage, le viewport)
  offset = canvas.getBoundingClientRect();
      //La méthode getBoundingClientRect () renvoie la taille d'un élément et sa position par rapport à la        fenêtre d'affichage.

        //Cette méthode retourne un objet DOMRect avec huit propriétés: gauche, haut, droit, bas, x, y,         largeur, hauteur.


    // Récupération des propriétés CSS calculées pour l'élément canvas et récupération des bordures 
    styles =  window.getComputedStyle(canvas);  
        // La méthode getComputedStyle () obtient toutes les propriétés CSS (calculées) et les valeurs de l'élément spécifié.
  /**
     * Construction des coordonnées du clic (x,y) par rapport à l'origine du canvas 
     * Des coordonnées de la souris par rapport au viewport (event.clientX, event.clientY) on soustrait :
     *  -> l'offset de l'élément canvas, c'est-à-dire l'espace autour du canvas jusqu'au bord de la fenêtre
     *  -> l'épaisseur des bordures du canvas
     */ 
       
       
        
      location = {
        x: event.clientX - offset.left - parseInt(styles.borderLeftWidth),
        y: event.clientY - offset.top - parseInt(styles.borderTopWidth)
    }
      
        // event.clientX  => Coordonnées Horizontal (=> La propriété clientX renvoie la coordonnée horizontale (en fonction de la zone client) du pointeur de la souris lorsqu'un événement de la souris a été déclenché.)
        
        // event.clientY => Coordonnées Vertical
   return location;
}
function getMouseLocation2(event){

var location;
var offset;
var styles;


    // Récupération de l'offset du canvas (sa position par rapport à la zone d'affichage, le viewport)
  offset = palette.getBoundingClientRect();
      //La méthode getBoundingClientRect () renvoie la taille d'un élément et sa position par rapport à la        fenêtre d'affichage.

        //Cette méthode retourne un objet DOMRect avec huit propriétés: gauche, haut, droit, bas, x, y,         largeur, hauteur.


    // Récupération des propriétés CSS calculées pour l'élément canvas et récupération des bordures 
    styles =  window.getComputedStyle(palette);  
        // La méthode getComputedStyle () obtient toutes les propriétés CSS (calculées) et les valeurs de l'élément spécifié.
  /**
     * Construction des coordonnées du clic (x,y) par rapport à l'origine du canvas 
     * Des coordonnées de la souris par rapport au viewport (event.clientX, event.clientY) on soustrait :
     *  -> l'offset de l'élément canvas, c'est-à-dire l'espace autour du canvas jusqu'au bord de la fenêtre
     *  -> l'épaisseur des bordures du canvas
     */ 
       
       
        
      location = {
        x: event.clientX - offset.left - parseInt(styles.borderLeftWidth),
        y: event.clientY - offset.top - parseInt(styles.borderTopWidth)
    }
      
        // event.clientX  => Coordonnées Horizontal (=> La propriété clientX renvoie la coordonnée horizontale (en fonction de la zone client) du pointeur de la souris lorsqu'un événement de la souris a été déclenché.)
        
        // event.clientY => Coordonnées Vertical
   return location;
}
