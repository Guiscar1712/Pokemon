import { Vue } from "vue-class-component";
import { AbilidadesPokemon, AtaquesPokemon, Pokemon, Resistencias, Weaknesses } from "./models";

export default class UtilsModels extends Vue {
  static getEmptyPokemon () :Pokemon {
    return {
        abilities: [] as Array<AbilidadesPokemon>,
        artist: '',
        attacks: [] as Array<AtaquesPokemon>,
        convertedRetreatCost: 0,
        evolvesFrom: '',
        hp: '',
        id: '',
        nationalPokedexNumbers: [] as Array<number>,
        rarity: '',
        resistances: [] as Array<Resistencias>,
        retreatCost: [] as Array<string>,
        set: {
            id: '',
            images: {
                logo: '',
                symbol: ''
            },
            name: '',
            printedTotal: 0,
            ptcgoCode: '',
            releaseDate: '',
            series: '',
            total: 0,
            updatedAt: '',
        },
        subtypes: [] as Array<string>,
        supertype: '',
        types: [] as Array<string>,
        weaknesses: [] as Array<Weaknesses>
    } as Pokemon
  }
}