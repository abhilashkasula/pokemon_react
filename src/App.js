import React from 'react';
import Pokemons from './pokemons';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

const App = () => {
  const pokemon = [
    {
      name: 'bulbasaur',
      img:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    },
    {
      name: 'Ivysaur',
      img:
        'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png',
    },
  ];

  // const pokemons = pokemon.map((poke) => (
  //   <Pokemon key={poke.name} name={poke.name} imgUrl={poke.img} />
  // ));

  return <Pokemons pokemons={pokemon} />;
};

export default App;
