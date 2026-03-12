import { Link, Route, Routes } from "react-router-dom";
import { Suspense } from "react";

import MainPageAsync from "pages/MainPage/ui/MainPage";
import AboutPageAsync from "pages/AboutPage/ui/AboutPage.async";

import { useTheme } from "shared/lib/hooks/useTheme";

import "./styles/index.scss";

export const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle</button>
      <Link to={"/"}>Главная</Link>
      <Link to={"/about"}>О нас</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<MainPageAsync />} />
          <Route path="/about" element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
