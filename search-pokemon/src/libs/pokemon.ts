export type PokemonElement = keyof typeof pokemonElementColor;

export const pokemonElementColor = {
  "Normal": "#aaaa99",
  "Fire": "#ff4422",
  "Water": "#3399ff",
  "Electric": "#ffcc33",
  "Grass": "#77cc55",
  "Ice": "#66ccff",
  "Fighting": "#ba5544",
  "Poison": "#aa5599",
  "Ground": "#ddbb55",
  "Flying": "#8899ff",
  "Psychic": "#ff5599",
  "Bug": "#aabb22",
  "Rock": "#bbaa66",
  "Ghost": "#6666bb",
  "Dragon": "#7766ee",
  "Dark": "#666666",
  "Steel": "#aaaabb",
  "Fairy": "#ee99ee"
} as const;
