import axios from 'axios';

export const getCharacterById = async (id: string) => {
  try {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/${id}`);
    return response.data;
  } catch {
    return null;
  }
};
