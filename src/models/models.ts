export interface AtaquesPokemon {
  convertedEnergyCost?: number
  cost: Array<string>
  damage: string
  name: string
  text: string
}

export interface AbilidadesPokemon {
  name: string
  text: string
  type: string
}

export interface Resistencias {
  type: string
  value: string
}

export interface Weaknesses {
  type: string
  value: string
}

export interface Set {
  id: string
  images: Images
  name: string
  printedTotal: number
  ptcgoCode: string
  releaseDate: string
  series: string
  total: number
  updatedAt: string
}

export interface Images {
  logo: string
  symbol: string
}

export interface Pokemon {
  abilities: Array<AbilidadesPokemon>
  artist: string
  attacks: Array<AtaquesPokemon>
  convertedRetreatCost: number
  evolvesFrom: string
  hp: string
  id: string
  nationalPokedexNumbers: Array<number>
  rarity: string
  resistances: Array<Resistencias>
  retreatCost: Array<string>
  set: Set
  subtypes: Array<string>
  supertype: string
  types: Array<string>
  weaknesses: Array<Weaknesses>
}