/*
GESTION DES ROUTES 1
*/

/*
Un serveur web doit être capable de répondre correctement en fonction de l'URL demandée par le client. Dans cet exercice, nous allons explorer la gestion de base des requêtes avec la méthode get d'Express.js.
*/

/*
Exercice
nous allons reproduire le comportement du code suivant en utilisant express

const http = require("http");
const url = require("url");

const port = 3000;

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);

  if (parsedUrl.pathname === "/" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Bienvenue sur notre serveur Express.js !");
  } else if (parsedUrl.pathname === "/quit" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("vous etes sur /quit");
  } else {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
  }
});

server.listen(port, () => {
  console.log("server2 en ecoute sur http://localhost:3000/");
});

Express.js gère certaines erreurs par défaut, telles que les erreurs 404 (page introuvable) et les erreurs 500 (erreur interne du serveur). 
------ 1 ------
Reprenez le code de l'exercice précédent. Lorsque l'utilisateur accède à l'URL racine, affichez un message.

------ 2 ------
En utilisant une autre méthode get sur l'objet stocké dans la variable app, affichez un message différent dans le navigateur lorsque l'utilisateur ajoute le mot "quit" à l'URL racine.
*/
