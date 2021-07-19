import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Pokedex from './Pokedex';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1> My Pokedex </h1>
        <Route exact path="/" component={ Pokedex } />
      </div>
    </BrowserRouter>
  );
}

export default App;