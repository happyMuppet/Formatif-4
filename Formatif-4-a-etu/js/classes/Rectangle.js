"use strict"

/*
Classe Rectangle
 */

class Rectangle {
    constructor(hauteur, largeur) {
        this._hauteur = hauteur;
        this._largeur = largeur;
    }

   aire = function (){
        return (this._hauteur * this._largeur).toFixed(2);
    }

    perimetre = function (){
        return ((this._hauteur + this._largeur) * 2).toFixed(2);
    }

    toString() {
        return "Un rectangle de hauteur " + this._hauteur + " et de largeur " + this._largeur;
    }
}
