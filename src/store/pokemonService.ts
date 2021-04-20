import { Pokemon } from "@/models/models"
import Axios from "axios"
class PokemonService {
  async getListPokemon () :Promise<Array<Pokemon>> {
    let listPokemons: Array<Pokemon> = []
    await Axios.get('https://api.pokemontcg.io/v2/cards').then(dados => {
        listPokemons = dados.data.data
    })
    .catch((error: any) => {
      console.log(error)
    })
    return listPokemons
  }

  async getPokemonByName (name: string) :Promise<Array<Pokemon>> {
    let listPokemons: Array<Pokemon> = []
    await Axios.get(`https://api.pokemontcg.io/v2/cards?q=name:${name}*`).then(dados => {
      listPokemons = dados.data.data
      console.log(listPokemons)
    })
    .catch((error: any) => {
      console.log(error)
    })
    return listPokemons
  }
}

const PokemonServiceInstance: PokemonService = new PokemonService()

export { PokemonServiceInstance }
