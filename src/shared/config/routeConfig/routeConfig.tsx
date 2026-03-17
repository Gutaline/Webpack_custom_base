import { RouteProps } from "react-router-dom";

import MainPageAsync from "pages/MainPage/ui/MainPage";
import AboutPageAsync from "pages/AboutPage/ui/AboutPage.async";

export const enum AppRoutes {
  MAIN = "main",
  ABOUT = "about",
}

export const RoutePath: Record<AppRoutes, string> = {
  [AppRoutes.MAIN]: "/",
  [AppRoutes.ABOUT]: "/about",
};

export const routeConfig: RouteProps[] = [
  {
    path: RoutePath.main,
    element: <MainPageAsync />,
  },
  {
    path: RoutePath.about,
    element: <AboutPageAsync />,
  },
];
