import { Outlet } from "react-router";
import * as S from "./styles";

export const MainTemplate = () => {
  return (
    <S.Main>
      <Outlet />
    </S.Main>
  );
};
