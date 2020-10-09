import React from 'react';
import Pokemons from './pokemons';
import * as data from './pokemon.json';
import './gallery.css';

const Gallery = () => {
  return (
    <div className="container">
      <h1 className="app-heading">Pokemon Gallery</h1>
      <Pokemons pokemons={data.default} />;
    </div>
  );
};

export default Gallery;
