import { format } from 'date-fns';
import Link from 'next/link';
import type { Character } from '@/types/Character';
import './CharacterDetails.css';

const CharacterDetails = ({ character }: { character: Character }) => {
  const updatedAt = format(new Date(character.updatedAt), 'MMMM do, yyyy');

  return (
    <div className="character-details">
      <div className="character-image">
        <img src={character.imageUrl} alt={character.name} />
      </div>
      <div className="details-list">
        <div className="character-name">{character.name}</div>
        <div className="character-last-update">Last Updated {updatedAt}</div>
        {character.films.length > 0 && (
          <div>
            <div className="films-title">Featured Films</div>
            <ul className="films-list">
              {character.films.map((film) => (
                <li key={film} className="films-list-item">
                  {film}
                </li>
              ))}
            </ul>
          </div>
        )}
        {character.shortFilms.length > 0 && (
          <div>
            <div className="films-title">Short Films</div>
            <ul className="films-list">
              {character.shortFilms.map((film) => (
                <li key={film} className="films-list-item">
                  {film}
                </li>
              ))}
            </ul>
          </div>
        )}
        {character.tvShows.length > 0 && (
          <div>
            <div className="films-title">TV Shows</div>
            <ul className="films-list">
              {character.tvShows.map((film) => (
                <li key={film} className="films-list-item">
                  {film}
                </li>
              ))}
            </ul>
          </div>
        )}
        <Link href={character.sourceUrl} className="button" target="_blank">
          Explore More Character Details
        </Link>
      </div>
    </div>
  );
};

export default CharacterDetails;
