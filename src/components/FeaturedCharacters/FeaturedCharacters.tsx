import CharacterCard from '../CharacterCard';
import './FeaturedCharacters.css';

const FeaturedCharacters = async () => {
  const featuredCharacters = [571, 544, 4703, 1947];

  return (
    <div className="featured-characters container">
      <div className="featured-characters-title">Featured Characters!</div>
      <div className="featured-characters-grid">
        {featuredCharacters.map((characterId) => (
          <CharacterCard key={characterId} characterId={characterId} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedCharacters;
