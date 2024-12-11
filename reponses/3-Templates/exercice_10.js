/*
balise EJS :
<% ... %> : Code JavaScript sans sortie HTML.
  <% var year = new Date().getFullYear(); %>

<%_ ... %> : Code JavaScript sans sortie HTML et suppression des espaces blancs avant la balise.
     <%_ var year = new Date().getFullYear(); %>

   <%= ... %> : Insérer du code JavaScript avec sortie HTML échappée.
  <p>Année actuelle : <%= year %></p>

<%- ... %> : Insérer du code JavaScript avec sortie HTML non échappée.
  <p>Description: <%- "<strong>Description en gras</strong>" %></p>

<%# ... %> : Commentaire qui n'est pas exécuté ni inclus dans la sortie HTML.
  <%# Ceci est un commentaire et n'apparaîtra pas dans le HTML généré %>

  
TEMPLATE EJS - INCLUSION

Présentation
Pour éviter la répétition de plusieurs lignes de code similaires dans différents templates EJS, il est possible d'utiliser l'inclusion.
L'inclusion en EJS permet de diviser votre code en petits morceaux réutilisables que vous pouvez inclure dans plusieurs templates. 
Cela facilite la maintenance et la lisibilité du code. 
Pour inclure un fichier dans un template EJS, vous pouvez utiliser la directive <%- include('fichier') %>, où fichier est le nom du fichier EJS que vous souhaitez inclure.
https://www.digitalocean.com/community/tutorials/how-to-use-ejs-to-template-your-node-application-fr

*/

/*
Exercice

 1 
Reprenez le code de l'exercice précédent.
creez un dossier partials dans views
*/

const express = require("express");

const app = express();

const port = 3000;

app.set("view engine", "ejs");

app.set("views", "./views");

app.use(express.static("public"));

app.get("/", (req, res) => {
  console.log("ok");
  // Rendre la vue 'index_ejs.ejs' sans passer de variables
  res.render("index_ejs", {});
});

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
  console.log("Serveur 10 en écoute sur http://127.0.0.1:3000/");
});
