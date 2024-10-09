//Défintiion de l'URL à appeler
const URL = " https://v2.jokeapi.dev/joke/";

// Lancement de l'appel
fetch(URL)
.then (function (response) 
{
    // On transforme le résultat en json
    return response.json();
})

.then
(
data => 
{
    // Affichage du résultat de la transformation en JSON
    console.log(data.results);
    // On sélectionne le tableau dans notre page html où on va mettre les données
    const tableBody = document.getElementById('Tableau');
    
    // On parcourt le tableau, création de nouvelle ligne pour chaque utilisateur

        const row = tableBody.insertRow();
        row.insertCell(0).textContent =type;
       
    })
