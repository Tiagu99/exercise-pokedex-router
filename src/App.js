import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Pokedex from './pages/Pokedex';
import PokemonDetails from './pages/PokemonDetails';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/"><span>Home</span></Link>
        <Link to="/about"><span>About</span></Link>
        <Switch>
          <Route path="/details/:id" component={ PokemonDetails } />
          <Route path="/about" component={ About } />
          <Route exact path="/" component={ Pokedex } />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;