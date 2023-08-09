// Fonction pour ajouter une information au localStorage
function ajouterInfoGlace() {
    var glace = document.getElementById("glace").value;

    if (glace) {
        var newGlace = {
            glace: glace,
        };

        var infoGlace = localStorage.getItem("infoGlace");
        if (infoGlace) {
            infoGlace = JSON.parse(infoGlace);
            infoGlace.push(newGlace);
        } else {
            infoGlace = [newGlace];
        }

        localStorage.setItem("infoGlace", JSON.stringify(infoGlace));

        document.getElementById("glace").value = "";

        // Afficher une alerte pour confirmer la création de l'information
        alert("L'information a été créée avec succès !");
        
        afficherinfoGlace(); // Actualiser l'affichage après l'ajout
    } else {
        // Afficher une alerte pour informer l'utilisateur qu'il n'a pas rempli tous les champs
        alert("Veuillez remplir tous les champs !");
    }
}

// Fonction pour afficher les informations sur la page d'accueil
function afficherinfoGlace() {
    var infoGlace = localStorage.getItem("infoGlace");
    if (infoGlace) {
        infoGlace = JSON.parse(infoGlace);
        var infoDivGlace = document.getElementById("infoGlace");
        infoDivGlace.innerHTML = "";
        for (var i = 0; i < infoGlace.length; i++) {
            var glace = infoGlace[i];
            var glaceElement = document.createElement("div");
            glaceElement.classList.add("glace");
            glaceElement.innerHTML = `
                <fieldset>
                    <h>${glace.glace}</h>
                    <button onclick="supprimerInfoGlace(${i})">Supprimer</button>
                </fieldset>
            `;
            infoDivGlace.appendChild(glaceElement);
        }
    }
}

// ... (autres fonctions spécifiques à la page Glace)


// Appel de la fonction afficherinfo() lorsque la page d'accueil est chargée
window.onload = afficherinfoGlace;

// Fonction pour supprimer une information
function supprimerInfoGlace(index) {
    var infoGlace = localStorage.getItem("infoGlace");
    if (infoGlace) {
        infoGlace = JSON.parse(infoGlace);
        infoGlace.splice(index, 1);
        localStorage.setItem("infoGlace", JSON.stringify(infoGlace));
        afficherinfoGlace(); // Actualiser l'affichage après la suppression
    }
}

// Fonction pour supprimer toute les informations de Congélateur
function supprimerTout() {
    localStorage.removeItem("infoGlace");
    afficherinfoGlace(); // Actualiser l'affichage après la suppression
    console.log("afficherinfoGlace");
    window.location.reload();

}