import React, {Component} from 'react';
import api from './api';
import './App.css';

class App extends Component{

  state = {
    allPokemons: [],
    pokemonData: [],
  }

  async componentDidMount() {
    for (let i=0; i<=19; i+=20){
      const response = await api.get(`/?offset=${i}&limit=20"`);
      const allPokemons = response.data.results;
      for (let j=0; j<allPokemons.length; j++){
        const responseTwo = await api.get(`/${j+1}`);
        const pokemonData = [allPokemons.length];
        pokemonData[j] = responseTwo.data;
        this.setState({ allPokemons: response.data.results, pokemonData: [responseTwo.data] });
      } 
    }
    //for (let i=0; i<20; i++){
      /*const id = String(this.state.allPokemons[1].url);
      var minhaRegex = /[^.]+/;
      var idFim = minhaRegex.exec(id)[0].substr(33);
      console.log("idFim: " + idFim);
      const responseNext = await api.get(`/${1}`); // como variar sendo que esse é um indice do map?
      this.setState({ pokemonData: responseNext.data });*/
    //}
  }

  render() {

    const { allPokemons, 
      pokemonData,
    } = this.state;

    return (
      <div>
        {allPokemons.map((pokemon, index)=> (
          <li key={index}>
            <h1>Key id: {index}</h1>
            <h2>
              <strong>Nome: </strong>
              {pokemon.name}
            </h2>
            <p>Url: {pokemon.url}</p>
            <h3>
              <p>Order: 
                {pokemonData[0].order}
                {console.log(pokemonData[index])}
              </p>
            </h3>
          </li>
        ))}
      </div>
    );
  };
};
export default App;
