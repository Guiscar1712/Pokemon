<template>
  <div v-if="empty">
    <button v-if="filtro" class="close" @click="getListPokemons()">Limpar Filtro</button>
    <div :class="eMobile ? 'search-mobile' : 'search'">
      <form @submit.prevent="buscarPokemon">
        <div style="margin-bottom: 10px;">Digite o nome do pokemon e aperte Enter</div>
        <input type="text" v-model="searchValue">
      </form>
      <i class="fas fa-search" @click="buscarPokemon"></i>
    </div>
    <div v-if="!eMobile" class="list">
      <article
        v-for="(pokemon, index) in listPokemons"
        :key="'poke' + index"
        @click="setPokemonUrl(pokemon)"
      >
        <h3>{{ pokemon.name }}</h3>
        <img :src="pokemon.images.small" style="height: 100%;" alt=""/>
      </article>
      <div v-if="showPopup">
        <popup-details-pokemon @fechar-popup="fecharPopup"></popup-details-pokemon>
      </div>
    </div>
    <div v-else class="carousel" style="max-height: 1000px">
      <div
        class="carousel-card fade"
      >
        <img :src="pokemon.images.small" style="height: 100%;" alt=""/>
        <a class="prev" @click="voltarPokemon()">&#10094;</a>
        <a class="next" @click="passarPokemon()">&#10095;</a>
        <a class="buttom-detalhes" @click="setPokemonUrl(pokemon)">Detalhes</a>
      </div>
      <div v-if="showPopup">
        <popup-details-pokemon @fechar-popup="fecharPopup"></popup-details-pokemon>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import { PokemonServiceInstance } from "@/store/pokemonService";
import PopupDetailsPokemon from "@/components/PopupPokemon.vue";
import { Pokemon } from "src/models/models";
import UtilsModels from '@/models/utilsModels'
import store from "@/store";
import { isMobile } from "mobile-device-detect";
@Options({
  name: "list-pokemon",
  components: {
    PopupDetailsPokemon
  }
})
export default class ListPokemon extends Vue {

  empty = false

  searchValue = ''

  indexPokemon = 0

  pokemon: Pokemon = UtilsModels.getEmptyPokemon()

  listPokemons: Array<Pokemon> = [];
  
  showPopup = false

  filtro = false

  eMobile = false

  nextUrl = ''

  async created(): Promise<void> {
    if (isMobile) {
      this.eMobile = true
    }
    await this.getListPokemons();
  }

  async getListPokemons(): Promise<void> {
    try {
      this.filtro = false
      this.listPokemons = await PokemonServiceInstance.getListPokemon();
      if (this.eMobile) {
        this.pokemon = this.listPokemons[this.indexPokemon]
      }
      this.empty = true
    } catch (error) {
      console.log(error);
    }
  }

  passarPokemon() {
    this.indexPokemon = this.indexPokemon + 1
    this.pokemon = this.listPokemons[this.indexPokemon]
  }

  voltarPokemon () {
    this.indexPokemon = this.indexPokemon - 1
    this.pokemon = this.listPokemons[this.indexPokemon]
  }

  async buscarPokemon () :Promise<void> {
    try {
      const list = await PokemonServiceInstance.getPokemonByName(this.searchValue);
      if (list && list.length > 0) {
        this.listPokemons = list
      }
      if (this.eMobile) {
        this.pokemon = this.listPokemons[this.indexPokemon]
      }
      this.filtro = true
    } catch (error) {
      console.log(error);
    }
  }

  setPokemonUrl(pokemon: Pokemon) {
    this.pokemon = pokemon
    store.commit('mudarStatePokemon', this.pokemon, {root: true})
    this.showPopup = true
  }

  fecharPopup () {
    this.showPopup = false
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.carousel {
  width: 100%;
}

.buttom-detalhes {
  cursor: pointer;
  font-size: 25px;
  bottom: 0;
  margin-bottom: 30px;
  opacity: .8;
  background: #f2f2f2;
  box-shadow: 0 15px 30px rgba(0,0,0,.2),
              0 10px 10px rgba(0,0,0,.2);
}

.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  margin-top: 25px;
  padding: 16px;
  color: black;
  font-size: 35px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
  user-select: none;
}

.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev {
  left: 0;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

.carousel-card {
  height: 500px;
  width: 100%;
  margin-bottom: 10%;
  text-align: center;
  text-transform: capitalize;
  border-radius: 5px;
  cursor: pointer;
  h3 {
    margin: 0;
  }
}

.list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 100px));
  grid-gap: 35px;
  margin-left: 4%;
  width: 100%;
  max-width: 700px;
  article {
    height: 350px;
    background-color: #FFE557;
    text-align: center;
    text-transform: capitalize;
    border-radius: 5px;
    cursor: pointer;
    box-shadow: 0 15px 30px rgba(0,0,0,.2),
                0 10px 10px rgba(0,0,0,.2);
    h3 {
      margin: 0;
    }
  }
}

.botao {
  cursor: pointer;
  box-shadow: 0 15px 30px rgba(0,0,0,.2),
              0 10px 10px rgba(0,0,0,.2);
}

.search {
  width: 100%;
  margin-left: 4%;
  margin-bottom: 1%;
  max-width: 510px;
  padding-bottom: 20px;
  input {
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 10px 40px 10px 10px;
    width: calc(100% - 50px);
    font-size: 1rem;
    background-color: #f2f2f2;
    box-shadow: 0 15px 30px rgba(0,0,0,.2),
                0 10px 10px rgba(0,0,0,.2);
  }
  i {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.25rem;
    color: #0A2E50;
    cursor: pointer;
  }
}
.search-mobile {
  position: relative;
  width: 100%;
  margin-left: 1%;
  margin-bottom: 2%;
  max-width: 510px;
  padding-bottom: 20px;
  input {
    border: none;
    outline: none;
    border-radius: 5px;
    padding: 10px 40px 10px 10px;
    width: calc(100% - 50px);
    font-size: 1rem;
    background-color: #f2f2f2;
    box-shadow: 0 15px 30px rgba(0,0,0,.2),
                0 10px 10px rgba(0,0,0,.2);
  }
  i {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 1.25rem;
    color: #0A2E50;
    cursor: pointer;
  }
}
</style>
