export interface Pokemon {
  id: string;
  name: string;
  number: string;
  image: string;
  classification: string;
  types: string[];
  resistant: string[];
  weaknesses: string[];
  fleeRate: number;
  maxCP: number;
  maxHP: number;
  attacks: Attacks;
  weight: {
    minimum: string;
    maximum: string;
  };
  height: {
    minimum: string;
    maximum: string;
  };
  evolutions?: Evolution[];
  evolutionRequirements?: EvolutionRequirement;
}

export interface Attack {
  name: string;
  type: string;
  damage: number;
}

export interface Attacks {
  fast: Attack[];
  special: Attack[];
}

export interface EvolutionRequirement {
  amount: number;
  name: string;
}

export interface Evolution {
  id: string;
  number: string;
  name: string;
  image: string;
  types: string[];
}

export interface PokemonQueryResponse {
  pokemon: Pokemon;
}
