const PokemonDetails = (props) =>
  React.createElement(
    'div',
    null,
    React.createElement('p', null, props.name),
    React.createElement('img', {src: props.imageUrl})
  );

class Pokemon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {loaded: false, pokemonDetails: null};
  }

  render() {
    return this.state.loaded
      ? React.createElement(PokemonDetails, this.state.pokemonDetails)
      : React.createElement('p', null, 'Loading...');
  }

  componentDidMount() {
    fetch(`https://pokeapi.co/api/v2/pokemon/${this.props.id}`)
      .then((res) => res.json())
      .then(({name, sprites}) => {
        this.setState(() => ({
          loaded: true,
          pokemonDetails: {name, imageUrl: sprites.front_default},
        }));
      });
  }
}

class Pokemons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {numberToLoad: 10};
  }

  render() {
    const ids = new Array(this.state.numberToLoad)
      .fill(1)
      .map((_, index) => index + 1);

    const pokemons = ids.map((pokemonId) =>
      React.createElement(Pokemon, {id: pokemonId, key: pokemonId})
    );

    return React.createElement('div', null, pokemons);
  }
}

const pokemons = React.createElement(Pokemons);

const title = React.createElement('h1', null, 'Pokemon Gallery');
const mainContainer = document.querySelector('#main-container');
ReactDOM.render(
  React.createElement('div', null, title, pokemons),
  mainContainer
);
