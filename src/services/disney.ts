import { Character } from '@/types/Character';
import { PageData } from '@/types/PageData';

const searchForCharacter = async (
  query: string,
  page: number = 1
): Promise<{ pageData: PageData; characters: Character[] }> => {
  // add error handling
  const response = await fetch(`https://api.disneyapi.dev/character?name=${query}`);
  const data = await response.json();
  return { pageData: { page, ...data.info }, characters: data.data };
};

const getOneCharacter = async (id: number): Promise<Character> => {
  // add error handling
  const response = await fetch(`https://api.disneyapi.dev/character/${id}`);
  const data = await response.json();
  return data.data;
};

export { searchForCharacter, getOneCharacter };
