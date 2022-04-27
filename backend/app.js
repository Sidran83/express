const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://pierredeveix:panoramata@sidran83.5hbgs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  console.log(req);
  next();
});

app.use((req, res, next) => {
  res.json({ message: "requête bien reçue !"});
});

module.exports = app;
