import React from 'react';
import * as data from './pokemon.json';
import FilteredPokemons from './filteredPokemons';
import './App.css'

const App = () => (
  <div className="container">
    <h1 className="app-heading">Pokemon Gallery</h1>
    <FilteredPokemons pokemons={data.default} />
  </div>
);

export default App;
