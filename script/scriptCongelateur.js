// Fonction pour ajouter une information au localStorage
function ajouterInfoCongelateur() {
    var congelateur = document.getElementById("congelateur").value;

    if (congelateur) {
        var newCongelateur = {
            congelateur: congelateur,
        };

        var infoCongelateur = localStorage.getItem("infoCongelateur");
        if (infoCongelateur) {
            infoCongelateur = JSON.parse(infoCongelateur);
            infoCongelateur.push(newCongelateur);
        } else {
            infoCongelateur = [newCongelateur];
        }

        localStorage.setItem("infoCongelateur", JSON.stringify(infoCongelateur));

        document.getElementById("congelateur").value = "";

        // Afficher une alerte pour confirmer la création de l'information
        alert("L'information a été créée avec succès !");
        
        afficherinfoCongelateur(); // Actualiser l'affichage après l'ajout
    } else {
        // Afficher une alerte pour informer l'utilisateur qu'il n'a pas rempli tous les champs
        alert("Veuillez remplir tous les champs !");
    }
}

// Fonction pour afficher les informations sur la page d'accueil
function afficherinfoCongelateur() {
    var infoCongelateur = localStorage.getItem("infoCongelateur");
    if (infoCongelateur) {
        infoCongelateur = JSON.parse(infoCongelateur);
        var infoDivCongelateur = document.getElementById("infoCongelateur");
        infoDivCongelateur.innerHTML = "";
        for (var i = 0; i < infoCongelateur.length; i++) {
            var congelateur = infoCongelateur[i];
            var congelateurElement = document.createElement("div");
            congelateurElement.classList.add("congelateur");
            congelateurElement.innerHTML = `
                <fieldset>
                    <h>${congelateur.congelateur}</h>
                    <button onclick="supprimerInfoCongelateur(${i})">Supprimer</button>
                </fieldset>
            `;
            infoDivCongelateur.appendChild(congelateurElement);
        }
    }
}


// Appel de la fonction afficherInfos() lorsque la page d'accueil est chargée
window.onload = afficherinfoCongelateur;

// Fonction pour supprimer une information du Congélateur
function supprimerInfoCongelateur(index) {
    var infoCongelateur = localStorage.getItem("infoCongelateur");
    if (infoCongelateur) {
        infoCongelateur = JSON.parse(infoCongelateur);
        infoCongelateur.splice(index, 1);
        localStorage.setItem("infoCongelateur", JSON.stringify(infoCongelateur));
        afficherinfoCongelateur(); // Actualiser l'affichage après la suppression
    }
}


// Fonction pour supprimer toute les informations de Congélateur
function supprimerTout() {
    localStorage.removeItem("infoCongelateur");
    afficherinfoCongelateur(); // Actualiser l'affichage après la suppression
    console.log("afficherinfoCongelateur");
    window.location.reload();

}
