import { createBrowserRouter } from "react-router";
import { CharactersPage } from "../pages/Characters";
import { ComicsPage } from "../pages/Comics";
import { HomePage } from "../pages/Home";
import { MoviesPage } from "../pages/Movies";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
    children: [
      {
        path: "quadrinhos",
        Component: ComicsPage,
      },
      {
        path: "personagens",
        Component: CharactersPage,
      },
      {
        path: "filmes",
        Component: MoviesPage,
      },
    ],
  },
]);
