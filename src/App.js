import React from 'react';
import Pokemons from './pokemons';
import * as data from './pokemon.json';

const App = () => <Pokemons pokemons={data.default} />;

export default App;
