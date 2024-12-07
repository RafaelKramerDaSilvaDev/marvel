import { createBrowserRouter } from "react-router";
import { MainTemplate } from "../components/templates/Main";
import { CharactersPage } from "../pages/Characters";
import { ComicsPage } from "../pages/Comics";
import { MoviesPage } from "../pages/Movies";

export const router = createBrowserRouter([
  {
    Component: MainTemplate,
    children: [
      {
        path: "/",
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
    ],
  },
]);
