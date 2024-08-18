import React, { FunctionComponent, useState } from 'react';
import Pokemon from '../models/pokemon';
import './pokemon-card.css';
import formatDate from '../helpers/format-date';
import formatType from '../helpers/format-type';
import { useHistory } from 'react-router-dom'; //permet de faire des redirections

type Props = {
  pokemon: Pokemon,
  borderColor?: string
};

const PokemonCard: FunctionComponent<Props> = ({pokemon, borderColor="#009688"}) => {

  const [color, setColor] = useState<string>();
  const history = useHistory();

  function showBorder() {
    setColor(borderColor);
  }

  function hideColor() {
    setColor("#f5f5f5"); // remettre la bordure en gris
  }

  const goToPokemon = (id: number) => {  // accéder au détail d'un pokémon
    history.push(`/pokemons/${id}`);
  }



  return (
    <div className="col s6 m4" onClick={() => goToPokemon(pokemon.id)} onMouseEnter={showBorder} onMouseLeave={hideColor}>
      <div className="card horizontal" style={{borderColor: color}}>
        <div className="card-image">
          <img src={pokemon.picture} alt={pokemon.name}/>
        </div>
        <div className="card-stacked">
          <div className="card-content">
            <p>{pokemon.name}</p>
            <p><small>{formatDate(pokemon.created)}</small></p>

            {pokemon.types.map(type =>
            <span key={type} className={formatType(type)}>{type}</span>
            )}

          </div>
        </div>
      </div>
    </div>
  );
}

export default PokemonCard;
