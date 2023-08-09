// Fonction pour ajouter une information au localStorage
function ajouterInfoParfum() {
    var parfum = document.getElementById("parfum").value;

    if (parfum) {
        var newParfum = {
            parfum: parfum,
        };

        var infoParfum = localStorage.getItem("infoParfum");
        if (infoParfum) {
            infoParfum = JSON.parse(infoParfum);
            infoParfum.push(newParfum);
        } else {
            infoParfum = [newParfum];
        }

        localStorage.setItem("infoParfum", JSON.stringify(infoParfum));

        document.getElementById("parfum").value = "";

        // Afficher une alerte pour confirmer la création de l'information
        alert("L'information a été créée avec succès !");
        
        afficherinfoParfum(); // Actualiser l'affichage après l'ajout
    } else {
        // Afficher une alerte pour informer l'utilisateur qu'il n'a pas rempli tous les champs
        alert("Veuillez remplir tous les champs !");
    }
}

// Fonction pour afficher les informations sur la page d'accueil
function afficherinfoParfum() {
    var infoParfum = localStorage.getItem("infoParfum");
    if (infoParfum) {
        infoParfum = JSON.parse(infoParfum);
        var infoDivParfum = document.getElementById("infoParfum");
        infoDivParfum.innerHTML = "";
        for (var i = 0; i < infoParfum.length; i++) {
            var parfum = infoParfum[i];
            var parfumElement = document.createElement("div");
            parfumElement.classList.add("parfum");
            parfumElement.innerHTML = `
                <fieldset>
                    <h>${parfum.parfum}</h>
                    <button onclick="supprimerInfoParfum(${i})">Supprimer</button>
                </fieldset>
            `;
            infoDivParfum.appendChild(parfumElement);
        }
    }
}

// Appel de la fonction afficherinfoParfum() lorsque la page d'accueil est chargée
window.onload = afficherinfoParfum;

// Fonction pour supprimer une information
function supprimerInfoParfum(index) {
    var infoParfum = localStorage.getItem("infoParfum");
    if (infoParfum) {
        infoParfum = JSON.parse(infoParfum);
        infoParfum.splice(index, 1);
        localStorage.setItem("infoParfum", JSON.stringify(infoParfum));
        afficherinfoParfum(); // Actualiser l'affichage après la suppression
    }
}

// Fonction pour supprimer toutes les informations de Parfum
function supprimerToutParfum() {
    localStorage.removeItem("infoParfum");
    afficherinfoParfum(); // Actualiser l'affichage après la suppression
    window.location.reload(); // Forcer le rafraîchissement de la page
}
