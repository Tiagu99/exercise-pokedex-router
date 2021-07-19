import React from 'react';
import pokemons from '../data';

class PokemonDetails extends React.Component {
  constructor() {
    super();

    this.state = {
      loading: true,
    }

    this.fetchPokemon = this.fetchPokemon.bind(this);
    this.detailsPage = this.detailsPage.bind(this);
  }

  fetchPokemon() {
    const { id } = this.props.match.params;
    const pokemon = pokemons.find((pokemon) => pokemon.id == id);
    this.setState({
      pokemon,
      loading: false,
    })
  }

  componentDidMount() {
    this.fetchPokemon();
  }

  detailsPage() {
    const { name, type, averageWeight, image, moreInfo } = this.state.pokemon;
    return (
      <div className="pokemon">
        <div>
          <p> {name} </p>
          <p> {type} </p>
          <p> {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}</p>
          <p> {moreInfo} </p>
      </div>
      <img src={image} alt={`${name} sprite`} />
    </div>
    );
  }

  render() {
    const { loading } = this.state;
    return (
       loading 
      ? <span>loading...</span>
      : this.detailsPage()
    );
  }
}

export default PokemonDetails;