import React from 'react';

class About extends React.Component {
  render() {
    return(
      <div>
        <h1>Pokedex</h1>
        <div className="pokemon">
          <div>
            <p>The Pokédex (Japanese: ポケモン図鑑 illustrated Pokémon encyclopedia) is a digital encyclopedia created by Professor Oak as an invaluable tool to Trainers in the Pokémon world. It gives information about all Pokémon in the world that are contained in its database, although it differs in how it acquires and presents information over the different media. However, they are also only given to a few Trainers at a time, generally to the ones that are felt to have exceptional potential and skill. Regional Pokédexes give information about Pokémon native to its particular region, while the National Pokédex records information about all known Pokémon.</p>
            <p>Pokédex entries typically describe a Pokémon in only two or three sentences. They may give background information on the habitat or activities of a Pokémon in the wild or other information on the Pokémon's history or anatomy. Pokédex entries also include height, weight, cry, footprint (prior to Generation VI), location, other forms, and a picture of the Pokémon.</p>
          </div>
          <div>
            <img src="https://cdn2.bulbagarden.net/upload/4/40/Pok%C3%A9dex_E.png" alt="Pokedex" />
            <img src="https://cdn2.bulbagarden.net/upload/7/70/Pok%C3%A9dex_RS.png" alt="Pokedex" />
          </div>
        </div>
      </div>
    );
  }
}

export default About;