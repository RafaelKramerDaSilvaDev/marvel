import { createBrowserRouter } from "react-router";
import { CharactersPage } from "../pages/Characters";
import { ComicsPage } from "../pages/Comics";
import { MoviesPage } from "../pages/Movies";

export const router = createBrowserRouter([
  {
    path: "personagens",
    Component: CharactersPage,
  },
  {
    path: "quadrinhos",
    Component: ComicsPage,
  },

  {
    path: "filmes",
    Component: MoviesPage,
  },
]);
