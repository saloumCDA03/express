/*


UTILISATION DES TEMPLATES - PREMIERS PAS

Présentation:

L'utilisation de template permet de simplifier l'écriture des pages en HTML et de gérer facilement l'affichage des données contenues dans une variable.

Le template souvent utilisé avec Express.js est EJS (Embedded JavaScript).
Vous trouverez l'ensemble des possibilités de ce moteur de template dans la documentation : https://ejs.co/ (Menu "Docs" dans la barre de navigation).

Ses avantages :
Syntaxe simple : EJS utilise des balises HTML traditionnelles et des balises EJS pour incorporer du code JavaScript, ce qui rend la syntaxe relativement facile à apprendre et à comprendre.

Grande flexibilité : EJS permet d'incorporer du code JavaScript directement dans les fichiers de templates, ce qui offre une grande flexibilité dans la génération de contenu dynamique pour les pages web.

Grande compatibilité : EJS est compatible avec tous les navigateurs modernes et peut être utilisé avec de nombreux frameworks web populaires pour Node.js, tels que Express.

Bonne performance : EJS est connu pour être un moteur de templates rapide et efficace, ce qui peut être un avantage pour les applications web qui ont besoin de générer du contenu dynamique à grande échelle.

Grande communauté : EJS est utilisé par une grande communauté de développeurs Node.js, ce qui signifie que vous pouvez trouver de nombreuses ressources et des exemples de code pour vous aider à utiliser EJS dans votre projet.

Pour utiliser EJS, vous devez tout d'abord installer le module correspondant (npm install ejs).
*/

/*
Exercice
Affichons une page à l'aide du moteur de template EJS.
Installez le module EJS en utilisant la commande npm install ejs. 

 1 
Créez un dossier views pour les fichiers de templates
Vous pouvez placer le dossier views à la racine de votre projet

 2 
Vous spécifiez que vous utilisez le module EJS : app.set('view engine', 'ejs').
Pour utiliser le dossier des fichiers statiques pour les fichiers EJS, vous devez utilisez la méthode suivante : app.set('views','<chemin du dossier>');

 3 
Pour appeler le fichier EJS, vous utilisez la méthode res.render('<nom du fichier sans extension>')
*/
