import { FC, memo, useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../../components/NavbarHome";
import Card from '../../components/card';
import { Character, getCharacter } from '../../services/Api/characters';
import { App, ButtonContainer, Container, ButtonBack } from "./styles";

const CharacterDetails: FC = () => {
  const [character, setCharacter] = useState<Character | null>(null);
  const navigate = useNavigate();
  const  { characterId } = useParams();

  const getCharacters = useCallback(async () => {
    if (characterId) {
      const character = await getCharacter(characterId);
      setCharacter(character);
    }
  }, []);

  useEffect(() => {
    getCharacters();
  }, [getCharacters]);

  const goToBack = useCallback(() => {
    navigate('/characters', { replace: true });
  },
  [navigate]
);
  return (
    <App>
      <Navbar />
        <ButtonContainer>
            <ButtonBack onClick={goToBack}>Go Back!</ButtonBack>
        </ButtonContainer>
      <Container>
{character && <Card
            characterId={character.id}
            name={character.name}
            species={character.species}
            status={character.status}
            image={character.image}
            type="details"
          />}
      </Container>
    </App>
  );
};
export default memo(CharacterDetails);