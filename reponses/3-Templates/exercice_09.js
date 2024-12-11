/*
installez le plugin EJS language support

 UTILISATION DES TEMPLATES - MINI SITE

 Exercice
 utilisez ejs pour transformer vos trois documents HTML de la partie     2-Fichiers-statiques en template.
 Utilisez une convention de nommage différente pour les fichiers EJS et HTML
 (index.html donne index_ejs.ejs
 )
*/
const express = require("express");

// Création de l'application Express
const app = express();

// Définition du numéro de port sur lequel l'application sera écoutée
const port = 3000;

// Configuration pour utiliser EJS comme moteur de rendu des vues
app.set("view engine", "ejs");

// Configuration pour indiquer le dossier contenant les fichiers de vues
app.set("views", "./views");

// Route pour la page d'accueil
app.get("/", (req, res) => {
  // Rendre la vue 'index_ejs.ejs' sans passer de variables
  res.render("index_ejs", {});
});

// Configuration pour servir les fichiers statiques (CSS, JS, images, etc.) depuis le dossier 'public'
app.use(express.static("public"));

// Route pour la page de contact
app.get("/contact", (req, res) => {
  // Rendre la vue 'contact_ejs.ejs' sans passer de variables
  res.render("contact_ejs", {});
});

// Route pour la page 'À propos'
app.get("/about", (req, res) => {
  // Rendre la vue 'about_ejs.ejs' sans passer de variables
  res.render("about_ejs", {});
});
// Middleware pour la gestion des erreurs 404
app.use((req, res, next) => {
  res.status(404).render("404_ejs");
});

// Démarrage du serveur sur le port spécifié
app.listen(port, () => {
  console.log("Serveur en écoute sur http://127.0.0.1:3000/");
});
