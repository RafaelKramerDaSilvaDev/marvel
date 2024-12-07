import { BaseResponse } from "../../../../models/base/base-response";
import { LoadAllCharactersModel } from "../../../../models/characters/load-all-characters";
import { Card } from "./components/Card";
import * as S from "./styles";

type AsideProps = {
  charactersData: BaseResponse<LoadAllCharactersModel> | undefined;
};

export const Aside = ({ charactersData }: AsideProps) => {
  const charactersLength = charactersData?.data.results.length ?? 0;

  if (charactersLength === 0) return null;

  const timer = charactersLength * 7;

  return (
    <S.Aside>
      <S.CarouselTrack $timer={timer}>
        {charactersData?.data.results.map(({ id, name, thumbnail }) => (
          <Card key={id} name={name} thumbnail={thumbnail} />
        ))}
      </S.CarouselTrack>
    </S.Aside>
  );
};
