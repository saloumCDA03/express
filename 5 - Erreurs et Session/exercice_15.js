/*
*LES SESSIONS*

les sessions sont un mécanisme permettant de stocker et de maintenir des données spécifiques à chaque utilisateur pendant sa visite sur un site web. Elles jouent un rôle crucial dans la personnalisation de l'expérience utilisateur et la gestion de l'état de l'application.

Lorsqu'un utilisateur visite un site web, une session est créée pour lui sur le serveur. Un identifiant unique, généralement stocké dans un cookie sur le navigateur de l'utilisateur, est utilisé pour associer ce dernier à sa session sur le serveur.
*/

/*
Introduction à express-session
express-session est un module middleware pour Express qui permet de stocker et gérer les données de session des utilisateurs.

Installation de express-session:
npm install express-session

Configuration d'express-session:

Importez express-session   :
const session = require('express-session');

Ajoutez le middleware express-session à votre application Express :
app.use(session({
  secret: 'votre_clé_secrète',
  resave: false,
  saveUninitialized: false
}));
"secret" est utilisée pour spécifier une clé secrète qui sera utilisée pour signer le cookie de session. 
  Choisissez une clé secrète robuste et gardez-la confidentielle.
"resave" définit si la session doit être sauvegardée à chaque requête, même si elle n'a pas été modifiée.
   Par défaut, elle est définie sur false, ce qui signifie que la session ne sera sauvegardée que si elle a été modifiée.
"saveUninitialized" définit si une session non initialisée doit être sauvegardée dans le store. 
  Par défaut, elle est définie sur false, ce qui signifie que les sessions non initialisées ne seront pas sauvegardées. 
  Vous pouvez l'activer si vous souhaitez sauvegarder toutes les sessions, même celles qui n'ont pas été initialisées.

Utilisation de la session
vous pouvez utiliser la session dans vos "routes et middleware."
Pour stocker des données dans la session, vous pouvez simplement accéder à req.session et y ajouter des propriétés :
app.get('/example', (req, res) => {
  req.session.username = 'John';
  req.session.isLoggedIn = true;
  res.send('Données de session stockées');
});
Dans cet exemple, nous stockons le nom d'utilisateur et l'état de connexion dans la session. 
Les données de session seront associées à l'utilisateur en fonction du cookie de session.

Pour accéder aux données de session dans une autre route ou middleware, vous pouvez simplement utiliser req.session :
app.get('/profile', (req, res) => {
  const username = req.session.username;
  const isLoggedIn = req.session.isLoggedIn;
  res.send(`Nom d'utilisateur : ${username}, Connecté : ${isLoggedIn}`);
});
Dans cet exemple, nous récupérons les données de session précédemment stockées et les utilisons pour afficher les informations de profil de l'utilisateur.

Déconnexion et suppression de session
Pour déconnecter un utilisateur et supprimer sa session, vous pouvez utiliser req.session.destroy() :
app.get('/logout', (req, res) => {
  req.session.destroy();
  res.send('Vous êtes déconnecté');
});
L'appel à req.session.destroy() supprime la session de l'utilisateur, y compris toutes les données
*/

/*
Créez un fichier js avec Express 

------ 1 ------
Créez dans la variable de session un compteur en utilisant req.session.
------ 2 ------
Pour chaque connexion, incrémentez le compteur et affichez la valeur dans le navigateur.
*/
