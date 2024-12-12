/*
Pour gérer les autres types d'erreurs dans votre application Express, vous pouvez utiliser un middleware d'erreur générique qui capturera toutes les erreurs non gérées.
app.use(function (err, req, res, next) {
    // Gérer l'erreur ici
    console.error(err); // Afficher l'erreur dans la console (peut être personnalisé)
    
    // Envoyer une réponse d'erreur au client
    res.status(500).render('error500'); // Rendre une page d'erreur 500 personnalisée
    
    // Passer l'erreur à la middleware suivante si nécessaire
    // next(err);
});
le middleware d'erreur générique est une fonction qui prend quatre paramètres : err, req, res et next. Lorsqu'une erreur se produit dans votre application (par exemple, une exception non capturée), Express passera automatiquement l'erreur à ce middleware.

À l'intérieur du middleware, vous pouvez gérer l'erreur de la manière souhaitée. Par exemple, vous pouvez afficher l'erreur dans la console à l'aide de console.error, enregistrer l'erreur dans un journal, envoyer une réponse d'erreur personnalisée au client, ou effectuer d'autres actions nécessaires.
    
Dans l'exemple donné, nous utilisons res.status(500).render('error500') pour envoyer une réponse d'erreur avec le code de statut 500 (Internal Server Error) et rendre une page d'erreur personnalisée (error500.ejs) pour l'erreur interne du serveur.

*/
/*
exercice: 

1 Déclarez deux routes GET : / et /simulate-error.
Pour la route /, renvoyez la page d'accueil !" en tant que réponse.

2 Pour la route /simulate-error, utilisez une fonction middleware pour générer une erreur délibérée. 
app.get("/simulate-error", (req, res, next) => {
  const error = new Error("Erreur simulée");
  next(error);
});

3 Ajoutez un middleware d'erreur générique qui sera exécuté lorsqu'une erreur se produit dans l'application.
gérez l'erreur en affichant un message d'erreur dans la console et en renvoyant un fichier d'erreur avec le code de statut 500 qui affiche l'erreur dans un <p> 
*/
const app = require("express")();

app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("accueil");
});// Générer une erreur délibérée pour tester le middleware de gestion d'erreurs
app.get("/simulate-error", (req, res, next) => {
  const error = new Error("Erreur simulée");
  next(error);
});

// Middleware d'erreur générique
app.use((err, req, res, next) => {
  // Gérer l'erreur ici
  console.error(err);
  // Envoyer une réponse d'erreur au client
  res.status(500).render("error500_ejs", { erreur: err });
});

app.listen(3000, () => {
  console.log("http://localhost:3000/simulate-error");
});
