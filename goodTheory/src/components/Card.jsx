import React, { useEffect, useState } from "react";
import { getDetailsOfPokemon } from "../api/getPokemonDetails";

function Card({ pokemonDetails }) {
  let [data, setData] = useState(null);
  console.log(pokemonDetails);

  useEffect(() => {
    getDetailsOfPokemon(pokemonDetails.url).then((data) => {
      setData(data);
    });
  }, [pokemonDetails]);
  return (
    data && (
      <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src={data.sprites.front_default}
          alt={data.name}
        />
        <div className="p-6">
          <h1 className="text-xl font-semibold text-gray-800 capitalize">
            {data.name}
          </h1>
          <p className="text-gray-600">
            Base Experience: {data.base_experience}
          </p>
          <p className="text-gray-600">Height: {data.height}</p>
          <p className="text-gray-600">Weight: {data.weight}</p>
          <div className="mt-4">
            <h2 className="text-lg font-medium text-gray-700">Stats</h2>
            <ul>
              {data.stats.map((stat) => (
                <li key={stat.stat.name}>
                  {stat.stat.name}: {stat.base_stat}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <h2 className="text-lg font-medium text-gray-700">Types</h2>
            <ul>
              {data.types.map((type) => (
                <li key={type.slot}>{type.type.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  );
}

export default Card;
