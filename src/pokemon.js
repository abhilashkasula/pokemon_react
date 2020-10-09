import React from 'react';

const Pokemon = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <img src={props.imgUrl} alt={props.name}></img>
    </div>
  );
};

export default Pokemon;
