// Fonction pour ajouter un rôle au localStorage
function ajouterInfoRole() {
    var role = document.getElementById("role").value;

    if (role) {
        var newRole = {
            role: role,
        };

        var infoRole = localStorage.getItem("infoRole");
        if (infoRole) {
            infoRole = JSON.parse(infoRole);
            infoRole.push(newRole);
        } else {
            infoRole = [newRole];
        }

        localStorage.setItem("infoRole", JSON.stringify(infoRole));

        document.getElementById("role").value = "";

        // Afficher une alerte pour confirmer la création de l'information
        alert("L'information a été créée avec succès !");
        
        afficherinfoRole(); // Actualiser l'affichage après l'ajout
    } else {
        // Afficher une alerte pour informer l'utilisateur qu'il n'a pas rempli tous les champs
        alert("Veuillez remplir tous les champs !");
    }
}

// Fonction pour afficher les informations sur la page d'accueil
function afficherinfoRole() {
    var infoRole = localStorage.getItem("infoRole");
    if (infoRole) {
        infoRole = JSON.parse(infoRole);
        var infoDivRole = document.getElementById("infoRole");
        infoDivRole.innerHTML = "";
        for (var i = 0; i < infoRole.length; i++) {
            var role = infoRole[i];
            var roleElement = document.createElement("div");
            roleElement.classList.add("role");
            roleElement.innerHTML = `
                <fieldset>
                    <h>${role.role}</h>
                    <button onclick="supprimerInfoRole(${i})">Supprimer</button>
                </fieldset>
            `;
            infoDivRole.appendChild(roleElement);
        }
    }
}

// Appel de la fonction afficherinfoRole() lorsque la page d'accueil est chargée
window.onload = afficherinfoRole;

// Fonction pour supprimer un rôle
function supprimerInfoRole(index) {
    var infoRole = localStorage.getItem("infoRole");
    if (infoRole) {
        infoRole = JSON.parse(infoRole);
        infoRole.splice(index, 1);
        localStorage.setItem("infoRole", JSON.stringify(infoRole));
        afficherinfoRole(); // Actualiser l'affichage après la suppression
    }
}

// Fonction pour supprimer tous les rôles
function supprimerToutRole() {
    localStorage.removeItem("infoRole");
    afficherinfoRole(); // Actualiser l'affichage après la suppression
    window.location.reload(); // Forcer le rafraîchissement de la page
}
