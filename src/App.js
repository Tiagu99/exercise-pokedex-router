import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import Pokedex from './pages/Pokedex';
import PokemonDetails from './pages/PokemonDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> My Pokedex </h1>
          <Link to="/">Home</Link>
        <Switch>
          <Route path="/details/:id" component={ PokemonDetails } />
          <Route exact path="/" component={ Pokedex } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;