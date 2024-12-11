/*
 UTILISATION DES FICHIERS STATIQUES 2
 */

/*
Vous pouvez déclarer autant de dossier statique que vous le souhaitez.
*/

/*
 Exercice
 */
/*

------ 1 ------
Créez deux dossiers à côté de votre fichier. Placez une image dans chaque dossier.

------ 2 ------
Déclarez successivement ces deux dossiers dans votre fichier JavaScript.

------ 3 ------
Quand l'utilisateur se connecte à votre serveur, envoyez-lui la balise image  correspondant au premier dossier.

------ 4 ------
S'il saisit le texte 'image' dans l'URL, affichez lui l'image correspondant au second dossier.
*/

const express = require("express");
const app = require("express")();

// Port sur lequel le serveur va écouter
const port = 3000;

// Utilisation d'un middleware pour servir les fichiers statiques du dossier 'images'
app.use("/img", express.static(__dirname + "/images"));
app.use("/icon", express.static(__dirname + "/icons"));

// Route pour la racine (GET sur "/") qui envoie une balise image
app.get("/", (req, res) => {
  // Envoie la balise image avec l'attribut src pointant vers l'image "volley.jpg"
  res.send('<img src="/icon/pirate.png" alt="pirate">');
});

app.get("/image", (req, res) => {
  res.send('<img src="/img/volley.jpg" alt="volley">');
});
app.get("/quit", (req, res) => {
  res.send("bye bye, vous etes sur /quit");
});

app.listen(port, () => {
  console.log("server4 en ecoute sur http://localhost:3000/");
});
