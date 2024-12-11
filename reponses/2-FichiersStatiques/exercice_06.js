/*
ROUTES ET FICHIERS STATIQUES PERSONNALISÉS

En explorant la gestion des routes et l'intégration des fichiers statiques, vous allez créer un petit site web avec Express.js.
*/

/*
Exercice

Dans un dossier public, créez trois documents HTML (index, about et contact )  :
Chaque document doit contenir un titre  un menu de navigation, une balise image et un footer.
Utilisez le même fichier CSS pour les trois documents afin d'assurer une apparence cohérente,
Prévoyez une image d'en-tête à inclure dans chacun des documents.
Intégrez un menu de navigation dans chacune des trois pages, comprenant trois liens : index, about et contact  Page 1 et Page 2. Ces liens permettront de naviguer entre les différentes pages.
Utilisez un middleware app.use() pour servir les fichiers statiques et trois gestionnaires de routes app.get() pour chacune des pages.
*/
// Importation du module Express.js.
const express = require("express");
// Création d'une nouvelle instance d'Express.
const app = express();

// Définition du port sur lequel le serveur va écouter.
const port = 3000;

// Configuration d'un middleware pour servir les fichiers statiques.
// Ici, tous les fichiers dans le dossier 'public' seront servis directement.
// Par exemple, si vous avez un fichier 'public/style.css', il sera accessible à l'URL '/style.css'.
app.use(express.static("public"));

// Route pour la racine de l'application (ex. http://127.0.0.1:3000/).
// Lorsqu'une requête GET est faite à l'adresse '/', le serveur envoie 'index.html' qui est dans le dossier 'public'.
// Note : Ici, 'root' n'est pas nécessaire car 'public' est déjà configuré comme dossier pour les fichiers statiques.
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

// Route pour '/about' (ex. http://127.0.0.1:3000/about).
// Envoie le fichier 'about.html' situé dans le dossier 'public'.
app.get("/about", (req, res) => {
  res.sendFile("about.html", { root: "public" });
});

// Route pour '/contact' (ex. http://127.0.0.1:3000/contact).
// Envoie le fichier 'contact.html' situé dans le dossier 'public'.
app.get("/contact", (req, res) => {
  res.sendFile("contact.html", { root: "public" });
});

// Démarrage du serveur sur le port défini.
// Affiche un message dans la console une fois le serveur démarré.
app.listen(port, () => {
  console.log("server 5 en ecoute sur http://127.0.0.1:3000/");
});
