// Charger les variables d'environnement
const dotenv = require("dotenv");
dotenv.config();

//require('dotenv').config();

// Importer les dependances
const express = require("express");
const router = require("./src/router");
// const middlewares = require('./src/middlewares');

// Création de l'application express
const app = express();

// Configurer le view engine
app.set("view engine", "ejs");
app.set("views", "./src/views");

// On expose le contenu du dossier public au reste du monde
app.use(express.static("public")); // Ca revient à déclarer une route par fichier en quelque sorte

// Notre body parser pour les requêtes POST
app.use(express.urlencoded({ extended: true }));

// On rajoute les middleware pour l'authentification et les sessions
// app.use(middlewares.setupSession);
// app.use(middlewares.addUserToLocals);

// On plug le router
app.use(router);


// Lancer l'application
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
