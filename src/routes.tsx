import { createBrowserRouter } from "react-router-dom";
import AppLayout from "./layouts/AppLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import NotFound from "./pages/NotFound";

const routes = [
  {
    path: "/",
    element: <AppLayout/>,
    children: [
      { index: true, element: <Home/> },
      { path: "about", element: <AboutUs/> },
    ],
  },
  { path: "*", element: <NotFound /> },
];

export const router = createBrowserRouter(routes);