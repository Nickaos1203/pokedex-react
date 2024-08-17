import React, {FunctionComponent, useState, useEffect } from 'react';
import Pokemon from './models/pokemon';
import POKEMONS from './models/mock-pokemon';

const App: FunctionComponent = () => {
 const [name, setName] = useState<String>('React'); // <String> => typage des données sauvegardé dans le useState
 const [pokemons, setPokemons] = useState<Pokemon[]>([]);

 useEffect(() => {
  setPokemons(POKEMONS)}, []);

 return (
  <div>
    <h1 className="center">Pokédex</h1>
    <p>Il y a actuellement {pokemons.length} pokémons dans le Pokédex.</p>


  <div className="row">
  { pokemons.map((pokemon) => (
  <div className="col s6 m4" key={`${pokemon.name}-${pokemon.id}`}>
    <div className="card">
      <div className="card-image">
        <img src={pokemon.picture}/>
        <span className="card-title">{pokemon.name}</span>
        <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">+</i></a>
      </div>
      <div className="card-content">
        <p><b>{pokemon.name.toUpperCase()}</b></p>
        <p>ID : {pokemon.id}</p>
        <p>HP : {pokemon.hp}</p>
        <p>CP : {pokemon.cp}</p>
        <p>TYPE(S) : {pokemon.types}</p>
        <p>Created : {pokemon.created.toString()}</p>
      </div>
    </div>
  </div>
    ))
  }
  </div>


  </div>

 )
}

export default App;
