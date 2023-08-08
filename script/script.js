// Fonction pour ajouter une information au localStorage
function ajouterInfo() {
    
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
console.log(email);
console.log(password);

    if (email && password) {
        console.log("if");
        var compte = {
            email: email,
            password: password,
        };

        var infos = localStorage.getItem("infos");
        if (infos) {
            infos = JSON.parse(infos);
            infos.push(compte);
        } else {
            infos = [compte];
        }

        localStorage.setItem("infos", JSON.stringify(infos));

        document.getElementById("email").value = "";
        document.getElementById("password").value = "";

        // Afficher une alerte pour confirmer la création de l'information
        alert("L'information a été créée avec succès !");
    } else {
        console.log("else");
        // Afficher une alerte pour informer l'utilisateur qu'il n'a pas rempli tous les champs
        alert("Veuillez remplir tous les champs !");
    }
}

// Fonction pour afficher les informations sur la page d'accueil
function afficherInfos() {
    console.log("toto");
    var infos = localStorage.getItem("infos");
    console.log(infos);
    if (infos) {
        console.log("if");
        infos = JSON.parse(infos);
        console.log(infos);
        var infosDiv = document.getElementById("infos");
        console.log(infosDiv);
        infosDiv.innerHTML = "";
        for (var i = 0; i < infos.length; i++) {
            console.log("for");
            var compte = infos[i];
            var compteElement = document.createElement("div");
            compteElement.classList.add("compte");
            compteElement.innerHTML = `
                <h3>${compte.email}</h3>
                <p>Mdp : ${compte.password}</p>
                <button onclick="supprimerInfo(${i})">Supprimer</button>
            `;
            infosDiv.appendChild(compteElement);
        }
    }
}

// Appel de la fonction afficherInfos() lorsque la page d'accueil est chargée
window.onload = afficherInfos();

// Fonction pour supprimer une information
function supprimerInfo(index) {
    var infos = localStorage.getItem("infos");
    if (infos) {
        infos = JSON.parse(infos);
        infos.splice(index, 1);
        localStorage.setItem("infos", JSON.stringify(infos));
        afficherInfos();
    }
}