/*
UTILISATION DES TEMPLATES - UTILISATION DE VARIABLES

Présentation

EJS permet de traiter le contenu d'une variable.
Dans la méthode res.render, on fournit un second argument sous la forme d'un objet. Chaque propriété de cet objet peut être utilisée dans le template de la façon suivante :
res.render(<nom du fichier>, {valeur1: 'un texte', valeur2 : 'un autre texte'})

template EJS :
Les balises <%= %> permettent d'insérer des variables dans le template.
<p><%= valeur1 %></p>
Ceci donnera <p>un texte<p> dans le document HTML transmis au client.
*/

/*
Exercice

------ 1 ------
Reprenez les documents de l'exercice précédent.

------ 2 ------
Transmettez le nom de la page et le titre du h1 dans l'objet passé en second argument de la méthode res.render et affichez-les dans votre document HTML envoyé au client.
*/

const express = require("express");

// Crée une nouvelle instance d'Express pour gérer les requêtes et les réponses.
const app = express();

// Définit le port sur lequel le serveur va écouter les requêtes.
const port = 3000;

// Configure Express pour utiliser EJS comme moteur de template (vue).
// Cela permet d'utiliser des fichiers EJS pour générer du HTML dynamique.
app.set("view engine", "ejs");

// Définit le dossier où Express va chercher les fichiers de template EJS.
// Ici, les fichiers EJS doivent être placés dans le dossier 'views'.
app.set("views", "./views");

// Définit une route pour la racine ('/') de l'application.
// Quand cette route est demandée, elle envoie une réponse en utilisant le template EJS 'index'.
// Des données ('nomDePage' et 'titreH1') sont passées au template pour le rendu dynamique.
app.get("/", (req, res) => {
  res.render("index", { nomDePage: "ejs", titreH1: "Bienvenue sur mon site" });
});

// Démarre le serveur pour qu'il écoute les requêtes sur le port spécifié.
// Affiche un message dans la console une fois que le serveur est lancé.
app.listen(port, () => {
  console.log("server 8 en ecoute sur http://127.0.0.1:3000/");
});
