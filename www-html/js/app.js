document.addEventListener('DOMContentLoaded', () => {
  
  const myButton = document.querySelector('button')

  /*
  Requête asynchrone en ES6
  Fonction fetch() plus le système de Promise
  */
      // Créer une fonction pour la requête
      const asyncLoadFunction = theApiUrl => {
        // La fonction fetch() prend en paramètre l'adresse de l'API
        fetch(theApiUrl ).then(data => {
            // Les données sont présentes => renvoyer une Promise de type 'resolve'
            if (data.ok) { return Promise.resolve(data) }

            // Les données sont présentes => renvoyer une Promise de type 'reject'
            else { return Promise.reject(new Error('Problème dans la requête')) }
        })

        // Traiter le réponse
        .then( data => data.json() )

        // Manipuler les données de la réponse
        .then(data =>  {
            console.log(data)
            document.querySelector('.articles').innerHTML = data;
        })

        // Capter l'erreur
        .catch((err) =>  console.log(err) );
    }
    //

  myButton.addEventListener('click', (e) => {
    asyncLoadFunction('http://localhost:3000/api/articles')
  })
});