// Définition de l'URL à appeler :
// Cette URL fait appel à l'API JokeAPI pour obtenir des blagues en français, avec des filtres
// pour exclure certaines catégories (nsfw, religieux, politique, raciste, sexiste, explicite).
// Le type de blague est "twopart" (avec setup et chute).
const URL = "https://v2.jokeapi.dev/joke/Any?lang=fr&blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=twopart";

// Récupération du bouton "Nouvelle Blague" via son ID "addJokeButton".
const getBouton = document.getElementById("addJokeButton");

// Ajout d'un événement 'click' au bouton pour lancer une fonction asynchrone quand on clique dessus.
getBouton.addEventListener('click', async () => {
  try {
    // Lancement de l'appel à l'API JokeAPI avec la fonction fetch.
    fetch(URL)
      .then(function (response) {
        // Debug de la réponse : tu peux afficher la réponse complète dans la console (utilisé pour le débogage).
        // console.log(response);
        
        // Renvoi de la réponse sous forme de JSON pour l'utiliser ensuite.
        return response.json();
      })
    
      // Une fois que les données sont prêtes, traitement de la réponse JSON.
      .then((data) => {
        // Console log pour déboguer les résultats (affiche les données de la blague dans la console).
        // Note: data.results ne fonctionne pas pour cette API car elle renvoie un seul objet, pas une liste. Il faut donc utiliser data directement.
        console.log(data);

        // Récupération du corps du tableau où les blagues sont affichées.
        const tableBody = document.getElementById("table-body");
    
        // Insertion d'une nouvelle ligne dans le tableau.
        const row = tableBody.insertRow();

        // Ajout des cellules avec les différentes données de la blague (catégorie, setup et chute).
        row.insertCell(0).textContent = data.category;  // Catégorie de la blague.
        row.insertCell(1).textContent = data.setup;     // Introduction (setup) de la blague.
        row.insertCell(2).textContent = data.delivery;  // Chute (punchline) de la blague.

      })
  }
  // Gestion des erreurs : si une erreur survient (par exemple si l'API ne répond pas), elle sera capturée ici.
  catch {
    console.log("Erreur"); // Affiche "Erreur" dans la console en cas de problème.
  }
});
