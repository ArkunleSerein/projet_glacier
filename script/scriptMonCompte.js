// Fonction pour ajouter une information au localStorage
function ajouterInfoMonCompte() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;

    if (username && email) {
        var newData = {
            username: username,
            email: email,
        };

        var infoMonCompte = localStorage.getItem("infoMonCompte");
        if (infoMonCompte) {
            infoMonCompte = JSON.parse(infoMonCompte);
            infoMonCompte.push(newData);
        } else {
            infoMonCompte = [newData];
        }

        localStorage.setItem("infoMonCompte", JSON.stringify(infoMonCompte));

        document.getElementById("username").value = "";
        document.getElementById("email").value = "";

        // Afficher une alerte pour confirmer la création de l'information
        alert("L'information a été créée avec succès !");
        
        afficherInfoMonCompte(); // Actualiser l'affichage après l'ajout
    } else {
        // Afficher une alerte pour informer l'utilisateur qu'il n'a pas rempli tous les champs
        alert("Veuillez remplir tous les champs !");
    }
}

// Fonction pour afficher les informations sur la page d'accueil
function afficherInfoMonCompte() {
    var infoMonCompte = localStorage.getItem("infoMonCompte");
    if (infoMonCompte) {
        infoMonCompte = JSON.parse(infoMonCompte);
        var infoDivMonCompte = document.getElementById("infoMonCompte");
        infoDivMonCompte.innerHTML = "";
        for (var i = 0; i < infoMonCompte.length; i++) {
            var data = infoMonCompte[i];
            var dataElement = document.createElement("div");
            dataElement.classList.add("data");
            dataElement.innerHTML = `
                <fieldset>
                    <h>${data.username}</h>
                    <p>Email : ${data.email}</p>
                    <button onclick="supprimerInfoMonCompte(${i})">Supprimer</button>
                </fieldset>
            `;
            infoDivMonCompte.appendChild(dataElement);
        }
    }
}

// Appel de la fonction afficherInfoMonCompte() lorsque la page d'accueil est chargée
window.onload = afficherInfoMonCompte;

// Fonction pour supprimer une information
function supprimerInfoMonCompte(index) {
    var infoMonCompte = localStorage.getItem("infoMonCompte");
    if (infoMonCompte) {
        infoMonCompte = JSON.parse(infoMonCompte);
        infoMonCompte.splice(index, 1);
        localStorage.setItem("infoMonCompte", JSON.stringify(infoMonCompte));
        afficherInfoMonCompte(); // Actualiser l'affichage après la suppression
    }
}

// Fonction pour supprimer toutes les informations
function supprimerToutMonCompte() {
    localStorage.removeItem("infoMonCompte");
    afficherInfoMonCompte(); // Actualiser l'affichage après la suppression
    window.location.reload(); // Forcer le rafraîchissement de la page
}
