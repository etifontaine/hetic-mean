/*
Importer les composants de la route
*/
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const url = 'mongodb://localhost:27018/blog';
const dbName = 'blog';
/*
Définition des routes
*/
router.get( '/', (req, res) => {
  // Renvoyer un flux JSON dans la réponse
  res.json( { content: 'Hello API' } );
});

router.get('/articles', (req, res, next) => {

  mongoose.connect(url, function(err, client) {
    console.log("Connected successfully to server");
  
    client.collection('articles').find().toArray((err, tasks) => {

      // Tester la commande MongoDb
      if(err){ res.send(err) }
      else{ 
         // Envoyer les données au format json
         res.json(tasks)
      }
   })
  
    client.close();
  });
  

});

/*
Exporter le module de route
*/
module.exports = router;