import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Recipes from "./views/Recipes.jsx";
import NotFound from "./views/NotFound";
import SavedRecipes from "./views/SavedRecipes.jsx";
import About from "./views/About";
import Contact from "./views/Contact";
import "./App.css";
import Home from "./views/Home";
const router = createBrowserRouter([
  {
    path: "/pro2/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "recipes",
        element: <Recipes />,
      },
      {
        path: "saved-recipes",
        element: <SavedRecipes />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "Contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
function App() {
  return <RouterProvider router={router} />;
}
export default App;
