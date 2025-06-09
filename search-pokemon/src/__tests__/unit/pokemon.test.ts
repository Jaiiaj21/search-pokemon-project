import { Pokemon } from "@/types/pokemon";
import { bulbasaurMock, charmanderMock, squirtleMock } from '@/__mocks__/pokemonMocks';

describe('Pokemon Type Assertions', () => {

  test('Bulbasaur should be a Grass type', () => {
    const pokemon: Pokemon = bulbasaurMock;

    expect(pokemon.types).toContain('Grass');
    expect(pokemon.types).not.toContain('Fire');
    expect(pokemon.types).not.toContain('Water');
  });

  test('Charmander should be a Fire type', () => {
    const pokemon: Pokemon = charmanderMock;

    expect(pokemon.types).toContain('Fire');
    expect(pokemon.types).not.toContain('Grass');
    expect(pokemon.types).not.toContain('Water');
  });

  test('Squirtle should be a Water type', () => {
    const pokemon: Pokemon = squirtleMock;

    expect(pokemon.types).toContain('Water');
    expect(pokemon.types).not.toContain('Grass');
    expect(pokemon.types).not.toContain('Fire');
  });

  test('Bulbasaur should have Poison as one of its types', () => {
    expect(bulbasaurMock.types).toContain('Poison');
  });

  test('Charmander should have exactly one type: Fire', () => {
    expect(charmanderMock.types).toEqual(['Fire']);
    expect(charmanderMock.types).toHaveLength(1);
  });

  test('Squirtle should have exactly one type: Water', () => {
    expect(squirtleMock.types).toEqual(['Water']);
    expect(squirtleMock.types).toHaveLength(1);
  });
});
