const PokemonDetails = (props) =>
  React.createElement(
    'div',
    {className: 'pokemon'},
    React.createElement('p', {className: 'pokemon-name'}, props.name),
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
      : React.createElement('p', {className: 'pokemon'}, 'Loading...');
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
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.setState(({numberToLoad}) => ({numberToLoad: numberToLoad + 5}));
  }

  render() {
    const ids = new Array(this.state.numberToLoad)
      .fill(1)
      .map((_, index) => index + 1);

    const pokemons = ids.map((pokemonId) =>
      React.createElement(Pokemon, {id: pokemonId, key: pokemonId})
    );

    const gallery = React.createElement(
      'div',
      {className: 'pokemons'},
      pokemons
    );

    return React.createElement(
      'div',
      null,
      gallery,
      React.createElement('button', {onClick: this.loadMore}, 'Load more')
    );
  }
}

const pokemons = React.createElement(Pokemons);
const mainContainer = document.querySelector('#main-container');
ReactDOM.render(pokemons, mainContainer);
