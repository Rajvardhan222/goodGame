import { useEffect, useState } from "react";
import Card from "./components/Card";
import { getPokemonLists } from "./api/getPokimonlists";
import Search from "./components/Search";

function App() {
  let [pokemonList, setPokemonList] = useState([]);
  let [id, setId] = useState(0);
  let [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    getPokemonLists().then((data) => {
      setPokemonList(data.results);
    });
  }, []);

  return (
    <>
     {
         (
          <div className="m-auto">

            <Search list={pokemonList} isSearching={isSearching} setIsSearching={setIsSearching}/>
          </div>
          )
      }
      {pokemonList.length > 0 && !isSearching && (

        <div className="mt-5">
          <Card pokemonDetails={pokemonList[id]} />
          <div className="flex flex-row justify-around mt-10">
            <button
className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${id === 0 ? 'cursor-not-allowed ' : ''}`}
              onClick={function decrementId() {
                if (id > 0) {
                  setId(id - 1);
                }
              }}
            >
              Prev
            </button>
            <button
            className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${id === pokemonList.length - 1 ? 'cursor-not-allowed ' : ''}`}
              onClick={function incrementId() {
                if (id < pokemonList.length - 1) {
                  setId(id + 1);
                }
              }}
            >
              Next
            </button>
          </div>
        </div>
      )}

     
    </>
  );
}

export default App;
