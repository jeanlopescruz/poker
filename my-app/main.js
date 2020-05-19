axios.get('https://pokeapi.co/api/v2/pokemon')
    .then(function(response){
        let pokemons;
        pokemons.forEach(el => {
            console.log(response.data.results[el]);
        });
    })
    .catch(function(error){
        console.warn(error);
    });