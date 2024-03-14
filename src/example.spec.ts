import fetch from 'node-fetch';

async function fetchCharacter(characterId: number): Promise<any> {
  try {
    // Realizar la solicitud a la API para obtener información del personaje con el ID dado
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${characterId}`,
    );

    // Verificar el estado de la respuesta
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }

    // Convertir la respuesta a formato JSON
    const characterData = await response.json();

    return characterData;
  } catch (error) {
    console.error('Error fetching character data:', error);
    throw error;
  }
}

describe('fetchCharacter', () => {
  it('should fetch data of a character from API', async () => {
    // ID del personaje que deseas obtener
    const characterId = 1; // Por ejemplo, obtenemos datos del primer personaje

    // Realizar la prueba de la función fetchCharacter
    const characterData = await fetchCharacter(characterId);

    // Verificar si se recuperaron los datos del personaje
    expect(characterData).toBeDefined();
    expect(characterData.id).toBe(characterId);
  });
});
