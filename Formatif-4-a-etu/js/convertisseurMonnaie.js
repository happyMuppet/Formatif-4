"use strict";

/*
* Cette méthode retire les espaces dans la valeur
* passé en paramètre.
*  */
function retirerEspace(saisie){
    return saisie.trim();
}

/*
* Cette méthode valide que la saisie n'est pas NUll
* et que la saisie est bien un nombre
* et retourne une variable de type NUMBER.
* */
function validerSaisie(saisie){

    let saisieValide;

    if(saisie != null && !isNaN(saisie)){
        saisieValide = parseFloat(saisie);
    }
    return saisieValide;
}

/*
* Cette méthode instancie un tableau contenant tout les objets
* monnaie avec les informations et les bon taux pour effectuer
* les opérations.
* */
function creerTableauMonnaie(){
    let tabMonnaie = [];

    tabMonnaie.push(new Monnaie("Canada", "Dollar (CAN)", 1.0));
        tabMonnaie[tabMonnaie.length - 1].drapeau =  "img/CAN.png";
    tabMonnaie.push(new Monnaie("État-Unis", "Dollar (USD)", 1.36));
        tabMonnaie[tabMonnaie.length - 1].drapeau = "img/USD.png";
    tabMonnaie.push(new Monnaie("Europe", "Euro (EUR)", 1.32));
        tabMonnaie[tabMonnaie.length - 1].drapeau = "img/EUR.png";
    tabMonnaie.push(new Monnaie("Mexique", "Pesos (MXN)", 0.067));
        tabMonnaie[tabMonnaie.length - 1].drapeau = "img/MXN.png";
    tabMonnaie.push(new Monnaie("Angleterre", "Dollar (CAN)", 1.48));
        tabMonnaie[tabMonnaie.length - 1].drapeau = "img/GBP.png";

    return tabMonnaie;
}

/*
* Cette méthode parcours un tableau de boutons
* et vérifie si l'un d'entre eux est check :
* ---- Si vrai : Elle retourne l'indice de ce bouton
* ---- Si faux : Elle retourne -1
* */
function trouverIndiceBouton(tabBouton){
    let indice = -1;

    for (let i = 0; i < tabBouton.length ; i++) {
        if(tabBouton[i].checked){
            indice = i;
        }
    }
    return indice;
}

/*
* Cette méthode calcule la valeur de la devise de sortie en
* fonction de la devise entrée.
* */
function convertirDevise(event){

    // Déclaration des variables pour la conversion
    let tabMonnaie = creerTableauMonnaie();
    let saisieTexte;
    let saisieNumerique;
    let indiceDe;
    let indiceVers;
    let montantConvertit;
    drapeauDe.src = "";
    fleche.src = "../img/fleche.jpg";
    drapeauVers.src = "";
    messageFinal.src = "";

    // On récupère la saisie sous forme de chaine de caractere.
    saisieTexte = (document.querySelector("#montant").value);

    // On vérifie que la saisie ne contient rien d'autre que des nombres.
    saisieNumerique = validerSaisie(retirerEspace(saisieTexte));

    // On vérifie que la saisie est bien un nombre positif réel.
    if(saisieTexte >= 0) {
        // On trouve l'indice du bouton
        indiceDe = trouverIndiceBouton(document.querySelectorAll("input[name=montantDe]"));
        indiceVers = trouverIndiceBouton(document.querySelectorAll("input[name=montantVers]"));

        if(indiceDe !== -1 && indiceVers !== -1){
            // Calcul de la valeur une fois converti
            montantConvertit = tabMonnaie[indiceDe].calculerDevise(saisieNumerique, tabMonnaie[indiceVers])

            // Affichage du message dans la balise montantConvertit
            drapeauDe.src = tabMonnaie[indiceDe]._drapeau;
            fleche.src = "img/fleche.jpg";
            drapeauVers.src = tabMonnaie[indiceVers]._drapeau;
            messageFinal.innerHTML = saisieNumerique.toFixed(2) + " " + tabMonnaie[indiceDe].devise + " vers des " +
                tabMonnaie[indiceVers].devise + " donne " + montantConvertit.toFixed(2);
        } else {
            alert("Vous devez sélectionner une devise d'entrée et de sortie!")
        }
    } else {
        alert("La montant à convertir ne peut pas être un nombre négatif!")
    }
}


/*
* Cette méthode initialise les bouttons qui seront à déclencher les événements
* tels que le calcul de la devise, à vider le champs de saisie et à vier le
* champs de saisie.
*  */
function initEvent() {
    let boutonCalculer = document.getElementById("btnCalculer")

    boutonCalculer.addEventListener("click", convertirDevise);
}


initEvent();
