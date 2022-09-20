"use strict";


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

function main() {
    let expression = "   a  b c d        e   f g h ijkl  m op";
    let baliseHtml = document.getElementById("balise");
    let maVar = filtrerXEspacesParUn(expression);

    baliseHtml.style.color = "purple";
    baliseHtml.style.fontWeight = "bold";
    baliseHtml.innerHTML += maVar;
}

main();