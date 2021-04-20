import { Pokemon } from "@/models/models";
import UtilsModels from "@/models/UtilsModels";
import { createStore } from "vuex";

// enum TypesMutations {
//   VIEW_POKEMON = 'VIEW_POKEMON'
// }

export default createStore({
  getters: {
    getPokemon (state) {
      return state.pokemons
    }
  },
  state: {
    pokemons: UtilsModels.getEmptyPokemon()
  },
  mutations: {
    mudarStatePokemon (state, pokemon: Pokemon) {
      state.pokemons = pokemon
    },
  },
  actions: {
    changeStatePokemon (context, pokemon: Pokemon) {
      context.commit('mudarStatePokemon', pokemon)
    }
  },
  modules: {},
})
