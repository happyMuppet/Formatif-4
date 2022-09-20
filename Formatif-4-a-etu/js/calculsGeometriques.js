"use strict"

/**
 *  Permets de remplacer une série d'espaces contigus par un seul espace

 * @param chaine, une chaine de caractères
 * @returns {string}
 */
function filtrerXEspacesParUn(chaine) {
    let chaineRetour = "";

    for (let i = 0; i < chaine.length; i++) {

        if(chaine[i] != " " || chaine[i + 1] != " " && chaine[i] < chaine.length){
            chaineRetour += chaine[i];
        }
    }
    return chaineRetour;
}

/**
 * Permets une première filtration et organisation de l'information en tableau
 *
 * @param chaineInfo, la chaine d'info brute avec des retours de chariot
 * @returns {string[]}
 */
function creerTabString(chaineInfo) {

    //Diviser les lignes
    let tabString = chaineInfo.trim().split("\n");

    for (let i = 0; i < tabString.length; i++) {
        tabString[i] = filtrerXEspacesParUn(tabString[i].trim());
    }
    return tabString;
}


/**
 * Crée les objets cercles ou rectangles potentiellement valides à partir d'un tableau de chaine
 *
 * @param tabString, un tableau de chaines d'info brute pour définir les formes
 *
 * @return un array des objets cercle ou rectangle si valide
 */
function creerTabObjetForme(tabString) {

    let tabObjets = [];

    // On parcours les elements du tableau
    for (let element of tabString) {
        /* On divise chaque éléments de la chaine de caractère à chaque espace et on place ces élements
        /* dans un tableau de caractère.
        */
        let tableauCaractere = element.split(" ");

        if(tableauCaractere.includes("r" || "R")){
            if(!isNaN(tableauCaractere[1]) && !isNaN(tableauCaractere[2])){
                tabObjets.push(new Rectangle(tableauCaractere[1], tableauCaractere[2]));
            }
        } else if (tableauCaractere.includes("c" || "C")){
            if(!isNaN(tableauCaractere[1])){
                tabObjets.push(new Cercle(tableauCaractere[1]));
            }
        }
    }
    return tabObjets;
}

/**
 * Contients la logique d'affaire qui à partir d'une entrée texte, fabrique des objets valides et
 * fait les calculs demandés sur les objets formes voulues
 *
 * @param event
 */
function calculerSelonDemande(event) {
    event.preventDefault();

    let tabObjetsFormes = creerTabObjetForme(creerTabString(valeursFormes.value));
    let reponse = "";

    //Soit les boucles sont dans le "if" ou le "if" dans une boucle !?!

    //On utilise le id
    if (radioCalculerAire.checked) {
        for (let i = 0; i < tabObjetsFormes.length; i++) {
            reponse += tabObjetsFormes[i] + ", dont l'aire est : " + tabObjetsFormes[i].aire() + "<br>";
        }
    } else if (radioCalculerPerimetre.checked) {
        for (let i = 0; i < tabObjetsFormes.length; i++) {
            reponse += tabObjetsFormes[i] + ", dont le périmètre est : " + tabObjetsFormes[i].perimetre() + "<br>";
        }
    } else if (radioCalculerLesDeux.checked) {
        for (let i = 0; i < tabObjetsFormes.length; i++) {
            reponse += tabObjetsFormes[i] + ", dont l'aire est : " + tabObjetsFormes[i].aire(4) + " et le périmètre est : " + tabObjetsFormes[i].perimetre(4) + "<br>";
        }
    } else {
        //Problème avec le choix
    }

    if (reponse != "") {
        resultats.innerHTML = reponse;
    } else {
        resultats.innerHTML = "Abscence de formes ou aucune forme valide";
    }
}

/**
 * Vider le champs "textarea" de saisie et l'espaces des résultats
 *
 * @param event
 */
function viderSaisie(event) {
    valeursFormes.value = "";

    let valeurFormes = document.getElementById("valeursFormes");
    valeurFormes.innerHTML.value = "";
}

/**
 * Remplir le champs "textarea" de saisie pour faire des tests plus rapidement
 *
 * Peut-être modifié à volonté
 *
 * @param event
 */
function remplirSaisie(event) {

    let valeursFormesRemplir = document.getElementById("valeursFormes");
    valeursFormesRemplir.innerHTML += "   c     34\n  r 56e   7\nc   22\nr e  34  e 16\n r 84 76\n";
}

function initEvent() {
    let boutonCalculer = document.getElementById("btnCalculer")
    let boutonVider = document.getElementById("btnVider")
    let boutonRemplir = document.getElementById("btnRemplir")

    boutonCalculer.addEventListener("click", calculerSelonDemande, false);
    boutonVider.addEventListener("click", viderSaisie, false);
    boutonRemplir.addEventListener("click", remplirSaisie, false);
}
initEvent();