import type { Character } from '@/types/Character';
import CharacterCard from '../CharacterCard';
import './CharacterGrid.css';

const CharacterGrid = ({ characters }: { characters: Character[] }) => {
  if (!characters.length) return <div>No characters found</div>;

  return (
    <>
      <div className="character-grid">
        {characters.map((character) => (
          <CharacterCard key={character._id} character={character} />
        ))}
      </div>
    </>
  );
};

export default CharacterGrid;
