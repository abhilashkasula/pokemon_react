import React from 'react';
import Pokemon from './pokemon';
import './pokemons.css';

const Pokemons = (props) => {
  const pokemons = props.pokemons.map((poke) => (
    <Pokemon key={poke.name} name={poke.name} imgUrl={poke.img} />
  ));

  return <div className='pokemons'>{pokemons}</div>;
};

export default Pokemons;
