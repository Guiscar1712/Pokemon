import { shallowMount } from "@vue/test-utils";
import { PokemonServiceInstance } from 'src/store/pokemonService'

it("Request API", async () => {
  const msg = "Deu certo!";
  const requestAPI = await PokemonServiceInstance.getListPokemon()
  expect(requestAPI).toEqual(msg)
});
