import React, {Component} from 'react';
import api from './api';
import './App.css';

class App extends Component{

  state = {
    pokemons: [],
  }

  async componentDidMount() {
    const response = await api.get(`/?offset=0&limit=20"`);
    this.setState({ pokemons: response.data.results });
  }

  render() {

    const { pokemons } = this.state;

    return (
      <div>
        {pokemons.map(pokemon => (
          <li>
            <h2>
              <strong>Nome: </strong>
              {pokemon.name}
            </h2>
            <p>{pokemon.url}</p>
          </li>
        ))}
      </div>
    );
  };
};
export default App;
