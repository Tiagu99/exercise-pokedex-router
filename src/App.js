import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import Pokedex from './Pokedex';
import PokemonDetails from './PokemonDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> My Pokedex </h1>
        <Link to="/">Home</Link>
        <Route exact path="/" component={ Pokedex } />
        <Route path="/details/:id" component={ PokemonDetails } />
      </div>
    </BrowserRouter>
  );
}

export default App;