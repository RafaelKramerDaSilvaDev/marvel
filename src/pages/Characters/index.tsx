import { useQuery } from "@tanstack/react-query";
import charactersService from "../../services/characters/characters-service";
import { Aside } from "./components/Aside";
import { Details } from "./components/Details";
import * as S from "./styles";

export const CharactersPage = () => {
  const { data: charactersData } = useQuery({
    queryKey: ["characters"],
    queryFn: () => charactersService.loadAllCharacters(),
  });

  return (
    <S.Section>
      <Aside charactersData={charactersData} />

      <Details />

      <Aside charactersData={charactersData} />
    </S.Section>
  );
};
