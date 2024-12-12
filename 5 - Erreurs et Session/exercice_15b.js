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