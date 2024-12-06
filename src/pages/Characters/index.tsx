import charactersService from "../../services/characters/characters-service";
import * as S from "./styles";

export const CharactersPage = () => {
  return (
    <S.Container>
      <button onClick={() => charactersService.loadAllCharacters()}>
        Fetch
      </button>
    </S.Container>
  );
};
