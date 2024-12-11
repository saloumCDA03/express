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

<%% : Afficher littéralement <% dans le modèle HTML.
  <%% Ceci affichera
  
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
