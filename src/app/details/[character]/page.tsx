import CharacterDetails from '@/components/CharacterDetails';
import { getOneCharacter } from '@/services/disney';

type Params = Promise<{ character: string }>;

const Details = async ({ params }: { params: Params }) => {
  const { character } = await params;
  const characterDetails = await getOneCharacter(parseInt(character));

  return <CharacterDetails character={characterDetails} />;
};

export default Details;
