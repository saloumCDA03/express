/*TRAITER LES ERREURS*/

/*
Il est important de prendre en compte les cas où l'utilisateur ne saisit aucune adresse valide. 
La gestion des erreurs de routes est un aspect important du développement d'applications web. Lorsque l'utilisateur saisit une adresse invalide, il est essentiel de générer une réponse appropriée avec un code d'erreur 404 (Non trouvé) suivi d'une page spécifique.

Pour mettre en place cette gestion, nous pouvons créer une route spécifique qui sera atteinte uniquement si toutes les autres routes ont échoué à traiter la requête. Cette route doit être positionnée après toutes les autres dans la chaîne de middleware.

Voici comment ajouter la gestion de la page 404 à votre application Express :
    app.use(function (req, res) {
      res.status(404).render('error404');
    });
Dans ce cas, next n'est pas nécessaire car il n'y a pas de middleware supplémentaire à exécuter après le gestionnaire d'erreur 404. Une fois que la middleware res.render('error404') a été exécutée, elle termine le traitement de la requête en envoyant la réponse au client.

*/

/*
Exercice
développez une application Express avec 3 route qui renvois  chaqune un fichier ejs   

Ajoutez la gestion de la page 404 .

Prévoyez d'afficher une page particulière si la requête envoyée ne correspond à aucune route gérée par le site.

*/
// index.js
const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./views");

app.use(express.static("public")); // dossier contenant les fichiers statiques (CSS, JS, images, etc.)

// Route pour afficher la page d'accueil
app.get("/", (req, res) => {
  res.render("accueil");
});

// Route pour afficher la page de contact
app.get("/contact", (req, res) => {
  res.render("contact");
});

// Route pour afficher la page "à propos"
app.get("/apropos", (req, res) => {
  res.render("apropos");
});

// Route pour gérer les requêtes qui ne correspondent à aucune route definies au dessus de ce middleware
app.use((req, res) => {
  res.status(404).render("404_ejs");
});

// Démarrer le serveur
app.listen(3000, () => {
  console.log("Serveur en écoute sur le port 3000");
});
