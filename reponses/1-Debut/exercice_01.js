/*
Express.js est un framework de Node.js qui simplifie la création d'applications web. Avant de l'utiliser, il faut d'abord l'installer dans le répertoire où se trouve l'application. Voici les étapes à suivre :

Créez un fichier package.json en exécutant la commande suivante et en répondant aux questions posées :
  npm init
Installez ensuite Express.js en utilisant cette commande 
  npm install express 

Après avoir installé Express.js, vous êtes prêt à créer votre premier serveur web avec ce framework.
*/

/*Exercice*/

/*
on va creer l'equivalent de ce serveur avec express:
const http = require("http");
const server = http.createServer((requete, reponse) => {
  if (requete.url === "/" && requete.method === "GET") {
    reponse.writeHead(200, { "Content-Type": "text/plain" });
    reponse.end("Bienvenue sur notre serveur Express.js !");
  } else {
    reponse.writeHead(404, { "Content-Type": "text/plain" });
    reponse.end("Not Found");
  }
});
const port = 3000;
server.listen(3000, () => {
  console.log("Server started at http://localhost:3000");
});
Dans le fichier exercice1.js, suivez les instructions ci-dessous :

 1 
Importez le module Express.js en utilisant require. Stockez la valeur retournée dans une variable nommée express. Ensuite, exécutez cette variable et stockez le résultat dans une variable nommée app.

 2 
Utilisez la méthode get sur l'objet contenu dans la variable app. Cette méthode prend deux arguments :

le chemin d'accès, ici la racine ("/").
une fonction flechée de gestion de la requête.
Cette fonction doit avoir deux paramètres : requete et reponse (req,res). Dans cette fonction, utilisez la méthode send sur l'objet reponse.
 3 
Finalisez votre fichier JavaScript en utilisant la méthode listen sur l'objet contenu dans la variable app. Cette méthode a deux arguments :

le numéro du port d'écoute
une fonction flechée de rappel.
Dans cette fonction, utilisez console.log pour afficher le numéro du port d'écoute.
 4 
Démarrez le serveur en exécutant : nodemon exercice_01.js
Accédez au serveur depuis votre navigateur web.

*/ // Importer le module Express
const express = require("express");

// Créer une instance de l'application Express
const app = express();

// Définir une route pour la racine (GET sur "/") qui envoie un message de bienvenue
app.get("/", (requete, reponse) => {
  reponse.send("Bienvenue sur notre serveur Express.js !");
});

// Définir le port d'écoute du serveur
const port = 3000;

// Démarrer le serveur et écouter sur le port spécifié, puis afficher un message dans la console
app.listen(port, () => {
  console.log(`Serveur1 en écoute sur le http://127.0.0.1:3000/ `);
});
