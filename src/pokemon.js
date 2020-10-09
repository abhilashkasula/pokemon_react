import React from 'react';

const Pokemon = (props) => {
  return (
    <div>
      <p>{props.name}</p>
      <img src={props.imgUrl}></img>
    </div>
  );
};

export default Pokemon;
