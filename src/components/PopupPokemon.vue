<template>
  <div :class="eMobile ? 'detail-mobile' : 'detail'">
    <div :class="eMobile ? 'detail-view-mobile' : 'detail-view'" v-if="show">
      <div v-if="!eMobile" class="image">
        <img :src="pokemon.images.small" alt="">
      </div>
      <div v-if="pokemon && !eMobile" class="data">
        <h2>{{ pokemon.name }}</h2>
        <h3>Ataques</h3>
        <div class="types">
          <div class="weaknesses" 
            v-for="(ataques, index) in pokemon.attacks"
            :key="'ataques' + index">
            {{ ataques.name }}
          </div>
        </div>
        <h3 v-if="pokemon.resistances">Resistências</h3>
        <div v-if="pokemon.resistances" class="types">
          <div class="type" 
            v-for="(resistencia, index) in pokemon.resistances"
            :key="'resistencia' + index">
            {{ resistencia.type }}
          </div>
        </div>
        <h3>Fraquezas</h3>
        <div class="types">
          <div class="weaknesses" 
            v-for="(fraquezas, index) in pokemon.weaknesses"
            :key="'fraquezas' + index">
            {{ fraquezas.type }}
          </div>
        </div>
        <h3>Tipos de Pokemon</h3>
        <div class="types">
          <div class="type" 
            v-for="(value, index) in pokemon.types"
            :key="'value'+index">
            {{ value }}
          </div>
        </div>
        <h3>Abilidades</h3>
        <div class="abilities">
          <div class="ability" 
            v-for="(abilidades, index) in pokemon.abilities"
            :key="'abilidades'+index">
            {{ abilidades.name }}
          </div>
        </div>
      </div>
      <div v-if="pokemon && eMobile" class="data-mobile">
        <h2>{{ pokemon.name }}</h2>
        <h3>Ataques</h3>
        <div class="types">
          <div class="weaknesses" 
            v-for="(ataques, index) in pokemon.attacks"
            :key="'ataques' + index">
            {{ ataques.name }}
          </div>
        </div>
        <h3 v-if="pokemon.resistances">Resistências</h3>
        <div v-if="pokemon.resistances" class="types">
          <div class="type" 
            v-for="(resistencia, index) in pokemon.resistances"
            :key="'resistencia' + index">
            {{ resistencia.type }}
          </div>
        </div>
        <h3>Fraquezas</h3>
        <div class="types">
          <div class="weaknesses" 
            v-for="(fraquezas, index) in pokemon.weaknesses"
            :key="'fraquezas' + index">
            {{ fraquezas.type }}
          </div>
        </div>
        <h3>Tipos de Pokemon</h3>
        <div class="types">
          <div class="type" 
            v-for="(value, index) in pokemon.types"
            :key="'value'+index">
            {{ value }}
          </div>
        </div>
        <h3>Abilidades</h3>
        <div class="abilities">
          <div class="ability" 
            v-for="(abilidades, index) in pokemon.abilities"
            :key="'abilidades'+index">
            {{ abilidades.name }}
          </div>
        </div>
      </div>
      <button class="close" @click="fecharPopup()">Fechar</button>
    </div>
    <i v-else class="fas fa-spinner fa-spin"></i>
  </div>
</template>

<script lang="ts">
import { Pokemon } from "@/models/models";
import UtilsModels from "@/models/utilsModels";
import store from "@/store";
import { Options, Vue } from "vue-class-component";
import { isMobile } from 'mobile-device-detect';

@Options({
  name: 'popup-details-pokemon'
})
export default class PopupDetailsPokemon extends Vue {
  show = false as boolean

  eMobile = false

  pokemon: Pokemon = UtilsModels.getEmptyPokemon()

  created () :void {
    console.log(isMobile, 'isMobile')
    if (isMobile) {
      this.eMobile = true
    }
    this.pokemon = store.getters.getPokemon
    console.log(this.pokemon)
    this.show = true
  }

  fecharPopup () :void {
    this.show = false
    this.$emit('fechar-popup', false)
  }
}
</script>

<style lang="scss" scoped>
.detail {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: fixed;
  top: 0;
  left: 0;
  padding: 30px 10px 5px 10px;
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  background: rgba($color: #000000, $alpha: .7);
  .detail-view {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 100%;
    max-width: 900px;
    padding: 50px 0 0;
    background-color: #f2f2f2;
    border-radius: 5px;
    box-shadow: 0 15px 30px rgba(0,0,0,.2),
                0 10px 10px rgba(0,0,0,.2);
  
    .image {
      display: flex;
      left: 2%;
      position: absolute;
      top: 80px;
      width: 250px;
      height: 350px;
      background-color: #FFE557;
      overflow: hidden;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);
    }
    h2 {
      width: 90%;
      max-width: 400px;
      align-items: center;
      text-transform: capitalize;
    }
    .data {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-left: 80%;
      margin-bottom: 40px;
      .property {
        width: 90%;
        max-width: 400px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 10px;
        .left { float: left; }
        .right { float: right; }
      }
      h3 {
        width: 90%;
        max-width: 400px;
        border-bottom: 1px solid #ccc;
      }
      .types, .abilities {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        width: 90%;
        max-width: 400px;
        .type, .ability, .weaknesses {
          margin: 0 10px 10px 0;
          padding: 5px 10px;
          border-radius: 20px;
          color: #fff;
          font-size: 1rem;
          letter-spacing: 2px;
          text-transform: capitalize;
          word-wrap: none;
          word-break: keep-all;
        }
        .type { background-color: #0A2E50; }
        .ability { background-color: #0A2E50; }
        .weaknesses { background-color: #C73015; }
      }
    }
    .close {
      outline: none;
      border: none;
      border-radius: 5px;
      background-color: #333;
      color: #efefef;
      padding: 10px 20px;
      margin-bottom: 20px;
      font-size: 1.2rem;
      cursor: pointer;
    }
  }
  i {
    font-size: 2rem;
    color: #efefef;
  }
}
.detail-mobile {
  display: flex;
  justify-content: center;
  align-items: flex;
  position: fixed;
  top: 0;
  left: 0;
  padding: 15px 10px 5px 10px;
  width: calc(100% - 20px);
  height: calc(100vh - 20px);
  background: rgba($color: #000000, $alpha: .7);
  .detail-view-mobile {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    width: 100%;
    background-color: #f2f2f2;
    border-radius: 5px;
    box-shadow: 0 15px 30px rgba(0,0,0,.2),
                0 10px 10px rgba(0,0,0,.2);
  
    .image {
      display: flex;
      left: 2%;
      position: absolute;
      top: 80px;
      width: 250px;
      height: 350px;
      background-color: #FFE557;
      overflow: hidden;
      box-shadow: 0 15px 30px rgba(0,0,0,.2),
                  0 10px 10px rgba(0,0,0,.2);
    }
    h2 {
      width: 100%;
      max-width: 400px;
      align-items: center;
      text-transform: capitalize;
    }
    .data-mobile {
      display: flex;
      flex-direction: column;
      width: 100%;
      margin-bottom: 40px;
      .property {
        width: 100%;
        max-width: 400px;
        border-bottom: 1px solid #ccc;
        margin-bottom: 10px;
        .left { float: left; }
        .right { float: right; }
      }
      h3 {
        width: 100%;
        max-width: 400px;
        border-bottom: 1px solid #ccc;
      }
      .types, .abilities {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        width: 100%;
        max-width: 400px;
        .type, .ability, .weaknesses {
          margin: 0 10px 10px 0;
          padding: 5px 10px;
          border-radius: 20px;
          color: #fff;
          font-size: 1rem;
          letter-spacing: 2px;
          text-transform: capitalize;
          word-wrap: none;
          word-break: keep-all;
        }
        .type { background-color: #0A2E50; }
        .ability { background-color: #0A2E50; }
        .weaknesses { background-color: #C73015; }
      }
    }
    .close {
      outline: none;
      border: none;
      border-radius: 5px;
      background-color: #333;
      color: #efefef;
      padding: 10px 20px;
      margin-bottom: 20px;
      font-size: 1.2rem;
      cursor: pointer;
    }
  }
  i {
    font-size: 2rem;
    color: #efefef;
  }
}
</style>