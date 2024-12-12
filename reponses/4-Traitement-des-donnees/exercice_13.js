/*
GÉRER LES POSTS
*/

/*
Lorsqu'une requête post est utilisée, les données envoyées ne sont pas présentes dans l'url. 
Le traitement de ces données dans les requêtes en post se fait d'une façon un peu différente des requêtes avec la méthode get.

Pour gérer une requête POST avec Express, 
vous devez utiliser un middleware pour parser les données envoyées dans la requête. 
Le middleware le plus couramment utilisé pour cela est body-parser.

Voici les étapes à suivre pour gérer une requête POST avec Express :
  Installez le module body-parser en utilisant la commande 
  npm install body-parser.

  Requirez le module body-parser dans votre fichier index.js :const bodyParser = require('body-parser');
  Utilisez la méthode urlencoded du module body-parser pour parser les données envoyées dans la requête POST
    app.use(bodyParser.urlencoded({ extended: false }));

À partir de là, on peut utiliser dans la fonction de retour de la gestion du post (app.post) la propriété body de l'objet req qui contient autant de propriétés que de nombres d'éléments envoyés par la soumission du formulaire.

*/

/*
exercice

Créez un nouveau projet Express. 
Ajoutez une route GET à votre application Express qui affiche une page ejs qui contient un formulaire  simple avec deux champs de texte : 
un champ pour le nom et un champ pour l'âge. 
Le formulaire doit soumettre les données via une requête POST à une URL spécifique(action).

Ajoutez une nouvelle route post à votre application Express pour gérer la requête de formulaire. La route doit récupérer les données envoyées via req.body., puis afficher un message de bienvenue avec le nom et l'âge saisis dans le formulaire dans une autre page ejs.

Testez votre application en accédant à l'URL de la route du formulaire (/formulaire, par exemple), puis en saisissant des données dans les champs de texte et en soumettant le formulaire. Vous devriez voir un message de bienvenue affiché avec les données saisies dans le formulaire.

*/
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

// Middleware pour servir les fichiers statiques
app.use(express.static("public"));

// Middleware pour parser les données envoyées dans la requête POST
app.use(bodyParser.urlencoded({ extended: false }));

// Route pour afficher le formulaire
app.get("/formulaireP", (req, res) => {
  res.render("formPost_ejs");
});

// Route pour gérer la requête POST du formulaire
app.post("/bienvenueP", (req, res) => {
  const nom = req.body.nom;
  const age = req.body.age;
  const method = "POST";

  res.render("formData_ejs", {
    nom: nom,
    age: `tu ne fais pas tes ${age} ans`,
    method: method,
  });
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log("Serveur en écoute sur le port 3000");
});
