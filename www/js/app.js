$.ajax({
  url: 'http://localhost:3000/api/articles',
  dataType: 'JSON',
  type: 'GET',

  success: function(data){

     // Vérifier la connexion
     if(data.name == "MongoError"){
        // Afficher le message d'erreur de connexion dans la console
        console.log(data.message)

     } else{
        // Afficher les données dans la console
        console.log(data)
        data.forEach(a => {
          $('.articles').append(`
          <div>
            <h2>${a.title}</h2>
            <img height="100" src="${a.content}" />
          </div>
          `)
        });
     }
  },

  error: function(err){
     // Afficher le message d'erreur de requête dans la console
     console.log(err)
  }
})