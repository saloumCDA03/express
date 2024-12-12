/*******************************************************
 **********************LES SESSIONS**********************
 *******************************************************/

/*********************************
 ***********Présentation***********
 *********************************/
/*
Sessions
  Les sessions offrent un moyen efficace de conserver des informations spécifiques à chaque utilisateur sur le serveur. 
  Lorsqu'un utilisateur interagit pour la première fois avec un site web, 
  une session unique est créée côté serveur. 
  Cette session peut ensuite être utilisée pour stocker des informations à travers plusieurs requêtes HTTP, permettant une expérience utilisateur cohérente et personnalisée. 
  Les données de session étant stockées côté serveur et non sur le navigateur de l'utilisateur, elles offrent une couche supplémentaire de sécurité en comparaison aux cookies.

Cookies
  Les cookies sont de petits fichiers de données que les sites web envoient au navigateur de l'utilisateur, où ils sont stockés et renvoyés au serveur à chaque requête ultérieure. 
  Ils servent à stocker des données utiles telles que les identifiants de session, les préférences utilisateur, et d'autres informations nécessaires à l'optimisation de l'expérience utilisateur sur le site. 
  Les cookies jouent un rôle crucial dans la gestion des sessions en fournissant un moyen de suivre les utilisateurs à travers leurs interactions avec le site.


express-session
  express-session est un middleware Express qui gère les sessions utilisateurs. 
  Il crée un cookie de session côté client contenant un identifiant unique, permettant ainsi de retrouver et d'accéder aux données de session stockées sur le serveur. 
  Cela sécurise les informations de session en ne stockant pas de données sensibles directement dans le navigateur de l'utilisateur.

Stockage Sécurisé : 
  Les données sont conservées sur le serveur, offrant une sécurité accrue.
Facilité d'Utilisation : 
  express-session simplifie la mise en place de la gestion des sessions dans une application Express.


// Import des modules 
const express = require('express') // Module Express pour créer l'application serveur
const session = require('express-session'); // Middleware express-session pour la gestion des sessions
const cookieParser = require('cookie-parser') // Middleware cookie-parser pour analyser les cookies

// Création d'une instance d'application Express
const app = express()

// Utilisation de cookie-parser comme middleware dans l'application.
// Cela permet d'analyser les cookies des requêtes entrantes et de les rendre accessibles via `req.cookies`
app.use(cookieParser())

// Configuration et utilisation du middleware express-session pour la gestion des sessions
app.use(session({
    secret:'votreCleSecrete', // Clé secrète pour signer l'ID de session cookie, essentiel pour la sécurité
    saveUninitialized : false, // Empêche de sauvegarder des sessions non initialisées dans le store
    resave: false // Empêche la resauvegarde de sessions non modifiées
}));

app.get('/', function(req, res) {
  // Affichage des cookies présents dans la requête. Grâce à cookie-parser, les cookies sont accessibles via `req.cookies`
  console.log("Cookies: ", req.cookies)
  // Affichage des informations de session. Express-session ajoute l'objet `session` à l'objet `req`, permettant un accès facile aux données de session
  console.log(req.session);
})

*/

/*********************************
 *************Exercice*************
 *********************************/
/*
Créez un fichier js avec Express qui affiche le contenu d'un template .

------ 1 ------
Créez dans la variable de session un compteur en utilisant req.session.
------ 2 ------
Pour chaque connexion, incrémentez le compteur et affichez la valeur dans le navigateur.
*/
// Import des modules nécessaires
const express = require("express");
const session = require("express-session");
const app = express();

// Configuration et utilisation de express-session comme middleware
// Cela permet de gérer les sessions utilisateur de manière sécurisée et efficace.
app.use(
  session({
    secret: "votreCleSecrete", // Clé utilisée pour signer le cookie de session pour la sécurité.
    resave: false, // Empêche la resauvegarde de la session si elle n'a pas été modifiée pendant la requête, réduisant ainsi la charge sur le serveur ou le store de session.
    saveUninitialized: true, // Permet de sauvegarder une nouvelle session même si elle n'a pas été modifiée, utile pour suivre les utilisateurs dès leur première visite.
  })
);

// Route principale qui utilise les sessions pour compter les visites
app.get("/", (req, res) => {
  // Vérifie si l'objet session a une propriété 'views'
  if (req.session.views) {
    req.session.views++; // Incrémente le compteur si la session existe déjà
    res.send(`Vous avez visité cette page ${req.session.views} fois`);
  } else {
    req.session.views = 1; // Initialise le compteur de vues pour la session
    res.send("Bienvenue sur cette page pour la première fois");
  }
});

// Démarrage du serveur sur le port 3000
app.listen(3000, () => {
  console.log("Le serveur est en cours d'exécution sur le port 3000");
});
