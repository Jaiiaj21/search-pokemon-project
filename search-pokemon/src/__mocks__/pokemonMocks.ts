import { Pokemon } from "@/types/pokemon";

export const bulbasaurMock: Pokemon = {
  id: '001',
  name: 'Bulbasaur',
  number: '001',
  image: 'https://img.pokemondb.net/artwork/bulbasaur.jpg',
  classification: 'Seed Pokémon',
  types: ['Grass', 'Poison'],
  resistant: ['Water', 'Electric', 'Grass', 'Fighting', 'Fairy'],
  weaknesses: ['Fire', 'Ice', 'Flying', 'Psychic'],
  fleeRate: 0.05,
  maxCP: 955,
  maxHP: 1071,
  attacks: {
    fast: [
      { name: 'Tackle', type: 'Normal', damage: 12 },
      { name: 'Vine Whip', type: 'Grass', damage: 7 },
    ],
    special: [
      { name: 'Power Whip', type: 'Grass', damage: 70 },
      { name: 'Seed Bomb', type: 'Grass', damage: 40 },
      { name: 'Sludge Bomb', type: 'Poison', damage: 55 },
    ],
  },
  weight: { minimum: '6.04kg', maximum: '7.36kg' },
  height: { minimum: '0.61m', maximum: '0.79m' },
  evolutions: [
    { id: '002', number: '002', name: 'Ivysaur', image: 'https://img.pokemondb.net/artwork/ivysaur.jpg', types: ['Grass', 'Poison'] },
  ],
  evolutionRequirements: { amount: 25, name: 'Bulbasaur candies' },
};

export const charmanderMock: Pokemon = {
  id: '004',
  name: 'Charmander',
  number: '004',
  image: 'https://img.pokemondb.net/artwork/charmander.jpg',
  classification: 'Lizard Pokémon',
  types: ['Fire'],
  resistant: ['Fire', 'Grass', 'Ice', 'Bug', 'Steel', 'Fairy'],
  weaknesses: ['Water', 'Ground', 'Rock'],
  fleeRate: 0.05,
  maxCP: 843,
  maxHP: 980,
  attacks: {
    fast: [
      { name: 'Ember', type: 'Fire', damage: 10 },
      { name: 'Scratch', type: 'Normal', damage: 6 },
    ],
    special: [
      { name: 'Flame Burst', type: 'Fire', damage: 30 },
      { name: 'Flamethrower', type: 'Fire', damage: 55 },
      { name: 'Fire Punch', type: 'Fire', damage: 40 },
    ],
  },
  weight: { minimum: '7.4kg', maximum: '9.0kg' },
  height: { minimum: '0.53m', maximum: '0.68m' },
  evolutions: [
    { id: '005', number: '005', name: 'Charmeleon', image: 'https://img.pokemondb.net/artwork/charmeleon.jpg', types: ['Fire'] },
  ],
  evolutionRequirements: { amount: 25, name: 'Charmander candies' },
};

export const squirtleMock: Pokemon = {
  id: '007',
  name: 'Squirtle',
  number: '007',
  image: 'https://img.pokemondb.net/artwork/squirtle.jpg',
  classification: 'Tiny Turtle Pokémon',
  types: ['Water'],
  resistant: ['Fire', 'Water', 'Ice', 'Steel'],
  weaknesses: ['Electric', 'Grass'],
  fleeRate: 0.05,
  maxCP: 891,
  maxHP: 1008,
  attacks: {
    fast: [
      { name: 'Bubble', type: 'Water', damage: 25 },
      { name: 'Tackle', type: 'Normal', damage: 12 },
    ],
    special: [
      { name: 'Aqua Jet', type: 'Water', damage: 25 },
      { name: 'Hydro Pump', type: 'Water', damage: 90 },
      { name: 'Water Pulse', type: 'Water', damage: 35 },
    ],
  },
  weight: { minimum: '7.6kg', maximum: '9.3kg' },
  height: { minimum: '0.44m', maximum: '0.56m' },
  evolutions: [
    { id: '008', number: '008', name: 'Wartortle', image: 'https://img.pokemondb.net/artwork/wartortle.jpg', types: ['Water'] },
  ],
  evolutionRequirements: { amount: 25, name: 'Squirtle candies' },
};
