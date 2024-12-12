/*
exercice :
1. Déclarez une route GET /qui redirige vers /login ( res.redirect("/login") )
     et une route /login qui affiche un formulaire de connexion (method="post"). 
    Ce formulaire doit obligatoirement comporter des champs pour le nom d'utilisateur et le mot de passe.
    Lorsque le formulaire est soumis

2. Déclarez une route GET /profile qui affiche le profil de l'utilisateur connecté. 
    Dans cette route, récupérez le nom d'utilisateur à partir de la session 
    et affichez-le à l'écran.

3. Ajoutez une route GET /logout qui supprime le nom d'utilisateur de la session 
    et redirige l'utilisateur vers la page de connexion.



4. Ajoutez une gestion des erreurs 
    pour gérer les cas où les informations d'identification ne sont pas valides 
    ou si l'utilisateur tente d'accéder au profil sans être connecté.

Personnalisez les vues (ejs) pour rendre les pages de manière dynamique.


 si besoin, consultez la documentation d'Express et d'express-session pour obtenir plus d'informations sur la configuration des sessions et les options disponibles : https://expressjs.com/ et https://www.npmjs.com/package/express-session
*/

// Importation des modules requis
const express = require("express");
const session = require("express-session");
const app = express();

const crypto = require("crypto");

// Génération d'une clé secrète pour la session
const key = crypto.randomBytes(32).toString("hex");

// Configuration du moteur de vue pour utiliser EJS
app.set("view engine", "ejs");

app.use(express.static("public"));

// Utilisation du middleware pour parser les données envoyées dans la requête POST
app.use(express.urlencoded({ extended: true }));

// Configuration du middleware de session
app.use(
  session({
    secret: key, // Clé secrète pour signer la session
    resave: false, // Ne pas réenregistrer la session si elle n'a pas été modifiée
    saveUninitialized: false, // Ne pas sauvegarder les sessions non initialisées
  })
);

// Route pour la page d'accueil qui redirige vers le login
app.get("/", (req, res) => {
  if (req.session.username) {
    // Si un utilisateur est connecté
    // Rendu de la vue profile avec le nom d'utilisateur en tant que variable
    res.redirect("/profile");
  } else {
    // Si personne n'est connecté
    res.redirect("/login"); // Redirige vers la page de connexion
  }
});

// Route pour la page de connexion
app.get("/login", (req, res) => {
  if (req.session.username) {
    // Si un utilisateur est connecté
    // Rendu de la vue profile avec le nom d'utilisateur en tant que variable
    res.redirect("/profile");
  } else {
    // Si personne n'est connecté
    res.render("login_ejs"); // Rendu de la vue login
  }
});

// Route pour gérer la soumission du formulaire de connexion
app.post("/login", (req, res) => {
  const { username, password } = req.body; // Récupère le nom d'utilisateur et le mot de passe du formulaire
  // Dans une véritable application, vous vérifierez ces informations d'identification ici
  req.session.username = username; // Stocke le nom d'utilisateur dans la session
  res.redirect("/profile"); // Redirige vers la page de profil
});

// Route pour la page de profil
app.get("/profile", (req, res) => {
  if (req.session.username) {
    // Si un utilisateur est connecté
    // Rendu de la vue profile avec le nom d'utilisateur en tant que variable
    res.render("profile_ejs", { username: req.session.username });
  } else {
    // Si personne n'est connecté
    res.redirect("/login"); // Redirige vers la page de connexion
  }
});

// Route pour se déconnecter
app.get("/logout", (req, res) => {
  req.session.destroy(); // Détruit la session
  res.redirect("/login"); // Redirige vers la page de connexion
});
// Route pour gérer les requêtes qui ne correspondent à aucune route definies au dessus de ce middleware
app.use((req, res) => {
  res.status(404).render("404_ejs");
});
// Lancement de l'application sur le port 3000
app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
