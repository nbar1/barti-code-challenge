import CharacterGrid from '@/components/CharacterGrid';
import { searchForCharacter } from '@/services/disney';

type Params = Promise<{ query: string }>;

const SearchPage = async ({ searchParams }: { searchParams: Params }) => {
  const { query } = await searchParams;

  // display messaging for invalid query
  if (!query) return <div>No search query provided</div>;

  // get search results
  const results = await searchForCharacter(query);

  // messaging for no results
  if (results.pageData.count === 0) return <div>No results found for &quot;{query}&quot;</div>;

  return <CharacterGrid characters={results.characters} />;
};

export default SearchPage;
