<template>
  <div class="home">
    <list-pokemon
      :urlImg="urlImg"
      :urlAPI="urlAPI"
      @setPokemonUrl="setPokemonUrl" 
    />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import ListPokemon from "@/components/ListPokemon.vue"; // @ is an alias to /src

@Options({
  components: {
    ListPokemon,
  },
})
export default class Home extends Vue {
}
</script>

<style lang="scss" scoped>
.home {
  width: 100%;
}
</style>
