import { Layout } from "@/components/layout/Layout";
import ErrorPage from "@/pages/ErrorPage";
import { Home } from "@/pages/Home";
import { PokemonPage } from "@/pages/PokemonPage";
import {
  createBrowserRouter,
  RouterProvider as ReactRouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:query",
        element: <PokemonPage />,
      },
    ],
  },
]);

export const RouterProvider = () => {
  return <ReactRouterProvider router={router} />;
};
