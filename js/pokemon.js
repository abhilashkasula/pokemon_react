const Pokemon = (props) =>
  React.createElement(
    'div',
    null,
    React.createElement('p', null, props.name),
    React.createElement('img', {src: props.imageUrl})
  );

const bulbasaur = React.createElement(Pokemon, {
  name: 'bulbasaur',
  imageUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
});

const title = React.createElement('h1', null, 'Pokemon Gallery');
const mainContainer = document.querySelector('#main-container');
ReactDOM.render(
  React.createElement('div', null, title, balbasaur),
  mainContainer
);
