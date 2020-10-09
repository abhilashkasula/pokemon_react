import React from 'react';
import Pokemons from './pokemons';
import './filteredPokemons.css';

class FilteredPokemons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {filter: ''};
    this.onChange = (e) => this.handleChange(e.target.value);
  }

  handleChange(filter) {
    this.setState(() => ({filter}));
  }

  filter() {
    return this.props.pokemons.filter((poke) =>
      poke.name.includes(this.state.filter)
    );
  }

  render() {
    return (
      <div className="filter-pokemons">
        <input
          value={this.state.filter}
          onChange={this.onChange}
          className="search"
          placeholder="filter"
        />
        <Pokemons pokemons={this.filter()} />
      </div>
    );
  }
}

export default FilteredPokemons;
