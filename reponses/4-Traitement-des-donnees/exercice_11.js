/*
TRAITEMENT DES PARAMÈTRES D'URL

Introduction

Dans Express.js, il existe plusieurs méthodes pour gérer les informations transmises via l'URL. Parmi celles-ci, on trouve l'attribut params de l'objet req.
*/
/*
L'attribut req.params permet d'accéder aux données contenues dans l'URL via des paramètres de route. Par exemple :
Si l'URL est http://www.example.com/details/item1/part2
Voici comment récupérer ces données côté serveur :
app.get('/details/:element1/:element2', function (req, res) {
  console.log(req.params.element1); // affiche 'item1'
  console.log(req.params.element2); // affiche 'part2'
});
*/

/*
Exercices

Repartez du site développé dans l'exercice précédent. Pour naviguer entre les pages, transmettez la référence de chaque page dans l'URL en utilisant req.params.

*/
const express = require("express");
const app = express();
const fs = require("fs"); // module fs pour manipuler des fichiers
const path = require("path"); // module path pour travailler avec des chemins de fichiers

const port = 3000;

app.set("view engine", "ejs"); // moteur de template EJS
app.set("views", "./views"); // dossier contenant les fichiers de vue
app.use(express.static("public")); // dossier contenant les fichiers statiques (CSS, JS, images, etc.)

// Route pour la page d'accueil
app.get("/", (req, res) => {
  res.render("index_ejs");
});

// Route dynamique pour toutes les autres pages
// app.get("/:page", (req, res) => {
//   const page = req.params.page;
//   const cheminVue = path.join(__dirname, "views", `${page}_ejs.ejs`); // construction du chemin du fichier de vue correspondant
//   if (fs.existsSync(cheminVue)) {
//     // si le fichier de vue existe
//     res.render(`${page}_ejs`);
//   } else {
//     // sinon afficher la page d'erreur 404
//     res.status(404).render("404_ejs");
//   }
// });
app.get("/:page", (req, res) => {
  const page = req.params.page;
  console.log(page);
  res.render(`${page}_ejs`);
});
// Middleware pour la gestion des erreurs 404
app.use((req, res) => {
  res.status(404).render("404_ejs");
});

app.listen(port, () => {
  console.log(`Serveur 12 en écoute sur http://127.0.0.1:${port}/`);
});
