/*
req.query est un objet JavaScript qui contient les paramètres de requête de la requête HTTP GET. 
Lorsqu'un utilisateur envoie une requête GET à un serveur web, les paramètres de requête sont inclus dans l'URL de la requête, après le point d'interrogation (?). 
Par exemple, dans l'URL suivante :
http://www.example.com/search?q=express&lang=en
les paramètres de requête sont q et lang, et leurs valeurs sont express et en, respectivement.
*/
/*
Notez que req.query ne fonctionne que pour les paramètres de requête de type GET. Si vous souhaitez traiter des données envoyées via une méthode POST, vous devez utiliser un autre objet de req appelé req.body et un middleware tel que body-parser pour récupérer les données envoyées dans le corps de la requête.
*/

/*
1 Créez un nouveau projet Express. 
Ajoutez une route GET à votre application Express qui affiche une page ejs qui contient un formulaire  simple avec deux champs de texte : 
un champ pour le nom et un champ pour l'âge. 
Le formulaire doit soumettre les données via une requête  GET (method) à une URL spécifique (action).

Ajoutez une nouvelle route GET à votre application Express pour gérer la requête de formulaire. La route doit récupérer les données envoyées via req.query, puis afficher un message de bienvenue avec le nom et l'âge saisis dans le formulaire dans une autre page ejs.

Testez votre application en accédant à l'URL de la route du formulaire (/formulaire, par exemple), puis en saisissant des données dans les champs de texte et en soumettant le formulaire. Vous devriez voir un message de bienvenue affiché avec les données saisies dans le formulaire.
*/

// index.js
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

// Middleware pour servir les fichiers statiques
app.use(express.static("public"));

// Route pour afficher le formulaire
app.get("/formulaire", (req, res) => {
  res.render("formulaire");
});

// Route pour afficher le message de bienvenue
app.get("/bienvenue", (req, res) => {
  const nom = req.query.nom;
  const prenom = req.query.prenom;
  const method = "GET";
  res.render("formData_ejs", { nom: nom, prenom: prenom, method: method });
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log("Serveur en écoute sur le port 3000");
});
