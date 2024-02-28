import ErrorPage from "@/pages/ErrorPage";
import { Home } from "@/pages/Home";
import { PokemonPage } from "@/pages/PokemonPage";
import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/:query",
    element: <PokemonPage />,
  },
]);

export const RouterProvider = () => {
  return <ReactRouterProvider router={router} />;
};
