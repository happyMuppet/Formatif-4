"use strict"

/**
 * Classe "Monnaie"
 */

class Monnaie {
    constructor(pays, devise, taux) {
        this._devise = devise;
        this._taux = taux;
        this._pays = pays;
        this._drapeau = null;
    }

    get devise(){
        return this._devise;
    }

    set devise(devise){
        this._devise = devise;
    }

    get taux(){
        return this._taux;
    }

    set taux(taux){
        this._taux = taux;
    }

    get pays(){
        return this._pays;
    }

    set pays(pays){
        this._pays = pays;
    }

    get drapeau() {
        return this._drapeau;
    }

    set drapeau(drapeau){
        this._drapeau = drapeau;
    }

    calculerDevise(montant, deviseVers){
        return (montant * (this.taux/ deviseVers.taux));
    }




}