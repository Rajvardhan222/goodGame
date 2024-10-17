export async function getDetailsOfPokemon(url) {
  try {
    let data = await fetch(url);
    let response = await data.json();
    return response;
  } catch (error) {
    console.error(error);
  }
}
