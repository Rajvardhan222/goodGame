export async function getPokemonLists() {
  try {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon");
    return await response.json();
  } catch (error) {
    console.error(error);
  }
}
