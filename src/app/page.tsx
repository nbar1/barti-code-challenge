import CharacterGrid from '@/components/CharacterGrid';
import { getOneCharacter } from '@/services/disney';

export default async function Home() {
  const homepageCharacters = [3347, 3389, 156, 25, 2099, 256, 3771, 4994];
  const characters = await Promise.all(homepageCharacters.map((id) => getOneCharacter(id)));

  return (
    <>
      <CharacterGrid characters={characters} />
    </>
  );
}
