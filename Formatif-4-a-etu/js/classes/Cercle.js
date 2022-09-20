"use strict"

/*
Classe Cercle
 */

class Cercle {
    constructor(rayon) {
        this._rayon = rayon;
    }

    aire = function (){
        return (Math.PI * (Math.pow(this._rayon, 2))).toFixed(2);
    }

    perimetre = function (){
        return (2 * Math.PI * this._rayon).toFixed(2);
    }

    toString() {
        return "Un cercle de rayon " + this._rayon;
    }
}
