import type { Character } from '@/types/Character';
import './CharacterCard.css';
import Link from 'next/link';
import { getOneCharacter } from '@/services/disney';

const CharacterCard = async ({
  character,
  characterId,
}: {
  character?: Character;
  characterId?: number;
}) => {
  let displayCharacter = character;
  if (!displayCharacter && characterId) {
    // fetch character info
    displayCharacter = await getOneCharacter(characterId);
  }

  if (!displayCharacter) return null;

  // join films into string and wrap in quotes
  // const featuredFilms = displayCharacter.films.map((film) => `"${film}"`).join(', ');
  const featuredFilms = displayCharacter.films.join(', ');

  // truncate if string is too long
  const featuredFilmsDisplay =
    featuredFilms.length > 60 ? `${featuredFilms.slice(0, 60)}...` : featuredFilms;

  return (
    <div className="character-card">
      <div
        className="character-image"
        style={{ backgroundImage: `url(${displayCharacter.imageUrl})` }}
      />
      <div className="character-name">{displayCharacter.name}</div>
      <div>
        <div className="featured-films-title">Featured Films</div>
        <div className="featured-films">{featuredFilmsDisplay}</div>
      </div>
      <Link href={`/details/${displayCharacter._id}`} className="character-link">
        View Profile
      </Link>
    </div>
  );
};

export default CharacterCard;
