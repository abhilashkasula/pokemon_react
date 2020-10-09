import React from 'react';
import './pokemon.css';

const Pokemon = (props) => {
  return (
    <div className="pokemon">
      <p>{props.name}</p>
      <img src={props.imgUrl} alt={props.name}></img>
    </div>
  );
};

export default Pokemon;
