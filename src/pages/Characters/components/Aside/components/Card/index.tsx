import * as S from "./styles";

type CardProps = {
  name: string;
  thumbnail: {
    path: string;
    extension: string;
  };
};

export const Card = ({ name, thumbnail }: CardProps) => {
  return (
    <S.Card>
      <S.Image
        src={`${thumbnail.path}.${thumbnail.extension}`}
        alt={`character ${name}`}
        draggable={false}
      />

      <S.Footer>
        <S.Span>{name}</S.Span>
      </S.Footer>
    </S.Card>
  );
};
